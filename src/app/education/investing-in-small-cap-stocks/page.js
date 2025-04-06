import React from 'react';
import Link from 'next/link';
import { BarChart, ArrowRight, Percent, TrendingUp, AlertTriangle, Clock, Scale } from 'lucide-react';
import Article from '@/components/Article';

function InvestingInSmallCapStocks() {
  return (
    <Article
      title="Investing in Small-Cap Stocks"
      icon={BarChart}
      articleId="investing-in-small-cap-stocks"
      accentColor="blue"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Small-cap stocks may involve significant risk and volatility. Past performance is not indicative of future results. This information is not personalized investment advice. Please consult with a qualified financial professional before making investment decisions based on your specific situation and risk tolerance."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Small-cap stocks—shares of companies with relatively small market capitalizations—offer unique opportunities and risks for investors. While these smaller companies may provide significant growth potential and portfolio diversification, they also come with increased volatility and unique challenges. This guide explores the fundamentals of small-cap investing and strategies for incorporating these securities into a diversified portfolio.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
          <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
          <p className="font-medium text-blue-800">Small-caps have historically outperformed large-caps over very long time periods</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
          <AlertTriangle className="h-10 w-10 text-blue-600 mb-2" />
          <p className="font-medium text-blue-800">Small-cap stocks typically exhibit 25-35% more volatility than large-caps</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center">
          <Percent className="h-10 w-10 text-blue-600 mb-2" />
          <p className="font-medium text-blue-800">Portfolio allocation to small-caps typically ranges from 5-25% depending on risk tolerance</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <BarChart className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding Small-Cap Stocks</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Small-cap stocks have distinct characteristics that differentiate them from their larger counterparts:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Scale className="h-5 w-5 text-blue-700" />
              </div>
              What Defines a Small-Cap Stock?
            </h4>
            <p className="text-gray-700 mb-2">While definitions vary, small-caps are typically classified by their market capitalization.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Market Cap Classifications:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Large-Cap:</strong> Companies with market capitalizations of $10+ billion</li>
                <li><strong>Mid-Cap:</strong> Companies with market capitalizations between $2-10 billion</li>
                <li><strong>Small-Cap:</strong> Companies with market capitalizations between $300 million and $2 billion</li>
                <li><strong>Micro-Cap:</strong> Companies with market capitalizations between $50-300 million</li>
                <li><strong>Nano-Cap:</strong> Companies with market capitalizations below $50 million</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2 italic">Note: These ranges are approximate and can vary by source and over time as markets evolve.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <TrendingUp className="h-5 w-5 text-blue-700" />
              </div>
              Key Characteristics of Small-Cap Stocks
            </h4>
            <p className="text-gray-700 mb-2">Understanding the fundamental traits that define small-cap companies.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Common Attributes:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Growth Potential:</strong> Often in early stages of business development with significant room for expansion</li>
                <li><strong>Limited Analyst Coverage:</strong> Typically followed by fewer professional analysts, potentially creating inefficiencies and opportunities</li>
                <li><strong>Greater Volatility:</strong> Price movements tend to be more dramatic than larger companies</li>
                <li><strong>Domestic Focus:</strong> Many small-caps have more concentrated, often domestic, business operations</li>
                <li><strong>Less Liquidity:</strong> Typically trade with lower volume, potentially making position entry/exit more challenging</li>
                <li><strong>Business Risk:</strong> Often have less diversified revenue streams and smaller financial reserves</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Clock className="h-5 w-5 text-blue-700" />
              </div>
              Small-Cap Performance Cycles
            </h4>
            <p className="text-gray-700 mb-2">Small-cap performance tends to follow distinct patterns relative to large-caps.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Historical Patterns:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Early Economic Recovery:</strong> Small-caps often outperform early in economic recoveries and expansion phases</li>
                <li><strong>Rising Interest Rate Environments:</strong> Historically, small-caps have shown resilience during moderate rate increases</li>
                <li><strong>Market Downturns:</strong> Typically experience sharper declines during market corrections and bear markets</li>
                <li><strong>Long-Term Performance:</strong> While exhibiting more volatility, small-caps have delivered superior long-term returns historically</li>
                <li><strong>Sector/Style Rotation:</strong> Performance often tied to broader sector rotation and shifts between growth and value styles</li>
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
            Understanding asset allocation is critical when incorporating small-caps into your portfolio.
          </p>
          <Link href="/education/asset-allocation-guide" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
            Explore Asset Allocation Guide <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <AlertTriangle className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Risk and Reward Considerations</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Small-cap investing involves specific risk/reward trade-offs that investors should carefully consider:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Potential Rewards</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Potential Risks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-600">Higher growth potential as companies expand market share and revenues</td>
                <td className="px-4 py-3 text-sm text-gray-600">Greater business failure risk due to limited resources and narrower business models</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600">Potential for market inefficiencies due to limited analyst coverage</td>
                <td className="px-4 py-3 text-sm text-gray-600">Higher volatility with more dramatic price swings both upward and downward</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-600">Acquisition targets for larger companies, potentially at significant premiums</td>
                <td className="px-4 py-3 text-sm text-gray-600">Less liquidity, which can lead to wider bid-ask spreads and difficulty exiting positions</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600">Portfolio diversification benefits through different return patterns</td>
                <td className="px-4 py-3 text-sm text-gray-600">Less transparent with potentially limited financial disclosure and governance</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-600">Often more responsive to domestic economic conditions</td>
                <td className="px-4 py-3 text-sm text-gray-600">More vulnerable to economic downturns due to limited financial resources</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-300">
          <strong>Important:</strong> Small-cap investing requires careful consideration of your investment time horizon. These investments are typically more appropriate for longer-term goals (7+ years) where short-term volatility can be tolerated in pursuit of potentially higher long-term returns.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Understanding your risk tolerance is crucial when investing in more volatile assets.
          </p>
          <Link href="/education/investment-risk-tolerance" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
            Explore Investment Risk Tolerance <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <TrendingUp className="h-7 w-7 text-blue-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Small-Cap Investment Strategies</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Consider these approaches when incorporating small-cap stocks into your portfolio:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Diversified Index Funds/ETFs:</strong> Provide broad exposure to hundreds of small-cap stocks, reducing individual company risk while capturing the overall small-cap premium; options include total market, value-oriented, or growth-oriented indices</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Actively Managed Funds:</strong> Can potentially exploit inefficiencies in the small-cap market through professional research and stock selection; look for experienced managers with consistent approaches and reasonable expense ratios</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Dollar-Cost Averaging:</strong> Particularly valuable for small-caps given their volatility; regular, systematic investments can help smooth out entry points and potentially enhance long-term returns</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Strategic Allocation:</strong> Determine an appropriate small-cap allocation based on your time horizon and risk tolerance (typically 5-25% of equity exposure); rebalance periodically to maintain target allocation</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Individual Stock Selection:</strong> For experienced investors willing to conduct thorough research; focus on companies with strong balance sheets, growing markets, competitive advantages, and reasonable valuations</li>
        </ul>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-blue-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Learn how dollar-cost averaging can be especially beneficial for volatile assets.
          </p>
          <Link href="/education/dollar-cost-averaging" className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
            Explore Dollar-Cost Averaging <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Small-Cap Investing Checklist</h3>
          <p className="mb-4 text-blue-50">
            Consider these questions before adding small-cap investments to your portfolio:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-blue-50">Does your investment time horizon allow you to ride out the higher volatility of small-cap stocks?</li>
            <li className="text-blue-50">Have you determined an appropriate allocation to small-caps based on your overall investment strategy and risk tolerance?</li>
            <li className="text-blue-50">Have you considered tax implications, as small-caps may generate higher turnover and capital gains distributions?</li>
            <li className="text-blue-50">Do you have a plan for regular monitoring and rebalancing to maintain your target allocation?</li>
            <li className="text-blue-50">Have you researched specific funds or stocks thoroughly, understanding their strategies, expenses, and performance patterns?</li>
          </ol>
          <Link href="/education/portfolio-rebalancing" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Learn About Portfolio Rebalancing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default InvestingInSmallCapStocks; 