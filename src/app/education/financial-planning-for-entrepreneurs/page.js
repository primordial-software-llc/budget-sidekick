import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Briefcase, BarChart2, DollarSign, ArrowRight, Calculator, PiggyBank, CreditCard, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function FinancialPlanningForEntrepreneurs() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Financial Planning for Entrepreneurs' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Briefcase className="h-8 w-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-900">Financial Planning for Entrepreneurs</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Business owners face unique financial challenges that require specialized planning strategies. Managing both personal 
              and business finances effectively is critical to building sustainable wealth and ensuring long-term success for 
              your ventures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
                <TrendingUp className="h-10 w-10 text-indigo-600 mb-2" />
                <p className="font-medium text-indigo-800">78% of small businesses fail due to cash flow problems</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
                <Calculator className="h-10 w-10 text-indigo-600 mb-2" />
                <p className="font-medium text-indigo-800">Self-employed individuals have 15.3% self-employment tax obligations</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
                <PiggyBank className="h-10 w-10 text-indigo-600 mb-2" />
                <p className="font-medium text-indigo-800">Only 40% of small business owners invest in retirement accounts</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <DollarSign className="h-7 w-7 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Business and Personal Finance Separation</h2>
            </div>
            <p className="text-gray-600 mb-4">
              One of the most fundamental principles for entrepreneurial financial health is maintaining clear separation between business and personal finances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Separate accounts:</strong> Maintain distinct business checking, savings, and credit accounts from personal ones</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Business entity:</strong> Establish the appropriate legal structure (LLC, S-Corp, etc.) for liability protection and tax advantages</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Consistent compensation:</strong> Pay yourself a regular salary or owner's draw rather than taking irregular amounts</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Clean accounting:</strong> Track all business expenses with proper documentation to maximize legitimate deductions</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Professional support:</strong> Work with accountants and bookkeepers familiar with small business needs</li>
            </ul>

            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                As an entrepreneur, understanding how to optimize your credit cards for both business and personal use is essential.
              </p>
              <Link href="/education/credit-card-optimization" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
                Explore Credit Card Optimization <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <Calculator className="h-7 w-7 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Tax Planning Strategies</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Effective tax planning can significantly impact your overall financial success as a business owner:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 h-full">
                <h4 className="font-semibold text-indigo-800 mb-2">Business Structure Optimization</h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Sole proprietorship: Simplest but offers no liability protection</li>
                  <li>LLC: Limited liability with pass-through taxation</li>
                  <li>S-Corporation: Can reduce self-employment taxes</li>
                  <li>C-Corporation: Beneficial for reinvesting significant profits</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 h-full">
                <h4 className="font-semibold text-indigo-800 mb-2">Retirement Account Tax Advantages</h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Solo 401(k): Higher contribution limits, potential Roth option</li>
                  <li>SEP IRA: Easy setup, generous contribution limits</li>
                  <li>Defined Benefit Plan: Highest contribution limits for high earners</li>
                  <li>Health Savings Account (HSA): Triple tax advantage</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 h-full">
                <h4 className="font-semibold text-indigo-800 mb-2">Deduction Strategies</h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Home office deduction: Simplified or regular method</li>
                  <li>Travel, meals, and entertainment: Follow current IRS rules</li>
                  <li>Vehicle expenses: Standard mileage rate or actual expenses</li>
                  <li>Health insurance premiums: Potential above-the-line deduction</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 h-full">
                <h4 className="font-semibold text-indigo-800 mb-2">Timing Strategies</h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Income shifting: Time income recognition strategically</li>
                  <li>Expense management: Accelerate or defer based on tax situation</li>
                  <li>Equipment purchases: Section 179 deduction or bonus depreciation</li>
                  <li>Quarterly estimates: Pay appropriate amounts to avoid penalties</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-indigo-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding tax-advantaged investment accounts can help reduce your overall tax burden.
              </p>
              <Link href="/education/tax-advantaged-accounts" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
                Explore Tax-Advantaged Accounts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <BarChart2 className="h-7 w-7 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Cash Flow Management</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Maintaining healthy cash flow is critical to business survival and growth:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Strategy</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Cash flow forecasting</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Create 13-week rolling cash flow projections to anticipate shortfalls and surpluses</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Accounts receivable management</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Implement clear payment terms, offer early payment discounts, follow up on late payments</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Inventory optimization</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Minimize inventory holding costs while maintaining adequate stock levels</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Expense management</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Regularly review recurring expenses, negotiate with vendors, eliminate unnecessary costs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Credit line preparation</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Establish lines of credit before they're needed to bridge temporary cash flow gaps</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mb-4 bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-300">
              <strong>Important:</strong> Cash reserves for a business should typically be higher than personal emergency funds - aim for 3-6 months of operating expenses plus funds for planned growth initiatives.
            </p>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <PiggyBank className="h-7 w-7 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Retirement and Exit Planning</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Business owners need specific strategies for long-term wealth building and eventual business transition:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Business valuation:</strong> Regularly assess your business's value and factors that could increase it</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Diversification:</strong> Build wealth outside your business to reduce concentration risk</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Succession planning:</strong> Develop a clear plan for business transition (family succession, management buyout, sale)</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Retirement funding:</strong> Maximize tax-advantaged retirement accounts available to business owners</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Estate planning:</strong> Create a comprehensive plan for business continuity and wealth transfer</li>
            </ul>

            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Estate planning is crucial for business owners to ensure smooth transition of both personal and business assets.
              </p>
              <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
                Learn about Estate Planning Basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Financial Planning Checklist for Entrepreneurs</h3>
              <p className="mb-4 text-indigo-50">
                Review these essential elements of a comprehensive financial plan for business owners:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-indigo-50">Establish clear separation between business and personal finances</li>
                <li className="text-indigo-50">Create a tax optimization strategy for your business structure</li>
                <li className="text-indigo-50">Build business cash reserves and a personal emergency fund</li>
                <li className="text-indigo-50">Implement retirement planning specific to business owners</li>
                <li className="text-indigo-50">Develop a clear business succession and exit strategy</li>
              </ol>
              <Link href="/education/personal-finance-for-freelancers" className="inline-flex items-center gap-1 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Compare with Freelancer Planning <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 py-4 px-5 bg-amber-50 rounded-lg border border-amber-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of November 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
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

export default FinancialPlanningForEntrepreneurs; 