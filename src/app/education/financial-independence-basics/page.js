import React from 'react';
import Link from 'next/link';
import { Zap, AlertTriangle, ArrowRight, Calculator, TrendingUp, PieChart, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function FinancialIndependenceBasics() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Financial Independence Basics' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-amber-600" />
              <p className="text-amber-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Financial Independence Basics</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">The Path to Freedom on Your Terms</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Financial independence means having enough income from investments to cover your living expenses 
              without needing to work. This concept—often called FIRE (Financial Independence, Retire Early)—empowers 
              you to design a life based on your own priorities.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-8">
              <h3 className="flex items-center text-amber-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Financial independence provides freedom from money stress, greater career flexibility, and the ability to 
                pursue meaningful activities without financial constraints. It's about maximizing your life options, not just retiring early.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">The Core Principles</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-amber-700" />
                  FIRE Fundamentals
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-100 shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-200 mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-amber-700" />
                    </div>
                    <h5 className="font-semibold text-center text-gray-900 mb-3">High Savings Rate</h5>
                    <p className="text-sm text-center text-gray-700">
                      Aim to save 25-70% of your income, compared to the traditional 10-15%. Higher savings rates dramatically 
                      accelerate the path to financial independence.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-100 shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-200 mx-auto mb-4">
                      <PieChart className="w-6 h-6 text-amber-700" />
                    </div>
                    <h5 className="font-semibold text-center text-gray-900 mb-3">Thoughtful Investing</h5>
                    <p className="text-sm text-center text-gray-700">
                      Build a diversified, low-fee investment portfolio designed to generate long-term returns that outpace inflation.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-100 shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-200 mx-auto mb-4">
                      <Calculator className="w-6 h-6 text-amber-700" />
                    </div>
                    <h5 className="font-semibold text-center text-gray-900 mb-3">The 25x Rule</h5>
                    <p className="text-sm text-center text-gray-700">
                      Aim for investments worth approximately 25 times your annual expenses, allowing for a sustainable 4% withdrawal rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">FIRE Variations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-orange-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-orange-700" />
                    Traditional & Lean FIRE
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Traditional FIRE</h5>
                      <p className="text-sm text-gray-700">
                        Accumulating 25-30x annual expenses (typically $1-2 million) to fund a middle-class lifestyle without working.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Lean FIRE</h5>
                      <p className="text-sm text-gray-700">
                        Achieving financial independence with minimal expenses, often $40,000/year or less for a household. 
                        Requires extreme frugality but can be reached faster.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-green-700" />
                    Fat & Barista FIRE
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Fat FIRE</h5>
                      <p className="text-sm text-gray-700">
                        Financial independence with substantial cushion—typically $100,000+ annual spending. 
                        Requires more savings but allows for a more luxurious lifestyle.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Barista/Coast FIRE</h5>
                      <p className="text-sm text-gray-700">
                        Having enough investments that will grow to support retirement at a traditional age, 
                        but working part-time to cover current expenses. Provides lifestyle flexibility sooner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">The Math Behind FIRE</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-indigo-700" />
                  Key Calculations
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">Savings Rate Impact</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        Your savings rate directly determines how quickly you can reach financial independence:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="bg-indigo-100 text-gray-800">
                              <th className="px-3 py-2 text-left rounded-tl-lg">Savings Rate</th>
                              <th className="px-3 py-2 text-left rounded-tr-lg">Years to FIRE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white">
                              <td className="px-3 py-2 border-b border-indigo-100">10%</td>
                              <td className="px-3 py-2 border-b border-indigo-100">51 years</td>
                            </tr>
                            <tr className="bg-indigo-50">
                              <td className="px-3 py-2 border-b border-indigo-100">25%</td>
                              <td className="px-3 py-2 border-b border-indigo-100">32 years</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="px-3 py-2 border-b border-indigo-100">50%</td>
                              <td className="px-3 py-2 border-b border-indigo-100">17 years</td>
                            </tr>
                            <tr className="bg-indigo-50">
                              <td className="px-3 py-2 border-b border-indigo-100">70%</td>
                              <td className="px-3 py-2 border-b border-indigo-100">9 years</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 italic">
                        *Assumes 5% real returns after inflation and a 4% withdrawal rate
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">FIRE Number Calculation</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        Your FIRE number is the amount of investments needed to fund your lifestyle indefinitely:
                      </p>
                      <div className="bg-white p-3 rounded-lg border border-indigo-100">
                        <p className="font-medium text-center text-indigo-800 mb-2">FIRE Number Formula</p>
                        <div className="flex justify-center items-center">
                          <div className="bg-indigo-200 px-4 py-2 rounded-lg text-center">
                            <span className="font-mono font-semibold text-indigo-900">
                              Annual Expenses × 25
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">$40,000/year:</span>
                            <span className="font-semibold">$1,000,000 needed</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">$60,000/year:</span>
                            <span className="font-semibold">$1,500,000 needed</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">$100,000/year:</span>
                            <span className="font-semibold">$2,500,000 needed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Common Challenges</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-rose-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-rose-700" />
                  Key Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Healthcare Costs</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Early retirement often means self-funding healthcare until Medicare eligibility</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Budget for insurance premiums and potential out-of-pocket costs</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Sequence of Returns Risk</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Poor market returns in early retirement years can significantly impact portfolio longevity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Consider cash reserves or flexible spending rules to mitigate</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Psychological Challenges</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Loss of identity tied to career or income level</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Social isolation if friends and peers are still working</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Inflation and Longevity</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Extended lifespan means funding potentially 40+ years of retirement</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Long-term inflation can erode purchasing power more than expected</span>
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
                  <TrendingUp className="w-5 h-5 mr-2 text-teal-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Calculate Your Current Spending</h5>
                    <p className="text-sm text-gray-700">
                      Track all expenses for 3-6 months to determine your true annual spending needs.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Determine Your FIRE Number</h5>
                    <p className="text-sm text-gray-700">
                      Multiply your annual expenses by 25 (for a 4% withdrawal rate) or 33 (for a more conservative 3% rate).
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Optimize Savings and Investments</h5>
                    <p className="text-sm text-gray-700">
                      Increase income, reduce expenses, and create an investment strategy to maximize your savings rate.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Consider Non-Financial Aspects</h5>
                    <p className="text-sm text-gray-700">
                      Develop a clear vision for how you'll spend your time and find fulfillment after achieving financial independence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-yellow-50 rounded-lg border border-yellow-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of March 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
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

export default FinancialIndependenceBasics; 