import React from 'react';
import Link from 'next/link';
import { TrendingDown, AlertTriangle, ArrowRight, BarChart2, Clock, Shield, BookOpen, LineChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function NavigatingBearMarkets() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Navigating Bear Markets' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Navigating Bear Markets</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Strategies for Managing Investments During Market Downturns</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Market downturns are an inevitable part of investing. Learning how to navigate these challenging periods 
              can help you maintain perspective, avoid costly mistakes, and potentially position your portfolio to emerge stronger.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding Bear Markets</h3>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-8">
              <p className="text-gray-700 mb-4">
                A bear market is typically defined as a prolonged period where investment prices fall 20% or more from recent highs. 
                These downturns can affect stocks, bonds, real estate, and other asset classes. While often challenging emotionally and 
                financially, bear markets are a normal and recurring part of market cycles.
              </p>
              <p className="text-gray-700">
                Bear markets can be triggered by various factors, including economic recessions, high inflation, rising interest rates, 
                geopolitical events, or simply overvalued assets returning to more sustainable levels. Understanding the cyclical nature 
                of markets can help provide perspective during these inevitable downturns.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Key Characteristics of Bear Markets</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart2 className="w-5 h-5 mr-2 text-purple-700" />
                    Market Dynamics
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Duration and Magnitude</h5>
                      <p className="text-sm text-gray-700">
                        Historically, bear markets have lasted anywhere from a few months to several years, with the average duration being 
                        about 9-10 months. The average decline has been around 30-35%, though individual bear markets can vary significantly.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Volatility Patterns</h5>
                      <p className="text-sm text-gray-700">
                        Bear markets often feature sharp volatility with dramatic daily or weekly swings. Some of the largest single-day 
                        rallies in market history have occurred during broader bear markets, creating deceptive "bull traps" for investors.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Sector Performance</h5>
                      <p className="text-sm text-gray-700">
                        Not all sectors decline equally during bear markets. Defensive sectors like utilities, consumer staples, and healthcare 
                        often outperform, while cyclical sectors like technology, consumer discretionary, and financials may experience 
                        larger declines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-indigo-700" />
                    Investor Psychology
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Fear and Panic</h5>
                      <p className="text-sm text-gray-700">
                        Bear markets often create intense fear and panic selling, as investors worry that markets will continue to decline 
                        indefinitely. Media coverage typically amplifies these concerns with alarming headlines and predictions.
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Emotional reactions often lead to poor decision-making</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Loss Aversion</h5>
                      <p className="text-sm text-gray-700">
                        The psychological pain of experiencing losses is typically about twice as powerful as the pleasure from equivalent gains. 
                        This asymmetry can lead investors to make decisions that feel right emotionally but harm long-term returns.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Herd Mentality</h5>
                      <p className="text-sm text-gray-700">
                        During sharp market declines, seeing others sell can trigger a powerful urge to follow suit. This collective behavior 
                        often exacerbates market declines beyond what fundamentals would justify.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Strategies for Navigating Bear Markets</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-700" />
                  Defensive Strategies
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <BookOpen className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Maintain Perspective</h5>
                        <p className="text-sm text-gray-700">
                          Remember that bear markets are normal and temporary. Despite numerous bear markets, the U.S. stock market has historically 
                          trended upward over the long term. Every bear market in history has eventually given way to a new bull market.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <BarChart2 className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Reassess Your Risk Tolerance</h5>
                        <p className="text-sm text-gray-700">
                          Bear markets provide a real-world test of your true risk tolerance. If you're experiencing significant anxiety or considering 
                          selling in panic, your asset allocation may not match your actual risk tolerance. Use this experience to recalibrate your 
                          long-term asset allocation strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <LineChart className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Diversification Review</h5>
                        <p className="text-sm text-gray-700">
                          Examine how different assets in your portfolio are performing. True diversification means that some assets should hold up better 
                          than others during market stress. If everything is moving down in unison, your portfolio may not be as diversified as you thought.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingDown className="w-5 h-5 mr-2 text-blue-700" />
                  Tactical Approaches
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Dollar-Cost Averaging</h5>
                    <p className="text-sm text-gray-700">
                      Continue making regular investments through market downturns. This strategy allows you to purchase more shares when prices 
                      are lower, potentially lowering your average cost basis. Many investors build wealth by consistently investing through 
                      multiple market cycles.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Rebalancing</h5>
                    <p className="text-sm text-gray-700">
                      Market declines often create opportunities to rebalance your portfolio back to target allocations. This disciplined approach 
                      enforces the practice of buying assets that have become relatively cheaper and trimming those that have held up better.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax-Loss Harvesting</h5>
                    <p className="text-sm text-gray-700">
                      Consider selling investments that have declined below your purchase price to realize losses that can offset capital gains or 
                      up to $3,000 of ordinary income per year. Be mindful of wash sale rules if repurchasing similar securities.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Quality Focus</h5>
                    <p className="text-sm text-gray-700">
                      During bear markets, consider emphasizing investments in companies with strong balance sheets, stable cash flows, and competitive 
                      advantages. These businesses often weather economic storms better and may recover faster when markets rebound.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Common Mistakes to Avoid</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-red-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                  Pitfalls During Market Downturns
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Emotional Decision-Making:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Panic selling at market lows</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Making radical changes to your strategy</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Checking portfolio values too frequently</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Attempting Market Timing:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Trying to perfectly time the market bottom</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Waiting for "all clear" signals to reinvest</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Missing the often sharp initial recovery</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Excessive Risk-Taking:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Using leverage to "double down" on losses</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Chasing the most beaten-down speculative assets</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Overconcentrating in a single sector or stock</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Neglecting Your Plan:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Abandoning your investment policy statement</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Stopping regular contributions to investments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700">Making decisions based on short-term performance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Historical Perspective</h3>
              <p className="text-gray-700 mb-4">
                Since 1950, the S&P 500 has experienced more than a dozen bear markets, yet has still delivered an average annual return of 
                approximately 10% over this period. Notably, some of the strongest market returns often come in the early stages of recovery, 
                with many bull markets beginning while economic headlines remain negative.
              </p>
              <p className="text-gray-700">
                For example, after the 2008-2009 financial crisis, the S&P 500 fell by about 57% from its peak. However, from the market low in 
                March 2009 through the end of 2020, the index delivered a cumulative return of over 400%. Similarly, after the COVID-19 market 
                crash in early 2020, markets recovered their losses within months despite ongoing pandemic concerns.
              </p>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of June 2024. Market conditions and investment strategies should be 
                  tailored to your personal financial situation, goals, and risk tolerance. Please consult with a qualified financial professional 
                  before making significant changes to your investment strategy.
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

export default NavigatingBearMarkets; 