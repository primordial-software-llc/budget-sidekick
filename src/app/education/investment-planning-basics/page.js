import React from 'react';
import Link from 'next/link';
import { BarChart, ArrowRight, TrendingUp, Clock, Target, AlertTriangle, PieChart } from 'lucide-react';
import Article from '@/components/Article';

function InvestmentPlanningBasics() {
  return (
    <Article
      title="Investment Planning Basics"
      icon={BarChart}
      articleId="financial-goal-setting"
      accentColor="purple"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Investment involves risk, including the possible loss of principal. This information is not investment advice. Always consider consulting with a qualified financial advisor before making investment decisions."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Creating a solid investment plan is fundamental to building wealth and achieving your financial goals. A well-designed investment strategy helps you navigate market volatility, maximize returns based on your risk tolerance, and create a path to financial security.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
          <Clock className="h-10 w-10 text-purple-600 mb-2" />
          <p className="font-medium text-purple-800">Time in the market beats timing the market</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
          <PieChart className="h-10 w-10 text-purple-600 mb-2" />
          <p className="font-medium text-purple-800">Diversification is your most reliable strategy</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex flex-col items-center text-center">
          <TrendingUp className="h-10 w-10 text-purple-600 mb-2" />
          <p className="font-medium text-purple-800">Compound growth creates wealth over time</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Target className="h-7 w-7 text-purple-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">The Investment Planning Framework</h2>
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <Target className="h-5 w-5 text-purple-700" />
              </div>
              Step 1: Define Your Investment Goals
            </h4>
            <p className="text-gray-700 mb-2">Establish clear, specific financial objectives that your investments need to help you achieve.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Considerations:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Timeframe:</strong> Short-term (1-3 years), medium-term (3-10 years), or long-term (10+ years)</li>
                <li><strong>Purpose:</strong> Retirement, home purchase, education, wealth building, etc.</li>
                <li><strong>Target amount:</strong> Calculate how much you need to reach your goal</li>
                <li><strong>Contribution capacity:</strong> How much can you invest regularly?</li>
                <li><strong>Priority level:</strong> Rank goals by importance to focus your strategy</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <AlertTriangle className="h-5 w-5 text-purple-700" />
              </div>
              Step 2: Assess Your Risk Tolerance
            </h4>
            <p className="text-gray-700 mb-2">Understand your emotional and financial capacity to handle investment volatility.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Risk Capacity Factors:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Time horizon:</strong> Longer timeframes allow for higher risk tolerance</li>
                <li><strong>Income stability:</strong> Secure, steady income enables more investment risk</li>
                <li><strong>Emergency reserves:</strong> Adequate safety net provides investment flexibility</li>
                <li><strong>Total financial picture:</strong> Overall wealth affects risk capacity</li>
                <li><strong>Emotional comfort:</strong> Your ability to stay invested during market declines</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/investment-risk-tolerance" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline text-sm">
                Learn more about risk tolerance <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <PieChart className="h-5 w-5 text-purple-700" />
              </div>
              Step 3: Develop Your Asset Allocation
            </h4>
            <p className="text-gray-700 mb-2">Determine the optimal mix of asset classes to balance risk and potential returns.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Major Asset Classes:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li><strong>Stocks/Equities:</strong> Higher growth potential with greater volatility</li>
                  <li><strong>Bonds/Fixed Income:</strong> More stable income with lower growth</li>
                  <li><strong>Cash/Equivalents:</strong> Capital preservation with minimal returns</li>
                  <li><strong>Alternative Investments:</strong> Real estate, commodities, private equity</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Sample Allocations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li><strong>Conservative:</strong> 30% stocks, 60% bonds, 10% cash</li>
                  <li><strong>Moderate:</strong> 60% stocks, 35% bonds, 5% cash</li>
                  <li><strong>Aggressive:</strong> 80% stocks, 15% bonds, 5% cash</li>
                  <li><strong>Very Aggressive:</strong> 90% stocks, 10% bonds/alternatives</li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <Link href="/education/asset-allocation-guide" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline text-sm">
                Explore asset allocation in depth <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <BarChart className="h-5 w-5 text-purple-700" />
              </div>
              Step 4: Select Investment Vehicles
            </h4>
            <p className="text-gray-700 mb-2">Choose the specific investments that will implement your asset allocation strategy.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Common Investment Options:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Index funds:</strong> Low-cost access to entire market segments</li>
                <li><strong>Exchange-traded funds (ETFs):</strong> Trade like stocks with diversification benefits</li>
                <li><strong>Mutual funds:</strong> Professionally managed portfolios with various strategies</li>
                <li><strong>Individual securities:</strong> Stocks and bonds of specific companies or entities</li>
                <li><strong>Target-date funds:</strong> Automatically adjust allocation as your timeline progresses</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/index-fund-investing" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline text-sm">
                Learn about index fund investing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <Clock className="h-5 w-5 text-purple-700" />
              </div>
              Step 5: Implement Your Investment Strategy
            </h4>
            <p className="text-gray-700 mb-2">Put your plan into action through appropriate accounts and systematic investing.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Implementation Tips:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Choose account types:</strong> 401(k), IRA, taxable brokerage based on goals</li>
                <li><strong>Dollar-cost averaging:</strong> Invest regularly regardless of market conditions</li>
                <li><strong>Tax efficiency:</strong> Place investments in appropriate accounts to minimize taxes</li>
                <li><strong>Minimize costs:</strong> Focus on low expense ratios and management fees</li>
                <li><strong>Set up automation:</strong> Automate contributions to ensure consistent investing</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/dollar-cost-averaging" className="inline-flex items-center gap-1 text-purple-600 font-medium hover:underline text-sm">
                Explore dollar-cost averaging <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <TrendingUp className="h-7 w-7 text-purple-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Core Investment Principles</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Successful investment planning is built on fundamental principles that have stood the test of time:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
            <h3 className="text-purple-800 font-semibold text-lg mb-3">Diversification</h3>
            <p className="text-gray-700 text-sm mb-3">
              Spreading investments across various asset classes, sectors, and geographies reduces risk by ensuring no single investment failure can devastate your portfolio.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Application:</strong> Own domestic and international stocks, government and corporate bonds, and potentially alternative investments like real estate investment trusts (REITs).
            </p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
            <h3 className="text-purple-800 font-semibold text-lg mb-3">Long-Term Perspective</h3>
            <p className="text-gray-700 text-sm mb-3">
              Markets fluctuate in the short term but have historically trended upward over long periods. Patience allows compound growth to work in your favor.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Application:</strong> Ignore daily market noise, avoid emotional reactions to market swings, and maintain your strategy through market cycles.
            </p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
            <h3 className="text-purple-800 font-semibold text-lg mb-3">Regular Rebalancing</h3>
            <p className="text-gray-700 text-sm mb-3">
              As markets move, your asset allocation shifts from your target. Rebalancing involves periodically adjusting back to your planned allocation.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Application:</strong> Review your portfolio annually or when allocations drift significantly (usually &gt;5%) from targets.
            </p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
            <h3 className="text-purple-800 font-semibold text-lg mb-3">Cost Management</h3>
            <p className="text-gray-700 text-sm mb-3">
              Investment costs directly reduce your returns. Over time, even small fee differences can significantly impact wealth accumulation.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Application:</strong> Favor low-cost index funds and ETFs, minimize trading frequency, and be wary of high-fee investment products.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm mb-8">
          <h4 className="font-semibold text-purple-800 mb-3">Common Investment Planning Mistakes to Avoid</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm font-medium">Emotional decision-making</p>
                <p className="text-gray-600 text-sm">Letting fear or greed drive investment decisions rather than following your plan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm font-medium">Trying to time the market</p>
                <p className="text-gray-600 text-sm">Attempting to predict market movements, which consistently underperforms a buy-and-hold strategy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm font-medium">Inadequate diversification</p>
                <p className="text-gray-600 text-sm">Concentrating too much in one company, sector, or asset class</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm font-medium">Neglecting to rebalance</p>
                <p className="text-gray-600 text-sm">Allowing market movements to drift your allocation away from your risk tolerance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm font-medium">Ignoring tax implications</p>
                <p className="text-gray-600 text-sm">Failing to consider how taxes affect net returns in different account types</p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Investment Planning Checklist</h3>
          <p className="mb-4 text-purple-50">
            Use this checklist to ensure your investment plan is comprehensive:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-purple-50">
              <div className="h-5 w-5 rounded-sm border border-purple-200 flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-200 rounded-sm"></div>
              </div>
              <span>I have clearly defined investment goals with specific amounts and timeframes</span>
            </li>
            <li className="flex items-center gap-2 text-purple-50">
              <div className="h-5 w-5 rounded-sm border border-purple-200 flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-200 rounded-sm"></div>
              </div>
              <span>My asset allocation aligns with my risk tolerance and time horizon</span>
            </li>
            <li className="flex items-center gap-2 text-purple-50">
              <div className="h-5 w-5 rounded-sm border border-purple-200 flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-200 rounded-sm"></div>
              </div>
              <span>I've selected appropriate investment vehicles with reasonable fees</span>
            </li>
            <li className="flex items-center gap-2 text-purple-50">
              <div className="h-5 w-5 rounded-sm border border-purple-200 flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-200 rounded-sm"></div>
              </div>
              <span>I have a regular investment schedule and contribution plan</span>
            </li>
            <li className="flex items-center gap-2 text-purple-50">
              <div className="h-5 w-5 rounded-sm border border-purple-200 flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-200 rounded-sm"></div>
              </div>
              <span>I understand my investments' tax implications and have optimized account types</span>
            </li>
            <li className="flex items-center gap-2 text-purple-50">
              <div className="h-5 w-5 rounded-sm border border-purple-200 flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-200 rounded-sm"></div>
              </div>
              <span>I have a rebalancing strategy to maintain my target allocation</span>
            </li>
            <li className="flex items-center gap-2 text-purple-50">
              <div className="h-5 w-5 rounded-sm border border-purple-200 flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-200 rounded-sm"></div>
              </div>
              <span>I've planned how I'll monitor progress toward my investment goals</span>
            </li>
          </ul>
          <Link href="/education/stock-market-fundamentals" className="inline-flex items-center gap-1 bg-white text-purple-700 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
            Understand Market Fundamentals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default InvestmentPlanningBasics; 