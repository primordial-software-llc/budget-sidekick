import React from 'react';
import Link from 'next/link';
import { Heart, AlertTriangle, ArrowRight, DollarSign, Calculator, Gift, Calendar, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function CharitableGivingStrategies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Charitable Giving Strategies' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Charitable Giving Strategies</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Maximize Your Impact While Optimizing Tax Benefits</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Charitable giving allows you to support causes you care about while potentially reducing your tax burden. 
              Strategic approaches to philanthropy can help maximize both your impact and financial benefits, creating 
              a win-win for charitable organizations and your overall financial plan.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Beyond the personal satisfaction of supporting causes you believe in, charitable giving can be a powerful 
                tool in your financial planning arsenal. With thoughtful timing and structuring of donations, you can 
                potentially reduce income taxes, minimize capital gains, and even create a lasting philanthropic legacy 
                while supporting organizations doing important work.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Direct Giving Strategies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-blue-700" />
                    Cash Donations
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Tax Deduction Basics</h5>
                      <p className="text-sm text-gray-700">
                        Cash donations to qualified 501(c)(3) organizations are tax-deductible if you itemize deductions. 
                        For 2024, you can generally deduct up to 60% of your adjusted gross income (AGI) for cash donations.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Documentation Requirements</h5>
                      <p className="text-sm text-gray-700">
                        For donations under $250, a bank record, receipt, or other reliable written record is sufficient. 
                        For donations of $250 or more, you need a written acknowledgment from the charity before filing 
                        your tax return.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Bunching Strategy</h5>
                      <p className="text-sm text-gray-700">
                        With the higher standard deduction, consider "bunching" multiple years of donations into a single 
                        tax year to exceed the standard deduction threshold and maximize tax benefits. For example, 
                        donating two years' worth of planned contributions in a single year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Gift className="w-5 h-5 mr-2 text-green-700" />
                    Appreciated Securities
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Double Tax Benefit</h5>
                      <p className="text-sm text-gray-700">
                        Donating stocks, mutual funds, or other investments that have appreciated in value provides two tax advantages:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span>You receive a tax deduction for the full fair market value (if held {'>'}1 year)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span>You avoid capital gains tax you would have paid if you sold the securities</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Deduction Limits</h5>
                      <p className="text-sm text-gray-700">
                        You can deduct donations of appreciated long-term capital gain property up to 30% of your AGI. 
                        Unused deductions can be carried forward for up to five additional years.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Best Candidates for Donation</h5>
                      <p className="text-sm text-gray-700">
                        Consider donating securities with the largest unrealized gains and longest holding periods. This 
                        maximizes the capital gains taxes you avoid while still allowing you to maintain your investment 
                        allocation by repurchasing similar assets with cash.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Planned Giving Options</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-700" />
                  Structured Approaches
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Calculator className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Donor-Advised Funds (DAFs)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          A donor-advised fund allows you to make a charitable contribution, receive an immediate tax deduction, 
                          and then recommend grants from the fund to charities over time. This effectively separates the timing 
                          of your tax deduction from your charitable impact.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Immediate tax deduction
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Flexible granting timeline
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Lower administrative burden
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Heart className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Charitable Remainder Trusts (CRTs)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          A CRT is an irrevocable trust that generates income for you or your beneficiaries for a specified period, 
                          with the remainder going to charity. You receive a partial tax deduction when you fund the trust, based 
                          on the present value of the future charitable gift.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Income stream for life or term
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Partial upfront tax deduction
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Potential capital gains avoidance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <FileText className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Qualified Charitable Distributions (QCDs)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          If you're 70½ or older, you can make direct transfers of up to $100,000 annually from an IRA to qualified 
                          charities. These distributions count toward satisfying your required minimum distribution (RMD) but are 
                          excluded from your taxable income.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Reduces taxable income
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Satisfies RMD requirements
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            No itemization needed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Legacy Giving Options</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Gift className="w-5 h-5 mr-2 text-amber-700" />
                    Charitable Bequests
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Will or Trust Provisions</h5>
                      <p className="text-sm text-gray-700">
                        Including charitable organizations in your will or trust allows you to make significant gifts that might not 
                        be possible during your lifetime. You can specify exact amounts, percentages of your estate, or particular 
                        assets to be donated.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Estate Tax Benefits</h5>
                      <p className="text-sm text-gray-700">
                        Charitable bequests are fully deductible from your taxable estate, potentially reducing estate taxes for 
                        larger estates. This allows more of your assets to go to your chosen beneficiaries and causes rather than to taxes.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Specific Language</h5>
                      <p className="text-sm text-gray-700">
                        Work with an estate planning attorney to ensure your charitable intentions are clearly expressed. Consider 
                        including the charity's legal name, address, and tax ID number to prevent any confusion about your wishes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-indigo-700" />
                    Charitable Foundations
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Private Foundations</h5>
                      <p className="text-sm text-gray-700">
                        For substantial philanthropic goals, establishing a private foundation gives you maximum control over grant-making 
                        and creates a lasting legacy. However, they require significant setup costs, ongoing administration, and have 
                        stricter regulations including a 5% annual distribution requirement.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Community Foundation Funds</h5>
                      <p className="text-sm text-gray-700">
                        As an alternative to starting your own foundation, you can establish a named fund at a community foundation. 
                        This provides many of the benefits of a private foundation with much lower costs and administrative burdens.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Charitable Lead Trusts</h5>
                      <p className="text-sm text-gray-700">
                        The reverse of a remainder trust: a charity receives income for a specified period, after which the remaining 
                        assets pass to your heirs. This can reduce gift and estate taxes on assets transferred to your beneficiaries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Strategic Planning Tips</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-teal-700" />
                  Maximizing Your Impact
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Timing Considerations:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Donate in high-income years to maximize tax benefits</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Consider charitable giving when expecting a large capital gain</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Make year-end donations before December 31 for current-year deductions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Plan QCDs early in the year to ensure proper processing</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Professional Guidance:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Consult with a tax professional for personalized strategies</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Work with a financial advisor to integrate giving with your overall plan</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Involve an estate attorney for complex giving structures</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Explore planned giving programs at your favorite charities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of May 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
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

export default CharitableGivingStrategies; 