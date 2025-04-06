import React from 'react';
import Link from 'next/link';
import { RefreshCw, AlertTriangle, ArrowRight, BarChart2, Clock, TrendingUp, DollarSign, Percent } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function PortfolioRebalancing() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Portfolio Rebalancing' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <RefreshCw className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Portfolio Rebalancing</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Maintaining Your Target Asset Allocation</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Portfolio rebalancing is the process of realigning the weightings of assets in your investment portfolio
              to maintain your original desired level of asset allocation. It's an essential risk management strategy
              that helps ensure your investments remain aligned with your long-term goals and risk tolerance.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Why Rebalance Your Portfolio?</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-blue-700" />
                  Key Benefits
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <TrendingUp className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Risk Management</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Over time, as different assets perform differently, your portfolio can drift from your original 
                          target allocation, potentially exposing you to more risk than you intended.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Helps maintain your desired risk level</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Prevents overexposure to any single asset class</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Reduces vulnerability to market volatility</span>
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
                        <h5 className="font-semibold text-gray-900 mb-2">Buy Low, Sell High</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Rebalancing inherently encourages buying assets that have decreased in value and selling 
                          those that have increased—effectively implementing the "buy low, sell high" principle.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Forces disciplined investing</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Removes emotional decision-making</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Can enhance long-term returns through systematic profit-taking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Clock className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Long-term Focus</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Regular rebalancing keeps your portfolio aligned with your investment time horizon and financial goals.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Ensures alignment with your investment plan</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Provides opportunity to reassess goals periodically</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Accommodates changes in risk tolerance as life circumstances evolve</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Rebalancing Methods</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <RefreshCw className="w-5 h-5 mr-2 text-green-700" />
                  Different Approaches
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Calendar Rebalancing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Adjusting your portfolio at predetermined time intervals.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Most common:</strong> Quarterly, semi-annually, or annually</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Benefits:</strong> Simple, disciplined approach with less monitoring required</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Drawbacks:</strong> Might miss significant market moves between rebalancing dates</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Percentage-of-Portfolio Rebalancing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Rebalance when asset allocations drift beyond predetermined thresholds.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Common threshold:</strong> 5% deviation from target allocation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Benefits:</strong> Responds to market movements, potentially reducing transaction costs</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Drawbacks:</strong> Requires more frequent monitoring</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tactical Rebalancing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Intentionally deviating from target allocations based on market outlook.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Approach:</strong> Temporarily overweight/underweight certain assets</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Benefits:</strong> Potential to capitalize on short-term market opportunities</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Drawbacks:</strong> Requires market timing skill; increases risk of mistakes</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Cash Flow Rebalancing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Using new contributions or withdrawals to adjust portfolio allocations.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Contributions:</strong> Direct new money to underweight assets</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Withdrawals:</strong> Take funds from overweight assets</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Benefits:</strong> Minimizes transaction costs and potential tax consequences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Practical Considerations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-purple-700" />
                  Implementation Factors
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Transaction Costs</h5>
                    <p className="text-sm text-gray-700">
                      Every trade incurs costs, whether through commissions, bid-ask spreads, or potential tax implications. 
                      Consider these when determining your rebalancing frequency and method.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Rebalance less frequently to minimize trading costs</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Consider using no-transaction-fee funds or commission-free ETFs</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax Implications</h5>
                    <p className="text-sm text-gray-700">
                      Rebalancing in taxable accounts can trigger capital gains taxes. Strategic approaches can help minimize the tax impact.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Prioritize rebalancing in tax-advantaged accounts (IRAs, 401(k)s)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Use new contributions to rebalance taxable accounts</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Consider tax-loss harvesting opportunities during rebalancing</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Rebalancing Bands</h5>
                    <p className="text-sm text-gray-700">
                      Setting appropriate thresholds for when to rebalance can help balance risk management and efficiency.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Narrower bands (e.g., 3-5%) maintain tighter risk control but increase trading frequency</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Wider bands (e.g., 7-10%) reduce trading but allow more drift from target allocation</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Consider different bands for different asset classes based on volatility</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Automation</h5>
                    <p className="text-sm text-gray-700">
                      Many investment platforms offer automatic rebalancing services, simplifying the process.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Robo-advisors typically include automatic rebalancing</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Some 401(k) plans and brokerages offer automatic rebalancing features</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Target-date funds automatically adjust allocations over time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Rebalancing Example</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Percent className="w-5 h-5 mr-2 text-amber-700" />
                  Portfolio Rebalancing in Action
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Initial Portfolio</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Michael starts with a $100,000 portfolio with a target allocation of 60% stocks, 30% bonds, and 10% cash.
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm font-medium">
                      <div className="bg-blue-100 p-2 rounded text-center">
                        <div className="text-blue-800">Stocks</div>
                        <div className="text-blue-900">$60,000 (60%)</div>
                      </div>
                      <div className="bg-green-100 p-2 rounded text-center">
                        <div className="text-green-800">Bonds</div>
                        <div className="text-green-900">$30,000 (30%)</div>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded text-center">
                        <div className="text-yellow-800">Cash</div>
                        <div className="text-yellow-900">$10,000 (10%)</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">One Year Later</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      After a year of strong stock market performance, Michael's portfolio has grown to $120,000, but the allocations have shifted.
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm font-medium">
                      <div className="bg-blue-100 p-2 rounded text-center">
                        <div className="text-blue-800">Stocks</div>
                        <div className="text-blue-900">$84,000 (70%)</div>
                      </div>
                      <div className="bg-green-100 p-2 rounded text-center">
                        <div className="text-green-800">Bonds</div>
                        <div className="text-green-900">$30,000 (25%)</div>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded text-center">
                        <div className="text-yellow-800">Cash</div>
                        <div className="text-yellow-900">$6,000 (5%)</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Rebalancing Actions</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      To return to his target allocation, Michael needs to make the following adjustments:
                    </p>
                    <ol className="mt-2 space-y-1 text-sm list-decimal pl-5 text-gray-700">
                      <li>Sell $12,000 of stocks (reducing from $84,000 to $72,000 or 60%)</li>
                      <li>Buy $6,000 of bonds (increasing from $30,000 to $36,000 or 30%)</li>
                      <li>Add $6,000 to cash (increasing from $6,000 to $12,000 or 10%)</li>
                    </ol>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">The Result</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      After rebalancing, Michael's portfolio is back to his target allocation, but at the higher overall value:
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-sm font-medium">
                      <div className="bg-blue-100 p-2 rounded text-center">
                        <div className="text-blue-800">Stocks</div>
                        <div className="text-blue-900">$72,000 (60%)</div>
                      </div>
                      <div className="bg-green-100 p-2 rounded text-center">
                        <div className="text-green-800">Bonds</div>
                        <div className="text-green-900">$36,000 (30%)</div>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded text-center">
                        <div className="text-yellow-800">Cash</div>
                        <div className="text-yellow-900">$12,000 (10%)</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-3">
                      By rebalancing, Michael has taken profits from his stock gains and reinvested in underperforming assets, 
                      maintaining his desired risk level while enforcing the "buy low, sell high" discipline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Practices</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Create a written investment policy.</strong> Document your target asset allocation, rebalancing 
                  thresholds, and frequency to remove emotion from the process.
                </p>
                <p className="text-gray-700">
                  <strong>2. Consider your entire portfolio holistically.</strong> Look across all accounts (taxable and tax-advantaged) 
                  when determining if rebalancing is needed.
                </p>
                <p className="text-gray-700">
                  <strong>3. Be strategic about where to rebalance.</strong> Prioritize tax-advantaged accounts for selling 
                  appreciated assets to avoid capital gains taxes.
                </p>
                <p className="text-gray-700">
                  <strong>4. Reassess your target allocation periodically.</strong> As you age or your circumstances change, 
                  your ideal asset allocation may need adjustment.
                </p>
                <p className="text-gray-700">
                  <strong>5. Keep good records.</strong> Track your rebalancing activity for tax purposes and to evaluate 
                  the effectiveness of your approach over time.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of August 2024. Rebalancing strategies should be 
                  tailored to your individual financial situation, investment goals, and tax considerations. Consider consulting 
                  with a financial advisor before implementing any rebalancing strategy.
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

export default PortfolioRebalancing; 