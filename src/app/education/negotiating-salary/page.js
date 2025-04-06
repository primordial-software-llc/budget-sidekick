import React from 'react';
import Link from 'next/link';
import { BarChart, AlertTriangle, ArrowRight, DollarSign, Briefcase, Check, X, Clock, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function NegotiatingSalary() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Negotiating Salary' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BarChart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Negotiating Salary</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Master Strategies for Better Compensation</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Negotiating your salary effectively can significantly impact your lifetime earnings. 
              Whether for a new job or during a performance review, understanding how to confidently 
              discuss compensation can help you secure a package that reflects your true market value.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Not negotiating your salary can cost you hundreds of thousands of dollars over your career. A study by 
                Carnegie Mellon University found that graduates who negotiated increased their starting salaries by an average 
                of $5,000. Assuming a 5% annual raise over a 40-year career, that initial $5,000 difference results in 
                over $600,000 in additional lifetime earnings.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Before the Negotiation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-700" />
                    Research & Preparation
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Know Your Market Value</h5>
                      <p className="text-sm text-gray-700">
                        Research salary ranges for your position, industry, location, and experience level. Use resources like 
                        Glassdoor, PayScale, Salary.com, and industry reports to gather data. This establishes a factual 
                        foundation for your negotiation.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Document Your Achievements</h5>
                      <p className="text-sm text-gray-700">
                        Compile specific accomplishments, metrics, and projects that demonstrate your value. Quantify your contributions 
                        whenever possible (e.g., "Increased department efficiency by 15%" or "Generated $50,000 in new revenue").
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Understand the Company's Position</h5>
                      <p className="text-sm text-gray-700">
                        Research the company's financial health, recent successes or challenges, and compensation philosophy. 
                        This context helps you tailor your approach and anticipate potential objections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-700" />
                    Setting Your Numbers
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Determine Your Target Range</h5>
                      <p className="text-sm text-gray-700">
                        Identify three key numbers:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span><strong>Target:</strong> Your ideal compensation based on research and your value</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span><strong>Acceptable:</strong> The minimum you would accept without walking away</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span><strong>Opening:</strong> A higher-than-target figure that gives room to negotiate down</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Consider Total Compensation</h5>
                      <p className="text-sm text-gray-700">
                        Look beyond base salary to evaluate:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span>Bonuses and profit sharing</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span>Equity or stock options</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span>Health, retirement, and other benefits</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          <span>Flexibility, remote work, or other perks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">During the Negotiation</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-purple-700" />
                  Effective Tactics
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Clock className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Let Them Go First (When Possible)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          If asked about salary expectations early in the process, try to defer with responses like: 
                          "I'd like to learn more about the role before discussing compensation" or "I'm open to a competitive 
                          offer based on the value I bring." This prevents anchoring too low before you've had a chance to demonstrate your value.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Focus on value first
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Avoid premature anchoring
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <MessageSquare className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Use Evidence-Based Language</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Frame your request around market data and your specific contributions, not personal needs. 
                          For example: "Based on my research and the value I've demonstrated through [specific achievement], 
                          I'm looking for a salary in the range of $X to $Y."
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Cite market research
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Quantify your value
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Check className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Practice Strategic Silence</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          After stating your request, resist the urge to fill the silence or immediately accept their first offer. 
                          This powerful technique encourages the other party to respond or possibly improve their offer. Even a 10-15 
                          second pause can be effective.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Let them respond first
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Don't undermine your position
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Handling Challenges</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <X className="w-5 h-5 mr-2 text-amber-700" />
                    When They Say No
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Ask Open-Ended Questions</h5>
                      <p className="text-sm text-gray-700">
                        If your request is declined, ask questions to understand why: "Can you help me understand what factors are 
                        limiting the compensation for this role?" or "What would need to change for my salary to reach the level I'm requesting?"
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Explore Non-Salary Benefits</h5>
                      <p className="text-sm text-gray-700">
                        If base salary is constrained, consider negotiating for:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Performance-based bonuses</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Additional paid time off</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Flexible working arrangements</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Professional development funds</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Request a Future Review</h5>
                      <p className="text-sm text-gray-700">
                        If they can't meet your request now, ask for an early performance review with the potential for a 
                        raise (e.g., after 6 months instead of a year). Get this agreement in writing with specific goals and metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-red-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                    Common Mistakes to Avoid
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Apologizing for Negotiating</h5>
                      <p className="text-sm text-gray-700">
                        Don't preface your request with "I'm sorry to ask" or similar phrases. Negotiation is a normal 
                        and expected part of the hiring process. Frame it as a discussion about business value, not a personal favor.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Using Personal Financial Needs</h5>
                      <p className="text-sm text-gray-700">
                        Avoid justifying your salary request with personal expenses, debts, or lifestyle choices. 
                        Focus instead on the value you bring to the organization and market-based compensation for your skills.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Making Ultimatums</h5>
                      <p className="text-sm text-gray-700">
                        Unless you're truly prepared to walk away, avoid absolute statements like "I need at least $X or I can't accept." 
                        This can create adversarial dynamics. Instead, focus on finding a solution that works for both parties.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Revealing Your Bottom Line Too Early</h5>
                      <p className="text-sm text-gray-700">
                        Don't share your minimum acceptable salary. Once revealed, that number often becomes the ceiling 
                        rather than the floor for negotiations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Following Up</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-indigo-700" />
                  Closing the Deal
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Get It in Writing</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Request a formal offer letter with all agreed terms</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Review carefully before accepting, noting any discrepancies</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Confirm verbal promises are documented in writing</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Ask for clarification on vague terms or conditions</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Express Gratitude</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Thank the hiring manager for their consideration</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Reaffirm your enthusiasm for the role</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Maintain positive relationships, regardless of outcome</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Preserve professional bridges for future opportunities</span>
                      </div>
                    </div>
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

export default NegotiatingSalary; 