import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Gift, ArrowRight, FileText, Users, Shield, Landmark, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function MultiGenerationalWealthTransfer() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Multi-Generational Wealth Transfer' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Gift className="h-8 w-8 text-emerald-600" />
              <h1 className="text-3xl font-bold text-gray-900">Multi-Generational Wealth Transfer</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Building wealth is only part of the financial journey. For many families, transferring assets across generations 
              in a tax-efficient manner while preserving family values and preparing heirs for responsible stewardship 
              represents an equally important challenge.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 flex flex-col items-center text-center">
                <Gift className="h-10 w-10 text-emerald-600 mb-2" />
                <p className="font-medium text-emerald-800">$68 trillion expected to transfer to younger generations by 2040</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-emerald-600 mb-2" />
                <p className="font-medium text-emerald-800">70% of wealth transfers fail to sustain family assets beyond the second generation</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-emerald-600 mb-2" />
                <p className="font-medium text-emerald-800">Proper planning can reduce estate taxes by up to 40% or more</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <FileText className="h-7 w-7 text-emerald-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Essential Legal Structures</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Effective wealth transfer typically relies on several key legal frameworks:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-emerald-700" />
                  </div>
                  Revocable Living Trusts
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Allows assets to pass outside of probate</li>
                  <li>Provides privacy for family financial matters</li>
                  <li>Can include specific distribution instructions</li>
                  <li>Remains flexible during grantor's lifetime</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-emerald-700" />
                  </div>
                  Irrevocable Trusts
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Can provide creditor protection</li>
                  <li>May remove assets from taxable estate</li>
                  <li>Includes specific types like GRATs, CLTs, and CRTs</li>
                  <li>Less flexible but greater tax benefits</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Landmark className="h-5 w-5 text-emerald-700" />
                  </div>
                  Family Limited Partnerships
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Centralized management of family assets</li>
                  <li>Potential valuation discounts for gift tax purposes</li>
                  <li>Can gradually transfer ownership while maintaining control</li>
                  <li>Works well for business and real estate holdings</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Heart className="h-5 w-5 text-emerald-700" />
                  </div>
                  Charitable Structures
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Donor-advised funds for family philanthropy</li>
                  <li>Private foundations to create lasting legacy</li>
                  <li>Charitable remainder trusts for income and giving</li>
                  <li>Instills philanthropic values across generations</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding the basics of estate planning is crucial before implementing advanced wealth transfer strategies.
              </p>
              <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 text-emerald-600 font-medium hover:underline">
                Explore Estate Planning Basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Users className="h-7 w-7 text-emerald-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Family Governance and Education</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Research shows that the primary reason wealth transfers fail is not poor financial planning but lack of family preparation and governance:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Governance Component</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Family Mission Statement</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Define shared values and purpose for family wealth</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Collaborative process involving all family members</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Family Council</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Forum for making collective decisions about shared assets</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Regular meetings with defined roles and processes</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Financial Education</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Prepare heirs to responsibly manage inherited wealth</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Age-appropriate training starting in childhood</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Conflict Resolution Protocol</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Establish process for addressing disagreements</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Written guidelines agreed upon in advance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mb-4 bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-300">
              <strong>Important:</strong> Studies show that 60% of wealth transfer failures stem from lack of trust and communication within the family, while 25% result from inadequately prepared heirs. Only 15% are attributed to poor financial or tax planning.
            </p>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding the impact of human psychology on financial decisions can help family members make better choices.
              </p>
              <Link href="/education/behavioral-finance-for-investors" className="inline-flex items-center gap-1 text-emerald-600 font-medium hover:underline">
                Explore Behavioral Finance for Investors <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Shield className="h-7 w-7 text-emerald-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Tax-Efficient Transfer Strategies</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Several approaches can minimize tax impact when transferring wealth:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Annual exclusion gifts:</strong> Currently $17,000 per recipient per year without using lifetime exemption</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Lifetime gift tax exemption:</strong> Transfer significant assets during life to reduce estate size</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Grantor Retained Annuity Trusts (GRATs):</strong> Transfer appreciation on assets with minimal gift tax</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Intrafamily loans:</strong> Lending to family members at IRS-minimum interest rates</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Life insurance trusts:</strong> Create tax-free legacy outside of taxable estate</li>
            </ul>

            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Strategic charitable giving can be an important part of a comprehensive wealth transfer plan.
              </p>
              <Link href="/education/charitable-giving-strategies" className="inline-flex items-center gap-1 text-emerald-600 font-medium hover:underline">
                Learn about Charitable Giving Strategies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Multi-Generational Planning Framework</h3>
              <p className="mb-4 text-emerald-50">
                A comprehensive wealth transfer plan addresses these five key dimensions:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-emerald-50">Financial capital: Assets, investments, business interests, real estate</li>
                <li className="text-emerald-50">Human capital: Family members' education, skills, and preparation</li>
                <li className="text-emerald-50">Intellectual capital: Shared knowledge, wisdom, and decision-making processes</li>
                <li className="text-emerald-50">Social capital: Family connections, philanthropy, and community engagement</li>
                <li className="text-emerald-50">Spiritual capital: Core values, purpose, and meaning behind family wealth</li>
              </ol>
              <Link href="/education/inheritance-planning" className="inline-flex items-center gap-1 bg-white text-emerald-700 px-4 py-2 rounded-md font-medium hover:bg-emerald-50 transition-colors">
                Explore Inheritance Planning <ArrowRight className="h-4 w-4" />
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

export default MultiGenerationalWealthTransfer; 