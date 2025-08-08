'use client';

import { useState, useEffect } from 'react';
import { getLedger, getAllLedgerNames } from '@/utils/indexedDB';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';
import DashboardLayout from '@/components/DashboardLayout';
import Decimal from '@/lib/decimal-config';

function getCategory(entry) {
  if (entry.category && entry.category.trim().length > 0) {
    return entry.category.trim();
  }
  
  return 'Uncategorized';
}

// Helper function to create nested hierarchical structure by category
function createCategoryStructure(entries) {
  const structure = {};
  
  entries.forEach(entry => {
    const categoryPath = getCategory(entry);
    const categories = categoryPath.split(':');
    let current = structure;
    
    // Navigate/create the nested structure
    categories.forEach((category, index) => {
      category = category.trim();
      if (!current[category]) {
        current[category] = {
          amount: new Decimal(0),
          children: {},
          entries: [],
          isExpanded: false
        };
      }
      
      // If this is the last category in the path, add the entry
      if (index === categories.length - 1) {
        current[category].entries.push(entry);
        current[category].amount = current[category].amount.plus(new Decimal(entry.amount));
        current[category].isLeaf = true;
      }
      
      current = current[category].children;
    });
  });
  
  // Calculate totals for parent categories
  const calculateTotals = (node) => {
    if (!node) return new Decimal(0);
    
    let total = new Decimal(node.amount || 0);
    
    // Add up children totals
    for (const childKey in node.children) {
      const childTotal = calculateTotals(node.children[childKey]);
      node.children[childKey].amount = childTotal;
      total = total.plus(childTotal);
    }
    
    node.amount = total;
    return total;
  };
  
  // Calculate totals for all top-level categories
  Object.values(structure).forEach(calculateTotals);
  
  return structure;
}

// Component to render a category item with hierarchical support
function CategoryItem({ name, data, level = 0, onToggle, fullPath = name }) {
  const hasChildren = data?.children ? Object.keys(data.children).length > 0 : false;
  const hasEntries = data?.entries ? data.entries.length > 0 : false;
  const amount = new Decimal(data?.amount || 0);
  const isPositive = amount.gte(0);
  
  return (
    <div>
      <div 
        className="flex items-center py-1 hover:bg-gray-50 cursor-pointer"
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={() => (hasChildren || hasEntries) && onToggle(fullPath)}
      >
        {hasChildren || hasEntries ? (
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
      
      {data.isExpanded && (
        <div>
          {/* Render subcategories first */}
          {hasChildren && Object.entries(data.children).map(([childName, childData]) => (
            <CategoryItem
              key={childName}
              name={childName}
              data={childData}
              level={level + 1}
              onToggle={onToggle}
              fullPath={`${fullPath}:${childName}`}
            />
          ))}
          
          {/* Render individual entries if this is a leaf category */}
          {hasEntries && data.isLeaf && (
            <div style={{ paddingLeft: `${(level + 1) * 20}px` }}>
              {(() => {
                // Group entries by name and sum their amounts
                const groupedEntries = data.entries.reduce((acc, entry) => {
                  if (!acc[entry.name]) {
                    acc[entry.name] = new Decimal(0);
                  }
                  acc[entry.name] = acc[entry.name].plus(new Decimal(entry.amount));
                  return acc;
                }, {});
                
                return Object.entries(groupedEntries).map(([entryName, totalAmount]) => (
                  <div key={entryName} className="flex justify-between py-1 text-gray-600">
                    <span>{entryName}</span>
                    <span className={`font-mono ${totalAmount.gte(0) ? 'text-green-600' : 'text-red-600'}`}>
                      ${totalAmount.toFormat(2)}
                    </span>
                  </div>
                ));
              })()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CategoryReport() {
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
      const categoryStructure = createCategoryStructure(entries);
      setStructure(categoryStructure);
    };
    loadData();
  }, [currentLedger]);
  
  const handleToggle = (path) => {
    setStructure(prev => {
      const newStructure = JSON.parse(JSON.stringify(prev));
      let current = newStructure;
      const parts = path.split(':');
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i].trim();
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
    return Object.values(structure).reduce((total, data) => 
      total.plus(new Decimal(data.amount || 0)), new Decimal(0));
  };
  
  return (
    <DashboardLayout 
      currentLedger={currentLedger}
      availableLedgers={availableLedgers}
      setCurrentLedger={setCurrentLedger}
      activeTab="category-report"
    >
      <div className="bg-white rounded-[0.375rem] shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)] overflow-hidden transition-all duration-300 border border-[rgba(0,0,0,0.175)]">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center">Category Report</h1>
        </div>
        <div className="p-6">
          {Object.entries(structure).map(([name, data]) => (
            <CategoryItem
              key={name}
              name={name}
              data={data}
              level={0}
              onToggle={handleToggle}
              fullPath={name}
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