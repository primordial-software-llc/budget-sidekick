import React from 'react';
import Link from 'next/link';
import { AlertTriangle, TrendingDown, BarChart2, Shield, ArrowRight, LineChart, DollarSign, Clock, RefreshCw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function InvestingDuringRecession() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Investing During Recession' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <TrendingDown className="h-8 w-8 text-red-600" />
              <h1 className="text-3xl font-bold text-gray-900">Investing During Recession</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Economic downturns are inevitable parts of the business cycle, yet they create both challenges and opportunities for investors. 
              Understanding how to navigate recessions can help protect your portfolio from excessive losses while positioning it for 
              growth during the eventual recovery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex flex-col items-center text-center">
                <BarChart2 className="h-10 w-10 text-red-600 mb-2" />
                <p className="font-medium text-red-800">On average, recessions last 11 months while expansions last 67 months</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-red-600 mb-2" />
                <p className="font-medium text-red-800">Defensive sectors like utilities and consumer staples often outperform during downturns</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex flex-col items-center text-center">
                <RefreshCw className="h-10 w-10 text-red-600 mb-2" />
                <p className="font-medium text-red-800">Markets typically begin recovering 3-6 months before the recession officially ends</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <LineChart className="h-7 w-7 text-red-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding Market Cycles</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Recessions are a normal part of economic cycles, with distinct phases that present different investment challenges and opportunities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-2" />
                  Early Recession
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Consumer confidence begins dropping</li>
                  <li>Unemployment starts rising</li>
                  <li>Stock markets typically decline sharply</li>
                  <li>Central banks may begin cutting interest rates</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-orange-600 mr-2" />
                  Late Recession
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Economic data reaches its worst point</li>
                  <li>Corporate earnings hit bottom</li>
                  <li>Markets begin to find a floor</li>
                  <li>Value investments often become available</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                  Early Recovery
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Economic indicators begin to improve</li>
                  <li>Cyclical stocks often start outperforming</li>
                  <li>Consumer confidence improves</li>
                  <li>Growth rates rebound from low base</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  Full Recovery
                </h4>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
                  <li>Economy returns to growth</li>
                  <li>Employment levels rise</li>
                  <li>Corporate earnings recover</li>
                  <li>Markets often reach new highs</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding market cycles is connected to the fundamental risk-return relationship in investing.
              </p>
              <Link href="/education/risk-return-relationship" className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline">
                Learn about Risk-Return Relationship <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Shield className="h-7 w-7 text-red-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Defensive Investment Strategies</h2>
            </div>
            <p className="text-gray-600 mb-4">
              During economic downturns, protecting your capital becomes a priority. Consider these defensive approaches:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Quality stocks:</strong> Companies with strong balance sheets, low debt, and stable cash flows typically weather downturns better</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Defensive sectors:</strong> Consumer staples, utilities, healthcare, and discount retailers often show resilience during recessions</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Dividend stocks:</strong> Companies with history of maintaining dividends through multiple cycles can provide income even when growth stalls</li>
              <li className="bg-gray-50 p-2 rounded"><strong>High-quality bonds:</strong> Treasury bonds and high-grade corporate bonds can provide stability and often appreciate when interest rates fall</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Cash reserves:</strong> Maintaining liquidity allows you to meet financial needs without selling assets at depressed prices</li>
            </ul>

            <div className="bg-red-50 p-5 rounded-lg border border-red-100 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-red-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                An emergency fund becomes especially crucial during economic uncertainty.
              </p>
              <Link href="/education/emergency-fund-basics" className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline">
                Review Emergency Fund Basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <BarChart2 className="h-7 w-7 text-red-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Opportunistic Investment Strategies</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Recessions can create opportunities for long-term investors as quality assets become available at discounted prices:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Strategy</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Implementation</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Timing Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Dollar-cost averaging</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Continue regular investments regardless of market conditions</td>
                    <td className="px-4 py-3 text-sm text-gray-600">No timing required; consistent through cycles</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Value investing</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Look for quality companies trading below intrinsic value</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Mid to late recession when valuations are depressed</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Cyclical investing</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Target sectors that benefit from recovery (consumer discretionary, technology)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Late recession when recovery signs emerge</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Contrarian approach</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Invest in quality assets experiencing maximum pessimism</td>
                    <td className="px-4 py-3 text-sm text-gray-600">When market sentiment is most negative</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mb-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-300">
              <strong>Important:</strong> Attempting to perfectly "time the market" is extremely difficult and risky. Focus on long-term value rather than trying to catch the exact bottom of market cycles.
            </p>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Dollar-cost averaging can be particularly effective during market volatility.
              </p>
              <Link href="/education/dollar-cost-averaging" className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline">
                Explore Dollar-Cost Averaging <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Recession-Resistant Portfolio Checklist</h3>
              <p className="mb-4 text-red-50">
                Consider these elements when preparing your portfolio for economic uncertainty:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-red-50">Maintain appropriate asset allocation based on your time horizon and risk tolerance</li>
                <li className="text-red-50">Build adequate cash reserves to cover living expenses and potential opportunities</li>
                <li className="text-red-50">Focus on quality investments with strong balance sheets and sustainable competitive advantages</li>
                <li className="text-red-50">Diversify across sectors, geographies, and asset classes to reduce concentration risk</li>
                <li className="text-red-50">Review and rebalance regularly, especially during periods of high volatility</li>
              </ol>
              <Link href="/education/portfolio-rebalancing" className="inline-flex items-center gap-1 bg-white text-red-700 px-4 py-2 rounded-md font-medium hover:bg-red-50 transition-colors">
                Learn About Portfolio Rebalancing <ArrowRight className="h-4 w-4" />
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

export default InvestingDuringRecession; 