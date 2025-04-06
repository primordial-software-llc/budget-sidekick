import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Activity, ArrowRight, Shield, TrendingDown, BarChart2, Scale, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function PreparingForMarketVolatility() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Preparing for Market Volatility' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Activity className="h-8 w-8 text-violet-600" />
              <h1 className="text-3xl font-bold text-gray-900">Preparing for Market Volatility</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Market volatility is an inherent part of investing. While it's impossible to predict exactly when markets will 
              fluctuate, it's entirely possible to prepare your portfolio and financial plan to withstand turbulent periods. 
              The right preparation can help you avoid emotional decisions and potentially benefit from market disruptions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-violet-50 p-4 rounded-lg border border-violet-100 flex flex-col items-center text-center">
                <Activity className="h-10 w-10 text-violet-600 mb-2" />
                <p className="font-medium text-violet-800">The average intra-year market decline is about 14%, even in positive years</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border border-violet-100 flex flex-col items-center text-center">
                <TrendingDown className="h-10 w-10 text-violet-600 mb-2" />
                <p className="font-medium text-violet-800">Major market corrections of 20%+ occur approximately every 3.5 years</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border border-violet-100 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-violet-600 mb-2" />
                <p className="font-medium text-violet-800">Historically, markets have recovered from every major downturn</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Shield className="h-7 w-7 text-violet-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Building a Volatility-Resistant Portfolio</h2>
            </div>
            <p className="text-gray-600 mb-4">
              The foundation of weathering market turbulence is a well-structured portfolio designed with volatility in mind:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Scale className="h-5 w-5 text-violet-600 mr-2" />
                  Proper Asset Allocation
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Match your allocation to your time horizon and risk tolerance</li>
                  <li>Include non-correlated assets that react differently to market conditions</li>
                  <li>Consider your entire financial picture, not just investment accounts</li>
                  <li>Review and adjust your allocation as life circumstances change</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Compass className="h-5 w-5 text-violet-600 mr-2" />
                  Diversification Strategies
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Spread investments across multiple asset classes (stocks, bonds, alternatives)</li>
                  <li>Diversify within asset classes (sectors, geographies, company sizes)</li>
                  <li>Consider both U.S. and international markets</li>
                  <li>Include some defensive assets that historically perform better during downturns</li>
                </ul>
              </div>
            </div>

            <div className="bg-violet-50 p-5 rounded-lg border border-violet-100 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-violet-600" />
                <h4 className="font-semibold text-violet-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding the right asset allocation is fundamental to building a resilient portfolio.
              </p>
              <Link href="/education/asset-allocation-guide" className="inline-flex items-center gap-1 text-violet-600 font-medium hover:underline">
                Explore Asset Allocation Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <BarChart2 className="h-7 w-7 text-violet-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Strategies During Market Volatility</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Specific tactics to consider when markets become turbulent:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Strategy</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Implementation</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Potential Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Tax-loss harvesting</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Sell investments at a loss to offset realized gains while maintaining market exposure</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Potential tax savings without significantly changing investment strategy</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Rebalancing</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Adjust portfolio back to target allocation after market movements</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Systematically selling high and buying low; maintaining risk level</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Opportunistic investing</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Deploy cash reserves to purchase quality investments at discounted prices</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Potential for enhanced long-term returns by buying during downturns</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Dollar-cost averaging</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Continue making regular investments in fixed dollar amounts</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Reduces impact of volatility by purchasing more shares when prices are lower</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-violet-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Tax-loss harvesting can be an effective strategy during market downturns.
              </p>
              <Link href="/education/tax-loss-harvesting" className="inline-flex items-center gap-1 text-violet-600 font-medium hover:underline">
                Learn about Tax-Loss Harvesting <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Activity className="h-7 w-7 text-violet-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Psychological Preparation</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Mental and emotional readiness is just as important as financial preparation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Develop a volatility mindset:</strong> Understand that market fluctuations are normal and expected</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Create a decision framework:</strong> Establish rules for when you will (and won't) make portfolio changes</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Focus on long-term goals:</strong> Keep investment objectives in perspective during short-term disruptions</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Limit consumption of financial news:</strong> Reduce exposure to sources that may trigger emotional reactions</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Maintain historical perspective:</strong> Remember that markets have recovered from every previous downturn</li>
            </ul>

            <div className="bg-violet-50 p-5 rounded-lg border border-violet-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-violet-600" />
                <h4 className="font-semibold text-violet-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding your behavioral biases can help you make better decisions during market volatility.
              </p>
              <Link href="/education/behavioral-finance-for-investors" className="inline-flex items-center gap-1 text-violet-600 font-medium hover:underline">
                Explore Behavioral Finance for Investors <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Shield className="h-7 w-7 text-violet-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Financial Safety Measures</h2>
            </div>
            <p className="text-gray-600 mb-4">
              These fundamental financial safeguards can help you navigate market volatility with confidence:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Emergency fund:</strong> Maintain 3-6 months of essential expenses in cash or cash equivalents</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Appropriate cash reserves:</strong> Hold additional cash based on upcoming financial needs (1-5 years)</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Debt management:</strong> Reduce high-interest debt to lower financial stress during market downturns</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Insurance coverage:</strong> Ensure adequate protection against health, property, and liability risks</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Multiple income streams:</strong> Develop various sources of income to reduce dependency on any single source</li>
            </ul>

            <div className="bg-gradient-to-r from-violet-600 to-violet-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Volatility Preparation Checklist</h3>
              <p className="mb-4 text-violet-50">
                Review these key elements to ensure you're ready for market turbulence:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-violet-50">Ensure your asset allocation matches your risk tolerance and time horizon</li>
                <li className="text-violet-50">Maintain adequate liquidity through emergency funds and cash reserves</li>
                <li className="text-violet-50">Diversify across and within asset classes to reduce concentration risk</li>
                <li className="text-violet-50">Establish a written investment policy with clear rules for buying and selling</li>
                <li className="text-violet-50">Prepare mentally by understanding market history and your own behavioral tendencies</li>
              </ol>
              <Link href="/education/navigating-bear-markets" className="inline-flex items-center gap-1 bg-white text-violet-700 px-4 py-2 rounded-md font-medium hover:bg-violet-50 transition-colors">
                Learn About Navigating Bear Markets <ArrowRight className="h-4 w-4" />
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

export default PreparingForMarketVolatility; 