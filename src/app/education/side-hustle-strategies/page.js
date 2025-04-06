import React from 'react';
import Link from 'next/link';
import { Briefcase, AlertTriangle, ArrowRight, DollarSign, Clock, Zap, Globe, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function SideHustleStrategies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Side Hustle Strategies' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Side Hustle Strategies</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Build Additional Income Streams</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              A side hustle can help you reach financial goals faster, develop new skills, and create flexible income 
              streams outside your main job. Learn about popular options and how to choose the right opportunity 
              based on your skills, interests, and available time.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Beyond immediate financial benefits, side hustles can provide career insurance during economic uncertainty, 
                allow you to test entrepreneurial ideas with lower risk, and help you develop marketable skills. 
                Many successful businesses today started as side projects while their founders maintained full-time employment.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Finding Your Side Hustle</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-blue-700" />
                    Assess Your Resources
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Take Inventory of Your Skills</h5>
                      <p className="text-sm text-gray-700">
                        Consider both professional skills from your career and personal talents or hobbies. Look for transferable 
                        skills that can be monetized in different contexts or industries.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Evaluate Your Available Time</h5>
                      <p className="text-sm text-gray-700">
                        Be realistic about how many hours you can commit weekly. Some side hustles require consistent time 
                        blocks, while others offer more flexibility. Match your hustle to your lifestyle constraints.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Consider Startup Costs</h5>
                      <p className="text-sm text-gray-700">
                        Some side hustles require initial investment in equipment, software, training, or inventory. Others 
                        can be started with minimal or no upfront costs. Choose options that fit your financial situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-700" />
                    Income Potential Factors
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Time-for-Money vs. Scalable</h5>
                      <p className="text-sm text-gray-700">
                        Some side hustles pay directly for your time (like freelancing or gig work), while others can 
                        scale beyond your direct involvement (like digital products, rentals, or affiliate marketing).
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Passive vs. Active Income</h5>
                      <p className="text-sm text-gray-700">
                        Active income requires your ongoing work, while passive income continues after initial setup. 
                        Most "passive" income sources still require some maintenance but less than full-time effort.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Short vs. Long-Term Payoff</h5>
                      <p className="text-sm text-gray-700">
                        Consider whether you need immediate income or can invest time building something with greater 
                        long-term potential. Some side hustles provide quick cash, while others build value over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Popular Side Hustle Categories</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-purple-700" />
                  Side Hustle Options
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Globe className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Freelancing & Professional Services</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Leverage your professional skills to provide services like writing, design, programming, 
                          marketing, consulting, bookkeeping, or virtual assistance. Platforms like Upwork, Fiverr, 
                          and industry-specific marketplaces can help you find clients.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Low startup costs
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Marketable experience
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Flexible scheduling
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Zap className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Gig Economy Work</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          On-demand services through apps like Uber, Lyft, DoorDash, Instacart, TaskRabbit, 
                          or Rover let you work when convenient with minimal barriers to entry. Pay is often 
                          immediate, and you can typically set your own hours.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Quick to start
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Highly flexible
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Immediate payment
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
                        <h5 className="font-semibold text-gray-900 mb-2">Content Creation & Digital Products</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Create blogs, YouTube channels, podcasts, online courses, ebooks, photography, 
                          or stock media that can generate income through ads, sponsorships, affiliate marketing, 
                          or direct sales. These often require significant upfront work but can create lasting revenue.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Scalable income
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Build personal brand
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Long-term potential
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Practical Considerations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-amber-700" />
                    Time Management
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Set Clear Boundaries</h5>
                      <p className="text-sm text-gray-700">
                        Protect your primary job performance and personal life by establishing specific hours for your side hustle. 
                        Avoid burnout by ensuring you still have time for rest, relationships, and self-care.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Start Small</h5>
                      <p className="text-sm text-gray-700">
                        Begin with just a few hours per week and gradually increase your commitment as you establish 
                        routines and confirm the side hustle fits your life and goals.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Create Systems</h5>
                      <p className="text-sm text-gray-700">
                        Develop efficient workflows, templates, and processes to minimize repetitive tasks. 
                        Consider what aspects can be automated or outsourced as your side hustle grows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-red-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                    Legal & Financial Considerations
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Check Employment Contracts</h5>
                      <p className="text-sm text-gray-700">
                        Review your current employment agreement for any non-compete clauses or moonlighting policies. 
                        Some employers require disclosure or approval of outside work, especially if it's in a related field.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Understand Tax Obligations</h5>
                      <p className="text-sm text-gray-700">
                        Self-employment income is taxable. Set aside money for quarterly estimated tax payments, 
                        track business expenses for deductions, and consider consulting with a tax professional.
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Business Structure & Insurance</h5>
                      <p className="text-sm text-gray-700">
                        Determine whether you need formal business registration, separate banking, liability insurance, 
                        or other legal protections based on the nature of your side hustle.
                      </p>
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

export default SideHustleStrategies; 