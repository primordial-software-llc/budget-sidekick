import React from 'react';
import Link from 'next/link';
import { Leaf, AlertTriangle, ArrowRight, CheckCircle, LineChart, Globe, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function SustainableInvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Sustainable Investing' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <p className="text-green-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Sustainable Investing</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Aligning Your Investments with Your Values</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Sustainable investing allows you to generate financial returns while supporting companies that align with your values. 
              This approach considers environmental, social, and governance (ESG) factors alongside traditional financial analysis.
            </p>

            <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-8">
              <h3 className="flex items-center text-green-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                The global sustainable investment market has grown to over $35 trillion in assets under management, reflecting 
                increased investor desire to generate positive impact alongside financial returns.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Main Approaches</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-green-700" />
                    Exclusionary Strategies
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Negative Screening</h5>
                      <p className="text-sm text-gray-700">
                        Excluding companies or industries that conflict with your values (e.g., tobacco, weapons, fossil fuels).
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Norms-Based Screening</h5>
                      <p className="text-sm text-gray-700">
                        Excluding companies that violate certain standards, such as the UN Global Compact principles.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Divestment</h5>
                      <p className="text-sm text-gray-700">
                        Selling holdings in companies that don't meet your ethical criteria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-emerald-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-emerald-700" />
                    Inclusionary Strategies
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">ESG Integration</h5>
                      <p className="text-sm text-gray-700">
                        Incorporating environmental, social, and governance factors into financial analysis.
                      </p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Positive/Best-in-Class</h5>
                      <p className="text-sm text-gray-700">
                        Investing in companies with the best ESG performance in their industry.
                      </p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Thematic Investing</h5>
                      <p className="text-sm text-gray-700">
                        Focusing on specific themes like clean energy, water, or gender diversity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">ESG Factors</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-indigo-700" />
                  Key Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Environmental</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Climate change impact</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Resource depletion</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Waste and pollution</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Deforestation</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Social</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Human rights</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Labor standards</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Employee relations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Diversity and inclusion</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Governance</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Board structure</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Executive compensation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Business ethics</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Transparency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Performance Considerations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-cyan-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-cyan-700" />
                  Returns and Risks
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Current Research</h5>
                    <p className="text-sm text-gray-700">
                      Many studies indicate that sustainable investments can match or outperform conventional investments over the long term. Companies with strong ESG practices may better manage risks and identify opportunities that traditional financial analysis might miss.
                    </p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Considerations</h5>
                    <p className="text-sm text-gray-700">
                      When evaluating sustainable investments, consider factors like fund expense ratios, portfolio concentration, methodology for selecting investments, and track record. Be aware of "greenwashing," where investments are marketed as sustainable without meaningful ESG integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-teal-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Define Your Values</h5>
                    <p className="text-sm text-gray-700">
                      Identify the environmental, social, and governance issues that matter most to you.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Research Investment Options</h5>
                    <p className="text-sm text-gray-700">
                      Explore ESG funds, ETFs, and individual companies that align with your values.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Evaluate Performance</h5>
                    <p className="text-sm text-gray-700">
                      Assess the financial performance, fees, and ESG criteria of potential investments.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Build a Diversified Portfolio</h5>
                    <p className="text-sm text-gray-700">
                      Incorporate sustainable investments while maintaining appropriate diversification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-green-50 rounded-lg border border-green-100 flex items-start gap-3">
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

export default SustainableInvesting; 