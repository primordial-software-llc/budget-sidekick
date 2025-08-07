'use client';

import { useState } from 'react';
import { SettingsIcon, InfoIcon } from 'lucide-react';

function SettingsMenu() {
  const [isExpanded, setIsExpanded] = useState(false);


  // Get commit SHA from Vercel environment variable
  const commitSha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev';

  // Format commit SHA for display (first 7 characters, standard git short hash)
  const shortCommitSha = commitSha === 'dev' ? 'dev' : commitSha.slice(0, 7);

  return (
    <div className="relative">
      {/* Settings Gear Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-gray-600 hover:text-gray-800"
        title="Settings"
      >
        <SettingsIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:rotate-45'}`} />
      </button>

      {/* Dropdown Panel */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsExpanded(false)}
          ></div>
          
          {/* Dropdown Content */}
          <div className="absolute top-full right-0 mt-2 z-50">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute -top-2 -right-1 w-20 h-20 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-1 -left-2 w-16 h-16 bg-gradient-to-tr from-purple-200/30 to-cyan-200/30 rounded-full blur-xl"></div>
            </div>

            <div className="relative bg-white/95 backdrop-blur-lg border border-gray-200/60 rounded-2xl shadow-2xl w-80">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <SettingsIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Settings</h3>
                    <p className="text-xs text-gray-500">App configuration</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-2">
                {/* Version */}
                <div className="bg-gradient-to-r from-gray-50/80 to-white/80 p-3 rounded-xl border border-gray-200/30 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <InfoIcon className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-gray-900 text-sm">Version</span>
                    </div>
                    <span className={`font-mono text-xs px-2 py-1 rounded ${
                      shortCommitSha === 'dev' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {shortCommitSha}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SettingsMenu;
