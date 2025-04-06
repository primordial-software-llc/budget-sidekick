import React from 'react';
import Link from 'next/link';
import { Gift, AlertTriangle, ArrowRight, DollarSign, FileText, Calendar, Heart, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function InheritancePlanning() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Inheritance Planning' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Inheritance Planning</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Preparing for and Managing Inherited Assets</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Receiving an inheritance can be emotionally complex and financially significant. With proper 
              planning and management, inherited assets can strengthen your financial foundation and honor 
              the legacy of your loved ones.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Inheritances often arrive during emotional periods and can involve substantial sums. Without proper 
                planning, recipients may make hasty decisions, face unexpected tax consequences, or fail to integrate 
                inherited assets into their broader financial plans. A thoughtful approach helps ensure these assets 
                are managed in alignment with both your goals and the legacy intentions of the benefactor.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Before an Inheritance</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-700" />
                    Preparation Steps
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Have Meaningful Conversations</h5>
                      <p className="text-sm text-gray-700">
                        While often difficult, discussing inheritance plans with family members can provide clarity 
                        and reduce future complications. These conversations can address expectations, values, and wishes 
                        regarding the disposition of assets.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Understand Asset Types</h5>
                      <p className="text-sm text-gray-700">
                        Different assets may have different transfer mechanisms, tax implications, and management requirements:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Financial accounts (retirement, brokerage, bank accounts)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Real estate and personal property</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Life insurance proceeds</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                          <span>Business interests</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Assemble Your Team</h5>
                      <p className="text-sm text-gray-700">
                        Identify professionals who can help you prepare for and manage an inheritance, potentially 
                        including a financial advisor, tax professional, and estate attorney.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-green-700" />
                    Estate Document Fundamentals
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Will vs. Probate</h5>
                      <p className="text-sm text-gray-700">
                        A will directs how probate assets should be distributed, but doesn't avoid the probate process. 
                        Probate is the court-supervised process of administering a deceased person's estate, which can be 
                        time-consuming and public.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Beneficiary Designations</h5>
                      <p className="text-sm text-gray-700">
                        Many assets transfer outside of probate through beneficiary designations, including retirement 
                        accounts, life insurance policies, and transfer-on-death accounts. These designations generally 
                        override provisions in a will.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Trusts</h5>
                      <p className="text-sm text-gray-700">
                        Assets held in properly structured trusts typically avoid probate and may provide additional 
                        benefits like privacy, tax planning, and control over how and when beneficiaries receive inheritance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Managing an Inheritance</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-purple-700" />
                  Initial Steps
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Heart className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Take Time to Grieve</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Allow yourself time to process emotions before making major financial decisions. Except for immediate 
                          necessities, most financial matters can wait until you've had time to adjust emotionally and consider 
                          your options carefully.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Avoid hasty decisions
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Focus on immediate needs only
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <FileText className="w-6 h-6 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Organize and Inventory</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Create a comprehensive inventory of inherited assets, including account numbers, titles, statements, 
                          and estimated values. This documentation will help you assess the full scope of the inheritance and 
                          provide necessary information for tax planning and financial integration.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Document all assets
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Store information securely
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
                        <h5 className="font-semibold text-gray-900 mb-2">Understand Tax Implications</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Different asset types have different tax treatments when inherited. While most inherited assets 
                          receive a "step-up" in basis to their value at the date of death (eliminating capital gains on 
                          previous appreciation), exceptions exist for assets like traditional IRAs, which remain subject to 
                          income tax when withdrawn.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Estate tax considerations
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Income tax treatment
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            State tax variations
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Financial Integration & Long-Term Planning</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-amber-700" />
                    Establishing Priorities
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Create a Waiting Period</h5>
                      <p className="text-sm text-gray-700">
                        Consider implementing a self-imposed waiting period (often 6-12 months) before making major financial 
                        changes or large purchases. This helps prevent emotional decisions and gives you time to develop a 
                        thoughtful plan for the inherited assets.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Assess Current Financial Position</h5>
                      <p className="text-sm text-gray-700">
                        Before deciding how to use inherited assets, review your complete financial picture, including:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Emergency fund adequacy</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Debt obligations</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Retirement savings progress</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-amber-600 flex-shrink-0" />
                          <span>Other financial goals</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Honor the Legacy</h5>
                      <p className="text-sm text-gray-700">
                        Consider the wishes and values of the person who left the inheritance. While you may not be legally 
                        bound to use the assets in a specific way, many beneficiaries find meaning in allocating at least some 
                        portion toward purposes that would have mattered to their loved one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-indigo-700" />
                    Allocation Strategies
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Balanced Approach</h5>
                      <p className="text-sm text-gray-700">
                        Consider dividing inherited assets among multiple priorities rather than allocating everything to a 
                        single purpose. A common framework is:
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Set aside a portion for immediate needs or modest personal enjoyment</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Allocate funds to strengthen your financial foundation (emergency fund, debt reduction)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-3 h-3 mr-2 text-indigo-600 flex-shrink-0" />
                          <span>Invest the remainder for long-term goals like retirement</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Special Considerations for Retirement Accounts</h5>
                      <p className="text-sm text-gray-700">
                        Inherited retirement accounts have specific distribution rules based on your relationship to the 
                        deceased and the account type. For non-spouse beneficiaries of traditional IRAs, the SECURE Act 
                        generally requires complete distribution within 10 years, with some exceptions.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Titling and Ownership</h5>
                      <p className="text-sm text-gray-700">
                        Consider how inherited assets should be titled, particularly if you're married. Keeping inherited 
                        assets separate from marital property may be advisable in some situations for legal and estate 
                        planning purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Special Situations</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-rose-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-rose-700" />
                  Complex Scenarios
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Inheriting Illiquid Assets:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Family businesses require succession planning or sale considerations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Real estate may need management, renovation, or liquidation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Valuable collections might require appraisal and specialized selling</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Consider tax implications before liquidating any assets</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Family Dynamics:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Unequal inheritances can create tension between family members</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Shared inherited assets may require formalized co-ownership agreements</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Consider family mediation for complex situations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-rose-600" />
                        <span className="text-gray-700">Maintain clear communication while respecting boundaries</span>
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

export default InheritancePlanning; 