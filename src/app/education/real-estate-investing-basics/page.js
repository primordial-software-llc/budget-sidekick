import React from 'react';
import Link from 'next/link';
import { Home, AlertTriangle, Building2, ArrowRight, Calculator, TrendingUp, LineChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function RealEstateInvestingBasics() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Real Estate Investing Basics' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Home className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Real Estate Investing Basics</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Building Wealth Through Property</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Real estate investing offers multiple ways to build wealth, from rental properties to REITs. 
              Understanding the fundamentals can help you make informed decisions about this important asset class.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Real estate can provide both income and appreciation potential, while offering diversification from traditional stock and bond investments.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Investment Options</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-blue-700" />
                    Direct Ownership
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Rental Properties</h5>
                      <p className="text-sm text-gray-700">
                        Generate income through rent while potentially benefiting from property appreciation.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Fix and Flip</h5>
                      <p className="text-sm text-gray-700">
                        Purchase properties, renovate them, and sell for a profit.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Vacation Rentals</h5>
                      <p className="text-sm text-gray-700">
                        Short-term rental properties in desirable locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-purple-700" />
                    Indirect Investment
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">REITs</h5>
                      <p className="text-sm text-gray-700">
                        Real Estate Investment Trusts offer exposure to real estate without direct ownership.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Real Estate Funds</h5>
                      <p className="text-sm text-gray-700">
                        Pooled investment vehicles focused on real estate properties.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Crowdfunding</h5>
                      <p className="text-sm text-gray-700">
                        Invest in real estate projects through online platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Key Considerations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-indigo-700" />
                  Investment Analysis
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Financial Metrics</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Cap rate and cash-on-cash return</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Net operating income</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Debt service coverage ratio</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Risk Factors</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Market conditions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Property management</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Liquidity constraints</span>
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
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Define Goals</h5>
                    <p className="text-sm text-gray-700">
                      Determine your investment objectives, time horizon, and risk tolerance.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Research Markets</h5>
                    <p className="text-sm text-gray-700">
                      Study local real estate markets and identify promising opportunities.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Analyze Properties</h5>
                    <p className="text-sm text-gray-700">
                      Evaluate potential investments using key financial metrics.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Build Team</h5>
                    <p className="text-sm text-gray-700">
                      Assemble professionals including real estate agents, property managers, and contractors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="real-estate-investing-basics"
              message="This content is educational in nature and updated as of {{year}}. Real estate investing involves risk, including potential loss of principal. Market conditions vary by location and property type. Past performance is not indicative of future results. Consider consulting with real estate and financial professionals before investing."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RealEstateInvestingBasics; 