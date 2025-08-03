'use client';

import Link from 'next/link';
import { LOCAL_STORAGE_KEY_LEDGER } from '@/utils/constants';
import { UploadIcon, DownloadIcon, ClockIcon, CalendarIcon, InfoIcon, SettingsIcon } from 'lucide-react';
import { exportLedgerData, importLedgerData, recordLastExport, getLastExportFormatted } from '@/utils/indexedDB';
import { useState, useEffect } from 'react';

export default function DashboardLayout({ children, currentLedger, availableLedgers, setCurrentLedger, activeTab }) {
  const [lastExportText, setLastExportText] = useState('');
  const [isExportOld, setIsExportOld] = useState(false);
  const [neverExported, setNeverExported] = useState(false);
  const [showExportTooltip, setShowExportTooltip] = useState(false);
  const [exportStatusLoaded, setExportStatusLoaded] = useState(false);

  // Load last export time on component mount
  useEffect(() => {
    const loadLastExportTime = async () => {
      try {
        const formattedTime = await getLastExportFormatted();
        setLastExportText(formattedTime);
        
        // Check if export is old or never done
        const { getLastExport } = await import('@/utils/indexedDB');
        const lastExport = await getLastExport();
        
        if (!lastExport) {
          setNeverExported(true);
          setIsExportOld(false);
        } else {
          setNeverExported(false);
          const exportDate = new Date(lastExport.timestamp);
          const now = new Date();
          const diffInDays = Math.floor((now.getTime() - exportDate.getTime()) / (1000 * 60 * 60 * 24));
          setIsExportOld(diffInDays > 7);
        }
        
        // Mark status as loaded
        setExportStatusLoaded(true);
      } catch (error) {
        console.error('Error loading last export time:', error);
        // Still mark as loaded even on error to prevent indefinite loading
        setExportStatusLoaded(true);
      }
    };
    loadLastExportTime();
  }, []);

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
      
      // Record the export timestamp
      await recordLastExport();
      
      // Update the display with the new export time
      const updatedTime = await getLastExportFormatted();
      setLastExportText(updatedTime);
      
      // Reset export status since we just exported
      setIsExportOld(false);
      setNeverExported(false);
      // Status is still loaded, just updated
      setExportStatusLoaded(true);
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Organic flowing background shapes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/15 to-emerald-200/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Header/Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20 relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/dashboard/overview">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" className="h-10 sm:h-12">
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
          <div className="flex items-center gap-3">
            {/* Account Selection Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <label className="text-sm text-gray-600 font-medium hidden sm:block">Account:</label>
              <select
                value={currentLedger}
                onChange={(e) => {
                  setCurrentLedger(e.target.value);
                  localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, e.target.value);
                }}
                className="px-3 py-2 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 cursor-pointer shadow hover:shadow-lg transition-all duration-200 font-medium text-sm [&>option]:text-white [&>option]:bg-emerald-700 [&>option]:px-4 [&>option]:py-2 [&>option]:cursor-pointer [&>option]:hover:bg-emerald-800"
              >
                {availableLedgers.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleImport}
              className="px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 font-medium text-sm"
            >
              <UploadIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Import</span>
            </button>
              
            <div className="relative">
              <button
                onClick={handleExport}
                onMouseEnter={() => setShowExportTooltip(true)}
                onMouseLeave={() => setShowExportTooltip(false)}
                className="px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 font-medium text-sm"
              >
                <DownloadIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
                {exportStatusLoaded ? (
                  neverExported ? (
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-sm"></div>
                  ) : isExportOld ? (
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-sm"></div>
                  ) : (
                    <div className="w-2 h-2 bg-green-400 rounded-full shadow-sm"></div>
                  )
                ) : (
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                )}
              </button>
              
              {/* Export Status Overlay */}
              {showExportTooltip && exportStatusLoaded && (
                <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-2xl p-4 z-50">
                  <div className="flex items-start gap-3">
                    {neverExported ? (
                      <InfoIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    ) : isExportOld ? (
                      <CalendarIcon className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <ClockIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="text-sm">
                      <div className={`font-semibold ${
                        neverExported ? 'text-red-700' : isExportOld ? 'text-yellow-700' : 'text-green-700'
                      }`}>
                        {neverExported ? 'No backup created' : isExportOld ? 'Backup recommended' : 'Backup is current'}
                      </div>
                      <div className="text-gray-600 mt-1.5 leading-relaxed">
                        {neverExported 
                          ? 'Your data is not backed up yet. Create your first export to protect against data loss.' 
                          : isExportOld 
                            ? `Last backup: ${lastExportText}. A fresh backup would preserve your recent changes.`
                            : `Last backup: ${lastExportText}`
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Sub Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-white/20 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex space-x-1 overflow-x-auto">
            <Link 
              href="/dashboard/overview" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                activeTab === 'overview' 
                  ? 'bg-emerald-600 text-white shadow' 
                  : 'text-gray-700 hover:bg-white/80 hover:shadow'
              }`}
            >
              Overview
            </Link>
            <Link 
              href="/dashboard/account-management" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                activeTab === 'account-management' 
                  ? 'bg-emerald-600 text-white shadow' 
                  : 'text-gray-700 hover:bg-white/80 hover:shadow'
              }`}
            >
              Accounts
            </Link>
            <Link 
              href="/dashboard" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                activeTab === 'entries' 
                  ? 'bg-emerald-600 text-white shadow' 
                  : 'text-gray-700 hover:bg-white/80 hover:shadow'
              }`}
            >
              <span className="hidden sm:inline">Account </span>Entries
            </Link>
            <Link 
              href="/dashboard/account-summary-report" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                activeTab === 'report' 
                  ? 'bg-emerald-600 text-white shadow' 
                  : 'text-gray-700 hover:bg-white/80 hover:shadow'
              }`}
            >
              <span className="hidden sm:inline">Account </span>Summary<span className="hidden sm:inline"> Report</span>
            </Link>
            <Link 
              href="/dashboard/category-report" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                activeTab === 'category-report' 
                  ? 'bg-emerald-600 text-white shadow' 
                  : 'text-gray-700 hover:bg-white/80 hover:shadow'
              }`}
            >
              Category<span className="hidden sm:inline"> Report</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
        {children}
      </div>
    </div>
  );
} 