import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Laptop, Globe, DollarSign, ArrowRight, CreditCard, Calculator, FileText, Map } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function FinancialPlanningForDigitalNomads() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Financial Planning for Digital Nomads' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Laptop className="h-8 w-8 text-purple-600" />
              <h1 className="text-3xl font-bold text-gray-900">Financial Planning for Digital Nomads</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Digital nomads face unique financial challenges and opportunities as they navigate working remotely 
              across different countries. From managing multiple currencies to understanding international tax 
              obligations, proper financial planning is essential for a sustainable nomadic lifestyle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
                <Globe className="h-10 w-10 text-purple-600 mb-2" />
                <p className="font-medium text-purple-800">35 million digital nomads worldwide as of 2023</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
                <DollarSign className="h-10 w-10 text-purple-600 mb-2" />
                <p className="font-medium text-purple-800">Currency exchange can cost 2-7% in hidden fees</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
                <FileText className="h-10 w-10 text-purple-600 mb-2" />
                <p className="font-medium text-purple-800">Digital nomads may be subject to taxation in multiple jurisdictions</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Map className="h-7 w-7 text-purple-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Banking and Currency Management</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Managing money across borders presents several challenges:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Multi-currency accounts:</strong> Consider neobanks like Wise, Revolut, or N26 that offer local account details in multiple currencies</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Exchange rate strategy:</strong> Convert larger sums when rates are favorable rather than many small conversions</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Emergency funds:</strong> Maintain accessible reserves in both your home currency and frequently used foreign currencies</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Fee awareness:</strong> Understand ATM withdrawal fees, foreign transaction fees, and currency conversion spreads</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Payment platforms:</strong> Use services like Wise or PayPal for receiving international client payments</li>
            </ul>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Building and maintaining an emergency fund is even more critical when traveling internationally.
              </p>
              <Link href="/education/emergency-fund-basics" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
                Explore Emergency Fund Basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <CreditCard className="h-7 w-7 text-purple-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Credit Cards and Payment Methods</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Strategic use of credit cards and payment methods can save nomads significant money:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-2">No Foreign Transaction Fee Cards</h4>
                <p className="text-sm text-gray-700">Select cards specifically designed for international travelers that waive the typical 3% foreign transaction fees</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-2">Travel Rewards</h4>
                <p className="text-sm text-gray-700">Cards that offer bonus points on travel expenses can significantly offset accommodation and transportation costs</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-2">Local Payment Apps</h4>
                <p className="text-sm text-gray-700">Research and set up payment apps specific to regions you'll visit (e.g., WeChat Pay in China, Pix in Brazil)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-2">Dynamic Currency Conversion</h4>
                <p className="text-sm text-gray-700">Always choose to be charged in the local currency rather than your home currency to avoid poor exchange rates</p>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Learn strategies to maximize credit card benefits while avoiding common pitfalls.
              </p>
              <Link href="/education/credit-card-optimization" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
                Explore Credit Card Optimization <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <Calculator className="h-7 w-7 text-purple-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">International Tax Planning</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Tax obligations are among the most complex aspects of the digital nomad lifestyle:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tax Consideration</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Tax Residency</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Understand the "183-day rule" and other tests that determine where you're considered a tax resident</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Foreign Earned Income Exclusion</td>
                    <td className="px-4 py-3 text-sm text-gray-600">US citizens may qualify to exclude up to $120,000 (2023) of foreign earned income from US taxation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Double Taxation Treaties</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Research tax treaties between your home country and countries you'll work from to avoid being taxed twice</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">VAT/GST</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Be aware of value-added tax obligations if your clients are in countries with VAT requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-300">
              <strong>Important:</strong> Tax laws vary significantly by country and change frequently. Consider working with a tax professional who specializes in expat or international taxation to ensure compliance.
            </p>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <FileText className="h-7 w-7 text-purple-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Insurance and Healthcare Planning</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive insurance coverage is essential for digital nomads:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>International health insurance:</strong> Consider global coverage from providers like SafetyWing, World Nomads, or Cigna Global</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Travel insurance:</strong> Ensure coverage for trip cancellations, lost luggage, and emergency evacuations</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Equipment insurance:</strong> Protect your laptop, camera, and other essential work equipment</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Liability insurance:</strong> Professional liability coverage for freelancers and consultants</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Home country coverage:</strong> Maintain minimal coverage in your home country for visits</li>
            </ul>

            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Digital Nomad Financial Checklist</h3>
              <p className="mb-4 text-purple-50">
                Before embarking on your nomadic journey, ensure you've addressed these financial essentials:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-purple-50">Set up location-independent banking with multi-currency capabilities</li>
                <li className="text-purple-50">Research tax obligations for your citizenship and destinations</li>
                <li className="text-purple-50">Secure appropriate international health and travel insurance</li>
                <li className="text-purple-50">Establish reliable methods for receiving payments from clients worldwide</li>
                <li className="text-purple-50">Create a digital nomad-specific emergency fund covering potential repatriation</li>
              </ol>
              <Link href="/education/side-hustle-strategies" className="inline-flex items-center gap-1 bg-white text-purple-700 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
                Explore Side Hustle Strategies <ArrowRight className="h-4 w-4" />
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

export default FinancialPlanningForDigitalNomads; 