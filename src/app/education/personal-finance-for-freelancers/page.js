import React from 'react';
import Link from 'next/link';
import { BookOpenIcon, AlertTriangle, Briefcase, DollarSign, Calculator, PiggyBank, Stethoscope, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function PersonalFinanceForFreelancers() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Personal Finance for Freelancers' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Personal Finance for Freelancers</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Managing finances as a freelancer presents unique challenges and opportunities. Unlike traditional employees with steady paychecks, 
              freelancers navigate variable income, self-employment taxes, and the responsibility of creating their own benefits package. 
              This guide will help you establish financial stability in the gig economy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
                <DollarSign className="h-10 w-10 text-blue-600 mb-2" />
                <p className="font-medium text-blue-800">78% of freelancers report income fluctuations as their biggest financial challenge</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
                <Calculator className="h-10 w-10 text-blue-600 mb-2" />
                <p className="font-medium text-blue-800">Self-employed individuals pay both employer and employee portions of payroll taxes</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <DollarSign className="h-7 w-7 text-blue-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Managing Variable Income</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Irregular income is one of the biggest challenges for freelancers. Here's how to create stability:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded">Calculate your baseline monthly expenses</li>
              <li className="bg-gray-50 p-2 rounded">Build a larger emergency fund (6-12 months recommended)</li>
              <li className="bg-gray-50 p-2 rounded">Create an income buffer in a separate account</li>
              <li className="bg-gray-50 p-2 rounded">Pay yourself a consistent "salary" from your business earnings</li>
              <li className="bg-gray-50 p-2 rounded">Track income patterns to anticipate slow periods</li>
            </ul>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <Calculator className="h-7 w-7 text-blue-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Tax Planning Strategies</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Self-employment taxes require careful planning and discipline:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded">Set aside 25-30% of income for taxes</li>
              <li className="bg-gray-50 p-2 rounded">Make quarterly estimated tax payments</li>
              <li className="bg-gray-50 p-2 rounded">Track business expenses meticulously</li>
              <li className="bg-gray-50 p-2 rounded">Understand eligible deductions (home office, equipment, insurance)</li>
              <li className="bg-gray-50 p-2 rounded">Consider working with a tax professional familiar with freelance taxes</li>
            </ul>

            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Learn strategies to minimize taxes on your investments while maximizing your long-term returns.
              </p>
              <Link href="/education/tax-efficient-investing" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
                Explore Tax-Efficient Investing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <PiggyBank className="h-7 w-7 text-blue-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Retirement Planning for Freelancers</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Without employer-sponsored plans, freelancers need to be proactive about retirement:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Solo 401(k)</h4>
                <p className="text-sm text-gray-700">High contribution limits for self-employed individuals with no employees</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">SEP IRA</h4>
                <p className="text-sm text-gray-700">Simplified Employee Pension for easier administration and high contribution limits</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Traditional/Roth IRA</h4>
                <p className="text-sm text-gray-700">Good starting options with lower contribution limits but flexible tax advantages</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Automated Strategy</h4>
                <p className="text-sm text-gray-700">Set up automatic transfers during profitable periods to maintain consistency</p>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-gray-800 m-0">Recommended Reading</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                As a freelancer with fluctuating income, strategic retirement withdrawals will be equally important.
              </p>
              <Link href="/education/retirement-withdrawal-strategies" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
                Explore Retirement Withdrawal Strategies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <Stethoscope className="h-7 w-7 text-blue-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Health Insurance and Benefits</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Creating your own benefits package is essential:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded">Explore marketplace health insurance options</li>
              <li className="bg-gray-50 p-2 rounded">Consider a Health Savings Account (HSA) with a high-deductible plan</li>
              <li className="bg-gray-50 p-2 rounded">Research professional associations for group insurance rates</li>
              <li className="bg-gray-50 p-2 rounded">Investigate disability insurance to protect your income</li>
              <li className="bg-gray-50 p-2 rounded">Establish a business entity for potential tax advantages</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Getting Started</h3>
              <p className="mb-4 text-blue-50">
                Prioritize these steps to strengthen your freelance finances:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-blue-50">Separate business and personal finances with dedicated accounts</li>
                <li className="text-blue-50">Create a system for tax withholding on all income</li>
                <li className="text-blue-50">Build an extended emergency fund (6-12 months)</li>
                <li className="text-blue-50">Set up a retirement account and automate contributions</li>
                <li className="text-blue-50">Secure appropriate insurance coverage</li>
              </ol>
              <Link href="/education/emergency-fund-basics" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Learn about emergency funds <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 py-4 px-5 bg-amber-50 rounded-lg border border-amber-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of October 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
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

export default PersonalFinanceForFreelancers; 