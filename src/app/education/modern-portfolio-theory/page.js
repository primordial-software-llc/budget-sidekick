import React from 'react';
import Link from 'next/link';
import { LineChart, AlertTriangle, ArrowRight, Minimize2, BarChart2, TrendingUp, PieChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function ModernPortfolioTheory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Modern Portfolio Theory' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <LineChart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Modern Portfolio Theory</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Optimizing Risk and Return Through Diversification</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Modern Portfolio Theory (MPT) revolutionized how investors think about portfolio construction. Developed by 
              Harry Markowitz in 1952, this Nobel Prize-winning framework provides a mathematical approach to maximizing 
              returns for a given level of risk through strategic diversification.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Core Principles</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-blue-700" />
                  Fundamental Concepts of MPT
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <PieChart className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Risk and Return Relationship</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          MPT quantifies the relationship between risk and return, establishing that rational investors:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Seek to maximize returns for a given level of risk</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Minimize risk for a desired level of expected return</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Consider risk (standard deviation) as important as expected return</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Minimize2 className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Correlation and Diversification</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The cornerstone of MPT is the insight that portfolio risk can be reduced by combining assets that don't move in perfect unison:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Portfolio risk can be lower than the weighted average risk of its components</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Correlation coefficients measure how assets move in relation to each other</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Diversification benefits are greatest when combining assets with low or negative correlations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <BarChart2 className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Efficient Frontier</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The efficient frontier represents the set of optimal portfolios that offer the highest expected return for a defined level of risk:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Portfolios on the efficient frontier maximize return for a given risk level</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Rational investors should only hold portfolios that lie on this curve</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Any portfolio below the frontier is suboptimal (can achieve higher return for same risk)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Mathematical Framework</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-purple-700" />
                  Quantitative Elements of MPT
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Expected Return</h5>
                    <p className="text-sm text-gray-700">
                      The weighted average of the expected returns of individual assets in a portfolio. 
                      This calculation uses historical data and/or forward-looking projections to estimate future performance.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Standard Deviation</h5>
                    <p className="text-sm text-gray-700">
                      MPT uses standard deviation to measure risk, representing the volatility or dispersion of returns.
                      Higher standard deviation indicates greater uncertainty in expected returns.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Covariance and Correlation</h5>
                    <p className="text-sm text-gray-700">
                      These metrics describe how asset returns move in relation to each other:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Correlation of +1: Perfect positive correlation (move in same direction)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Correlation of 0: No correlation (move independently)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Correlation of -1: Perfect negative correlation (move in opposite directions)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Portfolio Optimization</h5>
                    <p className="text-sm text-gray-700">
                      MPT provides a mathematical framework for determining asset weightings to:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Maximize the Sharpe ratio (risk-adjusted return)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Find the minimum variance portfolio</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Achieve target returns with minimal risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Practical Applications</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-700" />
                  Implementing MPT in Real-World Investing
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Asset Allocation Models</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      MPT principles have led to popular allocation strategies:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>60/40 Portfolio:</strong> Traditional mix of 60% stocks, 40% bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Risk parity:</strong> Allocating based on risk contribution rather than dollar amounts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Target-date funds:</strong> Automated MPT implementation that adjusts with investor age</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Rebalancing Strategies</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Regular portfolio rebalancing keeps investments aligned with the efficient frontier:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Calendar rebalancing:</strong> Adjusting at set time intervals (quarterly, annually)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Threshold rebalancing:</strong> Adjusting when allocations drift beyond set percentages</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Tactical rebalancing:</strong> Adjusting based on market conditions and opportunities</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Modern Applications</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      MPT continues to evolve with technology and research:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Robo-advisors:</strong> Automated investment platforms using MPT algorithms</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Factor investing:</strong> Focusing on specific return drivers across asset classes</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>ESG integration:</strong> Incorporating environmental, social, and governance factors</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Beyond Traditional Assets</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      MPT principles can be applied across diverse investment categories:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Alternative investments:</strong> Adding real estate, commodities, and private equity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Global diversification:</strong> Reducing country-specific risk through international exposure</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Multi-asset strategies:</strong> Creating complex portfolios across numerous asset types</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Limitations and Criticisms</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-red-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                  Challenges with MPT
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Assumptions vs. Reality</h5>
                    <p className="text-sm text-gray-700">
                      MPT relies on several assumptions that may not hold true in real markets:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Assumes returns follow a normal distribution (ignores fat tails and black swan events)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Relies on historical data that may not predict future performance</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Assumes correlations are stable, when they often increase during market stress</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Behavioral Factors</h5>
                    <p className="text-sm text-gray-700">
                      MPT doesn't account for investor psychology and behavior:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Assumes investors are rational and risk-averse</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Doesn't consider emotional reactions to market volatility</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Ignores asymmetric risk preferences (losses hurt more than gains feel good)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Practical Implementation Challenges</h5>
                    <p className="text-sm text-gray-700">
                      Applying MPT in real-world investment scenarios presents difficulties:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Small input estimation errors can lead to dramatically different optimal portfolios</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>Transaction costs and taxes can erode theoretical benefits</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-red-600 flex-shrink-0" />
                        <span>May recommend extreme allocations that aren't practical to implement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Diversification reduces risk.</strong> The fundamental insight of MPT is that properly combining 
                  assets with different return patterns can lower overall portfolio risk without sacrificing expected return.
                </p>
                <p className="text-gray-700">
                  <strong>2. Risk and return are inseparable.</strong> MPT provides a framework for understanding 
                  the trade-off between risk and return, and helps investors determine their optimal position along this spectrum.
                </p>
                <p className="text-gray-700">
                  <strong>3. The efficient frontier represents optimal portfolios.</strong> Investors should aim to create 
                  portfolios that lie on this curve for the best risk-adjusted returns.
                </p>
                <p className="text-gray-700">
                  <strong>4. MPT has limitations.</strong> While powerful, the theory makes assumptions that don't always 
                  hold in real markets and should be complemented with other approaches.
                </p>
                <p className="text-gray-700">
                  <strong>5. Regular rebalancing is essential.</strong> To maintain the risk/return profile of an optimized 
                  portfolio, periodic adjustments are necessary as market movements shift allocations.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of September 2024. Modern Portfolio Theory 
                  provides a framework for investment decision-making but has limitations and may not be suitable for all 
                  investors or market conditions. Consider consulting with a qualified financial advisor before making 
                  significant changes to your investment strategy.
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

export default ModernPortfolioTheory; 