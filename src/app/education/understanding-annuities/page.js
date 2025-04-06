import React from 'react';
import Link from 'next/link';
import { Clock, AlertTriangle, ArrowRight, DollarSign, ShieldCheck, BarChart2, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function UnderstandingAnnuities() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Understanding Annuities' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Understanding Annuities</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Exploring Guaranteed Income Options for Retirement</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Annuities are financial products that can provide guaranteed income streams, typically for retirement. 
              Understanding their features, benefits, and potential drawbacks is essential before considering them as part 
              of your retirement strategy.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">What Are Annuities?</h3>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-8">
              <p className="text-gray-700 mb-4">
                An annuity is a contract between you and an insurance company where you make a lump sum payment or series of payments in 
                exchange for regular disbursements beginning either immediately or at some point in the future. Annuities are primarily 
                designed to provide a steady income stream during retirement and can help ensure you don't outlive your assets.
              </p>
              <p className="text-gray-700">
                Annuities involve transferring risk to an insurance company. In exchange for your premium payments, the insurer takes on 
                the obligation to pay you according to the terms of your contract, which may include guaranteed income for life.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Types of Annuities</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-700" />
                    By Payout Timing
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Immediate Annuities</h5>
                      <p className="text-sm text-gray-700">
                        Begin making income payments to you very shortly after you make your initial investment, typically within one year. 
                        These are often purchased by people who are already in retirement or very close to it.
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Best for:</strong> Those already retired who need income now</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Also called:</strong> Single Premium Immediate Annuities (SPIAs)</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Deferred Annuities</h5>
                      <p className="text-sm text-gray-700">
                        Delay income payments until a future date that you choose. These annuities have an accumulation phase (when your 
                        money potentially grows) and a distribution phase (when you receive payments).
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Best for:</strong> Those planning for future retirement income</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span><strong>Tax treatment:</strong> Grow tax-deferred until withdrawal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BarChart2 className="w-5 h-5 mr-2 text-purple-700" />
                    By Investment Approach
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Fixed Annuities</h5>
                      <p className="text-sm text-gray-700">
                        Provide a guaranteed interest rate on your investment for a specific period. The insurance company commits to a minimum 
                        interest rate and payments of a specified amount.
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Risk level:</strong> Low - principal protection with guaranteed rate</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Best for:</strong> Conservative investors seeking predictability</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Variable Annuities</h5>
                      <p className="text-sm text-gray-700">
                        Allow you to invest in a range of sub-accounts (similar to mutual funds). Your returns and eventual payout depend on 
                        the performance of these investments.
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Risk level:</strong> Higher - investment performance affects return</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Best for:</strong> Those seeking growth potential with some guarantees</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Indexed Annuities</h5>
                      <p className="text-sm text-gray-700">
                        Offer returns based on the performance of a market index, such as the S&P 500, while typically providing some 
                        downside protection. Returns are usually capped or limited by participation rates.
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Risk level:</strong> Medium - limited downside with capped upside</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                          <span><strong>Best for:</strong> Those seeking market exposure with less risk</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Potential Benefits of Annuities</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-green-700" />
                  Advantages to Consider
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Guaranteed Income for Life</h5>
                        <p className="text-sm text-gray-700">
                          Many annuities can provide income that you cannot outlive, helping to address one of the biggest concerns in retirement planning: 
                          longevity risk. This guaranteed income can provide peace of mind and stable support for essential expenses.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <ShieldCheck className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Tax-Deferred Growth</h5>
                        <p className="text-sm text-gray-700">
                          Earnings within an annuity grow tax-deferred until withdrawal, potentially allowing your money to compound more efficiently 
                          over time. This can be particularly valuable if you've already maxed out other tax-advantaged retirement accounts.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Info className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Optional Living Benefits</h5>
                        <p className="text-sm text-gray-700">
                          Many annuities offer riders (at additional cost) that provide enhanced benefits such as guaranteed minimum withdrawal benefits, 
                          death benefits for heirs, or income that increases to help offset inflation. These can provide additional security for specific concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Potential Drawbacks to Consider</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-red-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                  Important Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Fees and Expenses</h5>
                    <p className="text-sm text-gray-700">
                      Annuities often come with various fees, including administrative fees, mortality and expense risk charges, investment management 
                      fees, and rider costs. Variable annuities in particular can have high total expense ratios that may significantly reduce returns.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Limited Liquidity</h5>
                    <p className="text-sm text-gray-700">
                      Most annuities impose surrender charges for withdrawals within the first several years (often 5-10 years). Additionally, 
                      withdrawals before age 59½ may incur a 10% IRS tax penalty. Consider your liquidity needs carefully before purchasing.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Inflation Risk</h5>
                    <p className="text-sm text-gray-700">
                      Fixed payment streams from annuities may lose purchasing power over time due to inflation. While some annuities offer 
                      inflation protection features, these typically come at an additional cost and may reduce your initial income amount.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Insurer Risk</h5>
                    <p className="text-sm text-gray-700">
                      Annuity guarantees are backed by the financial strength and claims-paying ability of the issuing insurance company. 
                      Unlike bank products, annuities are not FDIC insured, though state guaranty associations provide some protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Is an Annuity Right for You?</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-indigo-700" />
                  Suitability Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Annuities May Be Suitable If You:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Want guaranteed income you can't outlive</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Have maxed out other tax-advantaged accounts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Seek to diversify your retirement income sources</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Are concerned about market volatility affecting retirement</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Value predictable income over liquidity or growth</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Annuities May NOT Be Suitable If You:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Need immediate access to all your investment funds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Haven't yet maxed out 401(k)s, IRAs, or HSAs</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Are concerned primarily about maximizing growth</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Have limited retirement savings</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Are sensitive to high fees and complex products</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Questions to Ask Before Purchasing</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. What are the total fees and charges?</strong> Request a complete breakdown of all costs, including surrender charges, 
                  mortality and expense fees, administration fees, and rider costs.
                </p>
                <p className="text-gray-700">
                  <strong>2. What is the surrender period and associated penalties?</strong> Understand how long your money will be tied up and 
                  what penalties you'll face for early withdrawals.
                </p>
                <p className="text-gray-700">
                  <strong>3. How financially strong is the insurance company?</strong> Check ratings from independent agencies like A.M. Best, 
                  Standard & Poor's, Moody's, and Fitch.
                </p>
                <p className="text-gray-700">
                  <strong>4. How will the income payments be taxed?</strong> Understand the tax implications of your specific annuity type and payment structure.
                </p>
                <p className="text-gray-700">
                  <strong>5. What happens to the annuity when I die?</strong> Understand the death benefits and whether your beneficiaries will receive 
                  any remaining value.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of June 2024. Annuities are complex financial products with 
                  significant implications for your retirement planning. Always consult with a qualified financial professional who can provide 
                  personalized advice based on your specific situation before purchasing an annuity.
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

export default UnderstandingAnnuities; 