import React from 'react';
import Link from 'next/link';
import { Home, AlertTriangle, ArrowRight, Percent, Clock, Landmark, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function MortgageTypesExplained() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Mortgage Types Explained' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Home className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Mortgage Types Explained</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Navigating Your Home Financing Options</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Choosing the right mortgage can save you thousands of dollars over the life of your loan. 
              Understanding the different types of mortgages available will help you make the best decision 
              for your financial situation and homeownership goals.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                A mortgage is likely the largest debt you'll ever take on. The type you choose affects your monthly payment, 
                total interest paid, and how long you'll be making payments. Small differences in terms can have big financial impacts.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Conventional Mortgage Types</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Percent className="w-5 h-5 mr-2 text-blue-700" />
                    Fixed-Rate Mortgages
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">30-Year Fixed</h5>
                      <p className="text-sm text-gray-700">
                        The most common mortgage type with unchanging interest rates and monthly payments for the entire 30-year term.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Lower monthly payments
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Higher total interest
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">15-Year Fixed</h5>
                      <p className="text-sm text-gray-700">
                        Higher monthly payments but with substantial interest savings over the life of the loan and faster equity building.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Higher monthly payments
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Lower total interest
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">20-Year Fixed</h5>
                      <p className="text-sm text-gray-700">
                        A middle ground between 15 and 30-year terms, offering a balance of monthly payment size and interest paid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-purple-700" />
                    Adjustable-Rate Mortgages (ARMs)
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">5/1 ARM</h5>
                      <p className="text-sm text-gray-700">
                        Fixed rate for the first 5 years, then adjusts annually based on market rates. 
                        Often starts with lower rates than fixed-rate mortgages.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">7/1 and 10/1 ARMs</h5>
                      <p className="text-sm text-gray-700">
                        Similar to 5/1 ARMs but with longer initial fixed periods of 7 or 10 years before adjustments begin.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">ARM Caps</h5>
                      <p className="text-sm text-gray-700">
                        Limits on how much rates can increase in a single adjustment, annually, and over the life of the loan.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Initial cap (first adjustment)
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Periodic cap (each adjustment)
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Lifetime cap (total increase)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Government-Backed Loans</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-teal-700" />
                  Special Program Mortgages
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Landmark className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">FHA Loans</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Backed by the Federal Housing Administration, these loans are designed for borrowers with lower credit scores 
                          or smaller down payments (as low as 3.5%).
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Lower down payment
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Mortgage insurance required
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            More flexible credit requirements
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Shield className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">VA Loans</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Available to eligible veterans, active duty service members, and some military spouses. 
                          Guaranteed by the Department of Veterans Affairs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            No down payment required
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            No mortgage insurance
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Competitive interest rates
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Home className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">USDA Loans</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Designed for rural and some suburban homebuyers with moderate to low incomes. 
                          Guaranteed by the U.S. Department of Agriculture.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            No down payment required
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Lower-than-average fees
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                            Geographic and income restrictions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Special Mortgage Types</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-amber-700" />
                    Alternative Options
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Jumbo Loans</h5>
                      <p className="text-sm text-gray-700">
                        Loans that exceed the conforming loan limits set by Fannie Mae and Freddie Mac. 
                        Generally require larger down payments and excellent credit.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Interest-Only Mortgages</h5>
                      <p className="text-sm text-gray-700">
                        Allow payment of only interest for a specified period, followed by larger payments covering principal and interest.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Balloon Mortgages</h5>
                      <p className="text-sm text-gray-700">
                        Feature smaller monthly payments but require a large lump-sum payment at the end of a short loan term.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-rose-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-rose-700" />
                    Refinancing Options
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Rate-and-Term Refinance</h5>
                      <p className="text-sm text-gray-700">
                        Replaces your existing mortgage with a new one that has a different interest rate, term, or both.
                      </p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Cash-Out Refinance</h5>
                      <p className="text-sm text-gray-700">
                        Allows you to borrow more than you currently owe and receive the difference in cash.
                      </p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Streamline Refinance</h5>
                      <p className="text-sm text-gray-700">
                        Simplified refinancing process for existing FHA or VA loans with reduced paperwork and faster processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Choosing the Right Mortgage</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-indigo-700" />
                  Decision Factors
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Consider a Fixed-Rate Mortgage If:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You plan to stay in your home for many years</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You prefer stable, predictable payments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Current interest rates are low</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You have a steady, reliable income</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Consider an ARM If:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You plan to move or refinance within a few years</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Current interest rates are high and expected to fall</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You want lower initial payments to qualify for a larger loan</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">You expect your income to increase over time</span>
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

export default MortgageTypesExplained; 