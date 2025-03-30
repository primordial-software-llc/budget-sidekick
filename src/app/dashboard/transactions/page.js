'use client';

import { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  TrashIcon, 
  PencilIcon, 
  XIcon, 
  ChevronDownIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  AlertTriangleIcon,
  ReceiptIcon,
  CalendarIcon,
  TagIcon,
  ListIcon
} from 'lucide-react';
import { 
  addTransaction, 
  updateTransaction, 
  deleteTransaction, 
  getTransactionsByLedger,
  aggregateTransactionsToLedger,
  getAllLedgerNames, 
  getLedger,
  saveTransactionList,
  getTransactionLists,
  deleteTransactionList,
  getTransactionsByList,
  updateLedgerEntry
} from '@/utils/indexedDB';
import { LOCAL_STORAGE_KEY_LEDGER, FEATURES } from '@/utils/constants';
import DashboardLayout from '@/components/DashboardLayout';
import Decimal from '@/lib/decimal-config';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    accountOverride: ''
  });
  
  // Transaction List State
  const [transactionLists, setTransactionLists] = useState([]);
  const [activeListId, setActiveListId] = useState(null);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [listModalMode, setListModalMode] = useState('add');
  const [editingList, setEditingList] = useState(null);
  const [listFormData, setListFormData] = useState({
    name: '',
    accountName: '',
    day: 1,
    description: ''
  });
  
  const [currentLedger, setCurrentLedger] = useState('');
  const [targetLedger, setTargetLedger] = useState('');
  const [availableLedgers, setAvailableLedgers] = useState([]);
  const [ledgerEntries, setLedgerEntries] = useState([]);
  const [targetLedgerEntries, setTargetLedgerEntries] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [aggregating, setAggregating] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  
  // For posting preview
  const [postPreview, setPostPreview] = useState([]);
  const [overwriteWarnings, setOverwriteWarnings] = useState([]);
  const [accountOverrides, setAccountOverrides] = useState({});

  // Load available ledgers on mount
  useEffect(() => {
    const loadLedgers = async () => {
      try {
        const ledgerNames = await getAllLedgerNames();
        setAvailableLedgers(ledgerNames);
        
        const savedLedger = localStorage.getItem(LOCAL_STORAGE_KEY_LEDGER);
        if (savedLedger && ledgerNames.includes(savedLedger)) {
          setCurrentLedger(savedLedger);
          setTargetLedger(savedLedger); // Initialize target ledger to current ledger
        } else if (ledgerNames.length > 0) {
          setCurrentLedger(ledgerNames[0]);
          setTargetLedger(ledgerNames[0]); // Initialize target ledger to current ledger
          localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, ledgerNames[0]);
        }
      } catch (error) {
        console.error('Error loading ledgers:', error);
      }
    };
    loadLedgers();
  }, []);

  // Load transactions and lists when ledger changes
  useEffect(() => {
    if (!currentLedger) return;
    
    const loadData = async () => {
      try {
        // Load transaction lists
        const lists = await getTransactionLists(currentLedger);
        setTransactionLists(lists);
        
        // If we have an active list, load its transactions
        if (activeListId) {
          const transactions = await getTransactionsByList(activeListId);
          setTransactions(transactions);
        } else {
          setTransactions([]);
        }
        
        // Load ledger entries to extract account names
        const entries = await getLedger(currentLedger);
        setLedgerEntries(entries);
        
        // Extract unique account names from ledger entries
        const uniqueAccounts = [...new Set(entries.map(entry => entry.name))];
        setAccounts(uniqueAccounts);
        
        // Also initialize target ledger entries
        if (targetLedger) {
          loadTargetLedgerEntries(targetLedger);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    
    loadData();
  }, [currentLedger, activeListId]);
  
  // Load target ledger entries when target ledger changes
  useEffect(() => {
    if (targetLedger) {
      loadTargetLedgerEntries(targetLedger);
    }
  }, [targetLedger]);
  
  const loadTargetLedgerEntries = async (ledgerName) => {
    try {
      const entries = await getLedger(ledgerName);
      setTargetLedgerEntries(entries);
    } catch (error) {
      console.error('Error loading target ledger entries:', error);
    }
  };

  const sortTransactions = (transactions) => {
    return [...transactions].sort((a, b) => {
      // Sort by description for now
      return a.description.localeCompare(b.description);
    });
  };

  // List functions
  const handleAddList = () => {
    setListModalMode('add');
    setListFormData({
      name: '',
      accountName: accounts.length > 0 ? accounts[0] : '',
      day: 1,
      description: ''
    });
    setIsListModalOpen(true);
  };

  const handleEditList = (list) => {
    setListModalMode('edit');
    setEditingList(list);
    setListFormData({
      name: list.name,
      accountName: list.accountName,
      day: list.day,
      description: list.description || ''
    });
    setIsListModalOpen(true);
  };

  const handleDeleteList = async (list) => {
    if (confirm(`Are you sure you want to delete the list "${list.name}"?`)) {
      try {
        await deleteTransactionList(list.id);
        setTransactionLists(lists => lists.filter(l => l.id !== list.id));
        if (activeListId === list.id) {
          setActiveListId(null);
        }
      } catch (error) {
        console.error('Error deleting list:', error);
        alert('Failed to delete transaction list');
      }
    }
  };

  const handleListSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const listData = {
        name: listFormData.name,
        accountName: listFormData.accountName,
        day: listFormData.day,
        description: listFormData.description,
        ledgerName: currentLedger
      };
      
      if (listModalMode === 'edit' && editingList) {
        listData.id = editingList.id;
      }
      
      const id = await saveTransactionList(listData);
      
      if (listModalMode === 'add') {
        setTransactionLists([...transactionLists, { ...listData, id }]);
      } else {
        setTransactionLists(lists => 
          lists.map(l => l.id === editingList.id ? { ...listData, id: l.id } : l)
        );
      }
      
      setIsListModalOpen(false);
    } catch (error) {
      console.error('Error saving transaction list:', error);
      alert('Failed to save transaction list');
    }
  };

  const handleSelectList = (listId) => {
    setActiveListId(listId === activeListId ? null : listId);
  };

  // Transaction functions
  const handleEdit = (transaction) => {
    setModalMode('edit');
    setEditingTransaction(transaction);
    
    const formData = {
      amount: transaction.amount.toString(),
      description: transaction.description || '',
      accountOverride: transaction.accountOverride || ''
    };
    
    setFormData(formData);
    setIsModalOpen(true);
  };

  const handleDelete = (transaction) => {
    setConfirmAction(() => async () => {
      try {
        await deleteTransaction(transaction.id);
        setTransactions(prevTransactions => 
          prevTransactions.filter(t => t.id !== transaction.id)
        );
        setShowConfirmModal(false);
      } catch (error) {
        console.error('Error deleting transaction:', error);
        alert('Failed to delete transaction');
      }
    });
    setShowConfirmModal(true);
  };

  const handleAdd = () => {
    if (!activeListId) {
      alert('Please select a transaction list first');
      return;
    }
    
    setModalMode('add');
    
    const initialForm = {
      amount: '',
      description: '',
      accountOverride: ''
    };
    
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!activeListId) {
      alert('Please select a transaction list first');
      return;
    }
    
    try {
      const list = transactionLists.find(l => l.id === activeListId);
      
      const transactionData = {
        amount: parseFloat(formData.amount),
        description: formData.description,
        listId: activeListId,
        accountName: list.accountName, // Use the list's account name as the default
        ledgerName: currentLedger
      };
      
      // Add accountOverride if specified
      if (formData.accountOverride) {
        transactionData.accountOverride = formData.accountOverride;
      }
      
      if (modalMode === 'add') {
        const id = await addTransaction(transactionData);
        const newTransaction = { ...transactionData, id };
        setTransactions([...transactions, newTransaction]);
      } else if (modalMode === 'edit' && editingTransaction) {
        await updateTransaction(editingTransaction.id, transactionData);
        setTransactions(prevTransactions => 
          prevTransactions.map(t => 
            t.id === editingTransaction.id ? { ...transactionData, id: t.id } : t
          )
        );
      }
      
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving transaction:', error);
      alert('Failed to save transaction');
    }
  };

  const handleSetAccountOverride = (transactionId, accountOverride) => {
    setAccountOverrides(prev => ({
      ...prev,
      [transactionId]: accountOverride
    }));
  };

  const preparePostingPreview = () => {
    if (!activeListId) {
      alert('Please select a transaction list first');
      return null;
    }
    
    if (!targetLedger) {
      alert('Please select a target ledger');
      return null;
    }
    
    const list = transactionLists.find(l => l.id === activeListId);
    if (!list) return null;
    
    // Group transactions by account
    const accountTotals = new Map();
    const overrideDetails = [];
    
    transactions.forEach(transaction => {
      // Determine the account to use:
      // 1. User-specified override for this posting operation (UI selection)
      // 2. Stored account override in the transaction
      // 3. Default account from the list
      let accountName = list.accountName;
      let isOverridden = false;
      
      if (accountOverrides[transaction.id]) {
        accountName = accountOverrides[transaction.id];
        isOverridden = true;
      } else if (transaction.accountOverride) {
        accountName = transaction.accountOverride;
        isOverridden = true;
      }
      
      if (isOverridden) {
        overrideDetails.push({
          id: transaction.id,
          description: transaction.description,
          originalAccount: list.accountName,
          overrideAccount: accountName
        });
      }
      
      if (!accountTotals.has(accountName)) {
        accountTotals.set(accountName, {
          accountName,
          amount: 0,
          count: 0
        });
      }
      
      const entry = accountTotals.get(accountName);
      entry.amount += parseFloat(transaction.amount);
      entry.count += 1;
    });
    
    // Convert to array
    const preview = Array.from(accountTotals.values());
    
    // Check for existing entries and mark the ones that will be updated vs created
    const warnings = [];
    preview.forEach(previewItem => {
      // Find matching ledger entry in the target ledger
      const existingEntry = targetLedgerEntries.find(entry => 
        entry.name === previewItem.accountName && entry.day === list.day
      );
      
      // Mark if this entry exists already
      previewItem.isExisting = !!existingEntry;
      
      if (existingEntry) {
        previewItem.currentAmount = existingEntry.amount;
        previewItem.netChange = previewItem.amount - existingEntry.amount;
        
        // Only add to warnings if the current amount is not zero
        if (existingEntry.amount !== 0) {
          warnings.push({
            accountName: previewItem.accountName,
            day: list.day,
            currentAmount: existingEntry.amount,
            newAmount: previewItem.amount,
            netChange: previewItem.amount - existingEntry.amount
          });
        }
      } else {
        // This is a new entry
        previewItem.isNew = true;
        previewItem.netChange = previewItem.amount;
      }
    });
    
    setPostPreview(preview);
    setOverwriteWarnings(warnings);
    
    return { preview, overrideDetails, warnings };
  };

  const handleAggregateTransactions = async () => {
    if (!activeListId) {
      alert('Please select a transaction list first');
      return;
    }
    
    if (!targetLedger) {
      alert('Please select a target ledger');
      return;
    }
    
    // First, make sure we have the latest target ledger entries
    await loadTargetLedgerEntries(targetLedger);
    
    // Then prepare preview data with fresh data
    const result = preparePostingPreview();
    if (!result) return;
    
    const { overrideDetails } = result;
    
    // Update transactions with new overrides
    const transactionsToUpdate = [];
    for (const [id, override] of Object.entries(accountOverrides)) {
      const transaction = transactions.find(t => t.id === parseInt(id));
      if (transaction) {
        transactionsToUpdate.push({
          ...transaction,
          accountOverride: override
        });
      }
    }
    
    // Update the transactions with overrides if needed
    for (const transaction of transactionsToUpdate) {
      await updateTransaction(transaction.id, transaction);
    }
    
    setShowConfirmModal(true);
  };

  const confirmPosting = async () => {
    try {
      setAggregating(true);
      
      const list = transactionLists.find(l => l.id === activeListId);
      if (!list) {
        alert('Selected transaction list not found');
        return;
      }
      
      // Post transactions to ledger entries based on the preview
      for (const entry of postPreview) {
        await updateLedgerEntry(targetLedger, entry.accountName, list.day, entry.amount);
      }
      
      setShowConfirmModal(false);
      alert('Transactions successfully posted to ledger entries');
      
      // Reset account overrides after posting
      setAccountOverrides({});
      
      // Refresh data
      const updatedTransactions = await getTransactionsByList(activeListId);
      setTransactions(updatedTransactions);
      
      // Refresh the target ledger entries
      const updatedEntries = await getLedger(targetLedger);
      setTargetLedgerEntries(updatedEntries);
      
      // Also refresh current ledger entries if current ledger is the same as target
      if (currentLedger === targetLedger) {
        setLedgerEntries(updatedEntries);
      }
      
    } catch (error) {
      console.error('Error posting transactions:', error);
      alert('Failed to post transactions');
    } finally {
      setAggregating(false);
    }
  };

  // Helper function to format amount as currency
  const formatAmount = (amount) => {
    return new Decimal(amount).toFixed(2);
  };

  // Helper function to format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  // Helper to determine if transaction is income or expense
  const isIncome = (amount) => {
    return parseFloat(amount) >= 0;
  };

  // Get the total for a transaction list
  const getListTotal = (listId) => {
    const listTransactions = transactions.filter(t => t.listId === listId);
    return listTransactions.reduce((sum, t) => sum + parseFloat(t.amount), 0);
  };

  // Get the list a transaction belongs to
  const getTransactionList = (transaction) => {
    if (!transaction.listId) return null;
    return transactionLists.find(l => l.id === transaction.listId);
  };

  return (
    <DashboardLayout
      currentLedger={currentLedger}
      availableLedgers={availableLedgers}
      setCurrentLedger={setCurrentLedger}
      activeTab="transactions"
    >
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
        <h2 className="text-lg font-medium text-blue-800 mb-2">Transaction List System</h2>
        <p className="text-blue-700 mb-2">
          Create transaction lists for recurring expenses that share a common posting day and primary account.
        </p>
        <ul className="list-disc list-inside text-blue-700 text-sm ml-2">
          <li>Each transaction list represents a collection of related items to be posted on a specific day</li>
          <li>All items in a list share the same main account (e.g., "Cost of Living:Groceries")</li>
          <li>Override accounts for specific items when needed (e.g., beer purchased at grocery store)</li>
          <li>Post all items in a list to your ledger with a single action</li>
        </ul>
      </div>

      {/* Transaction Lists Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Transaction Lists</h2>
            <button
              onClick={handleAddList}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              <PlusIcon className="w-4 h-4" />
              New List
            </button>
          </div>
          
          {transactionLists.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No transaction lists found. Create your first list to organize transactions.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {transactionLists.map(list => {
                const listTotal = getListTotal(list.id);
                const isActive = activeListId === list.id;
                const transactionCount = transactions.filter(t => t.listId === list.id).length;
                
                return (
                  <div 
                    key={list.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSelectList(list.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <ReceiptIcon className={`w-5 h-5 mr-2 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                        <h3 className="font-medium">{list.name}</h3>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); 
                            handleEditList(list);
                          }}
                          className="p-1 text-gray-500 hover:text-indigo-600"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteList(list);
                          }}
                          className="p-1 text-gray-500 hover:text-red-600"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      <span className="font-medium">Account:</span> {list.accountName}
                    </div>
                    <div className="text-sm text-gray-500 mb-2 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span className="font-medium">Day:</span> {list.day}{list.day === 1 ? 'st' : list.day === 2 ? 'nd' : list.day === 3 ? 'rd' : 'th'} of month
                    </div>
                    {list.description && (
                      <p className="text-sm text-gray-500 mb-2">{list.description}</p>
                    )}
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">{transactionCount} transactions</span>
                      <span className={`font-medium ${listTotal >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatAmount(listTotal)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              {activeListId 
                ? `Transactions: ${transactionLists.find(l => l.id === activeListId)?.name || ''}` 
                : 'Transactions'}
            </h1>
            <div className="flex gap-2">
              {FEATURES.ENABLE_TRANSACTION_AGGREGATION && (
                <button
                  onClick={handleAggregateTransactions}
                  disabled={aggregating || transactions.length === 0}
                  className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 flex items-center gap-2 disabled:opacity-50"
                >
                  <ChevronDownIcon className="w-4 h-4" />
                  {aggregating ? 'Posting...' : `Post to ${targetLedger || 'Ledger'}`}
                </button>
              )}
              <button
                onClick={handleAdd}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center gap-2"
              >
                <PlusIcon className="w-4 h-4" />
                Add Transaction
              </button>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Override Account
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                      {activeListId 
                        ? 'No transactions found. Add your first transaction to get started.'
                        : 'Please select a transaction list first.'}
                    </td>
                  </tr>
                ) : (
                  transactions.map(transaction => {
                    const hasOverride = transaction.accountOverride || accountOverrides[transaction.id];
                    
                    return (
                      <tr key={transaction.id} className={`hover:bg-gray-50 ${hasOverride ? 'bg-yellow-50' : ''}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.description || '-'}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                          isIncome(transaction.amount) ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <div className="flex items-center justify-end gap-1">
                            {isIncome(transaction.amount) ? (
                              <ArrowUpCircleIcon className="w-4 h-4" />
                            ) : (
                              <ArrowDownCircleIcon className="w-4 h-4" />
                            )}
                            {isIncome(transaction.amount) ? '+' : ''}
                            {formatAmount(transaction.amount)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.accountOverride ? (
                            <div className="flex items-center text-yellow-700" title="Account override">
                              <TagIcon className="w-4 h-4 mr-1" />
                              <span>{transaction.accountOverride}</span>
                            </div>
                          ) : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEdit(transaction)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                            title="Edit transaction"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(transaction)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete transaction"
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
      </div>

      {/* Add/Edit Transaction Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {modalMode === 'add' ? 'Add Transaction Item' : 'Edit Transaction Item'}
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
                  Description
                </label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter description"
                  required
                />
              </div>

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
                <div className="flex justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Override (Optional)
                  </label>
                </div>
                <input
                  type="text"
                  value={formData.accountOverride || ''}
                  onChange={(e) => setFormData({ ...formData, accountOverride: e.target.value || null })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave empty to use list's account"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Only set this if you need to post to a different account than the list's default account
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
                  {modalMode === 'add' ? 'Add Transaction' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Transaction List Modal */}
      {isListModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {listModalMode === 'add' ? 'Create Transaction List' : 'Edit Transaction List'}
              </h3>
              <button
                onClick={() => setIsListModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleListSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  List Name
                </label>
                <input
                  type="text"
                  value={listFormData.name}
                  onChange={(e) => setListFormData({ ...listFormData, name: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Groceries, Utilities, Rent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Main Account
                </label>
                <input
                  type="text"
                  value={listFormData.accountName}
                  onChange={(e) => setListFormData({ ...listFormData, accountName: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Cost of Living:Groceries"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Use colon separators for nested accounts (e.g., "Cost of Living:Groceries")
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Day
                </label>
                <select
                  value={listFormData.day}
                  onChange={(e) => setListFormData({ ...listFormData, day: parseInt(e.target.value) })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {Array.from({ length: 28 }, (_, i) => i + 1).map(day => (
                    <option key={day} value={day}>{day}{day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th'} of month</option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  This is the day of the month when these transactions are typically made
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Optional)
                </label>
                <textarea
                  value={listFormData.description}
                  onChange={(e) => setListFormData({ ...listFormData, description: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter list description"
                  rows={2}
                />
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsListModalOpen(false)}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  {listModalMode === 'add' ? 'Create List' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posting Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4">Confirm Posting to Ledger</h3>
            
            {/* Post Summary */}
            <div className="mb-6">
              {activeListId && (
                <div className="flex flex-col space-y-2 mb-4 p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center">
                    <ReceiptIcon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-800">
                      {transactionLists.find(l => l.id === activeListId)?.name}
                    </span>
                  </div>
                  <div className="text-blue-700">
                    Posting day: {transactionLists.find(l => l.id === activeListId)?.day || ''}
                  </div>
                </div>
              )}
              
              {/* Target Ledger Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Ledger
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={targetLedger}
                    onChange={(e) => setTargetLedger(e.target.value)}
                    className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {availableLedgers.map(ledger => (
                      <option key={ledger} value={ledger}>{ledger}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => preparePostingPreview()}
                    className="px-2 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                    title="Refresh preview"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Select the ledger where you want to post these transactions
                </p>
              </div>
              
              <p className="font-medium mb-3">The following totals will be posted to your ledger:</p>
              
              <div className="max-h-60 overflow-y-auto border rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Account</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {postPreview.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="px-3 py-2 text-center text-gray-500">
                          No transactions to post.
                        </td>
                      </tr>
                    ) : (
                      postPreview.map((item, index) => (
                        <tr key={index} className={`hover:bg-gray-50 ${item.isNew ? 'bg-blue-50' : (item.currentAmount !== 0 ? 'bg-yellow-50' : '')}`}>
                          <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                            {item.accountName}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-sm text-right">
                            {item.isNew ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                New Entry
                              </span>
                            ) : item.currentAmount !== 0 ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                Update
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                Replace Zero
                              </span>
                            )}
                          </td>
                          <td className={`px-3 py-2 whitespace-nowrap text-sm font-medium text-right ${
                            item.amount >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {formatAmount(item.amount)}
                            {item.isExisting && item.currentAmount !== 0 && (
                              <span className={`ml-2 text-xs ${item.netChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                ({item.netChange >= 0 ? '+' : ''}{formatAmount(item.netChange)})
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* Grand Total */}
              <div className="mt-3 p-3 bg-gray-100 rounded-md">
                <div className="flex justify-between font-medium">
                  <span>Total Posting Amount:</span>
                  <span className={
                    postPreview.reduce((sum, item) => sum + item.amount, 0) >= 0 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }>
                    {formatAmount(postPreview.reduce((sum, item) => sum + item.amount, 0))}
                  </span>
                </div>
              </div>
              
              {/* Warnings about overwriting */}
              {overwriteWarnings.length > 0 && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded-md">
                  <div className="flex items-center text-yellow-800 mb-2">
                    <AlertTriangleIcon className="w-5 h-5 mr-2" />
                    <span className="font-medium">Warning: The following entries will be overwritten:</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-yellow-200">
                      <thead className="bg-yellow-100">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-yellow-800">Account</th>
                          <th className="px-3 py-2 text-right text-xs font-medium text-yellow-800">Day</th>
                          <th className="px-3 py-2 text-right text-xs font-medium text-yellow-800">Current Value</th>
                          <th className="px-3 py-2 text-right text-xs font-medium text-yellow-800">New Value</th>
                          <th className="px-3 py-2 text-right text-xs font-medium text-yellow-800">Net Change</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-yellow-200">
                        {overwriteWarnings.map((warning, index) => (
                          <tr key={index} className="hover:bg-yellow-100">
                            <td className="px-3 py-2 text-sm text-yellow-800">
                              {warning.accountName}
                            </td>
                            <td className="px-3 py-2 text-sm text-yellow-800 text-right">
                              {warning.day}
                            </td>
                            <td className="px-3 py-2 text-sm text-yellow-800 text-right font-medium">
                              {formatAmount(warning.currentAmount)}
                            </td>
                            <td className="px-3 py-2 text-sm text-yellow-800 text-right font-medium">
                              {formatAmount(warning.newAmount)}
                            </td>
                            <td className={`px-3 py-2 text-sm text-right font-medium ${
                              warning.netChange >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {warning.netChange >= 0 ? '+' : ''}
                              {formatAmount(warning.netChange)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Account overrides notice */}
              {Object.keys(accountOverrides).length > 0 && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <div className="flex items-center text-blue-800 mb-2">
                    <TagIcon className="w-5 h-5 mr-2" />
                    <span className="font-medium">Account Overrides Applied:</span>
                  </div>
                  <p className="text-sm text-blue-700 mb-2">
                    Some transactions will be posted to accounts different from their lists.
                  </p>
                </div>
              )}
              
              <p className="mt-4 text-gray-600 text-sm">
                This action will post all transactions to your ledger, aggregating by account and day. 
                This action cannot be undone and will update your ledger entries.
              </p>
            </div>
            
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmPosting}
                disabled={aggregating}
                className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 disabled:opacity-50"
              >
                {aggregating ? 'Posting...' : 'Confirm Posting'}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
} 