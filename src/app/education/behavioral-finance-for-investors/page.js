import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Brain, ArrowRight, BarChart2, TrendingUp, Target, Activity, LineChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function BehavioralFinanceForInvestors() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Behavioral Finance for Investors' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Brain className="h-8 w-8 text-teal-600" />
              <h1 className="text-3xl font-bold text-gray-900">Behavioral Finance for Investors</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Traditional finance theory assumes investors always act rationally to maximize returns. However, behavioral finance 
              recognizes that psychological biases and emotional factors often lead us to make suboptimal financial decisions. 
              Understanding these tendencies can help you become a more disciplined and successful investor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 flex flex-col items-center text-center">
                <Brain className="h-10 w-10 text-teal-600 mb-2" />
                <p className="font-medium text-teal-800">Psychological biases can cost investors 1-3% in annual returns</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 flex flex-col items-center text-center">
                <TrendingUp className="h-10 w-10 text-teal-600 mb-2" />
                <p className="font-medium text-teal-800">Studies show most investors significantly underperform market indices</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 flex flex-col items-center text-center">
                <Activity className="h-10 w-10 text-teal-600 mb-2" />
                <p className="font-medium text-teal-800">Emotional trading increases during periods of market volatility</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Brain className="h-7 w-7 text-teal-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Common Cognitive Biases</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Investors regularly encounter these psychological tendencies that can affect decision-making:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-teal-700" />
                  </div>
                  Loss Aversion
                </h4>
                <p className="text-gray-700 mb-2">The tendency to strongly prefer avoiding losses over acquiring equivalent gains.</p>
                <p className="text-sm text-gray-600 italic">Example: Holding onto losing investments too long while selling winners too early.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-teal-700" />
                  </div>
                  Confirmation Bias
                </h4>
                <p className="text-gray-700 mb-2">Seeking out information that confirms existing beliefs while ignoring contradictory evidence.</p>
                <p className="text-sm text-gray-600 italic">Example: Only reading positive news about stocks you own and dismissing negative reports.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-teal-700" />
                  </div>
                  Recency Bias
                </h4>
                <p className="text-gray-700 mb-2">Overweighting recent events and experiences when making decisions about the future.</p>
                <p className="text-sm text-gray-600 italic">Example: Assuming the current market trend (bull or bear) will continue indefinitely.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-teal-700" />
                  </div>
                  Herding Behavior
                </h4>
                <p className="text-gray-700 mb-2">Following what others are doing, especially during times of uncertainty.</p>
                <p className="text-sm text-gray-600 italic">Example: Buying popular stocks simply because "everyone else is" without conducting personal research.</p>
              </div>
            </div>

            <div className="bg-teal-50 p-5 rounded-lg border border-teal-100 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-teal-600" />
                <h4 className="font-semibold text-teal-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding behavioral pitfalls is essential for making rational investment decisions.
              </p>
              <Link href="/education/behavioral-finance-pitfalls" className="inline-flex items-center gap-1 text-teal-600 font-medium hover:underline">
                Explore Behavioral Finance Pitfalls <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <LineChart className="h-7 w-7 text-teal-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">The Impact on Investment Returns</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Behavioral biases can significantly impact investment performance:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Behavior</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Potential Impact</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Panic selling during market downturns</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Missing the eventual recovery, locking in losses</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Implement automatic rebalancing, avoid checking accounts daily</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Performance chasing</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Buying high and selling low, reducing returns</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Focus on long-term asset allocation rather than short-term performance</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Overconfidence in stock picking</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Taking excessive risk, poor diversification</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Use index funds for core portfolio, limit individual stock exposure</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Mental accounting</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Suboptimal allocation across accounts</td>
                    <td className="px-4 py-3 text-sm text-gray-600">View all investments as part of a single portfolio strategy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-teal-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Market timing is often driven by behavioral biases rather than rational analysis.
              </p>
              <Link href="/education/market-timing-myths" className="inline-flex items-center gap-1 text-teal-600 font-medium hover:underline">
                Learn about Market Timing Myths <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Target className="h-7 w-7 text-teal-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Strategies to Overcome Behavioral Biases</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Use these practical techniques to minimize the impact of psychological biases on your investment decisions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Create a written investment policy:</strong> Document your investment strategy, goals, and rebalancing rules before market turbulence hits</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Automate regular investments:</strong> Use dollar-cost averaging to remove emotion from the timing of purchases</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Implement rules-based rebalancing:</strong> Set specific thresholds or schedules for portfolio adjustments</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Seek diverse perspectives:</strong> Consult sources with different viewpoints before making significant changes</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Keep an investment journal:</strong> Record decision rationales and review them to identify patterns in your thinking</li>
            </ul>

            <div className="bg-teal-50 p-5 rounded-lg border border-teal-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-teal-600" />
                <h4 className="font-semibold text-teal-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Proper preparation can help you navigate periods of market turbulence with less emotional decision-making.
              </p>
              <Link href="/education/preparing-for-market-volatility" className="inline-flex items-center gap-1 text-teal-600 font-medium hover:underline">
                Explore Preparing for Market Volatility <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Behavioral Finance Action Plan</h3>
              <p className="mb-4 text-teal-50">
                Implement these steps to become a more disciplined investor:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-teal-50">Identify your own behavioral tendencies by reviewing past investment decisions</li>
                <li className="text-teal-50">Develop a written investment plan with clear rules for buying, selling, and rebalancing</li>
                <li className="text-teal-50">Create a "cooling off" period before making significant portfolio changes</li>
                <li className="text-teal-50">Consider working with a financial advisor as an emotional circuit-breaker</li>
                <li className="text-teal-50">Focus on your long-term goals rather than short-term market movements</li>
              </ol>
              <Link href="/education/financial-goal-setting" className="inline-flex items-center gap-1 bg-white text-teal-700 px-4 py-2 rounded-md font-medium hover:bg-teal-50 transition-colors">
                Explore Financial Goal Setting <ArrowRight className="h-4 w-4" />
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

export default BehavioralFinanceForInvestors; 