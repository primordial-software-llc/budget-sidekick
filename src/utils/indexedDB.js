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

// --- Import/Export Functions ---

export const exportLedgerData = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LEDGER_STORE, USER_SETTINGS_STORE], 'readonly');
    const ledgerStore = transaction.objectStore(LEDGER_STORE);
    const settingsStore = transaction.objectStore(USER_SETTINGS_STORE);
    
    const ledgerRequest = ledgerStore.getAll();
    const settingsRequest = settingsStore.getAll();
    
    let ledgers, userSettings;
    
    ledgerRequest.onsuccess = () => {
      ledgers = ledgerRequest.result;
      checkComplete();
    };
    
    settingsRequest.onsuccess = () => {
      userSettings = settingsRequest.result;
      checkComplete();
    };
    
    ledgerRequest.onerror = () => reject(ledgerRequest.error);
    settingsRequest.onerror = () => reject(settingsRequest.error);
    
    function checkComplete() {
      if (ledgers !== undefined && userSettings !== undefined) {
        const data = {
          version: DB_VERSION,
          timestamp: new Date().toISOString(),
          ledgers: ledgers,
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
  const transaction = db.transaction([LEDGER_STORE], 'readwrite');
  const ledgerStore = transaction.objectStore(LEDGER_STORE);

  return new Promise((resolve, reject) => {
    let completedLedgers = 0;
    let failedLedgers = 0;
    let completedTransactions = 0;
    let totalOperations = importData.ledgers.length;

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
      if (completedLedgers + failedLedgers === totalOperations) {
        resolve({
          success: completedLedgers,
          failed: failedLedgers
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

// Record last export timestamp
export const recordLastExport = async () => {
  const setting = {
    type: 'export',
    timestamp: new Date().toISOString()
  };
  
  return saveSetting('last_export', setting);
};

// Get last export timestamp
export const getLastExport = async () => {
  try {
    return await getSetting('last_export');
  } catch (error) {
    console.error('Error getting last export:', error);
    return null;
  }
};

// Get formatted last export time for display
export const getLastExportFormatted = async () => {
  try {
    const lastExport = await getLastExport();
    if (!lastExport) {
      return 'No backup yet';
    }
    
    const exportDate = new Date(lastExport.timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - exportDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return `Today ${exportDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (diffInDays === 1) {
      return `Yesterday ${exportDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    } else {
      return exportDate.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  } catch (error) {
    console.error('Error formatting last export:', error);
    return 'Unknown';
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