import React from 'react';
import Link from 'next/link';
import { Scissors, AlertTriangle, ArrowRight, Calculator, DollarSign, Calendar, TrendingDown, BarChart2, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function TaxLossHarvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Tax-Loss Harvesting' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Scissors className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Tax-Loss Harvesting</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">A Strategic Approach to Managing Investment Losses</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Tax-loss harvesting is a technique that can help reduce your tax burden by strategically realizing investment losses 
              to offset capital gains and ordinary income. When implemented correctly, it can enhance after-tax returns while 
              maintaining your overall investment strategy.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding Tax-Loss Harvesting</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-blue-700" />
                  The Basics
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">The Concept</h5>
                    <p className="text-sm text-gray-700">
                      Tax-loss harvesting involves selling investments that have declined in value to realize capital losses, 
                      which can then be used to offset capital gains or up to $3,000 of ordinary income per year. After selling, 
                      you reinvest the proceeds in a similar (but not identical) investment to maintain your market exposure.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax Benefits</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Harvested losses provide multiple tax advantages:
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Offset capital gains from other investments</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Reduce ordinary income by up to $3,000 per year</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Carry forward unused losses to future tax years indefinitely</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Principles</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Effective tax-loss harvesting follows these principles:
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Maintain market exposure by promptly reinvesting</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Avoid wash sale rules (buying substantially identical securities within 30 days)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Consider the transaction costs relative to the tax benefits</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Focus on taxable accounts (losses in tax-advantaged accounts don't provide tax benefits)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">How Tax-Loss Harvesting Works</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Scissors className="w-5 h-5 mr-2 text-green-700" />
                  The Process Step by Step
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <TrendingDown className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Step 1: Identify Loss Positions</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Review your investment portfolio to identify securities that have declined in value below your purchase price.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Focus on investments in taxable accounts</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Calculate the potential loss (current value minus cost basis)</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Prioritize larger losses and longer-term holdings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Step 2: Sell the Loss Positions</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Execute trades to sell investments showing paper losses, being mindful of trading costs.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Consider the bid-ask spread and commission costs</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Be aware of any exit fees or redemption charges</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Document the trade details for tax reporting purposes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <TrendingUp className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Step 3: Reinvest Appropriately</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Immediately reinvest the proceeds in a similar but not identical security to maintain market exposure.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Consider a different ETF tracking a similar index</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Look for funds with different underlying indexes but similar risk/return profiles</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Avoid substantially identical securities to prevent wash sales</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Calendar className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Step 4: Track and Report</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Keep detailed records and properly report the transactions on your tax return.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Document purchase dates, sale dates, cost basis, and sale proceeds</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Report transactions on Schedule D and Form 8949</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Keep track of carried-forward losses for future tax years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Important Considerations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-purple-700" />
                  Rules and Restrictions
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Wash Sale Rule</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      A critical rule that can invalidate your tax-loss harvesting efforts.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Definition:</strong> Prohibits claiming a loss if you purchase a "substantially identical" security within 30 days before or after the sale</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Applies across accounts:</strong> Including IRAs and spousal accounts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Impact:</strong> Disallows the loss and adjusts the cost basis of the replacement security</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Substantially Identical Securities</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Understanding what constitutes "substantially identical" is crucial.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Clear examples:</strong> Same stock, same mutual fund, same ETF</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Likely safe:</strong> Different ETFs tracking different indexes</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Gray area:</strong> Similar ETFs from different providers tracking the same index</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax Lot Identification</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Choosing which shares to sell can optimize your tax benefits.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Specific identification:</strong> Select particular lots to maximize losses</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Default methods:</strong> FIFO, average cost (for mutual funds)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Consistency:</strong> Maintain your chosen method for consistency</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax Rate Considerations</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Understanding how different types of gains and losses interact.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Short vs. long term:</strong> Losses first offset gains of the same type</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Tax rate differential:</strong> Consider preserving long-term gains (lower tax rate) when possible</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Income offsets:</strong> The $3,000 ordinary income offset can be valuable at higher marginal rates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Real-World Example</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-amber-700" />
                  Tax-Loss Harvesting in Action
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Scenario</h5>
                    <p className="text-sm text-gray-700">
                      Sarah is in the 24% federal income tax bracket and has the following investment situation:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
                      <li>She purchased 100 shares of XYZ Total Market ETF at $100 per share ($10,000) in January</li>
                      <li>In October, the ETF's value has dropped to $85 per share ($8,500)</li>
                      <li>She also has $2,000 in realized capital gains from other investments this year</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax-Loss Harvesting Action</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Sarah decides to harvest the loss while maintaining her investment strategy:
                    </p>
                    <ol className="mt-2 space-y-1 text-sm text-gray-700 list-decimal pl-5">
                      <li>She sells all 100 shares of XYZ Total Market ETF for $8,500, realizing a $1,500 loss</li>
                      <li>The same day, she purchases 100 shares of ABC Broad Market ETF (a similar but not identical fund) for $8,500</li>
                      <li>The new ETF tracks a different index but has a similar overall exposure to the market</li>
                    </ol>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax Impact</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Here's how the tax-loss harvesting affects Sarah's tax situation:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Offset capital gains:</strong> The $1,500 loss fully offsets the $2,000 in capital gains, reducing her capital gains tax burden by $1,500 × 15% = $225</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Net capital gain position:</strong> Sarah now has only $500 in net capital gains for the year</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Market exposure maintained:</strong> She remains invested in the market with a similar risk profile and asset allocation</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Long-Term Benefit</h5>
                    <p className="text-sm text-gray-700">
                      By tax-loss harvesting, Sarah saved $225 in taxes while maintaining her investment strategy. If the market recovers, her new investment will appreciate, and she's effectively "banked" the tax benefit of the temporary decline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Practices</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Harvest losses throughout the year.</strong> While year-end harvesting is common, market 
                  declines can happen anytime. Being proactive can capture losses that might recover before December.
                </p>
                <p className="text-gray-700">
                  <strong>2. Consider tax-loss harvesting costs.</strong> Transaction fees, bid-ask spreads, and 
                  potential capital gains distributions from replacement funds should be factored into your decision.
                </p>
                <p className="text-gray-700">
                  <strong>3. Maintain proper documentation.</strong> Keep detailed records of all transactions, 
                  including purchase dates, sale dates, prices, and the specific lots sold.
                </p>
                <p className="text-gray-700">
                  <strong>4. Focus on asset allocation, not just taxes.</strong> Tax-loss harvesting should complement 
                  your overall investment strategy, not drive it. Maintain your desired asset allocation.
                </p>
                <p className="text-gray-700">
                  <strong>5. Consider future tax rates.</strong> If you expect to be in a higher tax bracket in the future, 
                  it might make sense to realize losses now to offset gains or income in those higher-taxed years.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of July 2024. Tax rules are complex and subject to change. 
                  Tax-loss harvesting strategies may not be appropriate for all investors or all situations. Consult with a qualified tax 
                  professional before implementing any tax strategy.
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

export default TaxLossHarvesting; 