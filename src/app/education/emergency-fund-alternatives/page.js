import React from 'react';
import Link from 'next/link';
import { Wallet, ArrowRight, BarChart, LineChart, DollarSign, Shield, PiggyBank } from 'lucide-react';
import Article from '@/components/Article';

function EmergencyFundAlternatives() {
  return (
    <Article
      title="Emergency Fund Alternatives"
      icon={Wallet}
      articleId="emergency-fund-alternatives"
      accentColor="blue"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. The appropriateness of emergency fund alternatives depends on your individual financial situation, risk tolerance, and other safety nets. The strategies discussed may not be suitable for everyone. Please consult with a qualified financial professional before making changes to your emergency savings strategy."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        While traditional cash emergency funds are the cornerstone of financial security, they may not be the optimal solution for everyone at every stage. Understanding alternative approaches to emergency funding can help you maintain financial protection while potentially earning better returns or addressing multiple financial goals simultaneously.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
          <Shield className="h-10 w-10 text-blue-600 mb-2" />
          <p className="font-medium text-blue-800">Cash-only emergency funds can lose 2-3% annually to inflation</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
          <BarChart className="h-10 w-10 text-blue-600 mb-2" />
          <p className="font-medium text-blue-800">Strategic alternatives may improve returns by 3-5% per year</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
          <PiggyBank className="h-10 w-10 text-blue-600 mb-2" />
          <p className="font-medium text-blue-800">57% of Americans don't have enough emergency savings</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Wallet className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Strategic Emergency Fund Alternatives</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Consider these approaches that balance liquidity, returns, and protection:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <LineChart className="h-5 w-5 text-blue-700" />
              </div>
              Tiered Emergency Fund Structure
            </h4>
            <p className="text-gray-700 mb-2">A strategic allocation across multiple accounts with varying liquidity and return potential.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Implementation Strategy:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Tier 1: 1 month of expenses in high-yield savings (immediate access)</li>
                <li>Tier 2: 2-3 months in short-term CDs or Treasury bills (accessible within weeks)</li>
                <li>Tier 3: 2-3 months in conservative investments like bond ETFs (accessible in 3-5 days)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-blue-700" />
              </div>
              Roth IRA as Partial Emergency Fund
            </h4>
            <p className="text-gray-700 mb-2">Using the contributed portion of a Roth IRA as a backup emergency reserve while maintaining long-term retirement growth.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Considerations:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Contributions (but not earnings) can be withdrawn tax and penalty-free</li>
                <li>Investments should be appropriately conservative for dual-purpose funds</li>
                <li>Only viable for those consistently funding retirement through other means</li>
                <li>Consider replenishing any withdrawn funds to maintain retirement goals</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-blue-700" />
              </div>
              Home Equity Line of Credit (HELOC)
            </h4>
            <p className="text-gray-700 mb-2">Using a pre-approved credit line secured by home equity as a supplementary emergency resource.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Risk Factors:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Only applicable for homeowners with available equity</li>
                <li>Lenders can reduce or freeze credit lines during economic downturns</li>
                <li>Interest rates are variable and may increase during financial stress</li>
                <li>Best used as a backup to some cash reserves, not a complete replacement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-blue-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Before exploring alternatives, ensure you understand emergency fund fundamentals.
          </p>
          <Link href="/education/emergency-fund-basics" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
            Explore Emergency Fund Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <BarChart className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Evaluating Risk vs. Reward</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Each alternative approach involves tradeoffs between liquidity, returns, and risk:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Approach</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Liquidity</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Potential Returns</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Traditional Cash Fund</td>
                <td className="px-4 py-3 text-sm text-gray-600">Very High</td>
                <td className="px-4 py-3 text-sm text-gray-600">Very Low</td>
                <td className="px-4 py-3 text-sm text-gray-600">Very Low</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Tiered Structure</td>
                <td className="px-4 py-3 text-sm text-gray-600">High to Medium</td>
                <td className="px-4 py-3 text-sm text-gray-600">Low to Moderate</td>
                <td className="px-4 py-3 text-sm text-gray-600">Low to Moderate</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Roth IRA Dual-Purpose</td>
                <td className="px-4 py-3 text-sm text-gray-600">Medium</td>
                <td className="px-4 py-3 text-sm text-gray-600">Moderate to High</td>
                <td className="px-4 py-3 text-sm text-gray-600">Moderate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">HELOC</td>
                <td className="px-4 py-3 text-sm text-gray-600">High</td>
                <td className="px-4 py-3 text-sm text-gray-600">N/A (Cost of Debt)</td>
                <td className="px-4 py-3 text-sm text-gray-600">High</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-300">
          <strong>Important:</strong> Every financial situation is unique. The right emergency fund strategy balances your personal risk tolerance, income stability, existing safety nets, and overall financial situation. No single approach is optimal for everyone.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Consider how investments might fit into your emergency planning strategy.
          </p>
          <Link href="/education/investment-risk-tolerance" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
            Explore Investment Risk Tolerance <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Shield className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Practical Implementation Guidelines</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Follow these steps to develop an emergency funding strategy that works for your situation:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Assess your true emergency needs:</strong> Consider your insurance deductibles, minimum monthly expenses, and potential emergencies specific to your situation</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Evaluate income stability:</strong> Those with variable or unpredictable income generally need more liquid funds than those with stable employment</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Consider your other financial resources:</strong> Dual-income households or those with significant assets may have more flexibility</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Start with a traditional cash buffer:</strong> Build at least 1-2 months of expenses in cash before implementing alternative strategies</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Implement in phases:</strong> Gradually shift to alternative approaches as your overall financial position strengthens</li>
        </ul>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-blue-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Building financial resilience involves more than just emergency funds.
          </p>
          <Link href="/education/financial-safety-nets" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
            Learn about Financial Safety Nets <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Emergency Fund Decision Framework</h3>
          <p className="mb-4 text-blue-50">
            Ask yourself these questions when considering emergency fund alternatives:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-blue-50">What's my true monthly "bare minimum" expense number in an emergency?</li>
            <li className="text-blue-50">How quickly would I need access to funds in my most likely emergency scenarios?</li>
            <li className="text-blue-50">What's my income stability and job security outlook for the next 12-24 months?</li>
            <li className="text-blue-50">What other financial safety nets do I have available (family support, insurance, etc.)?</li>
            <li className="text-blue-50">How would the alternatives I'm considering perform during a broad economic downturn?</li>
          </ol>
          <Link href="/education/financial-goal-setting" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Explore Financial Goal Setting <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default EmergencyFundAlternatives; 