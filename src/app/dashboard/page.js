'use client';

import {
  PencilIcon,
  TrashIcon,
  XIcon,
  PlusIcon,
  LayersIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getLedger, getAllLedgerNames, getLatestConsent, recordConsent, saveLedger } from '@/utils/indexedDB';
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
        }
      } catch (error) {
        console.error('Error checking terms consent:', error);
        setShowQuickConsent(true);
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
      if (showQuickConsent) return; // Don't load ledgers until consent is verified
      
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
  }, [showQuickConsent]);

  // Update the localStorage useEffect
  useEffect(() => {
    if (currentLedger) {
      localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, currentLedger);
    }
  }, [currentLedger]);

  useEffect(() => {
    const loadEntries = async () => {
      if (!currentLedger || showQuickConsent) return; // Don't load entries if no ledger selected or still loading consent
      
      try {
        const entries = await getLedger(currentLedger);
        
        // Backward compatibility: Add IDs to entries that don't have them
        let hasNewIds = false;
        const entriesWithIds = entries.map(entry => {
          if (!entry.id) {
            hasNewIds = true;
            return {
              ...entry,
              id: `entry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
            };
          }
          return entry;
        });
        
        // If we added new IDs, save them back to the database
        if (hasNewIds) {
          await saveLedger(currentLedger, entriesWithIds);
        }
        
        setLedgerEntries(entriesWithIds);
      } catch (error) {
        console.error('Error loading ledger entries:', error);
      }
    };
    loadEntries();
  }, [currentLedger, showQuickConsent]);

  const handleEdit = (entry) => {
    const key = `${entry.name}|${entry.day}`;
    
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
    const updatedEntries = ledgerEntries.filter(entry => 
      entry.id !== entryToDelete.id
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
      id: modalMode === 'edit' && editingEntry.id ? editingEntry.id : `entry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
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
        entry.id === editingEntry.id ? newEntry : entry
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



  return (
    <>
      <DashboardLayout 
        currentLedger={currentLedger}
        availableLedgers={availableLedgers}
        setCurrentLedger={setCurrentLedger}
        activeTab="entries"
      >
        {/* Account Entries */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
              <h1 className="text-2xl lg:text-3xl font-bold">Account Entries</h1>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleAdd}
                  className="px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 text-sm font-medium"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Add Entry</span>
                  <span className="sm:hidden">Add</span>
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
                              className="p-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-200 mr-2"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(entry)}
                              className="p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-lg transition-all duration-200"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {modalMode === 'add' ? 'Add New Entry' : 'Edit Entry'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
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
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 font-medium"
                >
                  {modalMode === 'add' ? 'Add Entry' : 'Save Changes'}
                </button>
              </div>
            </form>
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
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  consentChecked 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow hover:shadow-lg' 
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