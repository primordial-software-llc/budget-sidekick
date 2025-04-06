import React from 'react';
import Link from 'next/link';
import { CreditCard, AlertTriangle, ArrowRight, Percent, BarChart2, Award, DollarSign, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function CreditCardOptimization() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Credit Card Optimization' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Credit Card Optimization</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Maximizing Rewards and Minimizing Costs</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Credit cards can be powerful financial tools when used strategically. This guide explores how to maximize their 
              benefits while avoiding common pitfalls that can lead to costly debt and financial stress.
            </p>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding Credit Card Economics</h3>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-8">
              <p className="text-gray-700 mb-4">
                Credit cards operate on a simple business model: issuers make money from interest charges, fees, and merchant transaction fees. 
                Understanding this model helps you position yourself to benefit from the system rather than be burdened by it.
              </p>
              <p className="text-gray-700">
                When you pay your balance in full each month, you essentially receive an interest-free loan for your purchases while potentially 
                earning rewards. This creates an opportunity to extract value from your everyday spending if managed responsibly.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">The Foundation: Responsible Credit Card Use</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-green-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-green-700" />
                  Essential Practices
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Pay Your Balance in Full</h5>
                    <p className="text-sm text-gray-700">
                      The most important rule of credit card optimization is paying your statement balance in full each month. With average credit 
                      card interest rates exceeding 20%, carrying a balance quickly erases any rewards benefits and creates a debt cycle that's 
                      difficult to escape.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Track Your Spending</h5>
                    <p className="text-sm text-gray-700">
                      Use budgeting tools or your card's mobile app to monitor spending in real-time. This prevents overspending and helps you 
                      stay aware of your financial position. Don't rely on credit limits as spending guidelines.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Set Up Autopay</h5>
                    <p className="text-sm text-gray-700">
                      Late payments can trigger fees, penalty interest rates, and damage your credit score. Set up automatic payments for at 
                      least the minimum due (preferably the full balance) to avoid these costly mistakes.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Know Your Dates</h5>
                    <p className="text-sm text-gray-700">
                      Understand your card's billing cycle, statement date, and payment due date. This knowledge helps you time large purchases 
                      optimally and avoid cash flow issues with payment timing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Selecting the Right Cards for Your Lifestyle</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-purple-700" />
                  Card Types and Their Benefits
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Percent className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Cash Back Cards</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          These cards refund a percentage of your purchases as cash or statement credits.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Flat-rate cards:</strong> Offer the same percentage (typically 1.5-2%) on all purchases</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Category cards:</strong> Offer higher percentages (3-6%) in specific categories like groceries or gas</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Rotating category cards:</strong> Offer 5% in categories that change quarterly</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          <strong>Best for:</strong> Simplicity, flexibility, and those who prefer straightforward rewards without having to track 
                          points or deal with redemption restrictions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Award className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Travel Rewards Cards</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          These cards earn points or miles that can be redeemed for travel expenses.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>General travel cards:</strong> Flexible points that work with multiple airlines and hotels</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Co-branded cards:</strong> Associated with specific airlines or hotel chains</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Premium travel cards:</strong> Higher annual fees but include benefits like airport lounge access</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          <strong>Best for:</strong> Frequent travelers who can take advantage of both earned points and perks like free checked bags, 
                          priority boarding, or hotel status.
                        </p>
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
                        <h5 className="font-semibold text-gray-900 mb-2">Business and Specialty Cards</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          These cards are tailored to specific needs or spending profiles.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Business cards:</strong> Higher limits and rewards on business expenses like office supplies</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Student cards:</strong> Lower approval requirements, designed for building credit</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mr-2 text-purple-600 flex-shrink-0" />
                            <span><strong>Secured cards:</strong> Require a security deposit, useful for rebuilding credit</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          <strong>Best for:</strong> People with specific needs or spending patterns that align with the card's structure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Advanced Optimization Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-blue-700" />
                  Maximizing Value
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">The Card Combination Strategy</h5>
                    <p className="text-sm text-gray-700">
                      Many experts use multiple cards strategically to maximize rewards across different spending categories. A common setup includes:
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>A category card for your highest spending areas (e.g., 5% on groceries)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>A flat-rate card (1.5-2%) for everything else</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                        <span>A specific card for travel bookings or other high-value redemption opportunities</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Welcome Bonus Optimization</h5>
                    <p className="text-sm text-gray-700">
                      Credit card sign-up bonuses can offer exceptional value, sometimes worth $500+ for meeting a minimum spending requirement. 
                      Strategically applying for new cards before major purchases can help you meet these requirements without changing your 
                      normal spending patterns.
                    </p>
                    <div className="mt-2 text-sm italic text-gray-600">
                      Note: Only pursue this strategy if you have excellent credit and can easily track and manage multiple accounts.
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Point Transfer and Redemption Strategies</h5>
                    <p className="text-sm text-gray-700">
                      For travel rewards programs, transferring points to airline and hotel partners often yields much higher value than redeeming 
                      for statement credits. Research optimal redemption values and be flexible with travel dates to maximize point value.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Shopping Portals and Card-Linked Offers</h5>
                    <p className="text-sm text-gray-700">
                      Most major credit card issuers offer shopping portals and special merchant offers that can stack additional rewards on top 
                      of your regular earnings. Always check these before making online purchases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Avoiding the Pitfalls</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-red-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                  Common Mistakes to Avoid
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Overspending for Rewards</h5>
                    <p className="text-sm text-gray-700">
                      Never spend more than you normally would just to earn rewards. A 5% reward on an unnecessary purchase is still a 95% loss.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Carrying a Balance</h5>
                    <p className="text-sm text-gray-700">
                      With APRs averaging 20%+, even one month of interest charges can wipe out an entire year's worth of rewards.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Chasing Too Many Cards</h5>
                    <p className="text-sm text-gray-700">
                      Having too many cards can make account management difficult and may negatively impact your credit score through multiple inquiries.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Ignoring Annual Fees</h5>
                    <p className="text-sm text-gray-700">
                      Calculate whether the rewards and benefits you actually use outweigh any annual fees. Reassess yearly as your spending patterns change.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Missing Payment Due Dates</h5>
                    <p className="text-sm text-gray-700">
                      Late fees, penalty APRs, and credit score damage can quickly offset any rewards benefits. Always set up at least minimum payment autopay.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Letting Points Expire</h5>
                    <p className="text-sm text-gray-700">
                      Some rewards programs have expiration dates. Keep track of your points and make a small purchase or redemption to maintain activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creating Your Personal Credit Card Strategy</h3>
              <p className="text-gray-700 mb-4">
                The ideal credit card strategy is highly personal and depends on your spending habits, financial goals, and lifestyle. Follow these steps to develop yours:
              </p>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>1. Analyze your spending patterns.</strong> Review 3 months of expenses to identify your top spending categories and determine which reward structures would benefit you most.
                </p>
                <p className="text-gray-700">
                  <strong>2. Assess your credit profile.</strong> Check your credit score to understand which cards you're likely to qualify for before applying.
                </p>
                <p className="text-gray-700">
                  <strong>3. Consider your redemption preferences.</strong> Think about whether you prefer cash back simplicity or are willing to put in more effort for potentially higher-value travel rewards.
                </p>
                <p className="text-gray-700">
                  <strong>4. Evaluate your ability to manage multiple accounts.</strong> Be honest about your organizational skills and only maintain as many cards as you can responsibly track.
                </p>
                <p className="text-gray-700">
                  <strong>5. Review and adjust annually.</strong> Card terms change, and so do your spending habits. Reassess your strategy yearly to ensure it still aligns with your needs.
                </p>
              </div>
            </div>

            <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 text-sm">
                  This article is for educational purposes only and updated as of June 2024. Credit card terms, rewards programs, and offers change frequently. 
                  Always read the current terms and conditions before applying for any credit card. If you're struggling with credit card debt, consider 
                  seeking help from a nonprofit credit counseling agency.
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

export default CreditCardOptimization; 