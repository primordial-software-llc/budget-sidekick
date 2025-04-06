import React from 'react';
import Link from 'next/link';
import { Home, AlertTriangle, ArrowRight, DollarSign, CheckSquare, ClipboardList, Key } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function HomeBuyingProcess() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Home Buying Process' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Home className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Home Buying Process</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">A Step-by-Step Guide to Purchasing a Home</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Buying a home is likely one of the largest financial decisions you'll make. Understanding each step of the 
              process can help you navigate this complex journey with confidence and make informed decisions along the way.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Phase 1: Preparation and Planning</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <ClipboardList className="w-5 h-5 mr-2 text-blue-700" />
                  Before You Begin Your Search
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Assess Your Finances</h5>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Check your credit score:</strong> Aim for a score of at least 620, though 740+ will secure the best rates</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Calculate your debt-to-income ratio:</strong> Lenders typically prefer below 43%</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Build your down payment:</strong> While 20% is ideal to avoid PMI, many programs accept 3-5%</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Save for closing costs:</strong> Typically 2-5% of the loan amount</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <CheckSquare className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Get Pre-Approved for a Mortgage</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Before starting your home search, secure a mortgage pre-approval. This will:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Show sellers you're a serious buyer</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Give you a clear budget for your search</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Help you act quickly in competitive markets</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span>Allow you to compare loan options from multiple lenders</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Home className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Define Your Homebuying Goals</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Create a clear list of your needs, wants, and deal-breakers:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Location priorities:</strong> School districts, commute times, neighborhood amenities</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Home features:</strong> Size, bedrooms, layout, outdoor space, age of home</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Timeframe:</strong> How soon do you need to move?</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Long-term plans:</strong> How long do you plan to stay in the home?</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Phase 2: House Hunting and Making an Offer</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-purple-700" />
                  Finding the Right Home
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Select a Real Estate Agent</h5>
                    <p className="text-sm text-gray-700">
                      A good buyer's agent can provide market insights, negotiate on your behalf, and guide you through complex 
                      paperwork. Interview several agents to find someone who understands your needs and has experience in your 
                      preferred neighborhoods.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tour Homes Strategically</h5>
                    <p className="text-sm text-gray-700">
                      When viewing properties, be thorough and systematic:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Take photos and notes during viewings</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Visit neighborhoods at different times of day</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Look beyond cosmetic issues to structural elements</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Consider future needs, not just current ones</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Research Property Values</h5>
                    <p className="text-sm text-gray-700">
                      Before making an offer, research comparable homes ("comps") that have recently sold in the area. 
                      This information helps you determine a fair offer price and negotiate effectively.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Make a Competitive Offer</h5>
                    <p className="text-sm text-gray-700">
                      Work with your agent to craft an offer that includes:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Offer price and earnest money deposit</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Contingencies (financing, inspection, appraisal)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Proposed closing date</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span>Requests for seller concessions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Phase 3: From Contract to Closing</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-teal-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <ClipboardList className="w-5 h-5 mr-2 text-teal-700" />
                  Due Diligence and Closing Process
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <CheckSquare className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Home Inspection</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Once your offer is accepted, schedule a professional home inspection as soon as possible. The inspector will check:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Structural integrity</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Electrical systems</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Plumbing</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>HVAC systems</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Roof condition</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Potential pest issues</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          Based on the inspection results, you can renegotiate, request repairs, or even withdraw your offer if serious issues are discovered.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Appraisal and Financing</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Your lender will order an appraisal to ensure the home is worth the purchase price. Meanwhile, you'll need to:
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Submit additional financial documentation as requested by your lender</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Lock your interest rate</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Review your Loan Estimate and Closing Disclosure</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Address any lender concerns or conditions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Key className="w-6 h-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Final Steps and Closing</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          As you approach closing day:
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Conduct a final walk-through to verify the property's condition</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Arrange for homeowners insurance to be effective on closing day</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Prepare a certified check or wire transfer for closing costs</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-teal-600 flex-shrink-0" />
                            <span>Bring identification and any required documents to closing</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          At closing, you'll sign numerous documents, pay closing costs, and receive the keys to your new home. 
                          The closing process typically takes 1-2 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Tips for First-Time Homebuyers</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Explore first-time homebuyer programs:</strong> Many states and local governments offer assistance programs 
                  including down payment assistance, closing cost help, and favorable loan terms for first-time buyers.
                </p>
                <p className="text-gray-700">
                  <strong>Don't forget about ongoing costs:</strong> Beyond the mortgage payment, budget for property taxes, homeowners 
                  insurance, HOA fees, utilities, maintenance, and repairs.
                </p>
                <p className="text-gray-700">
                  <strong>Consider the future resale value:</strong> Even if you plan to stay long-term, consider factors that might 
                  affect the home's future marketability, such as location, layout, and school districts.
                </p>
                <p className="text-gray-700">
                  <strong>Avoid major financial changes:</strong> During the homebuying process, maintain financial stability by avoiding 
                  new credit applications, large purchases, or job changes that could affect your loan approval.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of June 2024. Real estate laws, market conditions, 
                  and financing options vary by location and change over time. Always consult with qualified professionals 
                  including real estate agents, mortgage lenders, home inspectors, and attorneys for guidance specific to your situation.
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

export default HomeBuyingProcess; 