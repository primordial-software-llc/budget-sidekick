const DB_NAME = 'financialLedgerDB';
const DB_VERSION = 1;
const LEDGER_STORE = 'ledgers';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(LEDGER_STORE)) {
        const store = db.createObjectStore(LEDGER_STORE, { keyPath: 'name' });
        store.createIndex('name', 'name', { unique: true });
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

export const exportLedgerData = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LEDGER_STORE], 'readonly');
    const store = transaction.objectStore(LEDGER_STORE);
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const data = {
        version: DB_VERSION,
        timestamp: new Date().toISOString(),
        ledgers: request.result
      };
      resolve(data);
    };
  });
};

export const importLedgerData = async (importData) => {
  if (!importData.ledgers || !Array.isArray(importData.ledgers)) {
    throw new Error('Invalid import data format');
  }

  const db = await initDB();
  const transaction = db.transaction([LEDGER_STORE], 'readwrite');
  const store = transaction.objectStore(LEDGER_STORE);

  return new Promise((resolve, reject) => {
    let completed = 0;
    let failed = 0;

    importData.ledgers.forEach((ledger) => {
      const request = store.put(ledger);
      
      request.onsuccess = () => {
        completed++;
        if (completed + failed === importData.ledgers.length) {
          resolve({
            success: completed,
            failed: failed
          });
        }
      };

      request.onerror = () => {
        failed++;
        console.error(`Failed to import ledger: ${ledger.name}`, request.error);
        if (completed + failed === importData.ledgers.length) {
          resolve({
            success: completed,
            failed: failed
          });
        }
      };
    });

    transaction.onerror = () => reject(transaction.error);
  });
}; 