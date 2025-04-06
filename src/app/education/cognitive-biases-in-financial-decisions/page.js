import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Brain, ArrowRight, Scale, LineChart, Target, Activity, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function CognitiveBiasesInFinancialDecisions() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Cognitive Biases in Financial Decisions' }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <h1 className="text-3xl font-bold text-gray-900">Cognitive Biases in Financial Decisions</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Financial decisions are rarely made with perfect rationality. Our brains are wired with psychological shortcuts
              and biases that can lead to systematic errors in judgment. Understanding these cognitive biases is the first step
              toward making more objective financial choices and avoiding costly mistakes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
                <Brain className="h-10 w-10 text-purple-600 mb-2" />
                <p className="font-medium text-purple-800">Over 100 cognitive biases influence our everyday decisions</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
                <BarChart className="h-10 w-10 text-purple-600 mb-2" />
                <p className="font-medium text-purple-800">Behavioral biases can cost investors 1-3% in annual returns</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
                <Scale className="h-10 w-10 text-purple-600 mb-2" />
                <p className="font-medium text-purple-800">Awareness of biases can improve decision-making by up to 40%</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Brain className="h-7 w-7 text-purple-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Common Cognitive Biases in Personal Finance</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Several key cognitive biases particularly impact our financial decisions:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-purple-700" />
                  </div>
                  Present Bias
                </h4>
                <p className="text-gray-700 mb-2">Our tendency to prefer smaller rewards now over larger rewards later.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Financial Impact:</h5>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Choosing immediate spending over retirement saving</li>
                    <li>Carrying high-interest debt rather than paying it off</li>
                    <li>Opting for lower-deductible insurance with higher premiums</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-purple-700" />
                  </div>
                  Loss Aversion
                </h4>
                <p className="text-gray-700 mb-2">The pain of losing is psychologically about twice as powerful as the pleasure of gaining.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Financial Impact:</h5>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Holding onto losing investments too long</li>
                    <li>Selling winning investments too early</li>
                    <li>Excessive risk aversion in investment choices</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-purple-700" />
                  </div>
                  Anchoring Bias
                </h4>
                <p className="text-gray-700 mb-2">Over-relying on the first piece of information encountered (the "anchor") when making decisions.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Financial Impact:</h5>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Fixating on purchase prices when deciding to sell investments</li>
                    <li>Being influenced by suggested prices or original prices in negotiations</li>
                    <li>Over-emphasis on arbitrary financial targets or thresholds</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-purple-700" />
                  </div>
                  Mental Accounting
                </h4>
                <p className="text-gray-700 mb-2">Treating money differently depending on its source or intended use, rather than viewing it fungibly.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Financial Impact:</h5>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Treating "found money" (tax refunds, bonuses) less carefully than earned income</li>
                    <li>Keeping money in low-interest savings while carrying high-interest debt</li>
                    <li>Making different investment decisions across multiple accounts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Behavioral biases can significantly impact investment decisions and portfolio returns.
              </p>
              <Link href="/education/behavioral-finance-for-investors" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
                Explore Behavioral Finance for Investors <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <LineChart className="h-7 w-7 text-purple-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Financial Decision-Making Framework</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Use this structured approach to counteract cognitive biases in your financial decisions:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Framework Step</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Implementation</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Biases Addressed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Recognize emotional state</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Pause decisions when feeling excited, fearful, or stressed</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Overconfidence, panic selling, impulse spending</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Seek diverse perspectives</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Consider opposing viewpoints and consult trusted advisors</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Confirmation bias, availability heuristic</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-800">Establish decision criteria</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Create a checklist of factors to consider before deciding</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Mental accounting, sunk cost fallacy</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">Implement cooling-off periods</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Wait 24-72 hours before making significant financial decisions</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Present bias, impulsivity, recency bias</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-600 mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-300">
              <strong>Important:</strong> Even professional investors and financial experts are subject to cognitive biases. The goal is not to eliminate biases entirely (which is impossible) but to recognize and mitigate their effects on your decisions.
            </p>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Setting clear financial goals can help overcome present bias and impulsive financial decisions.
              </p>
              <Link href="/education/financial-goal-setting" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
                Explore Financial Goal Setting <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <Target className="h-7 w-7 text-purple-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">Practical Debiasing Techniques</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Implement these strategies to reduce the impact of cognitive biases:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li className="bg-gray-50 p-2 rounded"><strong>Pre-commitment strategies:</strong> Automate savings and investment contributions to overcome present bias</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Rules-based decision making:</strong> Establish clear rules for buying, selling, and rebalancing investments</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Focus on opportunity costs:</strong> Explicitly consider what you're giving up by making a particular choice</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Reframe the decision:</strong> Consider how you'd advise a friend facing the same financial choice</li>
              <li className="bg-gray-50 p-2 rounded"><strong>Decision journal:</strong> Document the rationale behind important financial decisions to review later</li>
            </ul>

            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800 m-0">Related Resource</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                During market volatility, cognitive biases often become more pronounced and can lead to poor investment decisions.
              </p>
              <Link href="/education/preparing-for-market-volatility" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
                Learn about Preparing for Market Volatility <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-lg border mt-10 mb-8 text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Cognitive Bias Checklist</h3>
              <p className="mb-4 text-purple-50">
                Before making significant financial decisions, ask yourself:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li className="text-purple-50">Am I making this decision based on recent or vivid events? (recency/availability bias)</li>
                <li className="text-purple-50">Would I make the same choice if I were starting fresh today? (status quo/endowment effect)</li>
                <li className="text-purple-50">Am I seeking information that only confirms what I already believe? (confirmation bias)</li>
                <li className="text-purple-50">Am I overconfident in my ability to predict outcomes? (overconfidence bias)</li>
                <li className="text-purple-50">How would I feel if this decision turns out poorly? (loss aversion/regret avoidance)</li>
              </ol>
              <Link href="/education/market-timing-myths" className="inline-flex items-center gap-1 bg-white text-purple-700 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
                Explore Market Timing Myths <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Disclaimer 
              articleId="cognitive-biases-in-financial-decisions"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CognitiveBiasesInFinancialDecisions; 