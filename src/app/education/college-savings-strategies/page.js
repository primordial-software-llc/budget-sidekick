import React from 'react';
import Link from 'next/link';
import { GraduationCap, AlertTriangle, PiggyBank, ArrowRight, Calculator, TrendingUp, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function CollegeSavingsStrategies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'College Savings Strategies' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">College Savings Strategies</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Planning for Education Expenses</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Saving for education requires careful planning and consideration of various savings vehicles. 
              Understanding your options can help you make informed decisions about funding future education expenses.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                The cost of higher education continues to rise, and starting early with a solid savings strategy can help reduce the need for student loans and provide more options for your child's education.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Education Savings Options</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <PiggyBank className="w-5 h-5 mr-2 text-blue-700" />
                    529 Plans
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Tax Advantages</h5>
                      <p className="text-sm text-gray-700">
                        Earnings grow tax-free, and withdrawals are tax-free when used for qualified education expenses.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Flexibility</h5>
                      <p className="text-sm text-gray-700">
                        Can be used for tuition, room and board, books, and other qualified expenses at eligible institutions.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Contribution Limits</h5>
                      <p className="text-sm text-gray-700">
                        High contribution limits and potential state tax benefits for contributions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-purple-700" />
                    Other Options
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Coverdell ESA</h5>
                      <p className="text-sm text-gray-700">
                        Tax-advantaged savings account for education expenses, with more investment options.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">UTMA/UGMA</h5>
                      <p className="text-sm text-gray-700">
                        Custodial accounts that can be used for education or other expenses.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Roth IRA</h5>
                      <p className="text-sm text-gray-700">
                        Can be used for education expenses, though primarily designed for retirement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Savings Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-indigo-700" />
                  Planning Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Time Horizon</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Start early to maximize growth</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Consider age-based portfolios</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Adjust risk as college approaches</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Contribution Strategy</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Set up automatic contributions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Consider gift contributions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Take advantage of state tax benefits</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-amber-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Estimate Costs</h5>
                    <p className="text-sm text-gray-700">
                      Research current college costs and project future expenses based on inflation.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Choose Accounts</h5>
                    <p className="text-sm text-gray-700">
                      Select the savings vehicles that best fit your situation and goals.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Set Up Contributions</h5>
                    <p className="text-sm text-gray-700">
                      Establish regular contribution amounts and automate savings.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Monitor Progress</h5>
                    <p className="text-sm text-gray-700">
                      Regularly review and adjust your savings strategy as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="college-savings-strategies"
              message="This content is educational in nature and updated as of {{year}}. Tax laws, contribution limits, and account rules for education savings plans change over time. College costs and financial aid policies may also vary by institution. Please consult with a qualified financial advisor or tax professional before implementing any college savings strategy."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CollegeSavingsStrategies; 