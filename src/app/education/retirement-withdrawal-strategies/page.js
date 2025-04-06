import React from 'react';
import Link from 'next/link';
import { Wallet, AlertTriangle, ArrowRight, Calculator, PiggyBank, Percent, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function RetirementWithdrawalStrategies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Retirement Withdrawal Strategies' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Wallet className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Retirement Withdrawal Strategies</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Making Your Savings Last Through Retirement</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              How you withdraw from your retirement accounts is just as important as how you save for retirement. 
              A thoughtful withdrawal strategy can help ensure your money lasts throughout your retirement years.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Without a solid withdrawal strategy, retirees risk running out of money or being forced to significantly 
                reduce their standard of living. Even small adjustments to your withdrawal approach can add years to your portfolio.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">The 4% Rule and Beyond</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Percent className="w-5 h-5 mr-2 text-blue-700" />
                    Traditional Approaches
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">The 4% Rule</h5>
                      <p className="text-sm text-gray-700">
                        Withdraw 4% of your portfolio in year one, then adjust that amount annually for inflation. Historically, 
                        this has provided a high likelihood of portfolio survival for 30+ years.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Fixed-Percentage Withdrawal</h5>
                      <p className="text-sm text-gray-700">
                        Withdraw a fixed percentage (e.g., 4-5%) of your current portfolio value each year, allowing for 
                        adjustments based on market performance.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Floor-and-Ceiling Approach</h5>
                      <p className="text-sm text-gray-700">
                        Set minimum and maximum withdrawal amounts, allowing flexibility while providing income predictability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart className="w-5 h-5 mr-2 text-purple-700" />
                    Dynamic Strategies
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Guardrails Method</h5>
                      <p className="text-sm text-gray-700">
                        Increase or decrease withdrawals based on portfolio performance, with predetermined "guardrails" 
                        that trigger adjustments when the withdrawal rate gets too high or low.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Required Minimum Distribution (RMD) Method</h5>
                      <p className="text-sm text-gray-700">
                        Base withdrawals on IRS RMD tables, which calculate withdrawals based on life expectancy.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Bucket Strategy</h5>
                      <p className="text-sm text-gray-700">
                        Divide assets into different "buckets" based on when you'll need them, with conservative investments for 
                        near-term expenses and growth investments for later years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Tax-Efficient Withdrawal Order</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-indigo-700" />
                  Optimizing Account Withdrawals
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <p className="text-sm text-gray-700">
                    The traditional withdrawal sequence below can minimize taxes, but your specific situation may require a custom approach:
                  </p>
                  
                  <div className="space-y-5">
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex items-start">
                        <div className="bg-indigo-200 rounded-full h-7 w-7 flex items-center justify-center text-indigo-700 font-bold mr-3 mt-1 flex-shrink-0">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Required Minimum Distributions (RMDs)</h5>
                          <p className="text-sm text-gray-700">
                            Take any required distributions from traditional IRAs, 401(k)s, etc., starting at age 73 (as of 2024).
                            Failure to take RMDs results in a 25% penalty on the required amount.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex items-start">
                        <div className="bg-indigo-200 rounded-full h-7 w-7 flex items-center justify-center text-indigo-700 font-bold mr-3 mt-1 flex-shrink-0">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Taxable Accounts</h5>
                          <p className="text-sm text-gray-700">
                            Withdraw from taxable brokerage accounts and bank accounts next. Consider selling investments with losses 
                            or minimal gains first to manage capital gains taxes.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex items-start">
                        <div className="bg-indigo-200 rounded-full h-7 w-7 flex items-center justify-center text-indigo-700 font-bold mr-3 mt-1 flex-shrink-0">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Tax-Deferred Accounts</h5>
                          <p className="text-sm text-gray-700">
                            Next, tap traditional IRAs, 401(k)s, and other tax-deferred accounts beyond RMDs. Every dollar withdrawn 
                            is subject to ordinary income tax.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex items-start">
                        <div className="bg-indigo-200 rounded-full h-7 w-7 flex items-center justify-center text-indigo-700 font-bold mr-3 mt-1 flex-shrink-0">4</div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Tax-Free Accounts</h5>
                          <p className="text-sm text-gray-700">
                            Withdraw from Roth IRAs and Roth 401(k)s last, allowing these accounts to continue growing tax-free as long as possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Special Considerations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-rose-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <PiggyBank className="w-5 h-5 mr-2 text-rose-700" />
                  Key Factors
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Social Security Timing</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Benefits increase approximately 8% per year if delayed from age 62 to 70</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Coordination with portfolio withdrawals can optimize total retirement income</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax Bracket Management</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Fill lower tax brackets with strategic Roth conversions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Consider adjusting withdrawal amounts to stay within a specific tax bracket</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Healthcare Costs</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Medicare premiums increase with higher income (IRMAA)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Account for potential long-term care needs in withdrawal planning</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Longevity Risk</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Consider annuities to provide guaranteed lifetime income</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Adjust withdrawal rates based on family health history and longevity expectations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-emerald-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-emerald-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Inventory Your Resources</h5>
                    <p className="text-sm text-gray-700">
                      Create a complete inventory of all income sources, including Social Security, pensions, retirement accounts, and other assets.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Estimate Retirement Expenses</h5>
                    <p className="text-sm text-gray-700">
                      Build a realistic retirement budget, distinguishing between essential and discretionary spending.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Select a Withdrawal Strategy</h5>
                    <p className="text-sm text-gray-700">
                      Choose an approach that matches your risk tolerance, income needs, and legacy goals.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Monitor and Adjust</h5>
                    <p className="text-sm text-gray-700">
                      Regularly review your withdrawal strategy and make adjustments based on portfolio performance, health changes, and lifestyle needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="retirement-withdrawal-strategies"
              message="This content is educational in nature and updated as of {{year}}. Retirement withdrawal strategies should be personalized to your specific situation. Tax laws and retirement account rules may change over time. Please consult with a qualified financial professional before implementing any withdrawal strategy."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RetirementWithdrawalStrategies; 