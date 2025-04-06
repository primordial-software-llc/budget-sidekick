import React from 'react';
import Link from 'next/link';
import { DollarSign, AlertTriangle, ArrowRight, Home, BarChart2, FileText, Gift, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function PassiveIncomeStrategies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Passive Income Strategies' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Passive Income Strategies</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Building Multiple Streams of Income That Work For You</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Passive income is money earned with minimal ongoing effort required to maintain the flow of income. 
              Building passive income streams can help create financial security, increase your net worth, and 
              potentially offer greater flexibility in how you spend your time. This guide explores various 
              passive income strategies and how to implement them effectively.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding Passive Income</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-blue-700" />
                  The Fundamentals
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">What Is (and Isn't) Passive Income</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Truly passive income requires little to no daily effort to maintain after the initial setup work. 
                      It's important to distinguish between passive income and simply creating another job for yourself.
                    </p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h6 className="font-medium text-gray-900 mb-1">Passive Income Examples</h6>
                        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                          <li>Dividend payments from investments</li>
                          <li>Rental income from properties with property management</li>
                          <li>Interest from bonds or savings accounts</li>
                          <li>Royalties from intellectual property</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h6 className="font-medium text-gray-900 mb-1">Not Truly Passive</h6>
                        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                          <li>Active day trading or market timing</li>
                          <li>Self-managed rental properties requiring extensive work</li>
                          <li>Content creation requiring continuous production</li>
                          <li>Consulting or freelancing that demands your time</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">The Passive Income Spectrum</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Most passive income strategies fall somewhere on a spectrum from completely passive to partially passive. 
                      Understanding this can help you choose strategies that fit your desired lifestyle.
                    </p>
                    <div className="h-8 w-full bg-gradient-to-r from-green-500 to-amber-500 rounded-md relative mb-2">
                      <div className="absolute top-full mt-1 left-0 text-xs text-gray-700">Fully Passive</div>
                      <div className="absolute top-full mt-1 right-0 text-xs text-gray-700">Partially Passive</div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-6 px-1">
                      <div>Dividend Investing</div>
                      <div>REITs</div>
                      <div>P2P Lending</div>
                      <div>Rental Properties</div>
                      <div>Online Businesses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Investment-Based Passive Income</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-green-700" />
                  Financial Market Strategies
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Dividend Investing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Building a portfolio of dividend-paying stocks, ETFs, or mutual funds.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Potential Return:</strong> 2-6% annually in dividends plus potential capital appreciation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Initial Investment:</strong> Can start with as little as $100, but $10,000+ for meaningful income</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Effort Level:</strong> Very low after initial research and setup</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Bond Investing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Purchasing bonds or bond funds to generate regular interest payments.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Potential Return:</strong> 2-8% depending on risk level and current rates</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Initial Investment:</strong> $1,000 minimum for Treasury bonds, variable for corporate bonds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Effort Level:</strong> Very low, especially with bond funds or Treasuries</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">REITs (Real Estate Investment Trusts)</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Companies that own, operate, or finance income-producing real estate.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Potential Return:</strong> 3-8% dividend yields plus potential appreciation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Initial Investment:</strong> As low as the price of a single share (often $10-100)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Effort Level:</strong> Low, similar to stock investing</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Preferred Stocks</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      A class of ownership that has a higher claim on assets and earnings than common stock.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Potential Return:</strong> 4-7% dividend yields, often fixed</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Initial Investment:</strong> $25-$1,000 per share, or invest through ETFs</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Effort Level:</strong> Low, but requires understanding of their hybrid nature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Real Estate Passive Income</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-amber-700" />
                  Property-Based Income Streams
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Rental Properties with Management</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Owning residential or commercial properties and hiring property managers to handle day-to-day operations.
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Potential Return:</strong> 5-10% cash-on-cash return plus appreciation and tax benefits</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Initial Investment:</strong> $20,000-$100,000+ for down payments</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Effort Level:</strong> Moderate setup, low ongoing with good property management</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Real Estate Crowdfunding</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Investing in real estate projects through online platforms that pool money from multiple investors.
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Potential Return:</strong> 8-12% annually depending on project risk</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Initial Investment:</strong> $500-$10,000 depending on the platform</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Effort Level:</strong> Low after due diligence and investment</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Caution:</strong> Many platforms limited to accredited investors</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Short-Term Rentals</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Renting properties on platforms like Airbnb or VRBO, typically using management services to handle operations.
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Potential Return:</strong> 10-20% cash-on-cash return in good locations</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Initial Investment:</strong> $50,000-$200,000+ for property acquisition</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span><strong>Effort Level:</strong> Moderate to high if self-managed, low with full-service management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Business and Digital Passive Income</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-purple-700" />
                  Business Models and Digital Assets
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Digital Products</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Creating and selling digital assets that can be sold repeatedly with minimal additional work.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Examples:</strong> E-books, courses, templates, software, stock photos</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Initial Effort:</strong> High for creation and marketing</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Ongoing Effort:</strong> Low to moderate for updates and customer support</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Affiliate Marketing</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Promoting other companies' products and earning commissions on sales generated through your referrals.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Potential Return:</strong> Highly variable, from a few dollars to thousands monthly</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Initial Investment:</strong> Low financial cost, high time investment</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Passivity:</strong> Becomes more passive as content and traffic build</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Royalties from Intellectual Property</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Earning ongoing payments from creative works or inventions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Examples:</strong> Books, music, patents, photography, art licensing</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Potential Return:</strong> Unpredictable; can range from negligible to substantial</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Effort Level:</strong> High initial creation, very low maintenance</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Automated or Semi-Automated Businesses</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Businesses designed to run with minimal owner involvement through outsourcing or systems.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Examples:</strong> Dropshipping, print on demand, vending machines</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Initial Investment:</strong> $1,000-$50,000+ depending on business type</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="text-gray-700"><strong>Effort Level:</strong> High setup, low to moderate maintenance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Building Your Passive Income Strategy</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Start with your strengths and interests.</strong> Choose passive income streams aligned 
                  with your skills, knowledge, and what you enjoy learning about.
                </p>
                <p className="text-gray-700">
                  <strong>2. Assess your available capital and time.</strong> Some strategies require significant 
                  upfront money but little time, while others need minimal capital but substantial initial effort.
                </p>
                <p className="text-gray-700">
                  <strong>3. Diversify across multiple streams.</strong> Build resilience by developing several types of 
                  passive income rather than relying on just one source.
                </p>
                <p className="text-gray-700">
                  <strong>4. Be realistic about "passivity."</strong> Almost all passive income requires some ongoing 
                  management or occasional updates. Budget time accordingly.
                </p>
                <p className="text-gray-700">
                  <strong>5. Reinvest earnings initially.</strong> Accelerate growth by reinvesting your passive income 
                  to build additional streams or expand existing ones.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of August 2024. All investments involve risk, 
                  and passive income streams often require significant upfront work or capital. Returns mentioned are illustrative 
                  and not guaranteed. Consider consulting with financial and legal professionals before pursuing any passive income strategy.
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

export default PassiveIncomeStrategies; 