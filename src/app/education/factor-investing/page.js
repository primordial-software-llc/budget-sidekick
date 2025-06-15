import React from 'react';
import Link from 'next/link';
import { BarChart2, AlertTriangle, ArrowRight, TrendingUp, Scale, Clock, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';

const ARTICLE_ID = 'factor-investing';

const articleData = getArticleData(ARTICLE_ID);

export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

function FactorInvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Factor Investing' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BarChart2 className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Factor Investing</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Targeting Specific Return Drivers in Your Portfolio</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Factor investing is a strategy that targets specific drivers of return across asset classes. 
              Based on academic research and market observations, this approach identifies characteristics or "factors" 
              that explain differences in investment returns. By systematically targeting these factors, investors aim to 
              enhance returns, reduce risk, or achieve both objectives simultaneously.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding Factor Investing</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-blue-700" />
                  The Evolution of Factor-Based Approaches
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <TrendingUp className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Historical Development</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The journey from traditional investing to factor-based approaches:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Capital Asset Pricing Model (CAPM):</strong> Introduced the market factor (beta) in the 1960s</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Fama-French Three-Factor Model:</strong> Added size and value factors in the early 1990s</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Modern expansion:</strong> Research identified momentum, quality, low volatility, and other factors</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <BarChart2 className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">From Theory to Practice</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          How factor investing bridges academic research and practical portfolio management:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Smart beta:</strong> Factor-based investment products that sit between active and passive strategies</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Democratization:</strong> Evolution from institutional-only strategies to widely available ETFs and funds</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Technology advancement:</strong> Computational power and data analysis enabling sophisticated implementation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Scale className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Factor Investing vs. Traditional Approaches</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Key distinctions from conventional investing methods:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Beyond asset classes:</strong> Focus on characteristics that drive returns across different assets</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Rules-based:</strong> Systematic approach rather than subjective judgment or forecasting</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Transparency:</strong> Clear methodology for security selection based on identifiable characteristics</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Major Investment Factors</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-purple-700" />
                  Well-Established Factors
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Value Factor</h5>
                    <p className="text-sm text-gray-700">
                      The tendency of undervalued securities to outperform overvalued ones over time.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Metrics:</strong> Low price-to-book, price-to-earnings, price-to-sales, or price-to-cash flow ratios</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Explanation:</strong> Investor overreaction, behavioral biases, or compensation for higher distress risk</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Performance:</strong> Tends to outperform during economic recoveries and inflationary periods</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Size Factor</h5>
                    <p className="text-sm text-gray-700">
                      The tendency of smaller companies to outperform larger ones over the long term.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Metrics:</strong> Market capitalization, total enterprise value</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Explanation:</strong> Compensation for higher volatility, lower liquidity, and less analyst coverage</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Performance:</strong> Often strongest during periods of economic expansion and risk-seeking behavior</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Momentum Factor</h5>
                    <p className="text-sm text-gray-700">
                      The tendency of securities that have performed well to continue performing well in the near term.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Metrics:</strong> Relative performance over the past 3-12 months (excluding the most recent month)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Explanation:</strong> Investor underreaction to information, herding behavior, trend-following</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Performance:</strong> Works well in trending markets but can experience sharp reversals during market turns</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Quality Factor</h5>
                    <p className="text-sm text-gray-700">
                      The tendency of companies with strong fundamentals to deliver superior risk-adjusted returns.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Metrics:</strong> High return on equity, low debt, stable earnings growth, strong profit margins</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Explanation:</strong> Investor undervaluation of operational stability and financial strength</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Performance:</strong> Often outperforms during market downturns and periods of uncertainty</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Low Volatility Factor</h5>
                    <p className="text-sm text-gray-700">
                      The anomalous finding that lower-volatility securities often deliver better risk-adjusted returns than higher-volatility ones.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Metrics:</strong> Standard deviation of returns, beta, downside capture</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Explanation:</strong> Investor preference for lottery-like payoffs, leverage constraints, benchmarking pressures</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Performance:</strong> Typically provides downside protection during market stress with reduced upside capture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Implementing Factor Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-green-700" />
                  Approaches to Factor Investing
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Single-Factor Strategies</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Targeting one specific factor:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Pure exposure:</strong> Concentrated bet on a single return driver</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Tactical applications:</strong> Rotating between factors based on economic cycles</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Challenge:</strong> Timing factor performance can be difficult</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Multi-Factor Strategies</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Combining multiple factors in one portfolio:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Diversification benefit:</strong> Factors often perform differently in various market environments</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Implementation methods:</strong> Composite scoring, sleeve approach, integrated optimization</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Consideration:</strong> Factor interaction effects can enhance or diminish results</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">ETFs and Index Funds</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Passive vehicles for factor exposure:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Smart beta ETFs:</strong> Rules-based funds targeting specific factors</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Advantages:</strong> Lower cost, transparent methodology, tax efficiency</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Consideration:</strong> Methodology differences across providers can yield varying results</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Active Management</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Discretionary integration of factor insights:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Quantitative funds:</strong> Systematic strategies with factor tilts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Fundamental managers:</strong> Incorporating factor insights into traditional analysis</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Advantage:</strong> Potential for adaptability and refinement of factor definitions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Challenges and Considerations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-red-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                  Important Issues to Consider
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Factor Cyclicality</h5>
                    <p className="text-sm text-gray-700">
                      Factors experience prolonged periods of outperformance and underperformance. For example, value underperformed growth significantly from 2007-2020 before staging a comeback. Investors need patience and conviction during adverse factor cycles.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Crowding Risk</h5>
                    <p className="text-sm text-gray-700">
                      As factor strategies gain popularity, returns may diminish due to increased investor participation. When too many investors pursue the same factors, prices can be bid up, reducing future return potential and increasing the risk of sharp reversals.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Implementation Challenges</h5>
                    <p className="text-sm text-gray-700">
                      Factor definitions vary across providers, and seemingly minor methodology differences can significantly impact performance. Transaction costs, rebalancing frequency, and portfolio construction techniques all influence realized returns from factor strategies.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Behavioral Discipline</h5>
                    <p className="text-sm text-gray-700">
                      Factor investing requires discipline to maintain positions during periods of underperformance. The same behavioral biases that create factor premiums can make it difficult for investors to stick with factor strategies when they underperform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Factor Investing Best Practices</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Take a long-term view.</strong> Factor premiums may take years to materialize and 
                  can experience extended periods of underperformance. A long-term perspective is essential.
                </p>
                <p className="text-gray-700">
                  <strong>2. Diversify across factors.</strong> Different factors perform well in different 
                  economic and market environments. Combining multiple factors can smooth returns and reduce risk.
                </p>
                <p className="text-gray-700">
                  <strong>3. Consider factor interactions.</strong> Some factors work well together while others 
                  may partially offset each other. Understanding how factors interact can improve portfolio construction.
                </p>
                <p className="text-gray-700">
                  <strong>4. Focus on implementation efficiency.</strong> Low costs, tax awareness, and thoughtful 
                  rebalancing are critical to capturing theoretical factor premiums in practice.
                </p>
                <p className="text-gray-700">
                  <strong>5. Align with your investment goals.</strong> Match factor exposures to your objectives—whether 
                  maximizing returns, reducing volatility, or enhancing income.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of September 2024. Factor premiums 
                  are not guaranteed and may be subject to long periods of underperformance. Past performance is not 
                  indicative of future results. Consider consulting with a financial advisor to determine if factor 
                  investing strategies align with your financial goals and risk tolerance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Article
        title={articleData.title}
        icon={BarChart2}
        articleId={ARTICLE_ID}
        accentColor="blue"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        {/* ... existing code ... */}
      </Article>
    </>
  );
}

export default FactorInvesting;