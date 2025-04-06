import React from 'react';
import Link from 'next/link';
import { TrendingUp, AlertTriangle, ArrowRight, BarChart2, Activity, Target, Scale, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function RiskReturnRelationship() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Risk-Return Relationship' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">The Risk-Return Relationship</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding the Trade-off Between Risk and Potential Reward</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              One of the most fundamental concepts in investing is the relationship between risk and return. 
              Generally, investments with higher potential returns come with greater risk, while lower-risk 
              investments typically offer more modest returns. Understanding this relationship is essential 
              for building a portfolio aligned with your financial goals and risk tolerance.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">The Risk-Return Spectrum</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-700" />
                  Understanding the Trade-off
                </h4>
              </div>
              <div className="p-5">
                <div className="mb-6">
                  <p className="text-gray-700 text-sm">
                    The risk-return spectrum illustrates how different asset classes typically relate to one another in terms of risk and potential reward:
                  </p>
                  <div className="mt-4 w-full bg-gray-100 h-12 rounded-lg relative">
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <div className="text-left">
                        <div className="text-sm font-medium text-gray-800">Lower Risk</div>
                        <div className="text-xs text-gray-600">Lower Return</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-800">Higher Risk</div>
                        <div className="text-xs text-gray-600">Higher Return</div>
                      </div>
                    </div>
                    <div className="absolute top-full mt-2 left-0 right-0 flex justify-between px-2 text-xs text-gray-700">
                      <div className="text-center px-1">Cash</div>
                      <div className="text-center px-1">Gov't Bonds</div>
                      <div className="text-center px-1">Corp Bonds</div>
                      <div className="text-center px-1">Large Cap Stocks</div>
                      <div className="text-center px-1">Small Cap Stocks</div>
                      <div className="text-center px-1">Emerging Markets</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-10">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Why Higher Risk Demands Higher Returns</h5>
                    <p className="text-sm text-gray-700">
                      Investors require additional compensation (in the form of higher expected returns) to take on greater risk. 
                      This premium is the incentive for accepting the possibility of larger price fluctuations or potential loss.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">The Key Insight</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Understanding the risk-return relationship helps you make more informed investment decisions:
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>There's no such thing as a high-return, low-risk investment</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Different asset classes serve different purposes in a portfolio</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>Investment choices should reflect your time horizon and risk tolerance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Types of Investment Risk</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-green-700" />
                  Understanding Different Risk Factors
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Market Risk</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The risk that an entire market or asset class will decline in value.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Examples:</strong> Recessions, financial crises, market corrections</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Mitigation:</strong> Diversification across asset classes, geographic regions</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Specific Risk</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Risk associated with a particular company or security.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Examples:</strong> Poor management, competitive pressures, scandal</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Mitigation:</strong> Diversification within asset classes</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Inflation Risk</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The risk that rising prices will erode purchasing power.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Particularly affects:</strong> Fixed-income investments, cash</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Mitigation:</strong> Growth assets, TIPS, I-bonds, real assets</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Interest Rate Risk</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The risk that changing interest rates will affect asset values.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Particularly affects:</strong> Bonds, dividend stocks</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Mitigation:</strong> Bond laddering, diversifying maturities</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Liquidity Risk</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The risk of not being able to sell an investment quickly without significant loss.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Examples:</strong> Private equity, certain bonds, real estate</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Mitigation:</strong> Maintain emergency fund, focus on liquid investments</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Currency Risk</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The risk that exchange rate fluctuations affect investment returns.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Affects:</strong> International investments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Mitigation:</strong> Currency hedging, diversifying currency exposure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Measuring Risk and Return</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-purple-700" />
                  Quantifying the Relationship
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Standard Deviation</h5>
                    <p className="text-sm text-gray-700">
                      A statistical measure that quantifies the volatility or dispersion of returns. Higher standard deviation 
                      indicates greater price fluctuations and typically higher risk.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Common stocks typically have standard deviations of 15-25%</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Government bonds might have standard deviations of 3-7%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Beta</h5>
                    <p className="text-sm text-gray-700">
                      Measures an investment's volatility compared to the overall market (typically the S&P 500).
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Beta of 1.0: Moves in line with the market</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Beta {'>'}  1.0: More volatile than the market</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Beta {'<'} 1.0: Less volatile than the market</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Sharpe Ratio</h5>
                    <p className="text-sm text-gray-700">
                      Measures risk-adjusted return, or how much excess return you receive for the volatility you endure.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Higher Sharpe ratios indicate better risk-adjusted performance</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Useful for comparing investments with different risk profiles</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Maximum Drawdown</h5>
                    <p className="text-sm text-gray-700">
                      The largest percentage drop from a peak to a trough for an investment during a specific period.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Helps investors understand worst-case scenarios</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Important for assessing whether you can withstand market downturns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Applying the Risk-Return Framework</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-amber-700" />
                  Practical Applications
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Understanding Your Risk Tolerance</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Your risk tolerance is the degree of variability in investment returns that you're willing to withstand.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Financial capacity for risk:</strong> Factors include age, income, time horizon, and financial goals</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Psychological comfort with risk:</strong> Your emotional reaction to market volatility</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Risk capacity and risk tolerance may differ:</strong> Finding balance is key</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Portfolio Construction</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Asset allocation is the primary tool for managing the risk-return trade-off in your portfolio.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Conservative portfolio:</strong> Higher allocation to bonds and cash (e.g., 60% bonds, 30% stocks, 10% cash)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Moderate portfolio:</strong> Balanced approach (e.g., 50% stocks, 40% bonds, 10% cash)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Aggressive portfolio:</strong> Higher allocation to stocks (e.g., 80% stocks, 15% bonds, 5% cash)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Time Horizon Considerations</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Your investment time horizon significantly influences how much risk is appropriate.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Short-term goals (0-3 years):</strong> Focus on capital preservation (lower risk, lower return assets)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Medium-term goals (3-10 years):</strong> Balanced approach with moderate risk</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Long-term goals (10+ years):</strong> Greater capacity for risk, can focus more on growth assets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. The risk-return trade-off is fundamental.</strong> Higher potential returns generally 
                  require accepting higher risk. There's no free lunch in investing.
                </p>
                <p className="text-gray-700">
                  <strong>2. Diversification is your best tool.</strong> Spreading investments across different asset 
                  classes, sectors, and geographies can help manage risk while pursuing returns.
                </p>
                <p className="text-gray-700">
                  <strong>3. Know yourself.</strong> Understanding your own risk tolerance and time horizon is 
                  crucial for building a sustainable investment strategy.
                </p>
                <p className="text-gray-700">
                  <strong>4. Risk comes in many forms.</strong> Be aware of the various types of investment risk 
                  and how they might affect your specific portfolio.
                </p>
                <p className="text-gray-700">
                  <strong>5. Regular assessment is essential.</strong> As your life circumstances change, so might 
                  your risk tolerance and investment objectives.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of August 2024. All investments involve risk, 
                  including the possible loss of principal. Past performance is not indicative of future results. Consider consulting 
                  with a financial advisor to develop an investment strategy appropriate for your individual circumstances.
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

export default RiskReturnRelationship; 