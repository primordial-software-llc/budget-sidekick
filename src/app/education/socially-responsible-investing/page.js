import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Globe, Leaf, BarChart2, ArrowRight, LineChart, DollarSign, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function SociallyResponsibleInvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Socially Responsible Investing' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Globe className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Socially Responsible Investing</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Socially responsible investing (SRI) allows you to align your investment portfolio with your personal values 
              while still seeking competitive financial returns. This approach considers environmental, social, and governance 
              (ESG) factors alongside traditional financial metrics when making investment decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
                <Leaf className="h-10 w-10 text-green-600 mb-2" />
                <p className="font-medium text-green-800">$17.1 trillion in US assets follow sustainable investing strategies</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
                <BarChart2 className="h-10 w-10 text-green-600 mb-2" />
                <p className="font-medium text-green-800">ESG funds have shown competitive returns compared to traditional investments</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-green-600 mb-2" />
                <p className="font-medium text-green-800">86% of millennials express interest in sustainable investing</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Leaf className="h-7 w-7 text-green-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding ESG Investing</h2>
            </div>
            <p className="text-gray-600 mb-4">
              ESG investing considers three key factors when evaluating companies:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">Environmental</h4>
                <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                  <li>Carbon emissions</li>
                  <li>Resource usage</li>
                  <li>Pollution & waste</li>
                  <li>Renewable energy</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">Social</h4>
                <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                  <li>Worker conditions</li>
                  <li>Community relations</li>
                  <li>Human rights</li>
                  <li>Diversity & inclusion</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">Governance</h4>
                <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                  <li>Board diversity</li>
                  <li>Executive compensation</li>
                  <li>Business ethics</li>
                  <li>Shareholder rights</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <BarChart2 className="h-7 w-7 text-green-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Approaches to Responsible Investing</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Investors can incorporate values into their portfolios through several strategies:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Negative screening:</strong> Excluding companies or industries that conflict with your values (tobacco, weapons, etc.)</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Positive screening:</strong> Seeking companies that demonstrate strong ESG practices</li>
              <li className="bg-gray-50 p-2 rounded"><strong>ESG integration:</strong> Incorporating ESG factors into traditional financial analysis</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Thematic investing:</strong> Focusing on specific themes like clean energy or gender diversity</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Impact investing:</strong> Investing with the intention to generate positive, measurable social and environmental impact</li>
            </ul>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                While exploring sustainable investing, it's helpful to understand the fundamental principles of asset allocation.
              </p>
              <Link href="/education/asset-allocation-guide" className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline">
                Explore Asset Allocation Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <LineChart className="h-7 w-7 text-green-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Performance Considerations</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Many investors wonder if ESG investing requires sacrificing returns. Research indicates:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Perspective</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Research Findings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Short-Term</td>
                    <td className="px-4 py-3 text-sm text-gray-600">ESG funds have demonstrated competitive performance with conventional funds in various market conditions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Long-Term</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Companies with strong ESG practices may have lower risk profiles and better long-term sustainability</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Risk</td>
                    <td className="px-4 py-3 text-sm text-gray-600">ESG considerations can help identify risks that traditional financial analysis might miss</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-300">
              <strong>Important:</strong> Past performance is not indicative of future results. ESG funds may have higher expense ratios than conventional funds and may exclude certain sectors, potentially impacting diversification.
            </p>

            <div className="bg-green-50 p-5 rounded-lg border border-green-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understand how diversification can help manage risk in any investment strategy, including ESG portfolios.
              </p>
              <Link href="/education/risk-return-relationship" className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline">
                Learn about Risk-Return Relationship <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-10 pb-4 border-b border-gray-100">
              <DollarSign className="h-7 w-7 text-green-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Getting Started with ESG Investing</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Here's how to incorporate ESG principles into your investment strategy:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded">Define your personal values and priorities (environmental concerns, social issues, etc.)</li>
              <li className="bg-gray-50 p-2 rounded">Research ESG funds, ETFs, and individual companies that align with your values</li>
              <li className="bg-gray-50 p-2 rounded">Review expense ratios and performance history compared to benchmark indices</li>
              <li className="bg-gray-50 p-2 rounded">Consider working with a financial advisor experienced in ESG investing</li>
              <li className="bg-gray-50 p-2 rounded">Rebalance and review your portfolio regularly to ensure it continues to meet your goals</li>
            </ul>

            <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Common ESG Investment Vehicles</h3>
              <p className="mb-4 text-green-50">
                Consider these options for implementing your socially responsible investment strategy:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-green-50">ESG mutual funds and ETFs (lowest barrier to entry)</li>
                <li className="text-green-50">Green bonds and climate bonds</li>
                <li className="text-green-50">Community development financial institutions (CDFIs)</li>
                <li className="text-green-50">Sustainable REITs (real estate investment trusts)</li>
                <li className="text-green-50">Direct investment in sustainable businesses</li>
              </ol>
              <Link href="/education/etf-vs-mutual-funds" className="inline-flex items-center gap-1 bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
                Compare ETFs vs. Mutual Funds <ArrowRight className="h-4 w-4" />
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

export default SociallyResponsibleInvesting; 