import React from 'react';
import Link from 'next/link';
import { PieChart, AlertTriangle, LineChart, Snowflake, Mountain, ArrowRight, Calculator, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function DebtSnowballVsAvalanche() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Debt Snowball vs. Avalanche' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <PieChart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Debt Snowball vs. Avalanche</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Choosing the Right Debt Repayment Strategy</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              When it comes to paying off debt, two popular strategies often come up: the debt snowball and debt avalanche methods. 
              Both approaches can be effective, but they work differently and may be better suited to different financial situations and personalities.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Choosing the right debt repayment strategy can significantly impact how quickly you become debt-free and how much you pay in interest. 
                The best method depends on your personality, financial situation, and what motivates you to stay on track.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Comparing the Two Methods</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Snowflake className="w-5 h-5 mr-2 text-blue-700" />
                    Debt Snowball Method
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Focuses on paying off debts from smallest to largest balance, providing quick wins and psychological motivation.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">How it works:</span> Pay minimums on all debts, put extra money toward the smallest debt, then roll payments to the next smallest.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Advantages</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                        Quick wins provide motivation
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                        Simplifies debt management
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                        Builds momentum and confidence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Mountain className="w-5 h-5 mr-2 text-purple-700" />
                    Debt Avalanche Method
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">
                    Focuses on paying off debts from highest to lowest interest rate, saving the most money on interest payments.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">How it works:</span> Pay minimums on all debts, put extra money toward the highest interest debt, then move to the next highest.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Advantages</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        Saves the most money on interest
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        Pays off debt faster mathematically
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        More efficient use of extra payments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Choosing the Right Method</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-indigo-700" />
                  Decision Factors
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Choose Snowball If:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You need quick wins to stay motivated</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You have many small debts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You're easily discouraged</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Choose Avalanche If:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You're focused on saving money</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You have high-interest debts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You're disciplined with money</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-amber-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: List Your Debts</h5>
                    <p className="text-sm text-gray-700">
                      Create a complete list of all your debts, including balances, interest rates, and minimum payments.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Choose Your Method</h5>
                    <p className="text-sm text-gray-700">
                      Select the method that best aligns with your personality and financial situation.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Create a Budget</h5>
                    <p className="text-sm text-gray-700">
                      Find extra money in your budget to put toward debt payments.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Track Progress</h5>
                    <p className="text-sm text-gray-700">
                      Monitor your progress and celebrate milestones along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="debt-snowball-vs-avalanche"
              message="This content is educational in nature and updated as of {{year}}. The effectiveness of any debt repayment strategy depends on individual circumstances, discipline, and financial situation. Consider consulting with a financial professional for personalized advice."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DebtSnowballVsAvalanche; 