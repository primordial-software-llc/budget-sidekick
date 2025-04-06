import React from 'react';
import Link from 'next/link';
import { Target, AlertTriangle, CheckCircle, ArrowRight, Calendar, Clock, LineChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function FinancialGoalSetting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Financial Goal Setting' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Financial Goal Setting</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Creating a Roadmap for Your Financial Success</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Setting clear, specific financial goals is essential for achieving financial success. 
              Well-defined goals provide direction, motivation, and a framework for making financial decisions.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                People with written financial goals are 42% more likely to achieve them than those without clear goals.
                Goal setting transforms vague aspirations into actionable plans.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">SMART Goal Framework</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-blue-700" />
                    Setting Effective Goals
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Specific</h5>
                      <p className="text-sm text-gray-700">
                        Clearly define what you want to accomplish (e.g., "Save $10,000 for a down payment" vs. "Save money").
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Measurable</h5>
                      <p className="text-sm text-gray-700">
                        Include specific amounts and dates to track progress and know when you've achieved your goal.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Achievable</h5>
                      <p className="text-sm text-gray-700">
                        Set goals that are realistic given your income, expenses, and time frame.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-700" />
                    Completing the Framework
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Relevant</h5>
                      <p className="text-sm text-gray-700">
                        Ensure goals align with your values and larger life objectives.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Time-bound</h5>
                      <p className="text-sm text-gray-700">
                        Set deadlines to create urgency and prevent goals from being continuously postponed.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Example</h5>
                      <p className="text-sm text-gray-700">
                        "I will save $15,000 for a house down payment by December 31, 2025, by depositing $500 monthly into a high-yield savings account."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Goal Time Horizons</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-indigo-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-indigo-700" />
                  Planning Across Time
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Short-Term (Less than 1 year)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Building emergency fund</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Paying off small debts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Saving for vacations</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Medium-Term (1-5 years)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Home down payment</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Paying off larger debts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Career development</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Long-Term (5+ years)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Retirement planning</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">College funding</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="text-gray-700">Financial independence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Getting Started</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-amber-700" />
                  Implementation Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 1: Assess Your Current Situation</h5>
                    <p className="text-sm text-gray-700">
                      Review your income, expenses, assets, and liabilities to understand your starting point.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 2: Define Your Goals</h5>
                    <p className="text-sm text-gray-700">
                      Use the SMART framework to set short, medium, and long-term financial goals.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 3: Create Action Plans</h5>
                    <p className="text-sm text-gray-700">
                      Break down each goal into specific action steps with designated timeframes.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Step 4: Track Progress Regularly</h5>
                    <p className="text-sm text-gray-700">
                      Schedule regular review sessions to assess progress and adjust plans as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Disclaimer 
              articleId="financial-goal-setting"
              message="This content is educational in nature and updated as of {{year}}. Goal-setting approaches may need to be adapted to individual circumstances and financial situations. Success in achieving financial goals depends on many factors including income, expenses, market conditions, and personal discipline."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FinancialGoalSetting; 