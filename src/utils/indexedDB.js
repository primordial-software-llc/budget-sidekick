import { DB_NAME, DB_VERSION, LEDGER_STORE, TRANSACTION_STORE, TRANSACTION_GROUP_STORE, TRANSACTION_LIST_STORE } from '@/utils/constants';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const oldVersion = event.oldVersion;
      
      if (!db.objectStoreNames.contains(LEDGER_STORE)) {
        const store = db.createObjectStore(LEDGER_STORE, { keyPath: 'name' });
        store.createIndex('name', 'name', { unique: true });
      }

      if (oldVersion < 2 && !db.objectStoreNames.contains(TRANSACTION_STORE)) {
        const transactionStore = db.createObjectStore(TRANSACTION_STORE, { keyPath: 'id', autoIncrement: true });
        transactionStore.createIndex('ledgerName', 'ledgerName', { unique: false });
        transactionStore.createIndex('accountName', 'accountName', { unique: false });
        transactionStore.createIndex('date', 'date', { unique: false });
      }
      
      if (oldVersion < 3 && !db.objectStoreNames.contains(TRANSACTION_GROUP_STORE)) {
        const groupStore = db.createObjectStore(TRANSACTION_GROUP_STORE, { keyPath: 'id', autoIncrement: true });
        groupStore.createIndex('ledgerName', 'ledgerName', { unique: false });
        groupStore.createIndex('name', 'name', { unique: false });
        groupStore.createIndex('accountName', 'accountName', { unique: false });
      }
      
      if (oldVersion < 4 && !db.objectStoreNames.contains(TRANSACTION_LIST_STORE)) {
        const listStore = db.createObjectStore(TRANSACTION_LIST_STORE, { keyPath: 'id', autoIncrement: true });
        listStore.createIndex('ledgerName', 'ledgerName', { unique: false });
        listStore.createIndex('name', 'name', { unique: false });
        listStore.createIndex('accountName', 'accountName', { unique: false });
        
        // Additional index for the modified transaction store if it exists
        if (db.objectStoreNames.contains(TRANSACTION_STORE)) {
          const transactionStore = event.target.transaction.objectStore(TRANSACTION_STORE);
          if (!transactionStore.indexNames.contains('listId')) {
            transactionStore.createIndex('listId', 'listId', { unique: false });
          }
        }
      }
    };
  });
};

export const saveLedger = async (ledgerName, entries) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LEDGER_STORE], 'readwrite');
    const store = transaction.objectStore(LEDGER_STORE);
    
    const request = store.put({ name: ledgerName, entries });
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const getLedger = async (ledgerName) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LEDGER_STORE], 'readonly');
    const store = transaction.objectStore(LEDGER_STORE);
    
    const request = store.get(ledgerName);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result?.entries || []);
  });
};

export const getAllLedgerNames = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LEDGER_STORE], 'readonly');
    const store = transaction.objectStore(LEDGER_STORE);
    const request = store.getAllKeys();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || []);
  });
};

export const addTransaction = async (transaction) => {
  if (!transaction.ledgerName || !transaction.accountName || !transaction.amount) {
    throw new Error('Transaction must include ledgerName, accountName, and amount');
  }

  if (!(transaction.date instanceof Date)) {
    transaction.date = new Date(transaction.date || Date.now());
  }

  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_STORE);
    
    const request = store.add(transaction);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const updateTransaction = async (id, updatedTransaction) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_STORE);
    
    const getRequest = store.get(id);
    getRequest.onerror = () => reject(getRequest.error);
    
    getRequest.onsuccess = () => {
      const existingTransaction = getRequest.result;
      if (!existingTransaction) {
        reject(new Error('Transaction not found'));
        return;
      }
      
      const transaction = { ...existingTransaction, ...updatedTransaction, id };
      
      const putRequest = store.put(transaction);
      putRequest.onerror = () => reject(putRequest.error);
      putRequest.onsuccess = () => resolve(putRequest.result);
    };
  });
};

export const deleteTransaction = async (id) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_STORE);
    
    const request = store.delete(id);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
};

