import React from 'react';
import Link from 'next/link';
import { Calculator, AlertTriangle, ArrowRight, Shield, PiggyBank, GraduationCap, BriefcaseMedical, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function TaxAdvantagedAccounts() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Tax-Advantaged Accounts' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Tax-Advantaged Accounts</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Specialized Accounts to Optimize Your Tax Efficiency</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Tax-advantaged accounts are special financial vehicles designed to help you save and invest while 
              reducing your tax burden. Beyond common retirement accounts like 401(k)s and IRAs, several specialized 
              accounts exist to help you optimize your finances for healthcare, education, and other specific needs 
              with substantial tax benefits.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Utilizing tax-advantaged accounts appropriately can save you thousands of dollars over your lifetime 
                and significantly boost your net investment returns. Understanding the unique features, contribution 
                limits, and withdrawal rules of each account type will help you create a comprehensive tax optimization 
                strategy tailored to your financial goals.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Types of Tax-Advantaged Accounts</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BriefcaseMedical className="w-5 h-5 mr-2 text-blue-700" />
                  Health-Related Accounts
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Shield className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Health Savings Account (HSA)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The only account offering triple tax advantages:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Tax-deductible contributions:</strong> Reduce your taxable income with every contribution</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Tax-free growth:</strong> Interest and investment gains accumulate tax-free</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Tax-free withdrawals:</strong> Pay no taxes on funds used for qualified medical expenses</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Eligibility:</strong> Must be enrolled in a high-deductible health plan (HDHP)</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>2024 contribution limits:</strong> $4,150 (individual) or $8,300 (family), plus $1,000 catch-up for age 55+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <BriefcaseMedical className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Flexible Spending Account (FSA)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          An employer-sponsored plan for healthcare expenses:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Tax advantages:</strong> Contributions are pre-tax, reducing your taxable income</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>"Use it or lose it" rule:</strong> Most funds must be used within the plan year</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Front-loading benefit:</strong> Full annual amount available immediately</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>2024 contribution limit:</strong> $3,200 per employer</span>
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
                        <h5 className="font-semibold text-gray-900 mb-2">Limited Purpose FSA</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          A specialized FSA that can be paired with an HSA:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Restricted use:</strong> Typically limited to dental and vision expenses only</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>HSA compatibility:</strong> Can be used alongside an HSA without invalidating HSA eligibility</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Strategy:</strong> Maximizes tax advantages by using both account types simultaneously</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-purple-700" />
                  Education-Related Accounts
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">529 College Savings Plan</h5>
                    <p className="text-sm text-gray-700">
                      State-sponsored plans specifically for education expenses.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Tax benefits:</strong> Contributions grow tax-free and withdrawals are tax-free for qualified education expenses</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>State tax benefits:</strong> Many states offer tax deductions or credits for contributions</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>High contribution limits:</strong> Up to $530,000+ lifetime in some states</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Expanded uses:</strong> Now includes K-12 tuition, apprenticeship programs, student loan repayment (lifetime limit of $10,000)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Coverdell Education Savings Account (ESA)</h5>
                    <p className="text-sm text-gray-700">
                      Trust account for education expenses with more investment flexibility than 529 plans.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Tax benefits:</strong> Tax-free growth and withdrawals for qualified education expenses</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Broader expenses covered:</strong> Elementary, secondary, and higher education costs including computers, uniforms, tutoring</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Limitations:</strong> $2,000 annual contribution limit per beneficiary, income restrictions apply</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Age restrictions:</strong> Must be used by age 30 (unless beneficiary has special needs)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Other Specialized Tax-Advantaged Accounts</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <PiggyBank className="w-5 h-5 mr-2 text-green-700" />
                  Additional Tax-Advantaged Options
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Dependent Care FSA</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Employer-sponsored plan for child or dependent care expenses:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Tax benefit:</strong> Pre-tax contributions reduce taxable income</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>2024 limits:</strong> $5,000 for single taxpayers or married filing jointly; $2,500 for married filing separately</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Use it or lose it:</strong> Funds generally must be used within the plan year</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">ABLE Account</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Tax-advantaged savings for people with disabilities:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Eligibility:</strong> Available to individuals with significant disabilities that began before age 26</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Benefits:</strong> Tax-free growth and withdrawals for qualified disability expenses</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Asset protection:</strong> Up to $100,000 excluded from SSI resource limits</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Health Reimbursement Arrangement (HRA)</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Employer-funded plan for medical expenses:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Ownership:</strong> Funded entirely by employers, not employee contributions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Varieties:</strong> Traditional, Qualified Small Employer (QSEHRA), Individual Coverage (ICHRA)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Tax advantage:</strong> Reimbursements are tax-free for qualified medical expenses</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Qualified Opportunity Funds</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Investment vehicle for economically distressed communities:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Tax deferral:</strong> Defer capital gains taxes by reinvesting gains in opportunity zones</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Long-term benefit:</strong> Partial tax exclusion after 5 years; total exclusion on appreciation after 10 years</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Considerations:</strong> Higher risk profile, less liquidity than traditional investments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Optimizing Tax-Advantaged Accounts</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-amber-700" />
                  Strategic Approaches
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Prioritization Framework</h5>
                    <p className="text-sm text-gray-700">
                      A suggested approach to allocating funds across different accounts:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>First:</strong> 401(k) up to employer match (immediate 100% return)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Second:</strong> HSA maximum contribution (triple tax advantage)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Third:</strong> Roth IRA or Traditional IRA (based on income and tax situation)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Fourth:</strong> Continue maximizing 401(k) contributions</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Fifth:</strong> 529 plans or specialized accounts based on specific needs</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Account Coordination Strategies</h5>
                    <p className="text-sm text-gray-700">
                      Maximizing benefits across multiple account types:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>HSA + Limited FSA:</strong> Use Limited FSA for immediate dental/vision and HSA for long-term medical savings</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>529 + Coverdell:</strong> Use Coverdell for K-12 expenses and 529 for college costs</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>HSA cash reserves:</strong> Maintain personal cash for medical expenses, save receipts, and reimburse yourself years later to maximize tax-free growth</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Investment Allocation</h5>
                    <p className="text-sm text-gray-700">
                      Appropriate investment selection for each account type:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Short-term needs:</strong> Cash and low-risk investments for FSAs and accounts needed within 1-3 years</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Medium-term goals:</strong> Balanced allocation for 529 plans with 5-10 year horizons</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Long-term growth:</strong> More aggressive investments for HSAs being used as retirement vehicles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Common Mistakes to Avoid</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Not maximizing HSA contributions.</strong> The HSA's triple tax advantage makes it one of the most 
                  powerful accounts available—even better than retirement accounts for many investors.
                </p>
                <p className="text-gray-700">
                  <strong>2. Using HSA funds for current medical expenses.</strong> If possible, pay medical costs out-of-pocket 
                  while letting HSA funds grow tax-free, then reimburse yourself years later.
                </p>
                <p className="text-gray-700">
                  <strong>3. Forfeiting FSA funds.</strong> Plan FSA contributions carefully based on anticipated expenses since most 
                  unused funds are forfeited at year-end.
                </p>
                <p className="text-gray-700">
                  <strong>4. Overlooking state tax benefits.</strong> Many states offer tax deductions or credits for 529 plan 
                  contributions, which can provide immediate tax savings.
                </p>
                <p className="text-gray-700">
                  <strong>5. Misunderstanding withdrawal rules.</strong> Non-qualified withdrawals from tax-advantaged accounts 
                  often incur taxes plus penalties, so understand the rules before withdrawing funds.
                </p>
              </div>
            </div>

            <Disclaimer 
              articleId="tax-advantaged-accounts"
              message="This content is educational in nature and updated as of {{year}}. Tax laws, contribution limits, and account rules are subject to change. The information provided is general in nature and not personalized tax or financial advice. Please consult with qualified tax and financial professionals regarding your specific situation."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TaxAdvantagedAccounts; 