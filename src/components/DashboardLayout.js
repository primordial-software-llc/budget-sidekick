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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-indigo-100/80 relative overflow-hidden">
      {/* Refined background atmosphere */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-200/25 to-blue-200/15 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-purple-200/15 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-200/10 to-emerald-200/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Enhanced Header/Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-xl border-b border-white/30 relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/dashboard/overview" className="group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" className="h-11 sm:h-12 transition-transform group-hover:scale-105">
                <style>{`
                  .logo-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; font-weight: 700; }
                  .budget { fill: #1e3a5f; }
                  .sidekick { fill: #059669; }
                `}</style>
                <g transform="translate(5,10) scale(0.83)">
                  <path d="M10 50 L20 40 L30 45 L40 15 L50 25" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <circle cx="20" cy="40" r="3" fill="#059669"></circle>
                  <circle cx="30" cy="45" r="3" fill="#059669"></circle>
                  <circle cx="40" cy="15" r="3" fill="#059669"></circle>
                  <path d="M5 55 L55 55" stroke="#1e3a5f" strokeWidth="2"></path>
                  <path d="M5 10 L5 55" stroke="#1e3a5f" strokeWidth="2"></path>
                </g>
                <text x="70" y="35" className="logo-text budget" fontSize="24">Budget</text>
                <text x="70" y="55" className="logo-text sidekick" fontSize="24">Sidekick</text>
              </svg>
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Account Selection Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-sm text-gray-700 font-semibold hidden sm:block tracking-wide">Account:</label>
              <select
                value={currentLedger}
                onChange={(e) => {
                  setCurrentLedger(e.target.value);
                  localStorage.setItem(LOCAL_STORAGE_KEY_LEDGER, e.target.value);
                }}
                className="px-4 py-2.5 text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm border-0 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 [&>option]:text-white [&>option]:bg-emerald-700 [&>option]:font-medium"
              >
                {availableLedgers.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleImport}
                className="px-4 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold text-sm border-0 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <UploadIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Import</span>
              </button>
                
              <div className="relative">
                <button
                  onClick={handleExport}
                  onMouseEnter={() => setShowExportTooltip(true)}
                  onMouseLeave={() => setShowExportTooltip(false)}
                  className="px-4 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold text-sm border-0 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                  {exportStatusLoaded ? (
                    neverExported ? (
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse shadow-sm ring-1 ring-white/20"></div>
                    ) : isExportOld ? (
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse shadow-sm ring-1 ring-white/20"></div>
                    ) : (
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-sm ring-1 ring-white/20"></div>
                    )
                  ) : (
                    <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                  )}
                </button>
              
              {/* Enhanced Export Status Overlay */}
              {showExportTooltip && exportStatusLoaded && (
                <div className="absolute top-full right-0 mt-3 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 z-50 ring-1 ring-black/5">
                  <div className="flex items-start gap-4">
                    {neverExported ? (
                      <div className="p-2 bg-red-50 rounded-xl">
                        <InfoIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                      </div>
                    ) : isExportOld ? (
                      <div className="p-2 bg-yellow-50 rounded-xl">
                        <CalendarIcon className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      </div>
                    ) : (
                      <div className="p-2 bg-green-50 rounded-xl">
                        <ClockIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      </div>
                    )}
                    <div className="text-sm">
                      <div className={`font-bold text-base ${
                        neverExported ? 'text-red-700' : isExportOld ? 'text-yellow-700' : 'text-green-700'
                      }`}>
                        {neverExported ? 'No backup created' : isExportOld ? 'Backup recommended' : 'Backup is current'}
                      </div>
                      <div className="text-gray-600 mt-2 leading-relaxed">
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
        </div>
      </nav>

      {/* Enhanced Sub Navigation */}
      <div className="bg-white/70 backdrop-blur-md border-b border-gray-200/30 relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex space-x-2 overflow-x-auto">
            <Link 
              href="/dashboard/overview" 
              className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm border ${
                activeTab === 'overview' 
                  ? 'bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-600/20 border-emerald-600' 
                  : 'text-gray-700 hover:bg-white/90 hover:shadow-md hover:text-emerald-600 border-transparent'
              }`}
            >
              Overview
            </Link>
            <Link 
              href="/dashboard/account-management" 
              className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm border ${
                activeTab === 'account-management' 
                  ? 'bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-600/20 border-emerald-600' 
                  : 'text-gray-700 hover:bg-white/90 hover:shadow-md hover:text-emerald-600 border-transparent'
              }`}
            >
              Accounts
            </Link>
            <Link 
              href="/dashboard" 
              className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm border ${
                activeTab === 'entries' 
                  ? 'bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-600/20 border-emerald-600' 
                  : 'text-gray-700 hover:bg-white/90 hover:shadow-md hover:text-emerald-600 border-transparent'
              }`}
            >
              <span className="hidden sm:inline">Account </span>Entries
            </Link>
            <Link 
              href="/dashboard/account-summary-report" 
              className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm border ${
                activeTab === 'report' 
                  ? 'bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-600/20 border-emerald-600' 
                  : 'text-gray-700 hover:bg-white/90 hover:shadow-md hover:text-emerald-600 border-transparent'
              }`}
            >
              <span className="hidden sm:inline">Account </span>Summary<span className="hidden sm:inline"> Report</span>
            </Link>
            <Link 
              href="/dashboard/category-report" 
              className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm border ${
                activeTab === 'category-report' 
                  ? 'bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-600/20 border-emerald-600' 
                  : 'text-gray-700 hover:bg-white/90 hover:shadow-md hover:text-emerald-600 border-transparent'
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