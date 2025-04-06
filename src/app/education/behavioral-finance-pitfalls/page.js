import React from 'react';
import Link from 'next/link';
import { Brain, AlertTriangle, ArrowRight, Target, LineChart, AlertCircle, ShieldAlert } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function BehavioralFinancePitfalls() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Behavioral Finance Pitfalls' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Behavioral Finance Pitfalls</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding the Psychology Behind Investment Decisions</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Behavioral finance examines how psychological biases affect financial decisions. Understanding these 
              cognitive pitfalls can help you make more rational investment choices and avoid costly mistakes.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Research shows that individual investors underperform market indices by an average of 1.5% to 4% annually, 
                largely due to behavioral mistakes rather than poor investment selection.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Common Cognitive Biases</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-rose-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-rose-700" />
                    Action-Related Biases
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Loss Aversion</h5>
                      <p className="text-sm text-gray-700">
                        The tendency to feel the pain of losses more intensely than the pleasure of equivalent gains.
                      </p>
                      <p className="text-xs text-rose-700 mt-2 italic">
                        Impact: Holding losing investments too long and selling winners too early.
                      </p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Overconfidence Bias</h5>
                      <p className="text-sm text-gray-700">
                        Overestimating your knowledge, abilities, and the precision of your information.
                      </p>
                      <p className="text-xs text-rose-700 mt-2 italic">
                        Impact: Excessive trading, inadequate diversification, and underestimating risks.
                      </p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Herding Behavior</h5>
                      <p className="text-sm text-gray-700">
                        Following the crowd instead of making independent investment decisions.
                      </p>
                      <p className="text-xs text-rose-700 mt-2 italic">
                        Impact: Buying high during market bubbles and selling low during crashes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-purple-700" />
                    Perception Biases
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Recency Bias</h5>
                      <p className="text-sm text-gray-700">
                        Placing too much weight on recent events and assuming they will continue into the future.
                      </p>
                      <p className="text-xs text-purple-700 mt-2 italic">
                        Impact: Chasing performance and investing based on short-term trends.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Confirmation Bias</h5>
                      <p className="text-sm text-gray-700">
                        Seeking information that confirms existing beliefs while ignoring contradictory evidence.
                      </p>
                      <p className="text-xs text-purple-700 mt-2 italic">
                        Impact: Failing to recognize when an investment thesis is no longer valid.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Anchoring Bias</h5>
                      <p className="text-sm text-gray-700">
                        Relying too heavily on the first piece of information encountered, such as a stock's purchase price.
                      </p>
                      <p className="text-xs text-purple-700 mt-2 italic">
                        Impact: Holding onto investments because you're anchored to the price you paid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Real-World Examples</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-indigo-700" />
                  Case Studies
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Dot-Com Bubble (1995-2000)</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      During the late 1990s, investors piled into internet stocks with little regard for fundamental valuation. 
                      Many companies with no profits and questionable business models saw their stock prices soar.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Herding Behavior</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Overconfidence</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Recency Bias</span>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Market Timing in 2008-2009</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Many investors sold at market lows during the financial crisis, locking in losses and missing the subsequent 
                      recovery. Those who stayed invested saw their portfolios recover and grow substantially in the following years.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Loss Aversion</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Herding Behavior</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Recency Bias</span>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Cryptocurrency Volatility</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Extreme price swings in cryptocurrencies have demonstrated how FOMO (fear of missing out) and panic selling 
                      can drive investor behavior, often resulting in buying at peak prices and selling during sharp declines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Herding Behavior</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Recency Bias</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Anchoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Defensive Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-emerald-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <ShieldAlert className="w-5 h-5 mr-2 text-emerald-700" />
                  Overcoming Biases
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Process-Based Approaches</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Create an investment policy statement</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Use dollar-cost averaging</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Implement automatic rebalancing</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Establish rules for buying and selling</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Mindset Strategies</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Seek contrary opinions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Keep an investment journal</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Consider a "mental circuit breaker"</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="text-gray-700">Utilize a trusted advisor or partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-amber-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Self-Assessment</h5>
                    <p className="text-sm text-gray-700">
                      Reflect on past investment decisions to identify which biases might affect you most strongly.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Create a Written Plan</h5>
                    <p className="text-sm text-gray-700">
                      Develop a clear investment policy statement that outlines your goals, strategy, and rules for decision-making.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Establish Check-in Points</h5>
                    <p className="text-sm text-gray-700">
                      Schedule regular portfolio reviews, but avoid constantly monitoring daily market movements.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Consider Automation</h5>
                    <p className="text-sm text-gray-700">
                      Use automatic contributions, rebalancing, and other tools to reduce emotional decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
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

export default BehavioralFinancePitfalls; 