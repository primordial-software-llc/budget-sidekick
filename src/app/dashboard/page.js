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
  PlusIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { saveLedger, getLedger, getAllLedgerNames } from '@/utils/indexedDB';
import { DB_NAME, DB_VERSION, STORE_NAME } from '@/utils/constants';
import Link from 'next/link';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';
import DashboardLayout from '@/components/DashboardLayout';

function Dashboard() {
  const router = useRouter();
  
  const [ledgerEntries, setLedgerEntries] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [editingEntry, setEditingEntry] = useState(null);
  const [formData, setFormData] = useState({
    amount: '',
    day: '',
    name: ''
  });

  const [currentLedger, setCurrentLedger] = useState('');
  const [availableLedgers, setAvailableLedgers] = useState([]);

  const [isLedgerModalOpen, setIsLedgerModalOpen] = useState(false);
  const [ledgerModalMode, setLedgerModalMode] = useState('create');
  const [newLedgerName, setNewLedgerName] = useState('');

  // Add new state for delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Load available ledgers on mount
  useEffect(() => {
    const loadLedgers = async () => {
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
  }, []);

  // Update the localStorage useEffect
  useEffect(() => {
    if (currentLedger) {
      localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, currentLedger);
    }
  }, [currentLedger]);

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const entries = await getLedger(currentLedger);
        setLedgerEntries(entries);
      } catch (error) {
        console.error('Error loading ledger entries:', error);
      }
    };
    loadEntries();
  }, [currentLedger]);

  const handleEdit = (entry) => {
    setModalMode('edit');
    setEditingEntry(entry);
    setFormData({
      amount: entry.amount.toString(),
      day: entry.day.toString(),
      name: entry.name
    });
    setIsModalOpen(true);
  };

  const handleDelete = (entryToDelete) => {
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
      name: ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      amount: parseFloat(formData.amount),
      day: parseInt(formData.day),
      name: formData.name
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
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };

      request.onsuccess = (event) => {
        const db = event.target.result;
        try {
          const transaction = db.transaction([STORE_NAME], 'readwrite');
          const store = transaction.objectStore(STORE_NAME);
          
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

  return (
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
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
              <tr>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Day</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ledgerEntries.map((entry, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className={`p-4 ${entry.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${Math.abs(entry.amount).toFixed(2)}
                  </td>
                  <td className="p-4">{entry.day}</td>
                  <td className="p-4">{entry.name}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(entry)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(entry)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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

      {/* Add Delete Confirmation Modal */}
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
    </DashboardLayout>
  );
}

export default Dashboard; 