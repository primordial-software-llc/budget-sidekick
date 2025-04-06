import React from 'react';
import Link from 'next/link';
import { Wallet, AlertTriangle, ArrowRight, Calculator, Clock, Award, Repeat, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function RetirementIncomePlanning() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Retirement Income Planning' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Wallet className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Retirement Income Planning</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Creating Reliable Income Streams for Your Retirement Years</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Transitioning from accumulating wealth to creating sustainable income is a critical shift in financial planning. 
              Retirement income planning focuses on converting your savings into dependable income streams that can support your 
              lifestyle throughout retirement while managing various risks including longevity, inflation, market volatility, and healthcare costs.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                The Retirement Income Challenge
              </h3>
              <p className="text-gray-700">
                Unlike previous generations who often relied on employer pensions, today's retirees typically need to create their own 
                retirement paycheck from various sources. Developing a comprehensive income strategy that balances security with growth 
                potential is essential for maintaining financial independence throughout a retirement that may last 20-30+ years.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Core Income Sources</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-700" />
                  Guaranteed and Semi-Guaranteed Income
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Award className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Social Security Benefits</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The foundation of most retirement income plans:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Claiming strategy:</strong> Delaying benefits increases monthly payment by approximately 8% per year between full retirement age and age 70</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>COLA advantage:</strong> Benefits adjust with inflation, providing valuable purchasing power protection</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Spousal considerations:</strong> Married couples have additional claiming options to maximize household benefits</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Shield className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Pension Income</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Traditional defined benefit plans for those who have them:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Payment options:</strong> Single life vs. joint & survivor; level vs. inflation-adjusted payments</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Lump sum considerations:</strong> Evaluating whether to take a pension as a lump sum or lifetime income</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>PBGC protection:</strong> Understanding the government insurance that backs private pensions</span>
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
                        <h5 className="font-semibold text-gray-900 mb-2">Annuity Income</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Insurance products that provide guaranteed income:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Single Premium Immediate Annuities (SPIAs):</strong> Convert lump sum to lifetime income immediately</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Deferred income annuities:</strong> Purchase now for income starting at a future date</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Variable annuities with income riders:</strong> Combine market participation with guaranteed income floors</span>
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
                  <Calculator className="w-5 h-5 mr-2 text-purple-700" />
                  Portfolio-Based Income Strategies
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Systematic Withdrawal Approach</h5>
                    <p className="text-sm text-gray-700">
                      Drawing down investments at a sustainable rate to create income:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>The 4% rule:</strong> Traditional guideline suggesting a 4% initial withdrawal rate adjusted for inflation</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Modern refinements:</strong> Dynamic withdrawal strategies that adjust based on market conditions</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Portfolio allocation:</strong> Maintaining appropriate asset allocation for long-term growth while providing income</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Bucket Strategy</h5>
                    <p className="text-sm text-gray-700">
                      Segmenting assets by time horizon to manage sequence-of-returns risk:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Short-term bucket:</strong> Cash and cash equivalents for 1-2 years of expenses</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Intermediate bucket:</strong> Bonds and fixed income for 3-10 years of expenses</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Long-term bucket:</strong> Growth-oriented investments for expenses beyond 10 years</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Bucket maintenance:</strong> Strategies for refilling shorter-term buckets over time</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Income-Focused Portfolio</h5>
                    <p className="text-sm text-gray-700">
                      Building a portfolio that generates regular income without depleting principal:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Dividend stocks:</strong> Quality companies with history of stable or growing dividends</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Bonds and fixed income:</strong> Government, municipal, corporate bonds and bond ladder strategies</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Income-generating alternatives:</strong> REITs, MLPs, preferred stocks, closed-end funds</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Tax considerations:</strong> Strategic placement in taxable vs. tax-advantaged accounts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Supplementary Income Sources</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Repeat className="w-5 h-5 mr-2 text-green-700" />
                  Additional Income Options
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Home Equity Strategies</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Using your home as an income source:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Reverse mortgages:</strong> Convert home equity to income while staying in your home</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Downsizing:</strong> Sell and move to a less expensive home, investing the difference</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Rental income:</strong> Converting part of your home into a rental unit</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Part-Time Work</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Benefits beyond income:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Financial impact:</strong> Reduces portfolio withdrawals during critical early retirement years</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Phased retirement:</strong> Gradually reducing work hours for smoother transition</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Social Security considerations:</strong> Understanding earnings limits before full retirement age</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Business Income</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Entrepreneurial approaches:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Consulting:</strong> Leveraging career expertise on a project basis</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Passive business investments:</strong> Silent partnerships or fractional business ownership</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Online businesses:</strong> Scalable opportunities with flexible time commitments</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Inheritance & Gifting</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Family resources:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Managing windfalls:</strong> Integrating inherited assets into your income plan</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Family support:</strong> Structured gifts from family members</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Tax implications:</strong> Understanding the tax treatment of different types of inherited assets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Building an Integrated Income Plan</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-amber-700" />
                  Strategic Planning Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">The Retirement Income Gap</h5>
                    <p className="text-sm text-gray-700">
                      Calculating how much income needs to come from your portfolio:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Step 1:</strong> Determine your expected retirement expenses</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Step 2:</strong> Calculate your guaranteed income (Social Security, pensions)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Step 3:</strong> Identify the gap that needs to be filled from portfolio and other sources</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Establishing an Income Floor</h5>
                    <p className="text-sm text-gray-700">
                      Securing essential expenses with reliable income sources:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Core expenses:</strong> Identify non-discretionary costs (housing, food, healthcare, utilities)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Income matching:</strong> Cover essential expenses with guaranteed or highly reliable income sources</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Lifestyle expenses:</strong> Fund discretionary spending from investment portfolio</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax-Efficient Withdrawal Strategy</h5>
                    <p className="text-sm text-gray-700">
                      Minimizing tax impact on retirement income:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Account sequencing:</strong> Conventional wisdom suggests taxable accounts first, then tax-deferred, then tax-free</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Tax bracket management:</strong> Strategic partial Roth conversions and harvesting capital gains/losses</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>RMD planning:</strong> Strategies to manage required minimum distributions from tax-deferred accounts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Addressing Retirement Income Risks</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Longevity risk.</strong> The possibility of outliving your assets can be addressed through lifetime income 
                  sources like annuities, delaying Social Security, and maintaining growth investments in your portfolio.
                </p>
                <p className="text-gray-700">
                  <strong>2. Inflation risk.</strong> Protecting purchasing power through inflation-adjusted income sources, 
                  growth investments, and TIPS (Treasury Inflation-Protected Securities).
                </p>
                <p className="text-gray-700">
                  <strong>3. Sequence-of-returns risk.</strong> The danger of poor market performance in early retirement years 
                  can be managed through bucket strategies, cash reserves, and flexible spending approaches.
                </p>
                <p className="text-gray-700">
                  <strong>4. Healthcare costs.</strong> Addressing potential long-term care needs through insurance, HSA accounts, 
                  and maintaining dedicated healthcare reserves.
                </p>
                <p className="text-gray-700">
                  <strong>5. Cognitive decline.</strong> Simplifying financial management over time and establishing protections 
                  against fraud and poor decision-making as you age.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of October 2024. Every retirement situation is unique, 
                  and strategies that work well for one person may not be appropriate for another. Consider working with a qualified 
                  financial advisor to develop a retirement income plan tailored to your specific circumstances and goals.
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

export default RetirementIncomePlanning; 