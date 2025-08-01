import Link from 'next/link';
import React from 'react';
import { MailIcon, BookIcon, GithubIcon, AlertTriangle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <BookIcon className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Budget Sidekick</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Track detailed transactions and manage finances across multiple revenue streams
              and entities with powerful account hierarchies.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/budgetsidekick" aria-label="X" className="text-gray-400 hover:text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://github.com/budget-sidekick" aria-label="GitHub" className="text-gray-400 hover:text-gray-700">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/education" className="text-gray-600 hover:text-blue-600">
                  Education Center
                </Link>
              </li>
              <li>
                <Link href="/education/50-30-20-budget" className="text-gray-600 hover:text-blue-600">
                  50/30/20 Budget Guide
                </Link>
              </li>
              <li>
                <Link href="/education/sec-filing-timelines" className="text-gray-600 hover:text-blue-600">
                  SEC Filing Timelines
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-gray-900 font-medium mb-2">Need help?</h4>
              <p className="text-gray-600 text-sm mb-3">
                Our team is here to answer your questions.
              </p>
              <a
                href="mailto:support@primordial-software.com"
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                <MailIcon className="w-4 h-4 mr-2" />
                <span>Contact Support</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mb-8 border-t border-gray-200 pt-6">
          <div className="flex items-start gap-2 text-xs text-gray-500 max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-500 mt-0.5" />
            <p>
              Budget Sidekick provides high-level ledgers and financial reporting tools for informational purposes only. 
              We are a carrier of information, not a bank, accounting system, or tax preparation service. All content represents factual information to the best of our knowledge.
              See our <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> for details.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Primordial Software. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 