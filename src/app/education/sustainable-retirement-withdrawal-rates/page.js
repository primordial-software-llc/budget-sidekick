import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, LineChart, Percent, DollarSign, Clock, TrendingDown } from 'lucide-react';
import Article from '@/components/Article';

function SustainableRetirementWithdrawalRates() {
  return (
    <Article
      title="Sustainable Retirement Withdrawal Rates"
      icon={Calculator}
      articleId="sustainable-retirement-withdrawal-rates"
      accentColor="green"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Sustainable withdrawal rates vary based on individual circumstances, market conditions, asset allocation, and spending flexibility. Historical performance is not indicative of future results. Retirement planning is complex and should ideally be done with the assistance of a qualified financial professional who can provide personalized advice."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Finding the right balance between enjoying retirement and ensuring your savings last is one of the most critical aspects of retirement planning. A sustainable withdrawal rate helps you spend confidently while protecting against the risk of outliving your assets. This guide explores evidence-based approaches to determine how much you can safely withdraw from your retirement portfolio.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
          <Clock className="h-10 w-10 text-green-600 mb-2" />
          <p className="font-medium text-green-800">Average retirement now lasts 20-30+ years</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
          <Percent className="h-10 w-10 text-green-600 mb-2" />
          <p className="font-medium text-green-800">Traditional 4% rule may need recalibration in today's market environment</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
          <TrendingDown className="h-10 w-10 text-green-600 mb-2" />
          <p className="font-medium text-green-800">Sequence of returns risk can significantly impact sustainability</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Calculator className="h-7 w-7 text-green-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding Withdrawal Rate Fundamentals</h2>
        </div>
        <p className="text-gray-600 mb-4">
          A withdrawal rate represents the percentage of your portfolio you take out annually for living expenses. The key withdrawal rate approaches include:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Percent className="h-5 w-5 text-green-700" />
              </div>
              The Traditional 4% Rule
            </h4>
            <p className="text-gray-700 mb-2">Based on research by financial advisor William Bengen and later the Trinity Study, suggesting a 4% initial withdrawal rate adjusted annually for inflation.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Insights:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Originally designed for a 30-year retirement period</li>
                <li>Based on historical U.S. market returns (50-60% stocks, 40-50% bonds)</li>
                <li>Aimed at providing a 90-95% probability of not depleting funds</li>
                <li>First-year withdrawal: 4% of initial portfolio</li>
                <li>Subsequent years: First-year dollar amount adjusted for inflation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <LineChart className="h-5 w-5 text-green-700" />
              </div>
              Modern Adjustments to the 4% Rule
            </h4>
            <p className="text-gray-700 mb-2">Recent research suggests modifications to the traditional rule based on current market conditions and longer lifespans.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Contemporary Considerations:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Lower expected returns may suggest initial rates of 3-3.5%</li>
                <li>Longer retirements (35+ years) may require more conservative withdrawals</li>
                <li>Global diversification may support slightly higher rates</li>
                <li>Bond yields significantly impact sustainable withdrawal rates</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-green-700" />
              </div>
              Dynamic Withdrawal Strategies
            </h4>
            <p className="text-gray-700 mb-2">More flexible approaches that adjust withdrawal rates based on portfolio performance and market conditions.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Popular Dynamic Methods:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Guardrails Method:</strong> Increase withdrawals in good market years, reduce in down years</li>
                <li><strong>Required Minimum Distribution (RMD) Method:</strong> Withdrawal based on portfolio balance divided by remaining life expectancy</li>
                <li><strong>Floor-and-Ceiling Approach:</strong> Adjust between predetermined minimum and maximum withdrawal percentages</li>
                <li><strong>Bucket Strategy:</strong> Segment portfolio into short, medium, and long-term buckets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-5 rounded-lg border border-green-100 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Understanding withdrawal strategies is closely connected to retirement account planning.
          </p>
          <Link href="/education/retirement-account-strategies" className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline">
            Explore Retirement Account Strategies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <TrendingDown className="h-7 w-7 text-green-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Critical Factors Affecting Withdrawal Rate Sustainability</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Several key factors significantly impact how much you can safely withdraw:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Factor</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Impact on Withdrawal Rate</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Mitigation Strategies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Sequence of Returns Risk</td>
                <td className="px-4 py-3 text-sm text-gray-600">Negative returns in early retirement years can dramatically reduce portfolio longevity</td>
                <td className="px-4 py-3 text-sm text-gray-600">Cash buffer, reduced withdrawals during downturns, bucket strategy</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Longevity</td>
                <td className="px-4 py-3 text-sm text-gray-600">Longer retirements require more conservative withdrawal rates</td>
                <td className="px-4 py-3 text-sm text-gray-600">Longevity insurance, dynamic withdrawal approaches, part-time work</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Asset Allocation</td>
                <td className="px-4 py-3 text-sm text-gray-600">Higher equity allocations may support higher withdrawal rates long-term</td>
                <td className="px-4 py-3 text-sm text-gray-600">Age-based glide paths, bucketing, risk-tolerance appropriate allocation</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Inflation</td>
                <td className="px-4 py-3 text-sm text-gray-600">Higher inflation can significantly erode purchasing power and sustainability</td>
                <td className="px-4 py-3 text-sm text-gray-600">Inflation-protected securities, partial inflation adjustments, real assets</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Spending Flexibility</td>
                <td className="px-4 py-3 text-sm text-gray-600">Ability to adjust spending can increase sustainable withdrawal rates</td>
                <td className="px-4 py-3 text-sm text-gray-600">Discretionary vs. essential expense budgeting, dynamic withdrawal methods</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-300">
          <strong>Important:</strong> Sequence of returns risk is particularly crucial. Two retirees with identical average returns but different sequences can have dramatically different outcomes. Poor returns in early retirement years are significantly more damaging than poor returns later in retirement.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Understanding market volatility is crucial for retirement planning.
          </p>
          <Link href="/education/navigating-bear-markets" className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline">
            Explore Navigating Bear Markets <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Calculator className="h-7 w-7 text-green-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Practical Implementation Strategies</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Consider these approaches to implement sustainable withdrawal strategies:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Total Return Approach:</strong> Withdraw from both principal and income, rebalancing periodically to maintain target allocation</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Guardrails Method:</strong> Start with 4-5% withdrawal, increase by 10% when portfolio grows significantly, decrease by 10% when it declines substantially</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Bucket Strategy:</strong> Maintain 2-3 years of expenses in cash/short-term investments, 3-7 years in moderate-risk investments, and remainder in growth investments</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Essential vs. Discretionary Budgeting:</strong> Cover essential expenses with guaranteed income sources, use portfolio for discretionary spending that can be adjusted</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Ratcheting Rule:</strong> Never increase withdrawals except for inflation unless the new withdrawal rate would be less than 4% of the current portfolio</li>
        </ul>

        <div className="bg-green-50 p-5 rounded-lg border border-green-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Income planning is a key component of retirement security.
          </p>
          <Link href="/education/retirement-income-planning" className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline">
            Learn about Retirement Income Planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Withdrawal Rate Decision Framework</h3>
          <p className="mb-4 text-green-50">
            Ask yourself these questions when determining your sustainable withdrawal rate:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-green-50">How long might my retirement last? (Consider family history and health status)</li>
            <li className="text-green-50">What portion of my expenses are essential vs. discretionary?</li>
            <li className="text-green-50">Do I have guaranteed income sources (pensions, annuities) that cover basic needs?</li>
            <li className="text-green-50">How will my spending likely change throughout retirement?</li>
            <li className="text-green-50">What's my comfort level with adjusting spending if market conditions change?</li>
          </ol>
          <Link href="/education/retirement-withdrawal-strategies" className="inline-flex items-center gap-1 bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
            Explore More Retirement Withdrawal Strategies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default SustainableRetirementWithdrawalRates; 