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
import Footer from '@/components/Footer';
import educationContent from '@/data/education-content.json';
import { iconMap } from '@/utils/icons';

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

function Home() {
  return (
    <>
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
              {['one-year-homebuying-guide', 'mortgage-type-comparison-tool', 'sba-loans-for-first-time-business-owners']
                .map(id => educationContent.articles.find(article => article.id === id))
                .filter(Boolean)
                .map((article) => {
                  const IconComponent = iconMap[article.icon];
                  return (
                    <Link 
                      key={article.id}
                      href={`/education/${article.id}`} 
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {IconComponent && <IconComponent className="w-5 h-5 text-blue-600" />}
                        <h3 className="text-xl font-bold text-blue-700">{article.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {article.description}
                      </p>
                      <div className="text-blue-600 font-medium">Read Article →</div>
                    </Link>
                  );
                })}
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
      <Footer />
    </>
  );
}

export default Home;