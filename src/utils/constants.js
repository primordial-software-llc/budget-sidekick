// Database constants
export const DB_NAME = 'financialLedgerDB';

export const DB_VERSION = 4;

// Storage constants
export const LOCAL_STORAGE_KEY_LEDGER = 'budgetSidekick_currentLedger';

// Ledger store constants
export const LEDGER_STORE = 'ledgers';
export const TRANSACTION_STORE = 'transactions';
export const TRANSACTION_GROUP_STORE = 'transactionGroups';
export const TRANSACTION_LIST_STORE = 'transactionLists';

// Feature flags - useful for progressive rollout of new features
export const FEATURES = {
  ENABLE_TRANSACTIONS: true,
  ENABLE_TRANSACTION_AGGREGATION: true,
}; 