'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, ArrowLeftIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { saveLedger, getLedger, getAllLedgerNames } from '@/utils/indexedDB';
import { DB_NAME, DB_VERSION, LEDGER_STORE, LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';
import DashboardLayout from '@/components/DashboardLayout';

export default function AccountManagement() {
  const router = useRouter();
  const [availableLedgers, setAvailableLedgers] = useState([]);
  const [currentLedger, setCurrentLedger] = useState('');
  
  // Modal states
  const [isLedgerModalOpen, setIsLedgerModalOpen] = useState(false);
  const [ledgerModalMode, setLedgerModalMode] = useState('create');
  const [newLedgerName, setNewLedgerName] = useState('');
  const [editingLedger, setEditingLedger] = useState('');
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [ledgerToDelete, setLedgerToDelete] = useState('');

  // Load available ledgers on mount
  useEffect(() => {
    const loadLedgers = async () => {
      try {
        const ledgerNames = await getAllLedgerNames();
        setAvailableLedgers(ledgerNames);
        
        const savedLedger = localStorage.getItem(LOCAL_STORAGE_KEY_LEDGER);
        if (savedLedger && ledgerNames.includes(savedLedger)) {
          setCurrentLedger(savedLedger);
        } else if (ledgerNames.length > 0) {
          setCurrentLedger(ledgerNames[0]);
        }
      } catch (error) {
        console.error('Error loading ledgers:', error);
      }
    };
    loadLedgers();
  }, []);

  const handleCreateLedger = () => {
    setLedgerModalMode('create');
    setNewLedgerName('');
    setIsLedgerModalOpen(true);
  };

  const handleRenameLedger = (ledgerName) => {
    setLedgerModalMode('rename');
    setEditingLedger(ledgerName);
    setNewLedgerName(ledgerName);
    setIsLedgerModalOpen(true);
  };

  const handleDeleteLedger = (ledgerName) => {
    setLedgerToDelete(ledgerName);
    setIsDeleteModalOpen(true);
  };

  const handleLedgerSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (ledgerModalMode === 'create') {
        if (availableLedgers.includes(newLedgerName)) {
          alert('Account name already exists');
          return;
        }
        await saveLedger(newLedgerName, []);
        setAvailableLedgers([...availableLedgers, newLedgerName]);
        setCurrentLedger(newLedgerName);
        localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, newLedgerName);
      } else {
        // Rename: Get entries from old ledger, save to new ledger, delete old
        const entries = await getLedger(editingLedger);
        await saveLedger(newLedgerName, entries);
        
        // Delete old ledger from IndexedDB
        try {
          const db = await new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
          });
          
          const transaction = db.transaction([LEDGER_STORE], 'readwrite');
          const store = transaction.objectStore(LEDGER_STORE);
          store.delete(editingLedger);
          
          await new Promise((resolve, reject) => {
            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
          });
          
          db.close();
        } catch (error) {
          console.error('Error deleting old ledger:', error);
        }
        
        setAvailableLedgers(availableLedgers.map(name => 
          name === editingLedger ? newLedgerName : name
        ));
        
        if (currentLedger === editingLedger) {
          setCurrentLedger(newLedgerName);
          localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, newLedgerName);
        }
      }
      setIsLedgerModalOpen(false);
    } catch (error) {
      console.error('Error saving ledger:', error);
      alert('Error saving account');
    }
  };

  const confirmDeleteLedger = async () => {
    if (availableLedgers.length <= 1) {
      alert('Cannot delete the last account');
      return;
    }

    try {
      const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
      });

      const transaction = db.transaction([LEDGER_STORE], 'readwrite');
      const store = transaction.objectStore(LEDGER_STORE);
      store.delete(ledgerToDelete);

      await new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });

      db.close();

      const newLedgers = availableLedgers.filter(name => name !== ledgerToDelete);
      setAvailableLedgers(newLedgers);
      
      if (currentLedger === ledgerToDelete) {
        setCurrentLedger(newLedgers[0]);
        localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, newLedgers[0]);
      }
      
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting ledger:', error);
      alert('Error deleting account');
    }
  };

  return (
    <>
      <DashboardLayout 
        currentLedger={currentLedger}
        availableLedgers={availableLedgers}
        setCurrentLedger={setCurrentLedger}
        activeTab="account-management"
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Link 
              href="/dashboard"
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Account Management</h1>
              <p className="text-gray-600">Create, rename, and delete your accounts</p>
            </div>
          </div>
          
          <button
            onClick={handleCreateLedger}
            className="px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex items-center gap-2 font-medium"
          >
            <PlusIcon className="w-4 h-4" />
            Create New Account
          </button>
        </div>

        {/* Accounts List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Accounts</h2>
            
            <div className="space-y-3">
              {availableLedgers.map((ledgerName) => (
                <div 
                  key={ledgerName}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    ledgerName === currentLedger 
                      ? 'border-emerald-200 bg-emerald-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{ledgerName}</h3>
                        {ledgerName === currentLedger && (
                          <span className="text-sm text-emerald-600 font-medium">Currently Selected</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleRenameLedger(ledgerName)}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        title="Rename Account"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteLedger(ledgerName)}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                        title="Delete Account"
                        disabled={availableLedgers.length <= 1}
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>

      {/* Create/Rename Modal */}
      {isLedgerModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {ledgerModalMode === 'create' ? 'Create New Account' : 'Rename Account'}
              </h3>
              <button
                onClick={() => setIsLedgerModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleLedgerSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Name 
                </label>
                <input
                  type="text"
                  value={newLedgerName}
                  onChange={(e) => setNewLedgerName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter account name"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsLedgerModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 font-medium"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-red-600">Delete Account</h3>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Are you sure you want to delete the account "{ledgerToDelete}"? 
                This action cannot be undone and will permanently delete all entries in this account.
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteLedger}
                className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}