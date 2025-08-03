'use client';

import {
  PieChartIcon,
  TrendingUpIcon,
  ArrowDownIcon,
  LightbulbIcon,
  BarChart3Icon,
  CircleDollarSignIcon,
  PencilIcon,
  TrashIcon,
  XIcon,
  SearchIcon,
  DownloadIcon,
  PlusIcon,
  LayersIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { saveLedger, getLedger, getAllLedgerNames, getTransactionsByLedger, getLatestConsent, recordConsent } from '@/utils/indexedDB';
import { DB_NAME, DB_VERSION, LEDGER_STORE, FEATURES } from '@/utils/constants';
import Link from 'next/link';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';
import DashboardLayout from '@/components/DashboardLayout';
import Decimal from '@/lib/decimal-config';

function Dashboard() {
  const router = useRouter();
  
  const [ledgerEntries, setLedgerEntries] = useState([]);
  const [entrySourceMap, setEntrySourceMap] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [editingEntry, setEditingEntry] = useState(null);
  const [formData, setFormData] = useState({
    amount: '',
    day: '',
    name: '',
    category: ''
  });

  const [currentLedger, setCurrentLedger] = useState('');
  const [availableLedgers, setAvailableLedgers] = useState([]);

  const [isLedgerModalOpen, setIsLedgerModalOpen] = useState(false);
  const [ledgerModalMode, setLedgerModalMode] = useState('create');
  const [newLedgerName, setNewLedgerName] = useState('');

  // Add new state for delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);
  
  // Add quick consent modal state
  const [showQuickConsent, setShowQuickConsent] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  
  // Current terms version
  const TERMS_VERSION = '1.0';

  // Check for terms consent before allowing access to dashboard
  useEffect(() => {
    const checkTermsConsent = async () => {
      try {
        const latestConsent = await getLatestConsent('terms');
        if (!latestConsent || !latestConsent.consented) {
          // User hasn't consented to terms, show the quick consent overlay
          setShowQuickConsent(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error checking terms consent:', error);
        // On error, assume we need consent to be safe
        setShowQuickConsent(true);
        setIsLoading(false);
      }
    };
    
    checkTermsConsent();
  }, [router]);
  
  // Handle quick consent submission
  const handleQuickConsent = async () => {
    if (!consentChecked) return;
    
    try {
      await recordConsent('terms', TERMS_VERSION, true);
      setShowQuickConsent(false);
    } catch (error) {
      console.error('Error recording consent:', error);
      alert('There was a problem saving your consent. Please try again.');
    }
  };

  // Load available ledgers on mount
  useEffect(() => {
    const loadLedgers = async () => {
      if (isLoading || showQuickConsent) return; // Don't load ledgers until consent is verified
      
      try {
        const ledgerNames = await getAllLedgerNames();
        setAvailableLedgers(ledgerNames);
        
        const savedLedger = localStorage.getItem(LOCAL_STORAGE_KEY_LEDGER);
        if (ledgerNames.length === 0) {
          // Create default ledger if no ledgers exist
          await saveLedger('Default', []);
          setAvailableLedgers(['Default']);
          setCurrentLedger('Default');
          localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, 'Default');
        } else if (savedLedger && ledgerNames.includes(savedLedger)) {
          // Use the saved ledger if it exists in available ledgers
          setCurrentLedger(savedLedger);
        } else {
          // Fall back to first available ledger if saved ledger is invalid
          setCurrentLedger(ledgerNames[0]);
          localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, ledgerNames[0]);
        }
      } catch (error) {
        console.error('Error loading ledgers:', error);
      }
    };
    loadLedgers();
  }, [isLoading, showQuickConsent]);

  // Update the localStorage useEffect
  useEffect(() => {
    if (currentLedger) {
      localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, currentLedger);
    }
  }, [currentLedger]);

  useEffect(() => {
    const loadEntries = async () => {
      if (!currentLedger || isLoading || showQuickConsent) return; // Don't load entries if no ledger selected or still loading consent
      
      try {
        const entries = await getLedger(currentLedger);
        setLedgerEntries(entries);
        
        // If transactions feature is enabled, check for entries with transaction sources
        if (FEATURES.ENABLE_TRANSACTIONS) {
          const transactions = await getTransactionsByLedger(currentLedger);
          
          // Create a map of account+day to transaction count
          const transactionMap = {};
          transactions.forEach(transaction => {
            const day = new Date(transaction.date).getDate();
            const key = `${transaction.accountName}|${day}`;
            transactionMap[key] = (transactionMap[key] || 0) + 1;
          });
          
          // Mark entries that have associated transactions
          const sourceMap = {};
          entries.forEach(entry => {
            const key = `${entry.name}|${entry.day}`;
            if (transactionMap[key] && transactionMap[key] > 0) {
              sourceMap[key] = {
                hasTransactions: true,
                count: transactionMap[key]
              };
            }
          });
          
          setEntrySourceMap(sourceMap);
        }
      } catch (error) {
        console.error('Error loading ledger entries:', error);
      }
    };
    loadEntries();
  }, [currentLedger, isLoading, showQuickConsent]);

  const handleEdit = (entry) => {
    const key = `${entry.name}|${entry.day}`;
    
    // If this entry is from transactions, redirect to the transactions page
    if (FEATURES.ENABLE_TRANSACTIONS && entrySourceMap[key]?.hasTransactions) {
      // Notify user they should edit this via transactions
      if (confirm("This entry is aggregated from transactions. Would you like to view the transactions page instead?")) {
        router.push('/dashboard/transactions');
        return;
      }
    }
    
    setModalMode('edit');
    setEditingEntry(entry);
    setFormData({
      amount: entry.amount.toString(),
      day: entry.day.toString(),
      name: entry.name,
      category: entry.category || ''
    });
    setIsModalOpen(true);
  };

  const handleDelete = (entryToDelete) => {
    const key = `${entryToDelete.name}|${entryToDelete.day}`;
    
    // If this entry is from transactions, warn the user
    if (FEATURES.ENABLE_TRANSACTIONS && entrySourceMap[key]?.hasTransactions) {
      if (!confirm("This entry is aggregated from transactions. Deleting it directly may cause inconsistencies. Continue anyway?")) {
        return;
      }
    }
    
    const updatedEntries = ledgerEntries.filter(entry => 
      entry.day !== entryToDelete.day || 
      entry.amount !== entryToDelete.amount || 
      entry.name !== entryToDelete.name
    );

    saveLedger(currentLedger, updatedEntries)
      .then(() => {
        setLedgerEntries(updatedEntries);
      })
      .catch(error => {
        console.error('Error deleting entry:', error);
        alert('Failed to delete entry');
      });
  };

  const handleAdd = () => {
    setModalMode('add');
    setFormData({
      amount: '',
      day: '',
      name: '',
      category: ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      amount: parseFloat(formData.amount),
      day: parseInt(formData.day),
      name: formData.name,
      category: formData.category
    };

    let updatedEntries;
    if (modalMode === 'add') {
      updatedEntries = [...ledgerEntries, newEntry];
    } else if (modalMode === 'edit' && editingEntry) {
      updatedEntries = ledgerEntries.map(entry => 
        (entry.day === editingEntry.day && 
         entry.amount === editingEntry.amount && 
         entry.name === editingEntry.name)
          ? newEntry 
          : entry
      );
    }
    
    // Save to IndexedDB first, then update state
    saveLedger(currentLedger, updatedEntries)
      .then(() => {
        setLedgerEntries(updatedEntries);
        setIsModalOpen(false);
      })
      .catch(error => {
        console.error('Error saving entry:', error);
        alert('Failed to save entry');
      });
  };

  const handleCreateLedger = () => {
    setLedgerModalMode('create');
    setNewLedgerName('');
    setIsLedgerModalOpen(true);
  };

  const handleRenameLedger = () => {
    setLedgerModalMode('rename');
    setNewLedgerName(currentLedger);
    setIsLedgerModalOpen(true);
  };

  const handleLedgerSubmit = async (e) => {
    e.preventDefault();
    if (ledgerModalMode === 'create') {
      if (availableLedgers.includes(newLedgerName)) {
        alert('Ledger name already exists');
        return;
      }
      console.log(newLedgerName);
      await saveLedger(newLedgerName, []);
      setAvailableLedgers([...availableLedgers, newLedgerName]);
      setCurrentLedger(newLedgerName);
    } else {
      const entries = await getLedger(currentLedger);
      await saveLedger(newLedgerName, entries);
      setAvailableLedgers(availableLedgers.map(name => 
        name === currentLedger ? newLedgerName : name
      ));
      setCurrentLedger(newLedgerName);
    }
    setIsLedgerModalOpen(false);
  };

  // Add delete handler function after handleLedgerSubmit
  const handleDeleteLedger = async () => {
    try {
      if (availableLedgers.length <= 1) {
        alert('Cannot delete the last ledger');
        return;
      }

      // Remove from IndexedDB
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      
      request.onerror = (event) => {
        console.error('Database error:', event.target.error);
        throw new Error('Failed to open database');
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(LEDGER_STORE)) {
          db.createObjectStore(LEDGER_STORE);
        }
      };

      request.onsuccess = (event) => {
        const db = event.target.result;
        try {
          const transaction = db.transaction([LEDGER_STORE], 'readwrite');
          const store = transaction.objectStore(LEDGER_STORE);
          
          store.delete(currentLedger);
          
          transaction.oncomplete = () => {
            const newLedgers = availableLedgers.filter(name => name !== currentLedger);
            setAvailableLedgers(newLedgers);
            setCurrentLedger(newLedgers[0]);
            setIsDeleteModalOpen(false);
          };

        } catch (error) {
          console.error('Transaction error:', error);
          alert('Error during transaction');
        }
      };

    } catch (error) {
      console.error('Error deleting ledger:', error);
      alert('Error deleting ledger');
    }
  };

  // Show loading screen while checking for consent
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading...</h2>
          <p className="text-gray-600">Please wait while we set up your dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <DashboardLayout 
        currentLedger={currentLedger}
        availableLedgers={availableLedgers}
        setCurrentLedger={setCurrentLedger}
        activeTab="entries"
      >
        {/* Monthly Ledger Section */}
        <div className="bg-white rounded-[0.375rem] shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)] overflow-hidden transition-all duration-300 border border-[rgba(0,0,0,0.175)]">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Account Entries</h1>
              <div className="flex gap-2">
                <button
                  onClick={handleCreateLedger}
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                >
                  <PlusIcon className="w-4 h-4" />
                  New Account
                </button>
                <button
                  onClick={handleRenameLedger}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-2"
                >
                  <PencilIcon className="w-4 h-4" />
                  Rename
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="px-4 py-2 text-red-600 bg-red-100 rounded-lg hover:bg-red-200 flex items-center gap-2"
                >
                  <TrashIcon className="w-4 h-4" />
                  Delete
                </button>
                <button
                  onClick={handleAdd}
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                >
                  <PlusIcon className="w-4 h-4" />
                  Add Entry
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Account Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ledgerEntries.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                      No ledger entries found. Add your first entry to get started.
                    </td>
                  </tr>
                ) : (
                  [...ledgerEntries]
                    .sort((a, b) => {
                      // First by day
                      if (a.day !== b.day) return a.day - b.day;
                      // Then by name
                      return a.name.localeCompare(b.name);
                    })
                    .map((entry, index) => {
                      const key = `${entry.name}|${entry.day}`;
                      const hasTransactions = entrySourceMap[key]?.hasTransactions;
                      const transactionCount = entrySourceMap[key]?.count || 0;
                      
                      return (
                        <tr key={index} className={`hover:bg-gray-50 ${hasTransactions ? 'bg-blue-50' : ''}`}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {entry.day}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {hasTransactions && (
                                <div className="mr-2 flex items-center" title={`Aggregated from ${transactionCount} transactions`}>
                                  <LayersIcon className="w-4 h-4 text-blue-500" />
                                  <span className="ml-1 text-xs text-blue-500">{transactionCount}</span>
                                </div>
                              )}
                              {entry.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {entry.category || '-'}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-right ${entry.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {new Decimal(entry.amount).toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleEdit(entry)}
                              className="text-indigo-600 hover:text-indigo-900 mr-3"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(entry)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {modalMode === 'add' ? 'Add New Entry' : 'Edit Entry'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter amount (negative for expenses)"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Day of Month
                </label>
                <input
                  type="number"
                  min="1"
                  max="28"
                  value={formData.day}
                  onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter day (1-28)"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter entry name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter category (e.g., Food:Restaurants or Income:Salary)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use colons (:) to create subcategories like "Expenses:Food:Groceries"
                </p>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  {modalMode === 'add' ? 'Add Entry' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isLedgerModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {ledgerModalMode === 'create' ? 'Create New Ledger' : 'Rename Ledger'}
              </h3>
              <button
                onClick={() => setIsLedgerModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleLedgerSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ledger Name 
                </label>
                <input
                  type="text"
                  value={newLedgerName}
                  onChange={(e) => setNewLedgerName(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter ledger name"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsLedgerModalOpen(false)}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  {ledgerModalMode === 'create' ? 'Create' : 'Rename'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-red-600">Delete Ledger</h3>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Are you sure you want to delete the ledger "{currentLedger}"? This action cannot be undone.</p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteLedger}
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Quick Consent Modal */}
      {showQuickConsent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">One quick step before you start</h3>
              <p className="text-gray-600 mt-2">We need your consent to continue.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm text-gray-700">
              <p>
                By using Budget Sidekick, you agree to our Terms of Service.
                Your data remains on your device.
                Regular exports downloaded to your computer are essential to prevent data loss.
                <strong>Clearing your browser data will permanently remove ALL your information</strong> to protect your privacy.
              </p>
            </div>
            
            <div className="flex items-start mb-6 mt-4">
              <div className="flex items-center h-5">
                <input
                  id="quick-consent"
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="quick-consent" className="ml-3 text-gray-700">
                I agree to the <Link href="/terms" className="text-blue-600 hover:underline" target="_blank">Terms of Service</Link>
              </label>
            </div>
            
            <div className="flex justify-between items-center">
              <Link href="/terms" className="text-sm text-blue-600 hover:underline" target="_blank">
                Read full terms
              </Link>
              <button
                onClick={handleQuickConsent}
                disabled={!consentChecked}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  consentChecked 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard; 