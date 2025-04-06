import React from 'react';
import Link from 'next/link';
import { Globe, AlertTriangle, ArrowRight, BarChart2, DollarSign, Shuffle, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function InternationalInvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'International Investing' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">International Investing</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Exploring the Benefits of Global Diversification</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Investing internationally can provide exposure to different economies, industries, and growth opportunities 
              that may not be available in your home market. This guide explores the benefits, risks, and strategies for 
              incorporating international investments into a diversified portfolio.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Benefits of International Investing</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-700" />
                  Advantages of Global Diversification
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <BarChart2 className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Diversification Benefits</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Different countries and regions often experience economic cycles that don't perfectly correlate with your home market. 
                          By investing globally, you can potentially reduce portfolio volatility while maintaining or enhancing returns.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <TrendingUp className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Expanded Opportunity Set</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The U.S. represents only about 60% of the global equity market capitalization. International markets provide access to:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Emerging economies with potentially higher growth rates</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Industries with limited presence in the U.S. market</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Companies with global leadership in specific sectors</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Currency Exposure</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Investing in foreign markets provides exposure to different currencies, which can:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Provide a hedge against domestic currency depreciation</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Add an additional source of return (or risk)</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Diversify purchasing power across different economies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Risks and Challenges</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-red-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                  Special Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Currency Risk</h5>
                    <p className="text-sm text-gray-700">
                      While currency exposure can be beneficial, it also introduces risk. Fluctuations in exchange rates can amplify 
                      or reduce your returns, sometimes significantly. This is a double-edged sword that can work for or against your 
                      investments independent of the underlying asset performance.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Political and Regulatory Risk</h5>
                    <p className="text-sm text-gray-700">
                      Different countries have varying levels of political stability, property rights protection, and regulatory frameworks. 
                      Changes in government policies, nationalization of industries, or restrictions on foreign investment can impact returns 
                      in ways that may be difficult to anticipate.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Market Structure Differences</h5>
                    <p className="text-sm text-gray-700">
                      International markets can vary significantly in terms of:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Liquidity and trading volumes</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Corporate governance standards</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Transparency and financial reporting requirements</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Market maturity and investor protections</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax Considerations</h5>
                    <p className="text-sm text-gray-700">
                      International investments can create tax complexities, including:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Foreign withholding taxes on dividends</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Potential double taxation issues</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Additional reporting requirements (FBAR, Form 8938, etc.)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Investment Approaches</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Shuffle className="w-5 h-5 mr-2 text-purple-700" />
                  Methods for Accessing International Markets
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">ETFs and Mutual Funds</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The simplest and most accessible approach for most investors. Options include:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Broad international funds:</strong> Provide exposure to developed markets outside your home country</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Emerging market funds:</strong> Focus on developing economies with higher growth potential and risk</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Regional funds:</strong> Target specific geographic areas (Europe, Asia, Latin America)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Single-country funds:</strong> Concentrate on one specific market</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">American Depositary Receipts (ADRs)</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Securities that represent shares in foreign companies but trade on U.S. exchanges in USD.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Advantages:</strong> Trade during U.S. market hours, settled in USD, meet U.S. disclosure requirements</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Considerations:</strong> Limited selection of companies, may have lower liquidity than local shares</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Direct Foreign Market Investing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Purchasing stocks directly on foreign exchanges through brokers that offer international trading.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Advantages:</strong> Access to full range of securities, potentially lower costs than ADRs</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Challenges:</strong> Currency conversion, different trading hours, higher fees, tax complexity</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Multinational Companies</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Investing in domestic companies with significant international operations.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Advantages:</strong> Simplified approach, familiar securities, reduced direct currency risk</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Limitations:</strong> Still correlated with domestic market, less pure exposure to foreign economies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Portfolio Allocation Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-green-700" />
                  How Much to Allocate Internationally
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Market-Weight Approach</h5>
                    <p className="text-sm text-gray-700">
                      Allocating international investments based on global market capitalization (currently approximately 40% international, 
                      60% U.S.). This approach provides exposure proportional to the actual global investment opportunity set.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Common Allocation Rules</h5>
                    <p className="text-sm text-gray-700">
                      Many financial advisors suggest allocating between 20-40% of an equity portfolio to international markets. 
                      The appropriate allocation depends on:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                        <span>Your risk tolerance and comfort with foreign market volatility</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                        <span>Time horizon and investment goals</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                        <span>Your exposure to international economies through your career or business</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Developed vs. Emerging Markets</h5>
                    <p className="text-sm text-gray-700">
                      Within your international allocation, consider the split between developed markets (Europe, Japan, Australia, etc.) 
                      and emerging markets (China, India, Brazil, etc.). A common approach is to allocate 75-80% to developed markets and 
                      20-25% to emerging markets, roughly reflecting global market weights.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Currency Hedging Decisions</h5>
                    <p className="text-sm text-gray-700">
                      Some international funds hedge currency risk, while others leave the currency exposure unhedged:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                        <span><strong>Hedged:</strong> Reduces volatility from currency fluctuations but eliminates potential currency gains</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                        <span><strong>Unhedged:</strong> Provides true currency diversification but can increase short-term volatility</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      Long-term investors often prefer unhedged exposure for greater diversification benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Investment Best Practices</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Stay diversified within international holdings.</strong> Avoid concentrating too much in a single country or region. 
                  Broad index funds can provide efficient exposure to hundreds or thousands of companies across multiple markets.
                </p>
                <p className="text-gray-700">
                  <strong>2. Consider costs carefully.</strong> International investing can involve higher expense ratios, trading costs, and 
                  foreign taxes. Look for low-cost index funds or ETFs to minimize these expenses.
                </p>
                <p className="text-gray-700">
                  <strong>3. Take a long-term perspective.</strong> International markets can experience extended periods of underperformance 
                  followed by strong recoveries. Maintain your allocation through market cycles rather than chasing performance.
                </p>
                <p className="text-gray-700">
                  <strong>4. Rebalance periodically.</strong> As different markets perform differently, your allocation will drift over time. 
                  Regular rebalancing (annually or when allocations drift significantly) helps maintain your target risk level.
                </p>
                <p className="text-gray-700">
                  <strong>5. Consider tax location.</strong> If investing in taxable accounts, be mindful of where you hold international investments. 
                  Foreign tax credits may partially offset withholding taxes in taxable accounts but not in tax-advantaged accounts.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of June 2024. International investing involves special risks 
                  that domestic investing typically does not entail. Always consult with a qualified financial advisor before making significant 
                  changes to your investment strategy.
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

export default InternationalInvesting; 