import React from 'react';
import Link from 'next/link';
import { Stethoscope, AlertTriangle, ArrowRight, PiggyBank, TrendingUp, LineChart, BadgePlus, BadgeMinus, Calculator, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function HealthSavingsAccounts() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Health Savings Accounts' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Stethoscope className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Health Savings Accounts</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">The Triple Tax-Advantaged Healthcare & Retirement Tool</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Health Savings Accounts (HSAs) offer a unique combination of tax benefits not found in any other financial account. 
              Beyond helping with current medical expenses, HSAs can be a powerful tool for long-term financial planning and 
              retirement preparation, providing substantial tax advantages along the way.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Healthcare costs are among the largest expenses in retirement, with estimates suggesting couples may need $300,000 
                or more just for medical expenses. HSAs provide unparalleled tax efficiency for funding these costs, allowing you to 
                set aside pre-tax dollars, grow investments tax-free, and withdraw funds tax-free for qualified medical expenses.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">HSA Basics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Stethoscope className="w-5 h-5 mr-2 text-blue-700" />
                    What Is an HSA?
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Definition</h5>
                      <p className="text-sm text-gray-700">
                        A tax-advantaged savings account specifically designed for medical expenses. 
                        Unlike Flexible Spending Accounts (FSAs), HSA funds roll over year to year and remain yours even if 
                        you change employers or health insurance plans.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Eligibility Requirements</h5>
                      <p className="text-sm text-gray-700">
                        To open and contribute to an HSA, you must:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Be enrolled in a High-Deductible Health Plan (HDHP)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Have no other health coverage (with some exceptions)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Not be enrolled in Medicare</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Not be claimed as a dependent on someone else's tax return</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">High-Deductible Health Plan (HDHP)</h5>
                      <p className="text-sm text-gray-700">
                        For 2024, an HDHP is defined as having:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Minimum annual deductible: $1,600 (individual) / $3,200 (family)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Maximum out-of-pocket expenses: $8,050 (individual) / $16,100 (family)</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 italic">Note: These limits are adjusted annually for inflation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <PiggyBank className="w-5 h-5 mr-2 text-green-700" />
                    Triple Tax Advantage
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">1. Tax-Deductible Contributions</h5>
                      <p className="text-sm text-gray-700">
                        Contributions to your HSA are tax-deductible, reducing your taxable income for the year. 
                        If contributed through payroll deduction, they're also exempt from FICA taxes (7.65%).
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">2. Tax-Free Growth</h5>
                      <p className="text-sm text-gray-700">
                        Interest, dividends, and capital gains within your HSA accumulate tax-free. 
                        Unlike 401(k)s or traditional IRAs, there are no required minimum distributions (RMDs).
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">3. Tax-Free Withdrawals</h5>
                      <p className="text-sm text-gray-700">
                        Distributions used for qualified medical expenses are completely tax-free. 
                        After age 65, you can also withdraw funds for non-medical purposes by paying only ordinary income tax (no penalty).
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm text-gray-700 italic">
                        <strong>Comparison:</strong> 401(k)s and traditional IRAs offer tax-deductible contributions and tax-deferred growth, 
                        but withdrawals are taxed. Roth IRAs provide tax-free withdrawals and growth, but contributions are made with after-tax dollars. 
                        Only HSAs offer all three tax advantages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Contribution and Usage Rules</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-purple-700" />
                  Key Guidelines
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <BadgePlus className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Contribution Limits</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          For 2024, the annual HSA contribution limits are:
                        </p>
                        <div className="space-y-1 mb-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>$4,150 for individual coverage</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>$8,300 for family coverage</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Additional $1,000 catch-up contribution if age 55 or older</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 italic">Note: These limits apply to total contributions from all sources (you, your employer, and others).</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <BadgeMinus className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Qualified Medical Expenses</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          You can withdraw tax-free for a wide range of healthcare expenses, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 mb-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Deductibles and copayments</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Prescription medications</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Dental and vision care</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Certain over-the-counter items</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Mental health services</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Long-term care premiums</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 italic">See IRS Publication 502 for a complete list of qualified medical expenses.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <AlertTriangle className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Penalties and Non-Qualified Withdrawals</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Using HSA funds for non-medical expenses has these consequences:
                        </p>
                        <div className="space-y-1 mb-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Before age 65:</strong> Subject to income tax plus a 20% penalty</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Age 65 and beyond:</strong> Subject only to regular income tax (no penalty)</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 italic">The 20% penalty is waived in case of death, disability, or when you reach age 65.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">HSA Investment Strategies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-amber-700" />
                    Maximizing Long-Term Growth
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">The Investment Approach</h5>
                      <p className="text-sm text-gray-700">
                        Rather than using HSA funds for current healthcare expenses, consider paying those costs out-of-pocket 
                        while investing your HSA balance for long-term growth. This strategy maximizes the potential of the 
                        triple tax advantage.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Investment Options</h5>
                      <p className="text-sm text-gray-700">
                        Many HSA providers offer investment options similar to 401(k)s, including:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Index funds and ETFs</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Target-date funds</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Mutual funds</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Cash Reserve Strategy</h5>
                      <p className="text-sm text-gray-700">
                        Consider keeping a portion of your HSA in cash for near-term medical expenses while 
                        investing the rest for long-term growth. This balances liquidity needs with growth potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-indigo-700" />
                    The HSA as a Retirement Tool
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Retirement Planning Potential</h5>
                      <p className="text-sm text-gray-700">
                        An HSA can function as a supplemental retirement account, offering more flexibility than 
                        a 401(k) or IRA for healthcare expenses while providing similar tax benefits for non-medical 
                        withdrawals after age 65.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Reimbursement Strategy</h5>
                      <p className="text-sm text-gray-700">
                        Save medical receipts for expenses you pay out-of-pocket. You can reimburse yourself from your HSA 
                        at any point in the future — even years later — allowing your HSA investments to grow tax-free in the meantime.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Contribution Priority</h5>
                      <p className="text-sm text-gray-700">
                        For many investors, an optimal contribution strategy might be:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>1. Capture employer 401(k) match</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>2. Max out HSA contributions</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>3. Then contribute more to 401(k) or IRA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Tips for Choosing an HSA Provider</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-teal-700" />
                  Selection Criteria
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Features to Evaluate:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Fee structure (monthly maintenance, investment fees)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Investment options and quality</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Minimum balance required to invest</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">User interface and mobile app quality</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Customer service reputation</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Account Access Options:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Debit card for direct payments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Online bill payment features</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Reimbursement process efficiency</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Receipt tracking and storage</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Integration with expense management tools</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="health-savings-accounts"
              message="This content is educational in nature and updated as of {{year}}. HSA rules, contribution limits, and tax treatments may change. The information provided is not tax, legal, or accounting advice. Please consult with a qualified professional regarding your specific situation."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HealthSavingsAccounts;
