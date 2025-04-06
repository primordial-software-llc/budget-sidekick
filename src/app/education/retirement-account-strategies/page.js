import React from 'react';
import Link from 'next/link';
import { PieChart, AlertTriangle, BarChart3, ArrowRight, PiggyBank, DollarSign, TrendingUp, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function RetirementAccountStrategies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Retirement Account Strategies' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <PieChart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Retirement Account Strategies</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Optimizing Your Investment Allocation Across Account Types</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              When it comes to retirement investing, the type of account you use can be just as important as what you invest in. 
              This guide explores how to strategically allocate your investments across different account types for maximum long-term advantage.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                The way you allocate investments across different account types can significantly impact your after-tax returns. 
                By strategically placing high-growth assets in Roth accounts and more stable assets in traditional accounts, 
                you can maximize your long-term wealth accumulation.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">The Four-Step Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <PiggyBank className="w-5 h-5 mr-2 text-purple-700" />
                    Step 1: Employer Match
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Always contribute enough to your 401(k) to get the full company match. This is free money and should be your first priority.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Example:</span> If your employer matches 5% of your $100,000 salary, contribute at least $5,000 to get the full $5,000 match.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-blue-700" />
                    Step 2: Roth IRA
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    After securing your employer match, contribute to your Roth IRA. The 2024 limit is $7,000.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Strategy:</span> The Roth IRA should be invested 100% in stocks for maximum tax-free growth potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-green-700" />
                    Step 3: Return to 401(k)
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    After maxing out your Roth IRA, return to your 401(k) to contribute up to the annual limit ($23,500 in 2024).
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Note:</span> The allocation in your 401(k) will depend on whether you're maxing out all accounts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-amber-700" />
                    Step 4: Optimize Allocation
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Your 401(k) allocation depends on your situation:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">When maxing out everything:</span> Your 401(k) should be allocated 57.27% stocks and 42.73% bonds.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">When not maxing out:</span> Determining the exact percentage requires complex calculations based on your specific situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Example Scenario</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-indigo-700" />
                  Sample Portfolio Allocation
                </h4>
              </div>
              <div className="p-5">
                <p className="text-gray-700 mb-4">
                  For a 30-year-old making $100,000 with a 5% employer match:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Contributions</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">401(k) contribution</span>
                        <span className="text-indigo-600 font-medium">$23,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Roth IRA contribution</span>
                        <span className="text-indigo-600 font-medium">$7,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Employer match</span>
                        <span className="text-indigo-600 font-medium">$5,000</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-gray-900">Total contribution</span>
                        <span className="text-indigo-700">$35,500</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Optimal Allocation</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Roth IRA (stocks)</span>
                        <span className="text-indigo-600 font-medium">$7,000 (100%)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">401(k) stocks</span>
                        <span className="text-indigo-600 font-medium">$17,850</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">401(k) bonds</span>
                        <span className="text-indigo-600 font-medium">$5,650</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Employer match</span>
                        <span className="text-indigo-600 font-medium">$5,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of March 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
                  <Link href="/terms" className="text-blue-600 hover:underline"> Terms of Service</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RetirementAccountStrategies; 