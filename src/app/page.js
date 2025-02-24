import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import {
  BookIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from 'lucide-react';

function SimpleLedgerDemo() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-gray-900 font-semibold text-base text-center mb-3">Payroll</h3>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Income:Salary:Gross</span>
            <span className="text-green-600 font-medium">+$35,000.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Expenses:Tax:Federal</span>
            <span className="text-red-600 font-medium">-$8,750.00</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-green-600 font-medium">$26,250.00</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-gray-900 font-semibold text-base text-center mb-3">S-Corp Income</h3>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Income:Consulting</span>
            <span className="text-green-600 font-medium">+$18,000.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Expenses:Software</span>
            <span className="text-red-600 font-medium">-$20,500.00</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-red-600 font-medium">-$2,500.00</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-gray-900 font-semibold text-base text-center mb-3">Budget</h3>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Income:Freelance</span>
            <span className="text-green-600 font-medium">+$6,500.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Expenses:Food:Dining</span>
            <span className="text-red-600 font-medium">-$800.00</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-green-600 font-medium">$5,700.00</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-gray-900 font-semibold text-base text-center mb-3">Balance Sheet</h3>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Assets:Investments</span>
            <span className="text-green-600 font-medium">+$50,000.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Expenses:Interest</span>
            <span className="text-red-600 font-medium">-$1,250.00</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-green-600 font-medium">$48,750.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Gradient Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-800 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Simple Ledgers for Business & Personal Finance
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Track income and expenses across multiple revenue streams and entities - from your main business to side ventures - with powerful account hierarchies.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Login Button */}
        <div className="flex justify-end -mt-8">
          <Link 
            href="/dashboard" 
            className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Login to Dashboard →
          </Link>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BookIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Nested Accounts</h3>
            </div>
            <p className="text-gray-600">
              Use intuitive colon-separated hierarchies like Expenses:Food:Groceries or Income:Salary:Gross for powerful organization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Multiple Entities</h3>
            </div>
            <p className="text-gray-600">
              Maintain separate ledgers for different business entities and personal finances, each with their own account structure.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <ArrowRightIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Flexible Categories</h3>
            </div>
            <p className="text-gray-600">
              Tag transactions with financial institutions, categories, and other attributes to build detailed reports.
            </p>
          </div>
        </div>

        {/* Visual Demo */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Organize Your Financial World</h2>
          <SimpleLedgerDemo />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Create your first ledger with powerful account hierarchies today.
          </p>
          <Link 
            href="/dashboard"
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Create Your Ledger →
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;