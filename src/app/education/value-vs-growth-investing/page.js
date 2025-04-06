import React from 'react';
import Link from 'next/link';
import { BarChart, AlertTriangle, ArrowRight, TrendingUp, Scissors, LineChart, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function ValueVsGrowthInvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Value vs. Growth Investing' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BarChart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Value vs. Growth Investing</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding Two Fundamental Investment Approaches</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Value and growth investing represent two distinct philosophies for selecting stocks. While value investors 
              search for undervalued companies trading below their intrinsic worth, growth investors focus on businesses 
              with strong growth potential, even at premium prices. Understanding these approaches can help you develop 
              a more balanced investment strategy.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Value Investing Fundamentals</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-700" />
                  The Value Approach
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Scissors className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Core Philosophy</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Value investing, pioneered by Benjamin Graham and championed by Warren Buffett, focuses on finding 
                          companies trading below their intrinsic value:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Seeks stocks trading at a "discount" to their true worth</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Emphasizes fundamental analysis and margin of safety</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Looks for companies the market has overlooked or temporarily punished</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <BarChart className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Key Metrics and Indicators</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Value investors rely on several metrics to identify undervalued companies:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Price-to-Earnings (P/E) Ratio:</strong> Lower ratios may indicate undervaluation</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Price-to-Book (P/B) Ratio:</strong> Compares market price to company assets minus liabilities</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Dividend Yield:</strong> Higher yields often attract value investors</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Free Cash Flow:</strong> Strong cash generation supports business stability</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <LineChart className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Typical Characteristics</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Companies that appeal to value investors often share these traits:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Established businesses in mature industries</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Steady, if not spectacular, earnings history</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Often pay dividends and prioritize shareholder returns</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>May be undergoing temporary challenges or industry headwinds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Growth Investing Fundamentals</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-700" />
                  The Growth Approach
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <TrendingUp className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Core Philosophy</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Growth investing focuses on companies expected to grow at an above-average rate compared to other companies:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Emphasizes future potential over current valuation</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Willing to pay premium prices for exceptional growth prospects</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Looks for companies disrupting industries or expanding rapidly</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <BarChart className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Key Metrics and Indicators</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Growth investors monitor these metrics to identify high-growth opportunities:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span><strong>Revenue Growth Rate:</strong> Consistent double-digit growth is attractive</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span><strong>Earnings Growth Rate:</strong> Increasing profits year-over-year</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span><strong>Price-to-Earnings Growth (PEG) Ratio:</strong> Factors growth into valuation</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span><strong>Return on Equity (ROE):</strong> Measures efficiency in generating profit</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <LineChart className="w-6 h-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Typical Characteristics</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Companies that attract growth investors often share these traits:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Often in emerging or rapidly evolving industries</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Reinvest profits into expansion rather than paying dividends</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Higher price-to-earnings ratios reflecting growth expectations</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            <span>Often have innovative products, services, or business models</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Comparing Performance</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart className="w-5 h-5 mr-2 text-purple-700" />
                  Historical Performance Patterns
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Cyclical Performance</h5>
                    <p className="text-sm text-gray-700">
                      Value and growth stocks have historically experienced periods of outperformance relative to each other:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>1970s:</strong> Value stocks outperformed during high inflation</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Late 1990s:</strong> Growth stocks dominated during the tech bubble</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>2000-2007:</strong> Value investing resurged after the dot-com crash</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>2010s:</strong> Growth stocks, particularly tech, led the market</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Economic Conditions Impact</h5>
                    <p className="text-sm text-gray-700">
                      Different economic environments can favor one style over the other:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Rising interest rates:</strong> Often favor value stocks, as they impact growth stock valuations more severely</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Economic recovery:</strong> Value stocks typically perform well coming out of recessions</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Low-growth environments:</strong> Growth stocks can command premiums when growth is scarce</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Disruptive periods:</strong> Companies transforming industries can outperform regardless of style</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Risk Considerations</h5>
                    <p className="text-sm text-gray-700">
                      Each approach carries different risk profiles:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Value risks:</strong> "Value traps" where cheap stocks remain cheap or deteriorate further</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Growth risks:</strong> High expectations leading to significant price corrections if growth slows</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Volatility patterns:</strong> Growth stocks often experience higher volatility, especially during market downturns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Blending Approaches</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-amber-700" />
                  Strategic Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">The Case for Diversification</h5>
                    <p className="text-sm text-gray-700">
                      Many financial experts recommend exposure to both investment styles:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Reduces the impact of style-specific underperformance periods</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Provides exposure to different sectors and market capitalizations</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>May smooth overall portfolio performance across different market cycles</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Implementation Strategies</h5>
                    <p className="text-sm text-gray-700">
                      Practical ways to incorporate both styles in your portfolio:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Core-satellite approach:</strong> Use broad market index funds as a core, with style-specific funds as satellites</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Value and growth ETFs:</strong> Allocate portions of your portfolio to style-specific index funds</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Style rotation:</strong> Some investors adjust allocations based on economic cycles (more advanced strategy)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">GARP: Growth at a Reasonable Price</h5>
                    <p className="text-sm text-gray-700">
                      This hybrid approach combines elements of both investment philosophies:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Seeks companies with above-average growth but reasonable valuations</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Often uses PEG ratio (P/E divided by growth rate) to identify opportunities</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>Popularized by investors like Peter Lynch, who looked for "growth at a reasonable price"</span>
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
                  <strong>1. Neither approach is universally superior.</strong> Both value and growth investing have 
                  proven successful over different time periods and market conditions.
                </p>
                <p className="text-gray-700">
                  <strong>2. Consider your investment time horizon.</strong> Growth stocks may be suitable for longer 
                  time horizons that can weather higher volatility, while value stocks may offer more stability.
                </p>
                <p className="text-gray-700">
                  <strong>3. Diversification across styles can be beneficial.</strong> Including both value and growth 
                  investments can help manage risk and potentially smooth returns across market cycles.
                </p>
                <p className="text-gray-700">
                  <strong>4. Your investment goals matter.</strong> Income-focused investors might prefer value stocks 
                  for their typically higher dividends, while those seeking capital appreciation might lean toward growth.
                </p>
                <p className="text-gray-700">
                  <strong>5. Economic conditions influence performance.</strong> Be aware of how changing economic 
                  environments might impact the relative performance of each investment style.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of September 2024. Past performance is not 
                  indicative of future results. Investment styles and markets change over time, and what has worked historically 
                  may not continue to be effective. Consider consulting with a qualified financial advisor to develop an 
                  investment strategy appropriate for your individual circumstances and goals.
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

export default ValueVsGrowthInvesting; 