import React from 'react';
import Link from 'next/link';
import { Briefcase, AlertTriangle, ArrowRight, Building, Palette, Gem, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function AlternativeInvestments() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Alternative Investments' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Alternative Investments</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Beyond Stocks and Bonds: Diversifying with Non-Traditional Assets</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Alternative investments encompass assets beyond traditional stocks, bonds, and cash. These non-conventional 
              options can provide diversification benefits, potential for higher returns, and reduced portfolio correlation 
              to mainstream markets. Understanding their unique characteristics, risks, and access methods is essential for 
              investors considering these sophisticated options.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Major Alternative Asset Classes</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-700" />
                  Types of Alternative Investments
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Building className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Private Equity & Venture Capital</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Investments in private companies that aren't listed on public exchanges:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Private Equity:</strong> Investing in established private companies or buying public companies to take private</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Venture Capital:</strong> Funding early-stage companies with high growth potential</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Characteristics:</strong> Long-term horizons (7-10+ years), high minimum investments, potential for outsized returns</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <BookOpen className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Hedge Funds</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Actively managed investment pools using sophisticated strategies:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Strategies:</strong> Long/short equity, global macro, event-driven, quantitative, multi-strategy</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Structure:</strong> Limited partnerships with high minimum investments, performance-based fees</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Goal:</strong> Generating alpha (excess returns) regardless of market direction</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Building className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Real Assets</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Physical assets with intrinsic value beyond traditional real estate:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Infrastructure:</strong> Investments in toll roads, airports, utilities, renewable energy</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Natural resources:</strong> Timberland, farmland, water rights, mining operations</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Benefits:</strong> Potential inflation hedge, income generation, low correlation to financial markets</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Palette className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Collectibles & Tangible Assets</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Physical items valued for their rarity, cultural significance, or aesthetic qualities:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Fine art, rare coins, vintage cars:</strong> Traditional collectibles with established markets</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Wine, whiskey, watches:</strong> Emerging collectible categories with growing investor interest</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Considerations:</strong> Storage, insurance, authentication, limited liquidity, maintenance costs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Gem className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Emerging Alternative Categories</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Newer asset classes gaining investor attention:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Private debt:</strong> Direct lending, mezzanine financing, distressed debt</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Digital assets:</strong> Certain crypto assets, blockchain investments, tokenized securities</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Intellectual property:</strong> Patents, royalties, music catalogs, content libraries</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Benefits and Risks</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-green-700" />
                  Advantages of Alternative Investments
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Portfolio Diversification</h5>
                    <p className="text-sm text-gray-700">
                      Alternative investments often have low correlation with traditional markets, potentially reducing overall portfolio volatility. During periods when stocks and bonds struggle, certain alternative assets may perform independently or even thrive.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Return Enhancement</h5>
                    <p className="text-sm text-gray-700">
                      Some alternative investments target higher absolute returns than public markets. Private equity, for example, has historically delivered premium returns over public equities, though with significantly higher risk and less liquidity.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Inflation Protection</h5>
                    <p className="text-sm text-gray-700">
                      Real assets like infrastructure, commodities, and certain real estate investments can serve as inflation hedges. Their values and income streams often rise with inflation, providing portfolio protection during inflationary periods.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Access to Unique Opportunities</h5>
                    <p className="text-sm text-gray-700">
                      Alternatives provide exposure to investment opportunities not available in public markets, such as early-stage companies, specialized real estate projects, or emerging technologies before they reach public markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-red-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                  Risks and Limitations
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Liquidity Constraints</h5>
                    <p className="text-sm text-gray-700">
                      Many alternative investments have extended lock-up periods or limited secondary markets. Investors may be unable to access their capital for years, making these unsuitable for funds that might be needed in the short to medium term.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Higher Fees</h5>
                    <p className="text-sm text-gray-700">
                      Alternative investments typically carry higher fees than traditional investments. Common fee structures include management fees (1-2%) plus performance fees (often 20% of profits), which can significantly impact net returns.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Complexity and Transparency Issues</h5>
                    <p className="text-sm text-gray-700">
                      Alternative investments often involve complex strategies, structures, and terms. Many operate with less regulatory oversight and disclosure than public markets, making due diligence challenging and increasing the importance of manager selection.
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Valuation Challenges</h5>
                    <p className="text-sm text-gray-700">
                      Unlike public securities with continuous market pricing, many alternative assets are difficult to value. Reported values may be based on appraisals, models, or manager estimates rather than actual transactions, potentially masking volatility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Access Methods for Individual Investors</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-amber-700" />
                  Ways to Invest in Alternatives
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Public Market Alternatives</h5>
                    <p className="text-sm text-gray-700">
                      Publicly traded securities offering exposure to alternative asset classes:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>REITs (Real Estate Investment Trusts):</strong> Publicly traded companies owning and operating real estate</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>BDCs (Business Development Companies):</strong> Listed entities that invest in private companies</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Publicly traded private equity firms:</strong> Companies like Blackstone, KKR, and Carlyle</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>ETFs and mutual funds:</strong> Focused on commodities, infrastructure, or alternative strategies</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Private Fund Structures</h5>
                    <p className="text-sm text-gray-700">
                      Traditional access methods for accredited or qualified investors:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Limited partnerships:</strong> Traditional vehicle for private equity, hedge funds, and venture capital</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Funds of funds:</strong> Diversified portfolios of alternative investments with lower minimums</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Interval funds:</strong> Hybrid structure offering limited periodic liquidity and lower investment minimums</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Emerging Access Platforms</h5>
                    <p className="text-sm text-gray-700">
                      Newer methods democratizing access to alternatives:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Alternative investment platforms:</strong> Online marketplaces for private investments with lower minimums</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Crowdfunding:</strong> Real estate, startup equity, and other alternatives available to broader audiences</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Fractional ownership platforms:</strong> Allowing partial investment in art, collectibles, and other assets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Considerations Before Investing</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Know your liquidity needs.</strong> Be realistic about when you'll need access to your capital. 
                  Alternative investments should generally be considered long-term commitments.
                </p>
                <p className="text-gray-700">
                  <strong>2. Understand the fee structure.</strong> Calculate the total cost of ownership, including 
                  management fees, performance fees, and any underlying expenses, which can significantly impact returns.
                </p>
                <p className="text-gray-700">
                  <strong>3. Consider allocation size.</strong> Most financial professionals suggest limiting alternative 
                  investments to 10-20% of a diversified portfolio for individual investors.
                </p>
                <p className="text-gray-700">
                  <strong>4. Focus on manager selection.</strong> In alternative investments, the dispersion between top 
                  and bottom performers can be enormous, making manager selection critical.
                </p>
                <p className="text-gray-700">
                  <strong>5. Be wary of complexity.</strong> If you can't clearly explain how an investment makes money, 
                  it may not be appropriate for your portfolio.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of September 2024. Many alternative investments 
                  are only available to accredited or qualified investors and may involve significant risks including loss of 
                  principal. Past performance is not indicative of future results. Consult with a financial advisor to determine 
                  if alternative investments are appropriate for your portfolio and financial situation.
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

export default AlternativeInvestments; 