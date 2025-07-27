import Link from 'next/link';
import React from 'react';
import { HomeIcon, BookOpenIcon } from 'lucide-react';

export default function Header({ transparentBg = false }) {
  return (
    <header className={`relative z-50 ${transparentBg ? '' : 'bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100'}`}>
      {/* Background elements for standalone header */}
      {!transparentBg && (
        <>
          {/* Organic flowing shapes */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          {/* Flowing guide lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#0284c7" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path d="M0,30 Q25,20 50,35 T100,40" stroke="url(#flowGrad)" strokeWidth="0.5" fill="none"/>
              <path d="M0,60 Q30,50 60,65 T100,70" stroke="url(#flowGrad)" strokeWidth="0.3" fill="none"/>
              <path d="M0,85 Q40,75 80,90 T100,85" stroke="url(#flowGrad)" strokeWidth="0.4" fill="none"/>
            </svg>
          </div>
          {/* Subtle connection dots */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-1/4 left-2/3 w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full"></div>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" className="h-10">
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
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            <span>Home</span>
          </Link>
          
          <Link 
            href="/education" 
            className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          >
            <BookOpenIcon className="w-5 h-5 mr-2" />
            <span>Education</span>
          </Link>
          
          <Link 
            href="/dashboard" 
            className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Get Started →
          </Link>
        </nav>
      </div>
    </header>
  );
} 