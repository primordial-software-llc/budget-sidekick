 'use client';

import { useState, useEffect } from 'react';
import { getLedger, getAllLedgerNames } from '@/utils/indexedDB';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';
import DashboardLayout from '@/components/DashboardLayout';

// Helper function to extract payment account
function getPaymentAccount(name) {
  const parts = name.split('-');
  if (parts.length > 1) {
    const afterHyphen = parts[parts.length - 1].trim();
    return afterHyphen.length > 0 ? afterHyphen : 'Uncategorized';
  }
  return 'Uncategorized';
}

// Helper function to create nested structure by payment account
function createPaymentAccountStructure(entries) {
  const structure = {};
  
  entries.forEach(entry => {
    const paymentAccount = getPaymentAccount(entry.name);
    if (!structure[paymentAccount]) {
      structure[paymentAccount] = {
        amount: 0,
        entries: [],
        isExpanded: false
      };
    }
    
    structure[paymentAccount].entries.push(entry);
    structure[paymentAccount].amount += entry.amount;
  });
  
  return structure;
}

// Component to render a payment account item
function PaymentAccountItem({ name, data, onToggle }) {
  const amount = data?.amount || 0;
  const isPositive = amount >= 0;
  
  return (
    <div>
      <div 
        className="flex items-center py-1 hover:bg-gray-50 cursor-pointer"
        onClick={() => onToggle(name)}
      >
        {data.entries.length > 0 ? (
          data.isExpanded ? (
            <ChevronDownIcon className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 mr-1" />
          )
        ) : (
          <span className="w-4 mr-1" />
        )}
        <span className="flex-grow">{name}</span>
        <span className={`font-mono ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          ${Math.abs(amount).toFixed(2)}
        </span>
      </div>
      
      {data.isExpanded && data.entries.length > 0 && (
        <div className="ml-6">
          {data.entries.map((entry, index) => (
            <div key={index} className="flex justify-between py-1">
              <span className="text-gray-600">{entry.name.split('-')[0].trim()}</span>
              <span className={`font-mono ${entry.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.abs(entry.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DebitAccountReport() {
  const [structure, setStructure] = useState({});
  const [currentLedger, setCurrentLedger] = useState('');
  const [availableLedgers, setAvailableLedgers] = useState([]);
  
  useEffect(() => {
    const loadLedgers = async () => {
      try {
        const ledgerNames = await getAllLedgerNames();
        setAvailableLedgers(ledgerNames);
        const storedLedger = localStorage.getItem(LOCAL_STORAGE_KEY_LEDGER);
        if (storedLedger && ledgerNames.includes(storedLedger)) {
          setCurrentLedger(storedLedger);
        } else if (ledgerNames.length > 0) {
          setCurrentLedger(ledgerNames[0]);
        }
      } catch (error) {
        console.error('Error loading ledgers:', error);
      }
    };
    loadLedgers();
  }, []);
  
  useEffect(() => {
    const loadData = async () => {
      if (!currentLedger) return;
      const entries = await getLedger(currentLedger);
      const paymentStructure = createPaymentAccountStructure(entries);
      setStructure(paymentStructure);
    };
    loadData();
  }, [currentLedger]);
  
  const handleToggle = (accountName) => {
    setStructure(prev => ({
      ...prev,
      [accountName]: {
        ...prev[accountName],
        isExpanded: !prev[accountName].isExpanded
      }
    }));
  };
  
  return (
    <DashboardLayout 
      currentLedger={currentLedger}
      availableLedgers={availableLedgers}
      setCurrentLedger={setCurrentLedger}
      activeTab="debit-report"
    >
      <div className="bg-white rounded-[0.375rem] shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)] overflow-hidden transition-all duration-300 border border-[rgba(0,0,0,0.175)]">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center">Account Servicers Report</h1>
        </div>
        <div className="p-6">
          {Object.entries(structure).map(([name, data]) => (
            <PaymentAccountItem
              key={name}
              name={name}
              data={data}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 