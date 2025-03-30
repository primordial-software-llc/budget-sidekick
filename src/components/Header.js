import Link from 'next/link';
import React from 'react';
import { BookOpenIcon, HomeIcon, BookIcon } from 'lucide-react';

export default function Header() {
  return (
    <header>
      {/* Gradient Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-800 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <BookIcon className="w-7 h-7 mr-2" />
              <span className="text-xl font-bold">Budget Sidekick</span>
            </Link>
            
            <nav className="flex space-x-6">
              <Link 
                href="/" 
                className="flex items-center text-white hover:text-blue-100 transition-colors"
              >
                <HomeIcon className="w-5 h-5 mr-1" />
                <span>Home</span>
              </Link>
              
              <Link 
                href="/education" 
                className="flex items-center text-white hover:text-blue-100 transition-colors"
              >
                <BookOpenIcon className="w-5 h-5 mr-1" />
                <span>Education</span>
              </Link>
              
              <Link 
                href="/dashboard" 
                className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-50 transition-colors shadow-md"
              >
                Dashboard →
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 