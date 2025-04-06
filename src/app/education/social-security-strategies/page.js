import React from 'react';
import Link from 'next/link';
import { Award, ArrowRight, Calendar, DollarSign, Clock, BarChart2, Percent } from 'lucide-react';
import Article from '@/components/Article';

function SocialSecurityStrategies() {
  return (
    <Article
      title="Social Security Strategies"
      icon={Award}
      articleId="social-security-strategies"
      accentColor="blue"
      disclaimerMessage="This article is for educational purposes only and updated as of {{year}}. Social Security rules are complex and subject to change. The strategies discussed may not be applicable in all situations. For personalized advice, consult with a qualified financial professional who specializes in retirement planning."
    >
      <h2 className="text-lg text-center text-gray-700 mb-6">Optimizing Your Benefits Through Strategic Claiming</h2>
      
      <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
        Social Security represents a significant source of retirement income for most Americans. Understanding how and when 
        to claim your benefits can potentially add tens or even hundreds of thousands of dollars to your lifetime income. 
        This guide explores key strategies to help you make informed decisions.
      </p>

      <h3 className="text-2xl font-bold text-center mb-6">Understanding Social Security Basics</h3>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
        <div className="bg-blue-100 p-4 rounded-t-xl">
          <h4 className="font-bold text-gray-900 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-700" />
            Key Claiming Ages
          </h4>
        </div>
        <div className="p-5">
          <div className="space-y-5">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Early Retirement Age: 62</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    The earliest age you can begin receiving Social Security retirement benefits. However, your benefit will be 
                    permanently reduced by:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                      <span>About 25-30% less than your full retirement benefit</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                      <span>Potential for additional reductions if you continue working</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Full Retirement Age (FRA): 66-67</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    The age at which you're entitled to your full benefit amount. Your FRA depends on your birth year:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                      <span>Born 1943-1954: FRA is 66</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                      <span>Born 1955-1959: FRA increases by 2 months per year</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                      <span>Born 1960 or later: FRA is 67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Delayed Retirement: Up to Age 70</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    For each year you delay claiming past your FRA, your benefit increases by 8% (up to age 70).
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                      <span>Maximum increase of 24-32% over your full retirement benefit</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                      <span>There's no advantage to delaying beyond age 70</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-6">Key Factors to Consider</h3>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
        <div className="bg-purple-100 p-4 rounded-t-xl">
          <h4 className="font-bold text-gray-900 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-purple-700" />
            What Should Influence Your Decision
          </h4>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Life Expectancy</h5>
              <p className="text-sm text-gray-700 mb-3">
                Perhaps the most important factor in your claiming decision.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Shorter life expectancy:</strong> Earlier claiming may be advantageous</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Longer life expectancy:</strong> Delaying provides greater lifetime benefits</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Break-even age:</strong> Typically between 78-82 years</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Marital Status</h5>
              <p className="text-sm text-gray-700 mb-3">
                Marriage creates additional claiming options and considerations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Spousal benefits:</strong> Up to 50% of the primary earner's benefit</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Survivor benefits:</strong> The surviving spouse receives the higher of the two benefits</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Ex-spouse benefits:</strong> Available after 10+ years of marriage</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Current Financial Needs</h5>
              <p className="text-sm text-gray-700 mb-3">
                Immediate income requirements may influence your decision.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Retirement savings:</strong> Sufficient assets may allow delaying benefits</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Ongoing employment:</strong> Working during early retirement may reduce benefits</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Health costs:</strong> Medicare doesn't begin until 65, regardless of Social Security claiming</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Tax Implications</h5>
              <p className="text-sm text-gray-700 mb-3">
                Social Security benefits may be subject to federal income tax.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Up to 85%</strong> of benefits may be taxable, depending on income</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>Required Minimum Distributions</strong> can push you into higher tax brackets</span>
                </div>
                <div className="flex items-center text-sm">
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-gray-700"><strong>State taxes</strong> vary, with some states exempting Social Security benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-6">Claiming Strategies</h3>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
        <div className="bg-green-100 p-4 rounded-t-xl">
          <h4 className="font-bold text-gray-900 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-green-700" />
            Optimizing When and How to Claim
          </h4>
        </div>
        <div className="p-5">
          <div className="space-y-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Delayed Claiming Strategy</h5>
              <p className="text-sm text-gray-700">
                Waiting until age 70 to claim benefits can be particularly valuable for higher earners, those with 
                longevity in their family history, or the higher-earning spouse in a married couple.
              </p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Provides lifetime inflation-protected income insurance</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Maximizes survivor benefits for your spouse</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Consider bridging the gap with retirement account withdrawals</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Spousal Benefit Coordination</h5>
              <p className="text-sm text-gray-700">
                For married couples, coordinating claiming decisions can maximize household benefits.
              </p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Higher earner often benefits from delaying until 70</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Lower earner might claim earlier, especially if not working</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Consider age differences between spouses</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Early Claiming Considerations</h5>
              <p className="text-sm text-gray-700">
                While delaying is often beneficial, there are situations where claiming early makes sense.
              </p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Health concerns or shorter life expectancy</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Need for income that cannot be met from other sources</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Children or disabled dependents who may qualify for additional benefits</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Divorced Spouse Strategies</h5>
              <p className="text-sm text-gray-700">
                If you were married for at least 10 years, you may be eligible for benefits based on your ex-spouse's record.
              </p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>You must be unmarried to claim on an ex-spouse's record</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Your ex-spouse need not have claimed benefits for you to claim on their record</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ArrowRight className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                  <span>Your claim does not affect your ex-spouse's benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-6">Common Scenarios</h3>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
        <div className="bg-amber-100 p-4 rounded-t-xl">
          <h4 className="font-bold text-gray-900 flex items-center">
            <BarChart2 className="w-5 h-5 mr-2 text-amber-700" />
            Real-World Examples
          </h4>
        </div>
        <div className="p-5">
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Single Individual</h5>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Scenario:</strong> Maria, age 62, is considering when to claim her benefits.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                At age 62, Maria would receive $1,500/month. If she waits until her FRA of 67, she would receive $2,200/month. 
                By waiting until age 70, her benefit would increase to about $2,730/month.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Analysis:</strong> If Maria lives beyond approximately age 80, she will collect more total benefits by 
                waiting. If she has significant health concerns or immediate financial needs, earlier claiming might make sense.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Married Couple with Earnings Disparity</h5>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Scenario:</strong> John and Sarah, both age 62. John's FRA benefit is $2,800/month while Sarah's is $1,200/month.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                A common strategy might be for Sarah to claim at 62 ($840/month) while John waits until 70 ($3,490/month). 
                This provides some income during their 60s while maximizing their household benefit later.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Analysis:</strong> This approach ensures that whoever lives longer will have the highest possible 
                survivor benefit, providing financial security for the surviving spouse.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Early Retirement Due to Health</h5>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Scenario:</strong> Robert, age 64, has been diagnosed with a serious health condition and is considering early retirement.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                His FRA is 66 with a benefit of $2,400/month. Claiming at 64 would provide approximately $2,080/month.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Analysis:</strong> Given his health outlook, claiming now likely maximizes his lifetime benefits. If he's married, 
                he should still consider his spouse's potential survivor benefits in his decision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Making Your Decision</h3>
        <div className="space-y-3">
          <p className="text-gray-700">
            <strong>1. Check your earnings record.</strong> Create an account at ssa.gov to review your earnings history and projected benefits. 
            Verify that all your earnings have been properly recorded.
          </p>
          <p className="text-gray-700">
            <strong>2. Consider using Social Security calculators.</strong> Online tools can help you estimate the impact of different 
            claiming strategies based on your specific situation.
          </p>
          <p className="text-gray-700">
            <strong>3. Incorporate Social Security into your broader retirement plan.</strong> Consider how your claiming decision 
            fits with your other income sources, investment strategy, and tax planning.
          </p>
          <p className="text-gray-700">
            <strong>4. Consult with a financial advisor.</strong> A professional who specializes in retirement planning can help 
            you optimize your Social Security benefits as part of a comprehensive retirement strategy.
          </p>
          <p className="text-gray-700">
            <strong>5. Stay informed about potential changes.</strong> Social Security laws and regulations may change over time. 
            Monitor developments that could affect your benefits.
          </p>
        </div>
      </div>
    </Article>
  );
}

export default SocialSecurityStrategies; 