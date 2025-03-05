'use client';

import { useState, useEffect } from 'react';
import { getLedger, getAllLedgerNames } from '@/utils/indexedDB';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import Decimal from '@/lib/decimal-config';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';

function createNestedStructure(entries) { // Helper function to create nested structure
  
  const structure = { // Initialize structure with Income and Expenses categories
    Income: {
      amount: new Decimal(0),
      children: {},
      isExpanded: true
    },
    Expenses: {
      amount: new Decimal(0),
      children: {},
      isExpanded: true
    }
  };
  
  
  entries.forEach(entry => { // First pass: create the structure and set leaf amounts
    const categories = entry.name.split(':');
    const topLevelCategory = new Decimal(entry.amount).gte(0) ? 'Income' : 'Expenses';
    let current = structure[topLevelCategory].children;
    
    categories.forEach((category, index) => {
      if (!current[category]) {
        current[category] = {
          amount: new Decimal(0),
          children: {},
          isExpanded: false
        };
      }
      
      if (index === categories.length - 1) {
        current[category].amount = new Decimal(entry.amount);
        current[category].isLeaf = true;
      }
      
      current = current[category].children;
    });
  });
  
  
  const calculateTotals = (node) => { // Helper function to calculate totals recursively
    if (!node) return new Decimal(0);
    if (node.isLeaf) return node.amount;
    
    let total = new Decimal(0);
    for (const childKey in node.children) {
      const childTotal = calculateTotals(node.children[childKey]);
      node.children[childKey].amount = childTotal;
      total = total.plus(childTotal);
    }
    
    node.amount = total;
    return total;
  };
  
  structure.Income.amount = calculateTotals(structure.Income);
  structure.Expenses.amount = calculateTotals(structure.Expenses);
  
  return structure;
}

function BudgetItem({ name, data, level = 0, onToggle, fullPath = name }) {
  const hasChildren = data?.children ? Object.keys(data.children).length > 0 : false;
  const amount = new Decimal(data?.amount || 0);
  const isPositive = amount.gte(0);
  
  return (
    <div>
      <div 
        className="flex items-center py-1 hover:bg-gray-50 cursor-pointer"
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={() => hasChildren && onToggle(fullPath)}
      >
        {hasChildren ? (
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
          ${amount.toFormat(2)}
        </span>
      </div>
      
      {data.isExpanded && hasChildren && (
        <div>
          {Object.entries(data.children).map(([childName, childData]) => (
            <BudgetItem
              key={childName}
              name={childName}
              data={childData}
              level={level + 1}
              onToggle={onToggle}
              fullPath={`${fullPath}:${childName}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BudgetReportContent() {
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
      const nested = createNestedStructure(entries);
      setStructure(nested);
    };
    loadData();
  }, [currentLedger]);
  
  const handleToggle = (path) => {
    setStructure(prev => {
      const newStructure = JSON.parse(JSON.stringify(prev));
      let current = newStructure;
      const parts = path.split(':');
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (current[part]) {
          if (i === parts.length - 1) {
            current[part].isExpanded = !current[part].isExpanded;
          } else {
            current = current[part].children;
          }
        }
      }
      
      return newStructure;
    });
  };
  
  const calculateNetTotal = () => {
    if (!structure.Income || !structure.Expenses) return new Decimal(0);
    return new Decimal(structure.Income.amount).plus(structure.Expenses.amount);
  };

  return (
    <DashboardLayout 
      currentLedger={currentLedger}
      availableLedgers={availableLedgers}
      setCurrentLedger={setCurrentLedger}
      activeTab="report"
    >
      <div className="bg-white rounded-[0.375rem] shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)] overflow-hidden transition-all duration-300 border border-[rgba(0,0,0,0.175)]">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center">Account Summary Report</h1>
        </div>
        <div className="p-6">
          {Object.entries(structure).map(([name, data]) => (
            <BudgetItem
              key={name}
              name={name}
              data={data}
              onToggle={handleToggle}
            />
          ))}
          <div className="flex items-center py-2 border-t mt-4">
            <span className="flex-grow font-medium">Total</span>
            {(() => {
              const netTotal = calculateNetTotal();
              return (
                <span className={`font-mono font-medium ${netTotal.gte(0) ? 'text-green-600' : 'text-red-600'}`}>
                  ${netTotal.toFormat(2)}
                </span>
              );
            })()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function BudgetReport() {
  return <BudgetReportContent />;
} 