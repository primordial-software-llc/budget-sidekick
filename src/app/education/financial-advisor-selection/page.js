import React from 'react';
import Link from 'next/link';
import { UserCheck, AlertTriangle, ArrowRight, DollarSign, Check, FileText, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function ChoosingFinancialAdvisor() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Choosing a Financial Advisor' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <UserCheck className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Choosing a Financial Advisor</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Finding the Right Professional for Your Financial Needs</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Working with a financial advisor can provide valuable expertise and guidance for your financial journey. 
              However, finding the right advisor requires understanding the different types available, how they're compensated, 
              and what questions to ask to ensure they're a good fit for your specific needs and goals.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Types of Financial Advisors</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-blue-700" />
                  Understanding Different Advisory Roles
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <FileText className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Financial Planners</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Professionals who help create comprehensive financial plans covering multiple aspects of your finances:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>CFP® (Certified Financial Planner):</strong> Rigorous certification requiring education, experience, ethics</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Focus areas:</strong> Retirement planning, tax strategies, estate planning, insurance, investments</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Best for:</strong> Holistic financial guidance and coordinating various aspects of your financial life</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <DollarSign className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Investment Advisors</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Specialists focused primarily on investment management and portfolio construction:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>RIAs (Registered Investment Advisors):</strong> Firms registered with the SEC or state securities regulators</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Credentials:</strong> May include CFA® (Chartered Financial Analyst), Series 65 license</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Best for:</strong> Portfolio management, asset allocation, investment strategy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <ShieldCheck className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Specialized Advisors</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Professionals focused on specific financial areas:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Tax professionals:</strong> CPAs (Certified Public Accountants), Enrolled Agents</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Estate planning specialists:</strong> Attorneys with expertise in trusts, wills, and legacy planning</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Insurance advisors:</strong> Specialists in risk management and various insurance products</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <UserCheck className="w-6 h-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Broker-Dealers</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Financial professionals who can buy and sell securities for clients:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Registered representatives:</strong> Often called financial advisors or consultants at brokerage firms</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Licensing:</strong> Series 7, Series 6, insurance licenses</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            <span><strong>Regulatory standard:</strong> Regulation Best Interest (higher than suitability but different from fiduciary)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Compensation Models</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-purple-700" />
                  How Financial Advisors Get Paid
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Fee-Only</h5>
                    <p className="text-sm text-gray-700">
                      Advisors compensated solely by fees paid directly by clients, with no commissions from product sales.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Assets Under Management (AUM):</strong> Annual percentage fee based on portfolio size (typically 0.5% to 1.5%)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Hourly fees:</strong> Billed for time spent (often $200-500 per hour)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Flat fees:</strong> Fixed amount for specific services like financial plans ($1,000-$5,000+)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Subscription:</strong> Monthly or quarterly payments for ongoing advice ($100-500+ monthly)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Commission-Based</h5>
                    <p className="text-sm text-gray-700">
                      Advisors paid through commissions earned from product sales.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Investment products:</strong> Mutual funds, annuities, insurance policies</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Compensation structure:</strong> Front-end loads, trail commissions, surrender charges</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Potential conflicts:</strong> Incentives to recommend products with higher commissions</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Fee-Based (Hybrid)</h5>
                    <p className="text-sm text-gray-700">
                      Advisors who earn both direct client fees and commissions from product sales.
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Common structure:</strong> AUM fees for investment management plus commissions for insurance products</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Disclosure requirements:</strong> Must clearly explain when acting as fiduciary vs. salesperson</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                        <span><strong>Understanding needed:</strong> Important to know when advisor is switching roles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Fiduciary Standard vs. Suitability Standard</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-green-700" />
                  Understanding the Legal Standards
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Fiduciary Standard</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The highest legal standard of care in the financial industry:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Legal obligation:</strong> Must act in client's best interest at all times</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Conflict management:</strong> Required to avoid or disclose all conflicts of interest</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Who applies it:</strong> RIAs, CFP® professionals when providing financial advice</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700"><strong>Client benefit:</strong> Highest level of protection against advisor conflicts</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Suitability Standard</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      The traditional standard for brokers and insurance agents:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="text-gray-700"><strong>Legal obligation:</strong> Must recommend products that are suitable for the client</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="text-gray-700"><strong>Limitations:</strong> May recommend higher-cost products that benefit the advisor</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="text-gray-700"><strong>Recent evolution:</strong> Enhanced by Regulation Best Interest since 2020</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="text-gray-700"><strong>Who applies it:</strong> Traditional broker-dealers, insurance agents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Finding the Right Fit</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-amber-700" />
                  Key Questions to Ask Potential Advisors
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Qualifications and Experience</h5>
                    <p className="text-sm text-gray-700">
                      Questions to understand the advisor's background and expertise:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"What credentials and licenses do you hold, and what continuing education do you complete?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"How long have you been practicing, and what was your career path to becoming an advisor?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"Do you have experience working with clients in similar situations to mine?"</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Compensation and Conflicts</h5>
                    <p className="text-sm text-gray-700">
                      Questions about how the advisor is paid and potential conflicts:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"How are you compensated for the services you provide?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"Do you receive any compensation from third parties for recommending specific products?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"Are you a fiduciary at all times when working with me, or only in certain situations?"</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Services and Approach</h5>
                    <p className="text-sm text-gray-700">
                      Questions about the advisor's service model and philosophy:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"What specific services are included in your offering? What's not included?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"How frequently will we meet, and how do you communicate with clients between meetings?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"What is your investment philosophy and approach to financial planning?"</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Client Experience</h5>
                    <p className="text-sm text-gray-700">
                      Questions about what to expect as a client:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"What is your typical client like, and how many clients do you serve?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"Will I work directly with you or with a team? Who would be my primary contact?"</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                        <span>"Can you provide references from current clients in situations similar to mine?"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Due Diligence Steps</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Verify credentials and background.</strong> Use FINRA's BrokerCheck or the SEC's Investment 
                  Adviser Public Disclosure website to check an advisor's registration, experience, and disciplinary history.
                </p>
                <p className="text-gray-700">
                  <strong>2. Request and review disclosure documents.</strong> Ask for the advisor's Form ADV Part 2 
                  (for RIAs) or Form CRS (for brokers), which detail services, fees, conflicts, and disciplinary information.
                </p>
                <p className="text-gray-700">
                  <strong>3. Check for alignment with your needs.</strong> Ensure the advisor has experience with 
                  clients whose financial situations and goals are similar to yours.
                </p>
                <p className="text-gray-700">
                  <strong>4. Consider personality fit.</strong> The advisor-client relationship is often long-term, 
                  so choose someone you feel comfortable with and whose communication style works for you.
                </p>
                <p className="text-gray-700">
                  <strong>5. Meet multiple advisors.</strong> Interview at least three potential advisors before 
                  making a decision to compare approaches, services, and costs.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of October 2024. While working with a financial 
                  advisor can be beneficial, it's not required for financial success. Carefully evaluate potential advisors 
                  and consider how their services and fee structures align with your needs. No single compensation model 
                  is universally superior - the right choice depends on your specific situation and preferences.
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

export default ChoosingFinancialAdvisor; 