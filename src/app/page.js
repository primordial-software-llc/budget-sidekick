import Link from 'next/link';
import React from 'react';
import {
  BookIcon,
  LayersIcon,
  BarChart3Icon,
  BookOpenIcon,
  PiggyBank,
} from 'lucide-react';
import Reviews from '@/components/Reviews';
import CallToAction from '@/components/CallToAction';

function SimpleLedgerDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-gray-900 font-semibold text-base text-center mb-3">Pay Stub</h3>
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
            <span className="text-gray-700 truncate pr-2">Assets:Property:Land</span>
            <span className="text-green-600 font-medium tabular-nums">+$175,000.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700 truncate pr-2">Assets:Property:Building</span>
            <span className="text-green-600 font-medium tabular-nums">+$125,000.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700 truncate pr-2">Liabilities:Mortgage</span>
            <span className="text-red-600 font-medium tabular-nums">-$250,000.00</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net Worth:</span>
            <span className="text-green-600 font-medium tabular-nums">$50,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransactionDemo() {
  return (
    <div className="">
      <div className="mb-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex flex-col space-y-3 mb-4">
            <div className="flex items-center">
              <div className="w-40 font-medium text-gray-700">Transaction List:</div>
              <div className="text-gray-900">Cost of Living:Groceries</div>
            </div>
            <div className="flex items-center">
              <div className="w-40 font-medium text-gray-700">List Date:</div>
              <div className="text-gray-900">1st of the month</div>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Description</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-700">Amount</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Override Account</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">Bread</td>
                  <td className="px-4 py-2 text-sm text-red-600 text-right">-$5.00</td>
                  <td className="px-4 py-2 text-sm text-gray-500"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">Milk</td>
                  <td className="px-4 py-2 text-sm text-red-600 text-right">-$5.00</td>
                  <td className="px-4 py-2 text-sm text-gray-500"></td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-4 py-2 text-sm text-gray-900">Candy</td>
                  <td className="px-4 py-2 text-sm text-red-600 text-right">-$15.00</td>
                  <td className="px-4 py-2 text-sm text-yellow-700">Discretionary:Personal</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="text-sm font-medium text-blue-800 mb-2">Posting Summary</h4>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Cost of Living:Groceries</span>
                <span className="text-red-600 font-medium">-$10.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Discretionary:Personal</span>
                <span className="text-red-600 font-medium">-$15.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-6">
        <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl max-w-lg shadow-sm">
          <div className="flex items-center justify-center mb-3">
            <LayersIcon className="w-6 h-6 text-blue-600 mr-2" />
            <h4 className="text-lg font-semibold text-blue-800">Transaction Lists & Posting</h4>
          </div>
          <p className="text-gray-700 mb-3">Create transaction lists for specific categories, then post them to your accounts as line items</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap mb-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Category-specific lists</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Post as account line items</span>
            </div>
          </div>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm transition-colors text-sm"
          >
            <span>Try it now</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main className="min-h-screen">
      {/* Gradient Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-800 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Simple Ledgers for Business & Personal Finance
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Track detailed transactions and manage finances across multiple revenue streams and entities with powerful account hierarchies.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Login Button */}
        <div className="absolute right-4 top-4 z-10">
          <Link 
            href="/dashboard" 
            className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Login to Dashboard →
          </Link>
        </div>

        {/* Main Features */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <BookIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Nested Accounts</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Use intuitive colon-separated hierarchies like Expenses:Food:Groceries or Income:Salary:Gross for powerful organization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <LayersIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Detailed Transactions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Record individual transactions with dates and descriptions, then post them to your ledger accounts when ready.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <BarChart3Icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Flexible Reporting</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Generate custom reports across your entities and account hierarchies to gain insights into your financial health.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Complete Financial Reporting & Month-End Clarity</h2>
            <SimpleLedgerDemo />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Transaction Tracking and Ledger Posting</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Record individual transactions with dates and descriptions, then post to your ledger accounts when you're ready to update your books.
          </p>
          <TransactionDemo />
        </div>

        {/* Financial Education Section */}
        <div className="max-w-6xl mx-auto px-6 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 py-12 rounded-xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <BookOpenIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Financial Education</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strengthen your financial knowledge with our growing library of educational resources
              designed to help you make better financial decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link href="/education/sec-filing-timelines" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-3">SEC Filing Timelines</h3>
              <p className="text-gray-600 mb-4">
                Understanding when companies report their official numbers is essential for making informed investment decisions.
              </p>
              <div className="text-blue-600 font-medium">Read Article →</div>
            </Link>
            
            <Link href="/education/50-30-20-budget" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-3">50/30/20 Budget Rule</h3>
              <p className="text-gray-600 mb-4">
                Divides after-tax income into needs (50%), wants (30%), and savings/debt (20%) for a balanced financial life.
              </p>
              <div className="text-blue-600 font-medium">Read Article →</div>
            </Link>
            
            <Link href="/education/retirement-account-limits" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Retirement Account Limits</h3>
              <p className="text-gray-600 mb-4">
                Compare Roth vs. 401(k) account limits, tax advantages, and why account ownership matters for your retirement.
              </p>
              <div className="text-blue-600 font-medium">Read Article →</div>
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              href="/education" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md transition-colors"
            >
              <BookOpenIcon className="w-5 h-5 mr-2" />
              <span>Explore All Educational Resources</span>
            </Link>
          </div>
        </div>

        {/* Reviews Section */}
        <Reviews />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </main>
  );
}

export default Home;