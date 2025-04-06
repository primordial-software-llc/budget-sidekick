import React from 'react';
import Link from 'next/link';
import { TrendingUp, AlertTriangle, BarChart, DollarSign, Clock, ArrowRight, LineChart, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function StockMarketFundamentals() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Stock Market Fundamentals' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Stock Market Fundamentals</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding How Markets Work</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              The stock market can seem intimidating, but understanding its basic mechanics and terminology 
              can help you make more informed investment decisions. This guide covers the essentials of 
              stock markets, different types of securities, and key factors that drive market movements.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Stock market investments are one of the most accessible ways to build long-term wealth and beat inflation. 
                Even if you invest through retirement accounts or index funds, understanding market basics helps you 
                stay calm during volatility and make better long-term decisions.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Stock Market Basics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart className="w-5 h-5 mr-2 text-blue-700" />
                    What Is a Stock Market?
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Stock Exchanges</h5>
                      <p className="text-sm text-gray-700">
                        Organized marketplaces where stocks are bought and sold, such as the New York Stock Exchange (NYSE) 
                        and Nasdaq. These exchanges provide infrastructure for trading and establish rules to ensure fair transactions.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Market Participants</h5>
                      <p className="text-sm text-gray-700">
                        Individual investors, institutional investors (pension funds, mutual funds, etc.), market makers, 
                        and algorithmic traders all interact in the market with different strategies and timeframes.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Retail investors
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Institutional investors
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Market makers
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Market Indexes</h5>
                      <p className="text-sm text-gray-700">
                        Measures of market segments like the S&P 500 (500 large U.S. companies), 
                        Dow Jones Industrial Average (30 large U.S. stocks), and Nasdaq Composite (tech-heavy).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-purple-700" />
                    Types of Securities
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Common Stocks</h5>
                      <p className="text-sm text-gray-700">
                        Represent ownership in a company with potential for growth through price appreciation and dividends. 
                        Stockholders typically have voting rights but are last in line for company assets if bankruptcy occurs.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Preferred Stocks</h5>
                      <p className="text-sm text-gray-700">
                        Hybrid securities with characteristics of both stocks and bonds. They typically pay fixed dividends 
                        and have priority over common stock for dividend payments and asset claims.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">ETFs and Mutual Funds</h5>
                      <p className="text-sm text-gray-700">
                        Baskets of securities that allow investors to buy many stocks or bonds in a single transaction. 
                        ETFs trade throughout the day like stocks while mutual funds trade once daily at closing price.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Instant diversification
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Lower cost than individual stocks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">How the Market Works</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-teal-700" />
                  Market Mechanics
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <BarChart className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Supply and Demand</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Stock prices are determined by supply and demand. When more people want to buy a stock than sell it, 
                          the price rises. When more want to sell than buy, the price falls.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Bid price (buyers willing to pay)
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Ask price (sellers willing to accept)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Clock className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Trading Hours</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Major U.S. stock exchanges operate Monday through Friday, 9:30 a.m. to 4:00 p.m. Eastern Time. 
                          Pre-market and after-hours sessions exist but with lower liquidity and wider spreads.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Regular market hours
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Extended hours trading
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <LineChart className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Order Types</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Different ways to execute trades, including market orders (immediate execution at current price), 
                          limit orders (execution only at specified price or better), and stop orders (trigger at threshold price).
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Market orders
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Limit orders
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Stop orders
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Market-Moving Factors</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-amber-700" />
                    Company-Specific Factors
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Earnings Reports</h5>
                      <p className="text-sm text-gray-700">
                        Quarterly financial results that show a company's revenue, expenses, and profit. 
                        Stock prices often react strongly to whether a company beats, meets, or misses earnings expectations.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Corporate Actions</h5>
                      <p className="text-sm text-gray-700">
                        Events like mergers, acquisitions, stock splits, dividend announcements, 
                        and share buybacks that can significantly impact a company's stock price.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Management Changes</h5>
                      <p className="text-sm text-gray-700">
                        New CEOs or other key executives can change company direction and investor sentiment,
                        particularly if they have strong track records or different strategic visions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-indigo-700" />
                    Macroeconomic Factors
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Federal Reserve Policy</h5>
                      <p className="text-sm text-gray-700">
                        Interest rate decisions and monetary policy from the Federal Reserve significantly impact 
                        the cost of borrowing, corporate profits, and relative attractiveness of stocks versus bonds.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Economic Data</h5>
                      <p className="text-sm text-gray-700">
                        Reports on GDP growth, unemployment, inflation, retail sales, 
                        and housing starts provide insights into economic health and future corporate profits.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Global Events</h5>
                      <p className="text-sm text-gray-700">
                        Geopolitical tensions, natural disasters, pandemics, and major policy changes 
                        can create market uncertainty and volatility across global markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started with Investing</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-700" />
                  First Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Before You Invest:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Pay off high-interest debt</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Build an emergency fund (3-6 months' expenses)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Determine your investment goals and time horizon</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Understand your risk tolerance</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Low-Effort Starting Points:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Contribute to employer-sponsored retirement plans</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Invest in broad-market index funds or ETFs</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Consider target-date funds for automatic rebalancing</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700">Set up regular automatic investments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="stock-market-fundamentals"
              message="This content is educational in nature and updated as of {{year}}. All investing involves risk, including the possible loss of principal. Market conditions can change rapidly, and past performance is not indicative of future results. This information is not intended as investment advice. Please consult with a qualified financial professional before making investment decisions."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default StockMarketFundamentals; 