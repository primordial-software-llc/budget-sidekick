import React from 'react';
import Link from 'next/link';
import { Link as LinkIcon, AlertTriangle, ArrowRight, TrendingUp, LineChart, Clock, Percent, Shield, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function BondsInvestingGuide() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Bonds Investing Guide' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <LinkIcon className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Bonds Investing Guide</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding Fixed Income Securities</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Bonds provide stability, income, and diversification in an investment portfolio. 
              Whether you're saving for retirement, seeking regular income, or looking to balance the risk of your stock holdings, 
              understanding bonds is essential for a well-rounded investment strategy.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                While stocks often get more attention, bonds play a crucial role in wealth preservation and income generation. 
                As you approach retirement or need more predictable returns, the percentage of bonds in your portfolio typically increases. 
                Understanding different bond types helps you select the right mix for your goals and risk tolerance.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Bond Basics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <LinkIcon className="w-5 h-5 mr-2 text-blue-700" />
                    What Is a Bond?
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">The Basic Concept</h5>
                      <p className="text-sm text-gray-700">
                        A bond is a loan you make to an entity (government, municipality, or corporation) in exchange for regular 
                        interest payments and the return of the bond's face value when it matures. Essentially, you're the lender.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Bond Terms</h5>
                      <p className="text-sm text-gray-700">
                        <strong>Face/Par Value:</strong> The amount paid to the bondholder at maturity (typically $1,000 per bond).<br />
                        <strong>Coupon Rate:</strong> The annual interest paid as a percentage of the face value.<br />
                        <strong>Maturity Date:</strong> When the principal amount is returned to the bondholder.<br />
                        <strong>Yield:</strong> The actual return based on the price paid and interest received.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Bond Pricing</h5>
                      <p className="text-sm text-gray-700">
                        Bonds can trade at par (face value), at a premium (above face value), or at a discount (below face value), 
                        depending on prevailing interest rates and the issuer's creditworthiness.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Inverse relationship with interest rates
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-700" />
                    How Bonds Work
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">The Life of a Bond</h5>
                      <p className="text-sm text-gray-700">
                        <strong>Issuance:</strong> Entity sells bonds to raise capital.<br />
                        <strong>Interest Payments:</strong> Typically semi-annual payments to bondholders.<br />
                        <strong>Secondary Market:</strong> Bonds can be bought and sold before maturity.<br />
                        <strong>Maturity:</strong> The issuer returns the face value to the current bondholder.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Interest Rate Sensitivity</h5>
                      <p className="text-sm text-gray-700">
                        When market interest rates rise, existing bond prices fall (and vice versa). 
                        Longer-term bonds are more sensitive to interest rate changes than shorter-term bonds.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Credit Risk</h5>
                      <p className="text-sm text-gray-700">
                        The possibility that the bond issuer won't make scheduled interest or principal payments. 
                        Higher risk generally means higher yield potential to compensate investors.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Rating agencies assess credit risk
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Types of Bonds</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <LinkIcon className="w-5 h-5 mr-2 text-purple-700" />
                  Bond Categories
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Shield className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Government Bonds</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Issued by the federal government to fund operations and manage national debt. 
                          U.S. Treasury securities are considered among the safest investments globally.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Treasury Bills (T-Bills): Short-term, under 1 year
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Treasury Notes: 2-10 years
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Treasury Bonds: 20-30 years
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            TIPS: Inflation-protected securities
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Shield className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Municipal Bonds</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Issued by states, cities, counties, and other local government entities to fund public projects. 
                          Interest is often exempt from federal taxes and sometimes state and local taxes for residents.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            General Obligation Bonds
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Revenue Bonds
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Tax advantages
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Corporate Bonds</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Issued by companies to raise capital for operations, expansions, or acquisitions. 
                          They typically offer higher yields than government bonds but come with increased risk.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Investment-grade (higher quality)
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            High-yield/junk bonds (lower quality)
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Convertible bonds
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Bond Features and Variations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Percent className="w-5 h-5 mr-2 text-amber-700" />
                    Special Features
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Callable Bonds</h5>
                      <p className="text-sm text-gray-700">
                        Allow the issuer to redeem the bond before maturity, usually when interest rates fall. 
                        Callable bonds typically offer higher yields to compensate for this risk to investors.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Convertible Bonds</h5>
                      <p className="text-sm text-gray-700">
                        Can be converted into a predetermined number of the issuer's common shares. 
                        They offer the potential for capital appreciation if the company's stock rises substantially.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Zero-Coupon Bonds</h5>
                      <p className="text-sm text-gray-700">
                        Don't pay periodic interest but are sold at a discount to face value. 
                        The return comes from the difference between the purchase price and the face value at maturity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-indigo-700" />
                    Bond Ratings
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Credit Rating Agencies</h5>
                      <p className="text-sm text-gray-700">
                        Organizations like S&P, Moody's, and Fitch evaluate bond issuers' creditworthiness 
                        and assign ratings that help investors assess risk.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Investment Grade</h5>
                      <p className="text-sm text-gray-700">
                        Bonds rated BBB-/Baa3 or higher are considered investment grade, indicating relatively low 
                        default risk. These are suitable for conservative investors.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">High-Yield (Junk) Bonds</h5>
                      <p className="text-sm text-gray-700">
                        Bonds rated BB+/Ba1 or lower have higher default risk but offer higher potential returns. 
                        They're more volatile and sensitive to economic conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Ways to Invest in Bonds</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-teal-700" />
                  Investment Methods
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Individual Bonds:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Predictable income and return of principal if held to maturity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Control over selection, maturity, and credit quality</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">No ongoing management fees</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Can be difficult to diversify with limited capital</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Requires more research and monitoring</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Bond Funds:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Instant diversification across many bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Professional management and research</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Lower minimum investment requirements</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">No guaranteed return of principal (no maturity date)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-gray-700">Ongoing expense ratios that reduce returns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Bond Investment Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-700" />
                  Approaches to Bond Investing
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Laddering</h5>
                    <p className="text-sm text-gray-700">
                      Buying bonds with staggered maturity dates to balance interest rate risk and liquidity needs. 
                      As shorter-term bonds mature, you reinvest at current rates, potentially capturing higher yields 
                      while maintaining some exposure to longer-term, higher-yielding bonds.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Barbell Strategy</h5>
                    <p className="text-sm text-gray-700">
                      Concentrating investments in short-term and long-term bonds while avoiding intermediate maturities. 
                      Short-term bonds provide liquidity and flexibility, while long-term bonds offer higher yields.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Buy and Hold</h5>
                    <p className="text-sm text-gray-700">
                      Purchasing individual bonds with the intention of holding them until maturity. This strategy 
                      immunizes you from interim price fluctuations and provides predictable income and return of principal.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Total Return Approach</h5>
                    <p className="text-sm text-gray-700">
                      Focusing on both income and capital appreciation. This typically involves more active management 
                      and may include trading bonds before maturity to capture price gains or limit losses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This content is educational in nature and updated as of May 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
                  <Link href="/terms" className="text-blue-600 hover:underline"> Terms of Service</Link>.
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

export default BondsInvestingGuide; 