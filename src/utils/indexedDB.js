import { DB_NAME, DB_VERSION, LEDGER_STORE, TRANSACTION_STORE, USER_SETTINGS_STORE } from '@/utils/constants';

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

      if (!db.objectStoreNames.contains(TRANSACTION_STORE)) {
        const transactionStore = db.createObjectStore(TRANSACTION_STORE, { keyPath: 'id', autoIncrement: true });
        transactionStore.createIndex('ledgerName', 'ledgerName', { unique: false });
        transactionStore.createIndex('accountName', 'accountName', { unique: false });
        transactionStore.createIndex('date', 'date', { unique: false });
      }
      
      if (!db.objectStoreNames.contains(USER_SETTINGS_STORE)) {
        const settingsStore = db.createObjectStore(USER_SETTINGS_STORE, { keyPath: 'key' });
        settingsStore.createIndex('type', 'type', { unique: false });
        settingsStore.createIndex('updatedAt', 'updatedAt', { unique: false });
      }
    };
  });
};

// --- Ledger Functions ---

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

export const updateLedgerEntry = async (ledgerName, accountName, day, amount, category = '') => {
  try {
    const entries = await getLedger(ledgerName);
    
    // Find if the entry already exists
    const entryIndex = entries.findIndex(entry => 
      entry.name === accountName && entry.day === day
    );
    
    if (entryIndex >= 0) {
      // Update existing entry
      entries[entryIndex].amount = amount;
      // Update category if provided
      if (category) {
        entries[entryIndex].category = category;
      }
    } else {
      // Add new entry
      entries.push({
        name: accountName,
        day,
        amount,
        category: category || ''
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

// --- Transaction Functions ---

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

// --- Import/Export Functions ---

export const exportLedgerData = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LEDGER_STORE, TRANSACTION_STORE, USER_SETTINGS_STORE], 'readonly');
    const ledgerStore = transaction.objectStore(LEDGER_STORE);
    const transactionStore = transaction.objectStore(TRANSACTION_STORE);
    const settingsStore = transaction.objectStore(USER_SETTINGS_STORE);
    
    const ledgerRequest = ledgerStore.getAll();
    const transactionRequest = transactionStore.getAll();
    const settingsRequest = settingsStore.getAll();
    
    let ledgers, transactions, userSettings;
    
    ledgerRequest.onsuccess = () => {
      ledgers = ledgerRequest.result;
      checkComplete();
    };
    
    transactionRequest.onsuccess = () => {
      transactions = transactionRequest.result;
      checkComplete();
    };
    
    settingsRequest.onsuccess = () => {
      userSettings = settingsRequest.result;
      checkComplete();
    };
    
    ledgerRequest.onerror = () => reject(ledgerRequest.error);
    transactionRequest.onerror = () => reject(transactionRequest.error);
    settingsRequest.onerror = () => reject(settingsRequest.error);
    
    function checkComplete() {
      if (ledgers !== undefined && transactions !== undefined && userSettings !== undefined) {
        const data = {
          version: DB_VERSION,
          timestamp: new Date().toISOString(),
          ledgers: ledgers,
          transactions: transactions,
          userSettings: userSettings
        };
        resolve(data);
      }
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

// ---- User Settings Functions ----

// Save a user setting
export const saveSetting = async (key, data) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([USER_SETTINGS_STORE], 'readwrite');
    const store = transaction.objectStore(USER_SETTINGS_STORE);
    
    // Create the setting object
    const setting = {
      key,
      ...data,
      updatedAt: new Date().toISOString()
    };
    
    const request = store.put(setting);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

// Get a user setting by key
export const getSetting = async (key) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([USER_SETTINGS_STORE], 'readonly');
    const store = transaction.objectStore(USER_SETTINGS_STORE);
    
    const request = store.get(key);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || null);
  });
};

// Get all settings of a specific type
export const getSettingsByType = async (type) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([USER_SETTINGS_STORE], 'readonly');
    const store = transaction.objectStore(USER_SETTINGS_STORE);
    const index = store.index('type');
    
    const request = index.getAll(type);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || []);
  });
};

// Delete a user setting
export const deleteSetting = async (key) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([USER_SETTINGS_STORE], 'readwrite');
    const store = transaction.objectStore(USER_SETTINGS_STORE);
    
    const request = store.delete(key);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
};

// Record user consent
export const recordConsent = async (type, version, isConsented = true) => {
  try {
    // Create a unique key for this consent record
    const now = new Date();
    const key = `consent:${type}:${now.getTime()}`;
    
    // Get browser and device info
    const userAgent = window.navigator.userAgent;
    const deviceInfo = getBrowserInfo();
    
    // Save as a user setting
    await saveSetting(key, {
      type: 'consent',
      consentType: type,
      version,
      consented: isConsented,
      date: now.toISOString(),
      userAgent,
      device: deviceInfo
    });
    
    return key;
  } catch (error) {
    console.error('Error recording consent:', error);
    throw error;
  }
};

// Get all consent records
export const getAllConsents = async () => {
  try {
    return await getSettingsByType('consent');
  } catch (error) {
    console.error('Error getting consents:', error);
    throw error;
  }
};

// Get latest consent of a specific type
export const getLatestConsent = async (type) => {
  try {
    const allConsents = await getAllConsents();
    
    // Filter consents by the specified type
    const typeConsents = allConsents.filter(c => c.consentType === type);
    
    if (typeConsents.length === 0) {
      return null;
    }
    
    // Sort by date, newest first
    typeConsents.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    
    return typeConsents[0];
  } catch (error) {
    console.error(`Error getting latest ${type} consent:`, error);
    throw error;
  }
};

// Helper function to get detailed browser info
const getBrowserInfo = () => {
  const userAgent = window.navigator.userAgent;
  let browserInfo = {
    userAgent: userAgent,
    browserName: 'Unknown',
    browserVersion: 'Unknown',
    os: 'Unknown'
  };
  
  // Detect browser
  if (userAgent.indexOf('Firefox') > -1) {
    browserInfo.browserName = 'Firefox';
    browserInfo.browserVersion = userAgent.match(/Firefox\/([0-9.]+)/)?.[1] || 'Unknown';
  } else if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edg') === -1) {
    browserInfo.browserName = 'Chrome';
    browserInfo.browserVersion = userAgent.match(/Chrome\/([0-9.]+)/)?.[1] || 'Unknown';
  } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
    browserInfo.browserName = 'Safari';
    browserInfo.browserVersion = userAgent.match(/Version\/([0-9.]+)/)?.[1] || 'Unknown';
  } else if (userAgent.indexOf('Edg') > -1) {
    browserInfo.browserName = 'Edge';
    browserInfo.browserVersion = userAgent.match(/Edg\/([0-9.]+)/)?.[1] || 'Unknown';
  }
  
  // Detect OS
  if (userAgent.indexOf('Windows') > -1) {
    browserInfo.os = 'Windows';
  } else if (userAgent.indexOf('Mac') > -1) {
    browserInfo.os = 'MacOS';
  } else if (userAgent.indexOf('Linux') > -1) {
    browserInfo.os = 'Linux';
  } else if (userAgent.indexOf('Android') > -1) {
    browserInfo.os = 'Android';
  } else if (userAgent.indexOf('iOS') > -1 || userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) {
    browserInfo.os = 'iOS';
  }
  
  return browserInfo;
}; 