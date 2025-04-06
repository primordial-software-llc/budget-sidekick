import React from 'react';
import Link from 'next/link';
import { BarChart2, AlertTriangle, ArrowRight, DollarSign, TrendingUp, Clock, Percent, Shuffle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function ETFvsMutualFunds() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'ETFs vs. Mutual Funds' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BarChart2 className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">ETFs vs. Mutual Funds</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding the Key Differences</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Both Exchange-Traded Funds (ETFs) and mutual funds offer investors a way to gain exposure to a diversified 
              portfolio of securities. However, they differ in important ways that can affect costs, taxes, and how they're traded.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding the Basics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart2 className="w-5 h-5 mr-2 text-blue-700" />
                    Exchange-Traded Funds (ETFs)
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Definition</h5>
                      <p className="text-sm text-gray-700">
                        Investment funds that trade on exchanges like individual stocks. ETFs typically track an index, sector, 
                        commodity, or other asset, but can be bought and sold throughout the trading day like a regular stock.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Characteristics</h5>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Trading Flexibility:</strong> Trade throughout the day at market prices</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Lower Expense Ratios:</strong> Generally have lower fees than mutual funds</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Tax Efficiency:</strong> Often more tax-efficient due to in-kind creation/redemption</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Transparency:</strong> Most disclose holdings daily</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Common Types</h5>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Index ETFs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Sector ETFs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Bond ETFs
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Commodity ETFs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-purple-700" />
                    Mutual Funds
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Definition</h5>
                      <p className="text-sm text-gray-700">
                        Investment vehicles made up of a pool of money collected from many investors to invest in securities like 
                        stocks, bonds, and other assets. Mutual funds are priced once per day after market close.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Characteristics</h5>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>End-of-Day Pricing:</strong> Trade only once daily at NAV price</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Active Management:</strong> Many are actively managed with higher fees</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Minimum Investments:</strong> May require minimum initial investments</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Automatic Investments:</strong> Easy to set up automatic contributions</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Common Types</h5>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Index Funds
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Actively Managed Funds
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Target-Date Funds
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Bond Funds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Key Differences</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Shuffle className="w-5 h-5 mr-2 text-teal-700" />
                  Comparing ETFs and Mutual Funds
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Clock className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Trading and Liquidity</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>ETFs:</strong> Trade like stocks throughout the trading day at market prices that may fluctuate from their underlying value. 
                          Can be bought or sold instantly during market hours.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Mutual Funds:</strong> Trade only once per day after markets close at the net asset value (NAV) price. 
                          Orders placed during the day execute at the end-of-day price.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Percent className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Costs and Fees</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>ETFs:</strong> Typically have lower expense ratios than comparable mutual funds. While you pay brokerage 
                          commissions to trade ETFs, many brokers now offer commission-free ETF trading.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Mutual Funds:</strong> May have higher expense ratios, particularly for actively managed funds. 
                          Some may charge load fees (sales charges) and redemption fees. Look for no-load funds to avoid these charges.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Tax Efficiency</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>ETFs:</strong> Generally more tax-efficient because of their structure. The "in-kind creation/redemption" 
                          process minimizes capital gains distributions to shareholders.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Mutual Funds:</strong> May generate more taxable capital gains distributions when portfolio managers sell 
                          securities to meet redemptions or rebalance the portfolio.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <TrendingUp className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Investment Minimums</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>ETFs:</strong> Can purchase as little as one share (or even fractional shares with some brokers), 
                          making them accessible to investors with limited capital.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Mutual Funds:</strong> Often require minimum initial investments ranging from $500 to $3,000 or more, 
                          though some brokers or retirement plans may waive these minimums.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Which is Right for You?</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-indigo-700" />
                  Considerations for Your Investment Strategy
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">ETFs Might Be Better If You:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Want more control over when you buy and sell</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Are particularly concerned about minimizing taxes</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Have a smaller amount to invest initially</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Are focused on minimizing investment expenses</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Want to use more advanced trading strategies (options, etc.)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Mutual Funds Might Be Better If You:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Prefer automated investing with regular contributions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Want access to certain actively managed strategies</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Are investing in a 401(k) or similar plan with limited options</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Want to invest specific dollar amounts rather than shares</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Don't want to worry about bid-ask spreads or market timing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Final Thoughts</h3>
              <p className="text-gray-700 mb-4">
                Both ETFs and mutual funds can be excellent investment vehicles, and many investors use both in their portfolios. 
                Your choice should align with your investment goals, tax situation, and personal preferences regarding trading 
                and costs. Remember that the specific fund's strategy and holdings are often more important than whether it's 
                structured as an ETF or mutual fund.
              </p>
              <p className="text-gray-700">
                For many long-term investors, low-cost index funds (whether ETF or mutual fund) remain one of the most effective 
                ways to build wealth over time. Focus on keeping your overall investment costs low and maintaining a diversified 
                portfolio aligned with your risk tolerance and time horizon.
              </p>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of June 2024. Investment products involve risk, and 
                  past performance is not indicative of future results. For personalized investment advice, please consult with a 
                  qualified financial professional.
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

export default ETFvsMutualFunds; 