import React from 'react';
import Link from 'next/link';
import { DollarSign, AlertTriangle, ArrowRight, PiggyBank, TrendingUp, LineChart, Percent, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function HighYieldSavingsAccounts() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'High-Yield Savings Accounts' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">High-Yield Savings Accounts</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Make Your Cash Work Harder for You</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              High-yield savings accounts offer substantially better interest rates than traditional bank accounts, 
              helping you protect your emergency fund and short-term savings from inflation while maintaining 
              liquidity and safety. Learn how to maximize your returns on cash savings.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                The difference between a 0.01% APY traditional savings account and a 4.5% APY high-yield account means 
                earning $450 vs. just $1 annually on a $10,000 emergency fund. This significant difference helps counter 
                inflation's erosion of your purchasing power without taking on investment risk.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Understanding High-Yield Savings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-blue-700" />
                    The Basics
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">What Is a High-Yield Savings Account?</h5>
                      <p className="text-sm text-gray-700">
                        A type of deposit account that pays significantly higher interest than traditional savings accounts, 
                        while still providing FDIC or NCUA insurance protection and easy access to your money.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">How They Differ from Regular Savings</h5>
                      <p className="text-sm text-gray-700">
                        High-yield accounts typically offer 10-25 times higher interest rates than traditional bank accounts. 
                        They're often offered by online banks with lower overhead costs that can pass savings to customers.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Higher interest rates
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Often online-only
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Similar safety features
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Variable Interest Rates</h5>
                      <p className="text-sm text-gray-700">
                        Rates on high-yield accounts fluctuate with the federal funds rate and market conditions. 
                        When the Federal Reserve adjusts interest rates, high-yield savings rates typically follow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <PiggyBank className="w-5 h-5 mr-2 text-green-700" />
                    Ideal Uses
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Emergency Funds</h5>
                      <p className="text-sm text-gray-700">
                        Keep 3-6 months of expenses in a high-yield account for immediate access during financial emergencies 
                        while earning interest that helps offset inflation.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Short-Term Savings Goals</h5>
                      <p className="text-sm text-gray-700">
                        Save for expenses coming up within 1-5 years, such as vacations, weddings, down payments, 
                        or major purchases that shouldn't be subjected to market risk.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Holding Cash Before Investing</h5>
                      <p className="text-sm text-gray-700">
                        A place to keep money earmarked for investments while you research options or wait for buying opportunities, 
                        earning decent interest in the meantime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Key Features to Compare</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-purple-700" />
                  Selection Criteria
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
                        <h5 className="font-semibold text-gray-900 mb-2">Annual Percentage Yield (APY)</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          The effective annual rate of return accounting for compound interest. Higher is better, but don't 
                          chase rates if it means sacrificing other important features for marginal differences.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Compare APY, not just interest rate
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Consider rate history
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <ShieldCheck className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Insurance Protection</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Ensure the account is FDIC-insured (banks) or NCUA-insured (credit unions) up to the legal limits 
                          ($250,000 per depositor, per bank, per ownership category).
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            FDIC for banks
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            NCUA for credit unions
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
                        <h5 className="font-semibold text-gray-900 mb-2">Fees and Minimums</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Look for accounts with no monthly maintenance fees, no minimum balance requirements, 
                          and reasonable fees (if any) for services like wire transfers or excessive withdrawals.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Monthly maintenance fees
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Minimum balance requirements
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Transaction fees
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Accessibility and Technology</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-amber-700" />
                    Account Access
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Mobile and Online Banking</h5>
                      <p className="text-sm text-gray-700">
                        Most high-yield accounts offer robust digital platforms. Check if the bank provides a well-designed app 
                        with features like mobile check deposit, easy transfers, and account alerts.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">ATM Access</h5>
                      <p className="text-sm text-gray-700">
                        Many online banks offer free ATM withdrawals through networks like Allpoint or MoneyPass, 
                        or reimburse ATM fees up to a certain amount monthly.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Customer Service</h5>
                      <p className="text-sm text-gray-700">
                        Online banks may not have physical branches but typically offer customer support 
                        via phone, email, or chat, sometimes 24/7.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-indigo-700" />
                    Additional Features
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Withdrawal Limits</h5>
                      <p className="text-sm text-gray-700">
                        Federal Regulation D previously limited savings withdrawals to six per month, but this requirement was suspended in 2020. 
                        Some banks still impose their own limits, so check their policies.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Linked Checking Accounts</h5>
                      <p className="text-sm text-gray-700">
                        Some high-yield savings accounts work best when linked to a checking account at the same institution, 
                        offering features like instant transfers and overdraft protection.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Sub-Accounts</h5>
                      <p className="text-sm text-gray-700">
                        Some banks let you create multiple savings "buckets" within one account to organize funds for different goals, 
                        making it easier to track progress toward specific targets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Potential Drawbacks</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-rose-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-rose-700" />
                  Considerations
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Limitations:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Transfer delays (1-3 business days) to external accounts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">No physical branches for face-to-face service</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Variable rates that can be reduced at any time</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Returns still below the rate of inflation in high-inflation periods</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Alternatives to Consider:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Money market accounts (similar rates with check-writing privileges)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Certificates of deposit (higher rates for committed funds)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Treasury bills (government-backed securities with competitive rates)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">I bonds (inflation-protected savings bonds from the U.S. Treasury)</span>
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

            <Disclaimer 
              articleId="high-yield-savings-accounts"
              message="This content is educational in nature and updated as of {{year}}. Interest rates, account terms, and features of high-yield savings accounts change frequently. The financial institutions mentioned are examples only and not recommendations. Always verify current rates, terms, and FDIC/NCUA insurance status before opening an account."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HighYieldSavingsAccounts; 