export const getTransactionsByLedger = async (ledgerName) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_STORE);
    const index = store.index('ledgerName');
    
    const request = index.getAll(ledgerName);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || []);
  });
};

export const getTransactionsByAccount = async (ledgerName, accountName) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_STORE);
    
    const index = store.index('ledgerName');
    const request = index.getAll(ledgerName);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const transactions = request.result || [];
      const filteredTransactions = transactions.filter(
        t => t.accountName === accountName
      );
      resolve(filteredTransactions);
    };
  });
};

export const aggregateTransactionsToLedger = async (ledgerName) => {
  try {
    const transactions = await getTransactionsByLedger(ledgerName);
    const existingEntries = await getLedger(ledgerName);
    
    const aggregatedEntries = new Map();
    
    // Get account overrides if any exist
    const overrideMap = new Map();
    transactions.forEach(transaction => {
      if (transaction.accountOverride) {
        overrideMap.set(transaction.id, transaction.accountOverride);
      }
    });
    
    transactions.forEach(transaction => {
      const day = new Date(transaction.date).getDate();
      // Use override account if available, otherwise use the normal account
      const accountName = overrideMap.get(transaction.id) || transaction.accountName;
      const key = `${accountName}|${day}`;
      
      if (!aggregatedEntries.has(key)) {
        aggregatedEntries.set(key, {
          name: accountName,
          day,
          amount: 0
        });
      }
      
      const entry = aggregatedEntries.get(key);
      entry.amount += parseFloat(transaction.amount);
    });
    
    const newEntries = Array.from(aggregatedEntries.values());
    
    existingEntries.forEach(existingEntry => {
      const key = `${existingEntry.name}|${existingEntry.day}`;
      if (!aggregatedEntries.has(key)) {
        newEntries.push(existingEntry);
      }
    });
    
    await saveLedger(ledgerName, newEntries);
    
    return newEntries;
  } catch (error) {
    console.error('Error aggregating transactions:', error);
    throw error;
  }
};

export const exportLedgerData = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LEDGER_STORE, TRANSACTION_STORE], 'readonly');
    const ledgerStore = transaction.objectStore(LEDGER_STORE);
    const transactionStore = transaction.objectStore(TRANSACTION_STORE);
    
    const ledgerRequest = ledgerStore.getAll();
    const transactionRequest = transactionStore.getAll();
    
    let ledgers, transactions;
    
    ledgerRequest.onsuccess = () => {
      ledgers = ledgerRequest.result;
      if (transactions !== undefined) {
        completeExport();
      }
    };
    
    transactionRequest.onsuccess = () => {
      transactions = transactionRequest.result;
      if (ledgers !== undefined) {
        completeExport();
      }
    };
    
    ledgerRequest.onerror = () => reject(ledgerRequest.error);
    transactionRequest.onerror = () => reject(transactionRequest.error);
    
    function completeExport() {
      const data = {
        version: DB_VERSION,
        timestamp: new Date().toISOString(),
        ledgers: ledgers,
        transactions: transactions
      };
      resolve(data);
    }
  });
};

export const importLedgerData = async (importData) => {
  if (!importData.ledgers || !Array.isArray(importData.ledgers)) {
    throw new Error('Invalid import data format');
  }

  const db = await initDB();
  const transaction = db.transaction([LEDGER_STORE, TRANSACTION_STORE], 'readwrite');
  const ledgerStore = transaction.objectStore(LEDGER_STORE);
  const transactionStore = transaction.objectStore(TRANSACTION_STORE);

  return new Promise((resolve, reject) => {
    let completedLedgers = 0;
    let failedLedgers = 0;
    let completedTransactions = 0;
    let failedTransactions = 0;
    let totalOperations = importData.ledgers.length;
    
    if (importData.transactions && Array.isArray(importData.transactions)) {
      totalOperations += importData.transactions.length;
      
      importData.transactions.forEach(transaction => {
        const { id, ...transactionData } = transaction;
        
        const request = transactionStore.add(transactionData);
        
        request.onsuccess = () => {
          completedTransactions++;
          checkCompletion();
        };

        request.onerror = () => {
          failedTransactions++;
          console.error(`Failed to import transaction:`, request.error);
          checkCompletion();
        };
      });
    }

    importData.ledgers.forEach((ledger) => {
      const request = ledgerStore.put(ledger);
      
      request.onsuccess = () => {
        completedLedgers++;
        checkCompletion();
      };

      request.onerror = () => {
        failedLedgers++;
        console.error(`Failed to import ledger: ${ledger.name}`, request.error);
        checkCompletion();
      };
    });

    function checkCompletion() {
      if (completedLedgers + failedLedgers + completedTransactions + failedTransactions === totalOperations) {
        resolve({
          success: completedLedgers + completedTransactions,
          failed: failedLedgers + failedTransactions
        });
      }
    }

    transaction.onerror = () => reject(transaction.error);
  });
};

