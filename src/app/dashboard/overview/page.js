'use client';

import { useState, useEffect } from 'react';
import { getLedger, getAllLedgerNames } from '@/utils/indexedDB';
import DashboardLayout from '@/components/DashboardLayout';
import Decimal from '@/lib/decimal-config';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';

function createNestedStructure(entries) {
  const structure = {
    Income: { children: {}, amount: new Decimal(0) },
    Expenses: { children: {}, amount: new Decimal(0) }
  };
  
  entries.forEach(entry => {
    const amount = new Decimal(entry.amount);
    const topLevelCategory = amount.gte(0) ? 'Income' : 'Expenses';
    
    // Get the top-level group (everything before the first colon)
    const topLevelGroup = entry.name.split(':')[0];
    
    if (!structure[topLevelCategory].children[topLevelGroup]) {
      structure[topLevelCategory].children[topLevelGroup] = new Decimal(0);
    }
    structure[topLevelCategory].children[topLevelGroup] = 
      structure[topLevelCategory].children[topLevelGroup].plus(amount);
    structure[topLevelCategory].amount = structure[topLevelCategory].amount.plus(amount);
  });
  
  return structure;
}

function LedgerSummaryCard({ title, data, onClick }) {
  const router = useRouter();
  if (!data) return null;
  
  const netTotal = data.Income.amount.plus(data.Expenses.amount);
  
  // Get ALL entries from each category, sorted by amount
  const incomes = Object.entries(data.Income.children)
    .sort(([, a], [, b]) => b.minus(a));
  const expenses = Object.entries(data.Expenses.children)
    .sort(([, a], [, b]) => a.minus(b));

  return (
    <div 
      className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-gray-900 font-semibold text-base text-center mb-3">{title}</h3>
      <div className="space-y-1.5">
        {incomes.map(([name, amount]) => (
          <div key={`income-${name}`} className="flex justify-between text-sm">
            <span className="text-gray-700 truncate pr-2">{name}</span>
            <span className="text-green-600 font-medium">
              +{amount.toFormat(2)}
            </span>
          </div>
        ))}
        {expenses.map(([name, amount]) => (
          <div key={`expense-${name}`} className="flex justify-between text-sm">
            <span className="text-gray-700 truncate pr-2">{name}</span>
            <span className="text-red-600 font-medium">
              {amount.toFormat(2)}
            </span>
          </div>
        ))}
        <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
          <span className="text-gray-900 font-medium">Net:</span>
          <span className={`font-medium ${netTotal.gte(0) ? 'text-green-600' : 'text-red-600'}`}>
            ${netTotal.toFormat(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Overview() {
  const [ledgerData, setLedgerData] = useState({});
  const [availableLedgers, setAvailableLedgers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadAllLedgers = async () => {
      try {
        const ledgerNames = await getAllLedgerNames();
        setAvailableLedgers(ledgerNames);
        
        // Load data for each ledger
        const ledgerPromises = ledgerNames.map(async (name) => {
          const entries = await getLedger(name);
          const structure = createNestedStructure(entries);
          return [name, structure];
        });
        
        const results = await Promise.all(ledgerPromises);
        const newLedgerData = Object.fromEntries(results);
        setLedgerData(newLedgerData);
      } catch (error) {
        console.error('Error loading ledgers:', error);
      }
    };
    
    loadAllLedgers();
  }, []);

  const handleLedgerSelect = (ledgerName) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, ledgerName);
    router.push('/dashboard/account-summary-report');
  };

  return (
    <DashboardLayout
      currentLedger={availableLedgers[0] || ''}
      availableLedgers={availableLedgers}
      setCurrentLedger={() => {}}
      activeTab="overview"
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Account Overview</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {availableLedgers.map(ledgerName => (
            <div key={ledgerName}>
              <LedgerSummaryCard
                title={ledgerName}
                data={ledgerData[ledgerName]}
                onClick={() => handleLedgerSelect(ledgerName)}
              />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 