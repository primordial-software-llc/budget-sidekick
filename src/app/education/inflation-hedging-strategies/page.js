import React from 'react';
import Link from 'next/link';
import { TrendingUp, AlertTriangle, ArrowRight, LineChart, DollarSign, ShoppingBag, BarChart, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function InflationHedgingStrategies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Inflation Hedging Strategies' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Inflation Hedging Strategies</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Protecting Your Purchasing Power in Rising Price Environments</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Inflation erodes the value of money over time, making it essential to position your investments and financial strategy 
              to maintain and grow your purchasing power even as prices rise. This guide explores practical approaches to protect 
              your wealth against inflation's effects.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Even modest inflation of 2-3% per year can significantly reduce your purchasing power over time. At 3% annual inflation, 
                the buying power of your money is cut in half in just 24 years. Without a proactive approach to preserving wealth, 
                inflation can severely impact your standard of living, especially in retirement when income may be fixed.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Inflation Hedging Assets</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-blue-700" />
                    Traditional Inflation Hedges
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Treasury Inflation-Protected Securities (TIPS)</h5>
                      <p className="text-sm text-gray-700">
                        Government bonds that adjust principal based on changes in the Consumer Price Index, providing direct inflation protection.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">I Bonds</h5>
                      <p className="text-sm text-gray-700">
                        Savings bonds that earn a fixed rate plus an inflation rate, updated semi-annually based on CPI changes.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Real Estate</h5>
                      <p className="text-sm text-gray-700">
                        Property values and rental income often rise with inflation, providing both appreciation and income that can outpace inflation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart className="w-5 h-5 mr-2 text-green-700" />
                    Alternative Inflation Hedges
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Commodity-Related Investments</h5>
                      <p className="text-sm text-gray-700">
                        Investments in commodities or commodity producers can act as inflation hedges as raw material prices typically rise with inflation.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Value Stocks</h5>
                      <p className="text-sm text-gray-700">
                        Companies with strong current cash flows and pricing power can often pass inflation costs to customers.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Floating Rate Debt</h5>
                      <p className="text-sm text-gray-700">
                        Loans or bonds with interest rates that adjust periodically based on a reference rate, helping returns keep pace with rate increases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Strategic Approaches</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-indigo-700" />
                  Defensive Strategies
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Asset Allocation</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Increase allocation to inflation-resistant assets</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Reduce exposure to long-duration fixed income</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Consider international diversification</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Income Planning</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Seek income sources with inflation adjustments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Develop multiple income streams</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Consider annuities with cost-of-living adjustments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Implementation Framework</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-amber-700" />
                  Action Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Assess Inflation Risk</h5>
                    <p className="text-sm text-gray-700">
                      Review your portfolio to understand how vulnerable it is to inflation. Consider time horizons and income needs.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Gradual Adjustments</h5>
                    <p className="text-sm text-gray-700">
                      Make incremental changes to your portfolio rather than dramatic shifts. Inflation hedging should be part of a broader diversification strategy.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Monitor Inflation Indicators</h5>
                    <p className="text-sm text-gray-700">
                      Keep track of key inflation measures like CPI, PPI, and inflation expectations from bond markets.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Regular Rebalancing</h5>
                    <p className="text-sm text-gray-700">
                      Review your inflation hedging strategy as economic conditions and personal circumstances change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of June 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
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

export default InflationHedgingStrategies; 