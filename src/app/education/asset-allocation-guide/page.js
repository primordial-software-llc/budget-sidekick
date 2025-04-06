import React from 'react';
import Link from 'next/link';
import { PieChart, AlertTriangle, ArrowRight, Clock, Target, Percent, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function AssetAllocationGuide() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Asset Allocation Guide' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <PieChart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Asset Allocation Guide</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Building a Portfolio for Your Financial Goals</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Asset allocation is the process of dividing your investments across different asset classes to optimize returns 
              while managing risk. Your allocation should reflect your goals, time horizon, and risk tolerance.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Studies suggest that asset allocation explains more than 90% of a portfolio's long-term return 
                variation, making it one of the most important investment decisions you'll make.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Major Asset Classes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart className="w-5 h-5 mr-2 text-blue-700" />
                    Growth Assets
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Stocks/Equities</h5>
                      <p className="text-sm text-gray-700">
                        Ownership shares in companies, offering higher growth potential with higher volatility.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Real Estate</h5>
                      <p className="text-sm text-gray-700">
                        Property investments through REITs or direct ownership, providing both income and growth.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Commodities</h5>
                      <p className="text-sm text-gray-700">
                        Raw materials like gold, silver, or oil that can serve as inflation hedges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Percent className="w-5 h-5 mr-2 text-purple-700" />
                    Income Assets
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Bonds/Fixed Income</h5>
                      <p className="text-sm text-gray-700">
                        Loans to governments or corporations that pay regular interest, providing stability.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Cash and Equivalents</h5>
                      <p className="text-sm text-gray-700">
                        Highly liquid investments like money market funds, CDs, and Treasury bills.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Dividend Stocks</h5>
                      <p className="text-sm text-gray-700">
                        Stocks that pay regular dividends, blending income with potential for growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Allocation by Time Horizon</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-indigo-700" />
                  Timeframe Strategies
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Short-Term (0-3 years)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">60-80% Cash/Short-term bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">20-40% Conservative bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">0-10% Stocks</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2 italic">
                        Focus: Capital preservation and liquidity
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Medium-Term (3-10 years)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">30-50% Bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">40-60% Stocks</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">5-10% Cash</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2 italic">
                        Focus: Balanced growth and moderate risk
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Long-Term (10+ years)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">70-90% Stocks</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">10-30% Bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">0-5% Cash</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2 italic">
                        Focus: Maximum growth potential
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Common Allocation Models</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-amber-700" />
                  Portfolio Examples
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3">
                        <h5 className="font-semibold text-gray-900 mb-2">Conservative Portfolio</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Designed for those close to or in retirement, with lower risk tolerance, or short-term goals.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">20-30% Stocks</span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">50-60% Bonds</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">10-30% Cash</span>
                        </div>
                      </div>
                      <div className="md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-200 via-purple-300 to-green-200 flex items-center justify-center">
                          <PieChart className="w-10 h-10 text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3">
                        <h5 className="font-semibold text-gray-900 mb-2">Moderate Portfolio</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Balanced approach suitable for mid-term goals or investors with moderate risk tolerance.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">50-60% Stocks</span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">30-40% Bonds</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">5-10% Cash</span>
                        </div>
                      </div>
                      <div className="md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-300 via-purple-200 to-green-100 flex items-center justify-center">
                          <PieChart className="w-10 h-10 text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3">
                        <h5 className="font-semibold text-gray-900 mb-2">Aggressive Portfolio</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Growth-focused approach for long-term goals and investors comfortable with volatility.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">80-90% Stocks</span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">10-20% Bonds</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">0-5% Cash</span>
                        </div>
                      </div>
                      <div className="md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-100 to-green-50 flex items-center justify-center">
                          <PieChart className="w-10 h-10 text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-teal-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Assess Your Situation</h5>
                    <p className="text-sm text-gray-700">
                      Define your goals, time horizon, and risk tolerance to determine which allocation model fits best.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Create Your Asset Mix</h5>
                    <p className="text-sm text-gray-700">
                      Choose specific investments within each asset class, considering tax-efficiency and account types.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Implement Gradually</h5>
                    <p className="text-sm text-gray-700">
                      Consider dollar-cost averaging into your target allocation, especially for large portfolio changes.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Rebalance Periodically</h5>
                    <p className="text-sm text-gray-700">
                      Review your allocation annually or when it drifts 5% or more from targets, and adjust as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="asset-allocation-guide"
              message="This content is educational in nature and updated as of {{year}}. Asset allocation strategies should be personalized to your specific situation. Market conditions, investment offerings, and tax implications may change over time. This information is not intended as investment advice. Please consult with a qualified financial professional before making investment decisions."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AssetAllocationGuide; 