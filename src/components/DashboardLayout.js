'use client';

import Link from 'next/link';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';
import { UploadIcon, DownloadIcon } from 'lucide-react';
import { exportLedgerData, importLedgerData  } from '@/utils/indexedDB';

export default function DashboardLayout({ children, currentLedger, availableLedgers, setCurrentLedger, activeTab }) {
  const handleExport = async () => {
    try {
      const data = await exportLedgerData();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `budget-sidekick-export-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export data');
    }
  };

  const handleImport = async () => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      
      input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const importData = JSON.parse(e.target.result);
            const result = await importLedgerData(importData);
            alert(`Import completed: ${result.success} successful, ${result.failed} failed`);
            window.location.reload();
          } catch (error) {
            console.error('Import failed:', error);
            alert('Failed to import data: Invalid file format');
          }
        };
        reader.readAsText(file);
      };

      input.click();
    } catch (error) {
      console.error('Import failed:', error);
      alert('Failed to import data');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" className="h-12">
                <style>
                  {`.logo-text { font-family: Arial, sans-serif; font-weight: bold; }
                    .budget { fill: #1e3a5f; }
                    .sidekick { fill: #3498db; }`}
                </style>
                <g transform="translate(5,10) scale(0.83)">
                  <path d="M10 50 L20 40 L30 45 L40 15 L50 25" fill="none" stroke="#27ae60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <circle cx="20" cy="40" r="3" fill="#3498db"></circle>
                  <circle cx="30" cy="45" r="3" fill="#3498db"></circle>
                  <circle cx="40" cy="15" r="3" fill="#3498db"></circle>
                  <path d="M5 55 L55 55" stroke="#1e3a5f" strokeWidth="2"></path>
                  <path d="M5 10 L5 55" stroke="#1e3a5f" strokeWidth="2"></path>
                </g>
                <text x="70" y="35" className="logo-text budget" fontSize="24">Budget</text>
                <text x="70" y="55" className="logo-text sidekick" fontSize="24">Sidekick</text>
              </svg>
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Ledger Selection Group */}
            <div className="flex items-center gap-2">
              <select
                value={currentLedger}
                onChange={(e) => {
                  setCurrentLedger(e.target.value);
                  localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, e.target.value);
                }}
                className="px-4 py-3 text-white bg-blue-900 rounded hover:bg-blue-800 cursor-pointer [&>option]:text-white [&>option]:bg-blue-900 [&>option]:px-4 [&>option]:py-2 [&>option]:cursor-pointer [&>option]:hover:bg-blue-800"
              >
                {availableLedgers.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleImport}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <UploadIcon className="w-4 h-4" />
                Import
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <DownloadIcon className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub Navigation */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-6">
            <Link 
              href="/dashboard/overview" 
              className={`px-4 py-3 text-white ${activeTab === 'overview' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              Overview
            </Link>
            <Link 
              href="/dashboard" 
              className={`px-4 py-3 text-white ${activeTab === 'entries' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              Account Entries
            </Link>
            <Link 
              href="/dashboard/transactions" 
              className={`px-4 py-3 text-white ${activeTab === 'transactions' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              Transactions
            </Link>
            <Link 
              href="/dashboard/account-summary-report" 
              className={`px-4 py-3 text-white ${activeTab === 'report' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              Account Summary Report
            </Link>
            <Link 
              href="/dashboard/account-servicers-report" 
              className={`px-4 py-3 text-white ${activeTab === 'debit-report' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              Account Servicers Report
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  );
} 