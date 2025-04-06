import React from 'react';
import Link from 'next/link';
import { BookOpenIcon, AlertTriangle, Heart, Clock, DollarSign, Shield, Home, ArrowRight, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function LongTermCarePlanning() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Long-Term Care Planning' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <h1 className="text-3xl font-bold text-gray-900">Long-Term Care Planning</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Long-term care planning is a critical but often overlooked aspect of comprehensive financial planning. 
              As life expectancy increases, many individuals will need assistance with daily activities for extended periods. 
              Understanding your options and developing a strategy early can help protect your assets and ensure you receive quality care when needed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-rose-600 mb-2" />
                <p className="font-medium text-rose-800">70% of people over 65 will need long-term care services</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 flex flex-col items-center text-center">
                <DollarSign className="h-10 w-10 text-rose-600 mb-2" />
                <p className="font-medium text-rose-800">The average nursing home costs $8,500+ per month</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 flex flex-col items-center text-center">
                <Activity className="h-10 w-10 text-rose-600 mb-2" />
                <p className="font-medium text-rose-800">Medicare only covers limited short-term skilled care</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Heart className="h-7 w-7 text-rose-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding Long-Term Care</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Long-term care encompasses a range of services that address health and personal care needs over an extended period:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded">Assistance with activities of daily living (bathing, dressing, eating)</li>
              <li className="bg-gray-50 p-2 rounded">Skilled nursing care and medical monitoring</li>
              <li className="bg-gray-50 p-2 rounded">Memory care for cognitive impairments</li>
              <li className="bg-gray-50 p-2 rounded">Can be provided at home, in assisted living facilities, or nursing homes</li>
              <li className="bg-gray-50 p-2 rounded">Often required for months or years, not just short recovery periods</li>
            </ul>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <DollarSign className="h-7 w-7 text-rose-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">The Cost of Long-Term Care</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Long-term care expenses can be substantial and vary significantly by location and type of care:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Care Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly Cost Range</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Key Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Home Health Aide</td>
                    <td className="px-4 py-3 text-sm text-gray-800">$4,500-$5,000+</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Allows aging in place, may require home modifications</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Assisted Living</td>
                    <td className="px-4 py-3 text-sm text-gray-800">$4,500-$6,500+</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Balance of independence and support, social environment</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Nursing Home (Private)</td>
                    <td className="px-4 py-3 text-sm text-gray-800">$8,500-$10,000+</td>
                    <td className="px-4 py-3 text-sm text-gray-600">24/7 care, highest level of medical support</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mb-4 bg-rose-50 p-3 rounded-lg border-l-4 border-rose-300">
              <strong>Important:</strong> Medicare coverage is limited to short-term, skilled care only, and costs typically increase 3-5% annually, making long-term planning essential.
            </p>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <Shield className="h-7 w-7 text-rose-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Long-Term Care Insurance</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Traditional and hybrid insurance products can help cover long-term care expenses:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                <h4 className="font-semibold text-rose-800 mb-2">Traditional LTC Insurance</h4>
                <p className="text-sm text-gray-700">Dedicated coverage with premiums that may increase over time</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                <h4 className="font-semibold text-rose-800 mb-2">Hybrid Life/LTC Policies</h4>
                <p className="text-sm text-gray-700">Combine life insurance with LTC benefits for more versatility</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                <h4 className="font-semibold text-rose-800 mb-2">Annuities with LTC Riders</h4>
                <p className="text-sm text-gray-700">Provide LTC benefits while guaranteeing income</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                <h4 className="font-semibold text-rose-800 mb-2">Key Policy Features</h4>
                <p className="text-sm text-gray-700">Benefit amount, period, elimination period, inflation protection</p>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-rose-600" />
                <h4 className="font-semibold text-gray-800 m-0">Recommended Reading</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding different types of insurance is essential before purchasing long-term care coverage.
              </p>
              <Link href="/education/insurance-basics" className="inline-flex items-center gap-1 text-rose-600 font-medium hover:underline">
                Review Insurance Basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <Home className="h-7 w-7 text-rose-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Self-Funding Strategies</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Some individuals choose to self-insure for long-term care needs:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded">Dedicated savings in taxable accounts or Health Savings Accounts (HSAs)</li>
              <li className="bg-gray-50 p-2 rounded">Home equity through reverse mortgages or home sales</li>
              <li className="bg-gray-50 p-2 rounded">Retirement account withdrawals or systematic liquidation</li>
              <li className="bg-gray-50 p-2 rounded">Income-producing investments designed for healthcare expenses</li>
              <li className="bg-gray-50 p-2 rounded">Requires significant assets to fully self-insure</li>
            </ul>

            <div className="bg-rose-50 p-5 rounded-lg border border-rose-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-rose-600" />
                <h4 className="font-semibold text-rose-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                A Health Savings Account (HSA) can be a powerful tool for both healthcare expenses and long-term care planning.
              </p>
              <Link href="/education/health-savings-accounts" className="inline-flex items-center gap-1 text-rose-600 font-medium hover:underline">
                Learn about Health Savings Accounts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Getting Started</h3>
              <p className="mb-4 text-rose-50">
                Take these steps to develop your long-term care strategy:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-rose-50">Evaluate your family health history and longevity</li>
                <li className="text-rose-50">Research care costs in your preferred location</li>
                <li className="text-rose-50">Assess your financial capacity to self-fund or need for insurance</li>
                <li className="text-rose-50">Consult with a financial advisor who specializes in long-term care planning</li>
                <li className="text-rose-50">Involve family members in discussions about preferences and expectations</li>
              </ol>
              <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 bg-white text-rose-700 px-4 py-2 rounded-md font-medium hover:bg-rose-50 transition-colors">
                Learn about estate planning <ArrowRight className="h-4 w-4" />
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

export default LongTermCarePlanning; 