// Transaction Group Functions
export const saveTransactionGroup = async (group) => {
  if (!group.ledgerName || !group.name || !group.accountName) {
    throw new Error('Transaction group must include ledgerName, name, and accountName');
  }

  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_GROUP_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_GROUP_STORE);
    
    const request = group.id ? store.put(group) : store.add(group);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const getTransactionGroups = async (ledgerName) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_GROUP_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_GROUP_STORE);
    const index = store.index('ledgerName');
    
    const request = index.getAll(ledgerName);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || []);
  });
};

export const getTransactionGroup = async (id) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_GROUP_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_GROUP_STORE);
    
    const request = store.get(id);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const deleteTransactionGroup = async (id) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_GROUP_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_GROUP_STORE);
    
    const request = store.delete(id);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
};

// Enhanced transaction functions
export const addTransactionToGroup = async (transaction, groupId) => {
  if (!transaction.ledgerName || !transaction.accountName || !transaction.amount) {
    throw new Error('Transaction must include ledgerName, accountName, and amount');
  }

  if (!(transaction.date instanceof Date)) {
    transaction.date = new Date(transaction.date || Date.now());
  }

  // Add groupId to transaction
  const transactionWithGroup = { ...transaction, groupId };

  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_STORE);
    
    const request = store.add(transactionWithGroup);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const getTransactionsByGroup = async (groupId) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_STORE);
    
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const transactions = request.result || [];
      const groupTransactions = transactions.filter(t => t.groupId === groupId);
      resolve(groupTransactions);
    };
  });
};

export const saveTransactionList = async (list) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_LIST_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_LIST_STORE);
    
    let request;
    if (list.id) {
      request = store.put(list);
    } else {
      request = store.add(list);
    }
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const getTransactionLists = async (ledgerName) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_LIST_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_LIST_STORE);
    const index = store.index('ledgerName');
    
    const request = index.getAll(ledgerName);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || []);
  });
};

export const getTransactionList = async (id) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_LIST_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_LIST_STORE);
    
    const request = store.get(id);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

export const deleteTransactionList = async (id) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_LIST_STORE], 'readwrite');
    const store = tx.objectStore(TRANSACTION_LIST_STORE);
    
    const request = store.delete(id);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
};

export const getTransactionsByList = async (listId) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([TRANSACTION_STORE], 'readonly');
    const store = tx.objectStore(TRANSACTION_STORE);
    const index = store.index('listId');
    
    const request = index.getAll(listId);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || []);
  });
};

export const updateLedgerEntry = async (ledgerName, accountName, day, amount) => {
  try {
    const entries = await getLedger(ledgerName);
    
    // Find if the entry already exists
    const entryIndex = entries.findIndex(entry => 
      entry.name === accountName && entry.day === day
    );
    
    if (entryIndex >= 0) {
      // Update existing entry
      entries[entryIndex].amount = amount;
    } else {
      // Add new entry
      entries.push({
        name: accountName,
        day,
        amount
      });
    }
    
    // Save updated ledger
    await saveLedger(ledgerName, entries);
    return entries;
  } catch (error) {
    console.error('Error updating ledger entry:', error);
    throw error;
  }
}; 