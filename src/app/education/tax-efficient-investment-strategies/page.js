import React from 'react';
import Link from 'next/link';
import { Receipt, ArrowRight, Percent, DollarSign, TrendingUp, CreditCard, ArrowUpDown } from 'lucide-react';
import Article from '@/components/Article';

function TaxEfficientInvestmentStrategies() {
  return (
    <Article
      title="Tax-Efficient Investment Strategies"
      icon={Receipt}
      articleId="tax-efficient-investment-strategies"
      accentColor="amber"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Tax laws change frequently and vary by jurisdiction. The strategies discussed may not be appropriate for all investors and specific tax situations. This information is not tax advice. Please consult with a qualified tax professional regarding your specific circumstances before implementing any tax strategy."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Taxes can significantly impact your investment returns over time. By implementing tax-efficient investment strategies, you may be able to keep more of what you earn and potentially boost your long-term wealth accumulation. This guide explores practical approaches to minimizing the tax burden on your investment portfolio.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center text-center">
          <Percent className="h-10 w-10 text-amber-600 mb-2" />
          <p className="font-medium text-amber-800">Taxes can reduce investment returns by 1-2% annually</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center text-center">
          <TrendingUp className="h-10 w-10 text-amber-600 mb-2" />
          <p className="font-medium text-amber-800">Tax-efficient investing can add over $100,000 to a $500,000 portfolio over 20 years</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center text-center">
          <DollarSign className="h-10 w-10 text-amber-600 mb-2" />
          <p className="font-medium text-amber-800">Only 28% of investors follow a tax-efficient investment strategy</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Receipt className="h-7 w-7 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Core Tax-Efficient Investment Principles</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Effective tax management begins with understanding how different investments are taxed and placing them strategically:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <ArrowUpDown className="h-5 w-5 text-amber-700" />
              </div>
              Asset Location Strategy
            </h4>
            <p className="text-gray-700 mb-2">Placing investments in tax-advantaged or taxable accounts based on their tax characteristics.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Implementation Guidelines:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Tax-advantaged accounts</strong> (IRAs, 401(k)s): Hold tax-inefficient investments that generate ordinary income (bonds, REITs, actively managed funds)</li>
                <li><strong>Taxable accounts</strong>: Hold tax-efficient investments (index funds, ETFs, municipal bonds, appreciated individual stocks held long-term)</li>
                <li><strong>Roth accounts</strong>: Prioritize highest expected growth investments since growth will never be taxed</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <TrendingUp className="h-5 w-5 text-amber-700" />
              </div>
              Tax-Loss Harvesting
            </h4>
            <p className="text-gray-700 mb-2">Strategically selling investments at a loss to offset capital gains and reduce your tax liability.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Considerations:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Losses can offset capital gains plus up to $3,000 of ordinary income annually</li>
                <li>Excess losses can be carried forward to future tax years indefinitely</li>
                <li>Be aware of wash sale rules (avoid repurchasing substantially identical securities within 30 days)</li>
                <li>Consider year-end tax planning to harvest losses strategically</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-amber-700" />
              </div>
              Tax-Efficient Investment Vehicles
            </h4>
            <p className="text-gray-700 mb-2">Selecting investment types that inherently minimize tax impact.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Recommended Options:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Index ETFs and funds</strong>: Generally generate fewer capital gains distributions than active funds</li>
                <li><strong>Municipal bonds</strong>: Interest is typically exempt from federal taxes (and sometimes state taxes)</li>
                <li><strong>Tax-managed funds</strong>: Specifically designed to minimize taxable distributions</li>
                <li><strong>Direct indexing</strong>: Custom portfolios that replicate indices while enabling personalized tax management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-amber-600" />
            <h4 className="font-semibold text-amber-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Understanding investment account types is critical for tax planning.
          </p>
          <Link href="/education/retirement-account-types" className="inline-flex items-center gap-1 text-amber-600 font-medium hover:underline">
            Explore Retirement Account Types <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <DollarSign className="h-7 w-7 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Advanced Tax-Efficiency Strategies</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Beyond the basics, consider these more sophisticated approaches to enhancing after-tax returns:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Strategy</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Key Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Tax-Gain Harvesting</td>
                <td className="px-4 py-3 text-sm text-gray-600">Lower income years or 0% capital gains bracket</td>
                <td className="px-4 py-3 text-sm text-gray-600">Reset cost basis higher without tax impact; reduce future tax liability</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Charitable Giving of Appreciated Assets</td>
                <td className="px-4 py-3 text-sm text-gray-600">Philanthropically-minded investors</td>
                <td className="px-4 py-3 text-sm text-gray-600">Avoid capital gains taxes; receive full market value deduction</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Qualified Charitable Distributions</td>
                <td className="px-4 py-3 text-sm text-gray-600">IRA owners over 70.5 years old</td>
                <td className="px-4 py-3 text-sm text-gray-600">Satisfy RMDs; exclude distribution from taxable income</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Roth Conversion Ladders</td>
                <td className="px-4 py-3 text-sm text-gray-600">Early retirees or in lower tax brackets</td>
                <td className="px-4 py-3 text-sm text-gray-600">Convert pre-tax to Roth assets at favorable rates; reduce RMDs</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Tax-Efficient Withdrawal Sequencing</td>
                <td className="px-4 py-3 text-sm text-gray-600">Retirees with multiple account types</td>
                <td className="px-4 py-3 text-sm text-gray-600">Optimize lifetime tax burden through strategic withdrawal order</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-300">
          <strong>Important:</strong> Tax-efficiency should be one component of your investment strategy, not the only consideration. Investment fundamentals such as proper asset allocation, risk management, and alignment with your financial goals should remain primary factors in portfolio construction.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-amber-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Learn more about optimizing retirement withdrawals for tax efficiency.
          </p>
          <Link href="/education/sustainable-retirement-withdrawal-rates" className="inline-flex items-center gap-1 text-amber-600 font-medium hover:underline">
            Explore Sustainable Retirement Withdrawal Rates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <CreditCard className="h-7 w-7 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Life Stage Tax Strategies</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Optimal tax strategies evolve with your financial life stages:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Early Career (20s-30s):</strong> Maximize Roth contributions when in lower tax brackets; build tax-efficient habits with initial investments; consider tax-advantaged savings for education if planning for children</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Mid-Career (40s-50s):</strong> Maximize all tax-advantaged accounts; implement asset location strategies across growing portfolio; begin tax-loss harvesting program; consider backdoor Roth strategies if income exceeds direct contribution limits</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Pre-Retirement (50s-60s):</strong> Prepare for RMDs through strategic Roth conversions; review concentrated positions for multi-year diversification plan; consider charitable remainder trusts for highly appreciated assets; implement tax-efficient withdrawal strategy</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Retirement (65+):</strong> Manage income sources to control tax brackets; utilize QCDs for charitable goals; consider partial Roth conversions to manage future RMDs; implement estate planning strategies to maximize step-up in basis for heirs</li>
        </ul>

        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-amber-600" />
            <h4 className="font-semibold text-amber-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Estate planning is closely connected to tax-efficient investing.
          </p>
          <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 text-amber-600 font-medium hover:underline">
            Explore Estate Planning Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Tax-Efficiency Action Plan</h3>
          <p className="mb-4 text-amber-50">
            Follow these steps to implement tax-efficient investment practices:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-amber-50">Audit your current portfolio for tax inefficiencies</li>
            <li className="text-amber-50">Create an asset location strategy across all your accounts</li>
            <li className="text-amber-50">Implement systematic tax-loss harvesting throughout the year</li>
            <li className="text-amber-50">Replace high-turnover active funds with tax-efficient alternatives in taxable accounts</li>
            <li className="text-amber-50">Develop a written tax-efficient withdrawal strategy for retirement</li>
          </ol>
          <Link href="/education/investment-planning-basics" className="inline-flex items-center gap-1 bg-white text-amber-700 px-4 py-2 rounded-md font-medium hover:bg-amber-50 transition-colors">
            Review Investment Planning Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default TaxEfficientInvestmentStrategies; 