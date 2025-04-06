import React from 'react';
import Link from 'next/link';
import { DollarSign, AlertTriangle, ArrowRight, BriefcaseMedical, Clock, ShieldCheck, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function MoneyMarketFunds() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Money Market Funds' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Money Market Funds</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Low-Risk Investment Vehicles for Cash Management</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Money market funds are mutual funds that invest in short-term debt securities with high liquidity and minimal 
              credit risk. They offer investors a balance of safety, accessibility, and modest returns for their cash reserves.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding Money Market Funds</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-blue-700" />
                  Fundamentals of Money Market Funds
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Search className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">What Are Money Market Funds?</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Money market funds are a type of mutual fund that invests exclusively in highly liquid, short-term instruments:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Regulated investment vehicles that seek to maintain a stable Net Asset Value (NAV), typically $1 per share</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Invest in high-quality, short-term debt instruments with maturities under 13 months</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Designed to provide liquidity, preserve capital, and deliver competitive short-term yields</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <ShieldCheck className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Safety and Risk Profile</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          While considered among the safest investment options, money market funds are not entirely risk-free:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Not FDIC insured like bank deposits, though risk of principal loss is very low</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>SEC Rule 2a-7 sets strict standards for credit quality, maturity, and diversification</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Historical note: During the 2008 financial crisis, one fund "broke the buck" (fell below $1 NAV), leading to regulatory reforms</span>
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
                        <h5 className="font-semibold text-gray-900 mb-2">Liquidity and Accessibility</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Money market funds offer high liquidity, making them suitable for short-term cash needs:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Same-day or next-day access to funds in most cases</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Often provide check-writing privileges and debit card access</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>No penalties for withdrawals (unlike some CDs or time deposits)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Types of Money Market Funds</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BriefcaseMedical className="w-5 h-5 mr-2 text-purple-700" />
                  Major Money Market Fund Categories
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Government Money Market Funds</h5>
                    <p className="text-sm text-gray-700">
                      Invest primarily in U.S. Treasury securities, government agency debt, and repurchase agreements collateralized by government securities.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Risk level:</strong> Lowest among money market funds due to government backing</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Yield:</strong> Typically lower than prime money market funds</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Use case:</strong> Most conservative investors seeking maximum safety</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Prime Money Market Funds</h5>
                    <p className="text-sm text-gray-700">
                      Invest in high-quality, short-term corporate debt instruments in addition to government securities.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Risk level:</strong> Slightly higher than government funds but still very low</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Yield:</strong> Generally higher than government money market funds</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Note:</strong> Subject to potential redemption gates and liquidity fees during extreme market stress</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax-Exempt Money Market Funds</h5>
                    <p className="text-sm text-gray-700">
                      Invest in short-term municipal securities issued by state and local governments.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Risk level:</strong> Comparable to prime money market funds</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Yield:</strong> Lower pre-tax yields but may offer higher after-tax returns for those in higher tax brackets</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Tax advantage:</strong> Interest is generally exempt from federal income tax (and sometimes state and local taxes)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Treasury-Only Money Market Funds</h5>
                    <p className="text-sm text-gray-700">
                      A subset of government funds that invest exclusively in U.S. Treasury bills, notes, and bonds.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Risk level:</strong> Considered the safest of all money market funds</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Yield:</strong> Typically lowest yields among money market funds</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Tax advantage:</strong> Interest is exempt from state and local taxes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Advantages and Limitations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-700" />
                  Benefits and Drawbacks of Money Market Funds
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Advantages</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Safety:</strong> Low risk of principal loss due to conservative investments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Liquidity:</strong> Easy access to funds with no withdrawal penalties</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Better yields:</strong> Typically higher returns than traditional savings accounts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Diversification:</strong> Spread risk across many different issuers and securities</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Professional management:</strong> Expertise in selecting appropriate short-term securities</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Convenience:</strong> Check-writing privileges and easy transfers to other accounts</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Important Limitations</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700"><strong>No FDIC insurance:</strong> Unlike bank deposits, not backed by government guarantee</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700"><strong>Inflation risk:</strong> Returns may not keep pace with inflation in low-interest environments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700"><strong>Fees impact:</strong> Expense ratios can significantly reduce effective yields</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700"><strong>Potential restrictions:</strong> Prime funds may impose redemption gates during market stress</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700"><strong>Opportunity cost:</strong> Significantly lower long-term returns than stocks or bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-gray-700"><strong>Yield fluctuations:</strong> Returns vary with interest rate environment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Strategic Uses</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BriefcaseMedical className="w-5 h-5 mr-2 text-amber-700" />
                  Effective Ways to Use Money Market Funds
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Emergency Fund</h5>
                    <p className="text-sm text-gray-700">
                      Money market funds make excellent vehicles for emergency savings:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Provides quick access to funds when needed for unexpected expenses</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Low risk ensures your safety net remains intact when you need it</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Better return than a traditional savings account for funds you hope not to use</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Cash Management</h5>
                    <p className="text-sm text-gray-700">
                      Efficient ways to manage larger cash positions temporarily:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Holding proceeds from a home sale until purchasing a new property</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Storing business operating capital needed within the next 3-6 months</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Parking funds during periods of market uncertainty or while evaluating investment options</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Investment Portfolio Component</h5>
                    <p className="text-sm text-gray-700">
                      As part of a broader investment strategy:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Cash allocation in a diversified portfolio to reduce overall volatility</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Temporary holding place for rebalancing proceeds or dividend distributions</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Defensive position during periods of expected market turbulence</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Specific Financial Goals</h5>
                    <p className="text-sm text-gray-700">
                      Suitable for short-term savings objectives:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Saving for a major purchase planned within the next 1-2 years</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Setting aside money for upcoming tax payments</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Accumulating funds for an upcoming large expense like tuition payments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Choose a Money Market Fund</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Consider the expense ratio.</strong> Fees can significantly impact your returns, 
                  especially in low-interest environments. Look for funds with expense ratios below 0.25%.
                </p>
                <p className="text-gray-700">
                  <strong>2. Examine the yield.</strong> Compare the 7-day SEC yield among similar funds, 
                  but remember that past yields don't guarantee future returns.
                </p>
                <p className="text-gray-700">
                  <strong>3. Assess your tax situation.</strong> If you're in a high tax bracket, 
                  tax-exempt money market funds might provide better after-tax returns despite lower headline yields.
                </p>
                <p className="text-gray-700">
                  <strong>4. Review fund composition.</strong> Check what types of securities the fund invests in 
                  and ensure they align with your risk tolerance.
                </p>
                <p className="text-gray-700">
                  <strong>5. Consider convenience features.</strong> Minimum investment requirements, check-writing 
                  privileges, and integration with your existing accounts can impact usability.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of September 2024. Money market funds are not 
                  FDIC insured and can lose value, though they are designed to maintain a stable share price. While they 
                  generally have low risk, actual returns will vary with market conditions. Consider your financial 
                  goals, risk tolerance, and time horizon before investing.
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

export default MoneyMarketFunds; 