import React from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

function EducationAboutSection() {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Education Center</h2>
      <p className="text-gray-600 mb-6">
        At Budget Sidekick, we believe that financial education is essential for making sound financial decisions. 
        Our educational resources are designed to help you understand financial concepts in a clear, accessible way.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Coming?</h3>
      <p className="text-gray-600 mb-4">
        We're constantly developing new content to help you navigate the complex world of personal and business finance.
        Here are some topics we'll be covering in the future:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Financial Statement Analysis</h3>
          <p className="text-gray-600 text-sm">Learning how to extract meaningful insights from balance sheets, income statements, and cash flow reports.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Business Entity Structures</h3>
          <p className="text-gray-600 text-sm">Comparing different business structures and their financial implications.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Investment Basics</h3>
          <p className="text-gray-600 text-sm">Understanding the fundamentals of investing and building a diversified portfolio.</p>
        </div>
      </div>
      
      <div className="mt-8 py-4 px-5 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-gray-700 text-sm">
            All content is educational in nature and updated as of March 2025. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
            <Link href="/terms" className="text-blue-600 hover:underline"> Terms of Service</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationAboutSection; 