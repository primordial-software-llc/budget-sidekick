import React from 'react';
import Link from 'next/link';
import { Heart, AlertTriangle, ArrowRight, Smile, Brain, Bed, Activity, Coffee } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function ManagingFinancialStress() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Managing Financial Stress' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Managing Financial Stress</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Building a Healthier Relationship with Money</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Financial stress affects both mental and physical health, relationships, and decision-making. 
              Learning to recognize and manage money-related anxiety is an essential part of overall financial 
              wellness and personal well-being.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Financial stress is among the most common and significant stressors in modern life. According to the 
                American Psychological Association, money consistently ranks as a top source of stress for Americans. 
                Chronic financial stress is linked to increased risk of anxiety, depression, sleep problems, 
                digestive issues, and even heart disease.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Recognizing Financial Stress</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-blue-700" />
                    Common Symptoms
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Emotional Signs</h5>
                      <p className="text-sm text-gray-700">
                        Pay attention to these emotional indicators of financial stress:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Persistent worry about money matters</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Feelings of shame, guilt, or embarrassment about finances</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Irritability or arguments with family about money</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Sense of hopelessness about financial future</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Behavioral Signs</h5>
                      <p className="text-sm text-gray-700">
                        Watch for these changes in behavior:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Avoiding opening bills or checking account balances</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Using shopping as emotional relief (retail therapy)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Difficulty concentrating at work due to financial worries</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Social withdrawal due to financial constraints or embarrassment</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Physical Signs</h5>
                      <p className="text-sm text-gray-700">
                        Physical manifestations of financial stress include:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Sleep disturbances or insomnia</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Tension headaches or migraines</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Digestive issues or changes in appetite</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Muscle tension, especially in neck and shoulders</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-green-700" />
                    How Financial Stress Affects Decision-Making
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Scarcity Mindset</h5>
                      <p className="text-sm text-gray-700">
                        Financial stress can trigger a "scarcity mindset" that changes how we process information and make decisions. 
                        Research shows that financial worries consume mental bandwidth, leaving less cognitive capacity for other tasks 
                        and potentially leading to counterproductive financial behaviors.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Short-Term Focus</h5>
                      <p className="text-sm text-gray-700">
                        When experiencing financial stress, people tend to focus on immediate concerns rather than long-term planning. 
                        This can lead to decisions that provide temporary relief but create larger problems later, such as using 
                        high-interest credit or payday loans.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Avoidance Behaviors</h5>
                      <p className="text-sm text-gray-700">
                        Financial anxiety often triggers avoidance as a coping mechanism. While temporarily reducing stress, 
                        avoiding financial matters typically allows problems to compound and limits opportunities to improve the situation.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Risk Assessment</h5>
                      <p className="text-sm text-gray-700">
                        Financial stress can distort risk perception, leading some to become overly cautious with money (missing growth 
                        opportunities) while others take desperate risks hoping for quick solutions to their financial problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Practical Coping Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-purple-700" />
                  Stress Management Approaches
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Activity className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Take Practical Financial Action</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Even small steps to address financial concerns can significantly reduce stress. Consider starting with:
                        </p>
                        <div className="space-y-1 mb-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Creating a simple spending plan to increase your sense of control</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Setting up automatic payments to reduce missed-payment anxiety</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Building a starter emergency fund (even $500-1000) for financial security</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Scheduling regular "money dates" to review finances instead of constant worry</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Bed className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Mind-Body Techniques</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          These evidence-based practices can reduce the physical symptoms of financial stress:
                        </p>
                        <div className="space-y-1 mb-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Deep breathing:</strong> Practice 4-7-8 breathing (inhale for 4 counts, hold for 7, exhale for 8)</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Progressive muscle relaxation:</strong> Tense and release muscle groups sequentially</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Mindfulness meditation:</strong> Focus on present moment awareness without judgment</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Physical exercise:</strong> Even brief activity releases stress-reducing endorphins</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Coffee className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Cognitive Reframing</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Challenge unhelpful thought patterns about money with these techniques:
                        </p>
                        <div className="space-y-1 mb-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Identify negative financial thoughts and test their accuracy</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Separate financial circumstances from self-worth</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Focus on what you can control rather than what you cannot</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span>Replace all-or-nothing thinking with a progress-oriented mindset</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Building Healthier Money Relationships</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Smile className="w-5 h-5 mr-2 text-amber-700" />
                    Financial Self-Care
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Know Your Money Values</h5>
                      <p className="text-sm text-gray-700">
                        Clarify what matters most to you about money. When your financial choices align with your core values, 
                        you'll experience less stress and more satisfaction. For example, if security is a key value, building savings 
                        might be more important than spending on luxuries.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Set Financial Boundaries</h5>
                      <p className="text-sm text-gray-700">
                        Practice saying no to financial obligations that cause undue stress. This might include:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Setting spending limits for discretionary categories</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Declining expensive social invitations when needed</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Being selective about financial commitments</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Practice Gratitude</h5>
                      <p className="text-sm text-gray-700">
                        Regularly acknowledging what you already have helps counteract the scarcity mindset that often accompanies 
                        financial stress. Try keeping a financial gratitude journal or setting aside time each week to reflect on 
                        the resources you do have.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-indigo-700" />
                    When to Seek Support
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Financial Guidance</h5>
                      <p className="text-sm text-gray-700">
                        Consider professional financial help when:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>You're feeling overwhelmed by debt or complex financial decisions</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>You need help creating a workable plan to reach financial goals</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>You want objective advice about major money decisions</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 italic">
                        Options include financial counselors, credit counselors, and financial advisors.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Emotional Support</h5>
                      <p className="text-sm text-gray-700">
                        Consider mental health support if financial stress is:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Interfering with daily functioning or sleep</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Causing persistent feelings of hopelessness</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Leading to unhealthy coping behaviors</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Significantly impacting relationships</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 italic">
                        Financial therapy is a specialized field that addresses the intersection of money and emotions.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Community Resources</h5>
                      <p className="text-sm text-gray-700">
                        Many communities offer free or low-cost financial education workshops, counseling services, 
                        and support groups focused on money management and financial stress.
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
                  This content is educational in nature and updated as of June 2024. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
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

export default ManagingFinancialStress; 