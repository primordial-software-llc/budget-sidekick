'use client';

import { useState } from 'react';
import { InfoIcon, GitBranchIcon, GitCommitIcon, UserIcon, CopyIcon, CheckIcon } from 'lucide-react';

function BuildInfo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

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
  const shortCommitMessage = buildInfo.gitCommitMessage.length > 40 
    ? buildInfo.gitCommitMessage.slice(0, 37) + '...' 
    : buildInfo.gitCommitMessage;

  // Get environment styling
  const getEnvStyling = (env) => {
    switch (env) {
      case 'production': 
        return {
          bg: 'bg-gradient-to-r from-emerald-100 to-emerald-200',
          text: 'text-emerald-800',
          border: 'border-emerald-300/50',
          glow: 'shadow-emerald-200/50'
        };
      case 'preview': 
        return {
          bg: 'bg-gradient-to-r from-amber-100 to-yellow-200',
          text: 'text-amber-800',
          border: 'border-amber-300/50',
          glow: 'shadow-amber-200/50'
        };
      default: 
        return {
          bg: 'bg-gradient-to-r from-gray-100 to-gray-200',
          text: 'text-gray-800',
          border: 'border-gray-300/50',
          glow: 'shadow-gray-200/50'
        };
    }
  };

  const envStyle = getEnvStyling(buildInfo.environment);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildInfo.deploymentId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isExpanded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-2xl blur-xl opacity-60"></div>
        
        <button
          onClick={() => setIsExpanded(true)}
          className="relative flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
          title="Build Information"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <InfoIcon className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-mono text-xs text-gray-600 font-medium">{shortDeploymentId}</span>
              <span className={`px-2 py-0.5 rounded-lg text-xs font-medium border ${envStyle.bg} ${envStyle.text} ${envStyle.border} shadow-sm ${envStyle.glow}`}>
                {buildInfo.environment}
              </span>
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Enhanced background with organic shapes */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-4 -right-2 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-2 -left-4 w-20 h-20 bg-gradient-to-tr from-purple-200/30 to-cyan-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative bg-white/95 backdrop-blur-lg border border-gray-200/60 rounded-3xl shadow-2xl p-6 w-96 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <InfoIcon className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Build Info</h3>
              <p className="text-xs text-gray-500">Deployment details</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Build ID */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-2xl border border-gray-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Build ID</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2 py-1 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors text-emerald-700 text-xs font-medium"
              >
                {copied ? <CheckIcon className="w-3 h-3" /> : <CopyIcon className="w-3 h-3" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <span className="font-mono text-sm bg-white px-3 py-2 rounded-xl border border-gray-200 text-gray-800 block">
              {shortDeploymentId}
            </span>
          </div>

          {/* Environment */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-2xl border border-gray-200/50">
            <span className="text-sm font-medium text-gray-700 block mb-2">Environment</span>
            <span className={`inline-flex px-3 py-2 rounded-xl text-sm font-semibold border ${envStyle.bg} ${envStyle.text} ${envStyle.border} shadow-sm ${envStyle.glow}`}>
              {buildInfo.environment}
            </span>
          </div>

          {/* Git Information */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-2xl border border-gray-200/50 space-y-3">
            <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <GitCommitIcon className="w-4 h-4 text-emerald-600" />
              Git Information
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Commit</span>
                <span className="font-mono text-xs bg-white px-2 py-1 rounded-lg border border-gray-200 text-gray-800">
                  {shortCommitSha}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 flex items-center gap-1">
                  <GitBranchIcon className="w-3 h-3" />
                  Branch
                </span>
                <span className="font-mono text-xs bg-white px-2 py-1 rounded-lg border border-gray-200 text-gray-800">
                  {buildInfo.gitBranch}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 flex items-center gap-1">
                  <UserIcon className="w-3 h-3" />
                  Author
                </span>
                <span className="text-xs bg-white px-2 py-1 rounded-lg border border-gray-200 text-gray-800">
                  {buildInfo.gitAuthor}
                </span>
              </div>
            </div>
          </div>

          {/* Commit Message */}
          {buildInfo.gitCommitMessage && buildInfo.gitCommitMessage !== 'Local development' && (
            <div className="bg-gradient-to-r from-blue-50/50 to-emerald-50/50 p-4 rounded-2xl border border-blue-200/30">
              <span className="text-xs font-medium text-gray-700 block mb-2">Latest Commit</span>
              <p className="text-xs text-gray-600 leading-relaxed italic">
                "{shortCommitMessage}"
              </p>
            </div>
          )}

          {/* Deployment URL */}
          {buildInfo.environment !== 'development' && buildInfo.vercelUrl && (
            <div className="pt-4 border-t border-gray-200/50">
              <div className="text-xs text-gray-500">
                <span className="font-medium">Deployed to:</span>
                <br />
                <span className="font-mono bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                  {buildInfo.vercelUrl}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuildInfo;
