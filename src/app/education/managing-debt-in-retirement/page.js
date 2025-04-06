import React from 'react';
import Link from 'next/link';
import { Wallet, ArrowRight, Home, CreditCard, LineChart, Scale, TrendingDown } from 'lucide-react';
import Article from '@/components/Article';

function ManagingDebtInRetirement() {
  return (
    <Article
      title="Managing Debt in Retirement"
      icon={Wallet}
      articleId="managing-debt-in-retirement"
      accentColor="indigo"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Debt management strategies vary based on individual financial circumstances, interest rates, and retirement income sources. This information is not personalized financial advice. Please consult with a qualified financial professional to develop a debt management strategy tailored to your specific situation."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Entering retirement with debt has become increasingly common. While traditional financial wisdom suggested eliminating all debt before retirement, today's retirees often carry mortgages, auto loans, or even credit card balances into their retirement years. This guide explores strategies for effectively managing debt during retirement to maintain financial security and peace of mind.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <Home className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">46% of retirees aged 65-74 now have mortgage debt</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <CreditCard className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">Credit card debt among seniors has doubled in the past decade</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <TrendingDown className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">Each $100 in monthly debt payments reduces sustainable withdrawal rates by approximately 0.3%</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Wallet className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding Debt in Retirement</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Not all debt is created equal, especially during retirement. Consider these distinctions when evaluating your debt situation:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Scale className="h-5 w-5 text-indigo-700" />
              </div>
              Good vs. Problem Debt in Retirement
            </h4>
            <p className="text-gray-700 mb-2">Understanding which debts pose significant risks to your retirement security.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Considerations:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Manageable Debt:</strong> Low fixed-rate, tax-advantaged debt (like some mortgages) with payments comfortably covered by steady income sources</li>
                <li><strong>Problematic Debt:</strong> High-interest consumer debt, variable-rate loans, or any debt that requires withdrawing from retirement accounts at unsustainable rates</li>
                <li><strong>Risk Factor:</strong> Total debt service ratio exceeding 25-30% of retirement income typically signals potential trouble</li>
                <li><strong>Impact Assessment:</strong> Consider how debt payments affect your ability to cover essential expenses and healthcare costs</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Home className="h-5 w-5 text-indigo-700" />
              </div>
              Mortgage Debt in Retirement
            </h4>
            <p className="text-gray-700 mb-2">Special considerations for the most common substantial debt carried into retirement.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Modern Perspective:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Low, fixed-rate mortgages with tax-deductible interest may be reasonable to maintain if investments earn higher returns</li>
                <li>The psychological benefit of a paid-off home provides retirement security that shouldn't be undervalued</li>
                <li>Consider remaining mortgage term in relation to life expectancy and legacy goals</li>
                <li>Refinancing before retirement can be strategic if it significantly lowers payments or shortens terms</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <CreditCard className="h-5 w-5 text-indigo-700" />
              </div>
              High-Interest Debt Concerns
            </h4>
            <p className="text-gray-700 mb-2">The impact of carrying consumer debt with high interest rates into retirement.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Critical Risks:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Credit card debt typically costs 15-24% while retirement portfolios aim for 4-7% returns</li>
                <li>Reveals potential cash flow problems that could escalate throughout retirement</li>
                <li>Often requires higher portfolio withdrawal rates, accelerating depletion of retirement savings</li>
                <li>Can restrict financial flexibility needed to handle unexpected retirement expenses</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-indigo-600" />
            <h4 className="font-semibold text-indigo-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Understanding retirement withdrawal strategies helps with debt management planning.
          </p>
          <Link href="/education/sustainable-retirement-withdrawal-rates" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
            Explore Sustainable Retirement Withdrawal Rates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <LineChart className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Strategic Debt Management Approaches</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Consider these approaches for handling debt during retirement:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Strategy</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Considerations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Pre-Retirement Payoff</td>
                <td className="px-4 py-3 text-sm text-gray-600">High-interest debt; Those with sufficient assets</td>
                <td className="px-4 py-3 text-sm text-gray-600">May require larger contributions to retirement accounts later; Simplifies retirement cash flow</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Debt Consolidation</td>
                <td className="px-4 py-3 text-sm text-gray-600">Multiple high-interest debts; Good credit score</td>
                <td className="px-4 py-3 text-sm text-gray-600">Requires discipline to avoid accumulating new debt; Can significantly reduce interest costs</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Refinancing</td>
                <td className="px-4 py-3 text-sm text-gray-600">Long-term mortgage holders; Current high interest rates</td>
                <td className="px-4 py-3 text-sm text-gray-600">Consider closing costs vs. savings; Best done before full retirement if income qualification is needed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Partial Lump Sum Paydown</td>
                <td className="px-4 py-3 text-sm text-gray-600">Retirees with accessible non-retirement assets</td>
                <td className="px-4 py-3 text-sm text-gray-600">Reduces balance while maintaining emergency reserves; Can recast mortgage to lower payments</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Reverse Mortgage</td>
                <td className="px-4 py-3 text-sm text-gray-600">House-rich, cash-poor retirees over 62</td>
                <td className="px-4 py-3 text-sm text-gray-600">Complex product with significant fees; Can provide tax-free cash flow but reduces estate value</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-300">
          <strong>Important:</strong> Any debt payoff strategy should be evaluated in the context of your complete retirement plan. Paying off debt isn't always mathematically optimal, but the psychological benefits of reduced financial stress should be factored into your decision-making process.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-indigo-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Housing decisions play a major role in retirement financial planning.
          </p>
          <Link href="/education/housing-decisions-in-retirement" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
            Explore Housing Decisions in Retirement <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <TrendingDown className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Balancing Debt Payoff vs. Savings</h2>
        </div>
        <p className="text-gray-600 mb-4">
          When approaching or in retirement, consider these factors when deciding between paying down debt or maintaining investments:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Interest Rate Comparison:</strong> Compare the after-tax interest rate on debt to expected after-tax investment returns, adjusting for risk (investments with higher expected returns typically carry higher risk)</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Liquidity Needs:</strong> Maintaining accessible funds is more critical in retirement when earning ability is limited; avoid depleting liquid assets to pay off debt if emergency funds would be compromised</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Tax Considerations:</strong> Evaluate the tax implications of both debt maintenance (potential interest deductions) and using retirement account withdrawals for debt payments (potential tax consequences)</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Income Source Impact:</strong> Assess how debt payments affect your sustainable withdrawal rate from investment accounts and overall retirement income strategy</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Psychological Factors:</strong> The peace of mind from being debt-free has real value that should be weighed alongside purely numerical analysis</li>
        </ul>

        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-indigo-600" />
            <h4 className="font-semibold text-indigo-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Tax-efficient investing can help balance debt management strategies.
          </p>
          <Link href="/education/tax-efficient-investment-strategies" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
            Explore Tax-Efficient Investment Strategies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Retirement Debt Management Checklist</h3>
          <p className="mb-4 text-indigo-50">
            Follow these steps to develop your retirement debt management strategy:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-indigo-50">List all debts with their interest rates, terms, and monthly payments</li>
            <li className="text-indigo-50">Calculate your debt-to-income ratio using expected retirement income</li>
            <li className="text-indigo-50">Prioritize eliminating high-interest, non-tax-advantaged debt</li>
            <li className="text-indigo-50">Analyze the impact of debt payments on your retirement withdrawal strategy</li>
            <li className="text-indigo-50">Develop a written plan that balances financial optimization with peace of mind</li>
          </ol>
          <Link href="/education/retirement-income-planning" className="inline-flex items-center gap-1 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            Explore Retirement Income Planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default ManagingDebtInRetirement; 