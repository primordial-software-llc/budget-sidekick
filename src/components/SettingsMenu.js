'use client';

import { useState } from 'react';
import { SettingsIcon, InfoIcon, GitBranchIcon, GitCommitIcon, UserIcon } from 'lucide-react';

function SettingsMenu() {
  const [isExpanded, setIsExpanded] = useState(false);


  // These environment variables are automatically available in Next.js when prefixed with NEXT_PUBLIC_
  const buildInfo = {
    deploymentId: process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_ID || 'dev-local',
    gitCommitSha: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'unknown',
    gitCommitMessage: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE || 'Local development',
    gitBranch: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || 'local',
    gitAuthor: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME || 'Developer',
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV || 'development',
    vercelUrl: process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost',
  };

  // Format deployment ID for display (shorter version)
  const shortDeploymentId = buildInfo.deploymentId.startsWith('dpl_') 
    ? buildInfo.deploymentId.slice(4, 12) 
    : buildInfo.deploymentId.slice(0, 8);

  // Format commit SHA for display
  const shortCommitSha = buildInfo.gitCommitSha.slice(0, 7);

  // Format commit message (truncate if too long)
  const shortCommitMessage = buildInfo.gitCommitMessage.length > 35 
    ? buildInfo.gitCommitMessage.slice(0, 32) + '...' 
    : buildInfo.gitCommitMessage;

  // Get environment styling
  const getEnvStyling = (env) => {
    switch (env) {
      case 'production': 
        return {
          bg: 'bg-gradient-to-r from-emerald-100 to-emerald-200',
          text: 'text-emerald-800',
          border: 'border-emerald-300/50',
          dot: 'bg-emerald-500'
        };
      case 'preview': 
        return {
          bg: 'bg-gradient-to-r from-amber-100 to-yellow-200',
          text: 'text-amber-800',
          border: 'border-amber-300/50',
          dot: 'bg-yellow-500'
        };
      default: 
        return {
          bg: 'bg-gradient-to-r from-gray-100 to-gray-200',
          text: 'text-gray-800',
          border: 'border-gray-300/50',
          dot: 'bg-gray-500'
        };
    }
  };

  const envStyle = getEnvStyling(buildInfo.environment);

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
                {/* Build Information */}
                <div className="bg-gradient-to-r from-gray-50/80 to-white/80 p-4 rounded-xl border border-gray-200/30 mb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <InfoIcon className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-gray-900 text-sm">Build Information</span>
                  </div>

                  <div className="space-y-3">
                    {/* Environment & Build ID */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs text-gray-600 block mb-1">Environment</span>
                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${envStyle.bg} ${envStyle.text} ${envStyle.border} block text-center`}>
                          {buildInfo.environment}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600 block mb-1">Build ID</span>
                        <span className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-800 block text-center">
                          {shortDeploymentId}
                        </span>
                      </div>
                    </div>

                    {/* Git Information */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 flex items-center gap-1">
                          <GitCommitIcon className="w-3 h-3" />
                          Commit
                        </span>
                        <span className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-800">
                          {shortCommitSha}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 flex items-center gap-1">
                          <GitBranchIcon className="w-3 h-3" />
                          Branch
                        </span>
                        <span className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-800">
                          {buildInfo.gitBranch}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 flex items-center gap-1">
                          <UserIcon className="w-3 h-3" />
                          Author
                        </span>
                        <span className="text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-800">
                          {buildInfo.gitAuthor}
                        </span>
                      </div>
                    </div>

                    {/* Commit Message */}
                    {buildInfo.gitCommitMessage && buildInfo.gitCommitMessage !== 'Local development' && (
                      <div className="pt-2 border-t border-gray-200/50">
                        <span className="text-xs text-gray-600 block mb-1">Latest Commit</span>
                        <p className="text-xs text-gray-700 leading-relaxed italic bg-white px-2 py-1 rounded border border-gray-200">
                          "{shortCommitMessage}"
                        </p>
                      </div>
                    )}

                    {/* Deployment URL */}
                    {buildInfo.environment !== 'development' && buildInfo.vercelUrl && (
                      <div className="pt-2 border-t border-gray-200/50">
                        <span className="text-xs text-gray-600 block mb-1">Deployed to</span>
                        <div className="font-mono bg-white px-2 py-1 rounded border border-gray-200 text-xs text-gray-700 break-all">
                          {buildInfo.vercelUrl}
                        </div>
                      </div>
                    )}
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
