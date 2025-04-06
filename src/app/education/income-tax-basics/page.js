import React from 'react';
import Link from 'next/link';
import { FileText, AlertTriangle, ArrowRight, Calculator, DollarSign, Landmark, ShieldOff } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function IncomeTaxBasics() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Income Tax Basics' }
            ]} />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-3 text-gray-900">Income Tax Basics</h1>
            <h2 className="text-lg text-center text-gray-700 mb-6">Understanding How Your Taxes Work</h2>
            
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Understanding the fundamentals of income taxes helps you make informed financial decisions, 
              plan effectively for your tax obligations, and potentially reduce your tax burden through 
              legitimate strategies.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
              <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Why This Matters
              </h3>
              <p className="text-gray-700">
                Taxes represent one of your largest lifetime expenses. Knowledge of how the tax system works
                can help you keep more of your hard-earned money while staying compliant with tax laws.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Tax Brackets and Progressive Taxation</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-blue-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-blue-700" />
                  How Tax Brackets Work
                </h4>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-700 mb-4">
                  The U.S. uses a progressive tax system where different portions of your income are taxed at 
                  increasing rates. Common misconception: moving into a higher tax bracket does not mean all your 
                  income is taxed at that higher rate.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border rounded-lg overflow-hidden">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900 border-b">2024 Tax Bracket</th>
                        <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900 border-b">Single Filers</th>
                        <th className="py-2 px-4 text-left text-sm font-semibold text-gray-900 border-b">Married Filing Jointly</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-white">
                        <td className="py-2 px-4 text-sm text-gray-900">10%</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$0 to $11,600</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$0 to $23,200</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="py-2 px-4 text-sm text-gray-900">12%</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$11,601 to $47,150</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$23,201 to $94,300</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-4 text-sm text-gray-900">22%</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$47,151 to $100,525</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$94,301 to $201,050</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="py-2 px-4 text-sm text-gray-900">24%</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$100,526 to $191,950</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$201,051 to $383,900</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-4 text-sm text-gray-900">32%</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$191,951 to $243,725</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$383,901 to $487,450</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="py-2 px-4 text-sm text-gray-900">35%</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$243,726 to $609,350</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$487,451 to $731,200</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-2 px-4 text-sm text-gray-900">37%</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$609,351 or more</td>
                        <td className="py-2 px-4 text-sm text-gray-700">$731,201 or more</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Example: $60,000 Income (Single Filer)</h5>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <span className="font-medium">First $11,600:</span> Taxed at 10% = $1,160
                    </p>
                    <p>
                      <span className="font-medium">$11,601 to $47,150 ($35,550):</span> Taxed at 12% = $4,266
                    </p>
                    <p>
                      <span className="font-medium">$47,151 to $60,000 ($12,850):</span> Taxed at 22% = $2,827
                    </p>
                    <p className="font-medium pt-2">
                      Total federal income tax: $8,253 (13.8% effective tax rate)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Deductions vs. Credits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-indigo-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <ShieldOff className="w-5 h-5 mr-2 text-indigo-700" />
                    Tax Deductions
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">How Deductions Work</h5>
                      <p className="text-sm text-gray-700">
                        Deductions reduce your taxable income before tax rates are applied. Their value depends on your tax bracket.
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Standard Deduction (2024)</h5>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Single:</span> $14,600<br />
                        <span className="font-medium">Married Filing Jointly:</span> $29,200<br />
                        <span className="font-medium">Head of Household:</span> $21,900
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Common Itemized Deductions</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Mortgage interest</li>
                        <li>• State and local taxes (up to $10,000)</li>
                        <li>• Charitable donations</li>
                        <li>• Medical expenses (above 7.5% of AGI)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-green-100 p-4 rounded-t-xl">
                  <h4 className="font-bold text-gray-900 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-700" />
                    Tax Credits
                  </h4>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">How Credits Work</h5>
                      <p className="text-sm text-gray-700">
                        Credits directly reduce your tax bill dollar-for-dollar after tax rates are applied. 
                        More valuable than deductions of the same amount.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Refundable vs. Non-Refundable</h5>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Refundable credits</span> can result in a tax refund even if you owe no tax.<br />
                        <span className="font-medium">Non-refundable credits</span> can reduce your tax to zero but won't be refunded beyond that.
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Common Tax Credits</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Child Tax Credit</li>
                        <li>• Earned Income Tax Credit (EITC)</li>
                        <li>• American Opportunity Credit (education)</li>
                        <li>• Lifetime Learning Credit</li>
                        <li>• Retirement Savings Contributions Credit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Key Tax Concepts</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-amber-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Landmark className="w-5 h-5 mr-2 text-amber-700" />
                  Important Terminology
                </h4>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Gross Income vs. Adjusted Gross Income (AGI)</h5>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Gross Income:</span> All income from all sources.<br /><br />
                      <span className="font-medium">AGI:</span> Gross income minus certain adjustments like student loan interest, 
                      retirement contributions, and health savings account contributions. Many tax benefits phase out based on AGI.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Taxable Income</h5>
                    <p className="text-sm text-gray-700">
                      AGI minus either the standard deduction or itemized deductions. This is the amount to 
                      which tax rates are applied to calculate your tax liability.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Marginal vs. Effective Tax Rate</h5>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Marginal Tax Rate:</span> The tax rate applied to your last dollar of income.<br /><br />
                      <span className="font-medium">Effective Tax Rate:</span> Your total tax divided by your total income, representing the 
                      average rate at which your income is taxed.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Withholding and Estimated Taxes</h5>
                    <p className="text-sm text-gray-700">
                      The U.S. has a pay-as-you-go tax system. Taxes must be paid throughout the year either through 
                      employer withholding or quarterly estimated tax payments for self-employed individuals or those 
                      with significant non-wage income.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Tax Reduction Strategies</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              <div className="bg-purple-100 p-4 rounded-t-xl">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-purple-700" />
                  Legal Tax Minimization
                </h4>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Retirement Accounts</h5>
                    <div className="space-y-2">
                      <div className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Contribute to traditional 401(k)s, IRAs, and other pre-tax retirement accounts to reduce current taxable income.</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Consider Roth accounts for tax-free growth and withdrawals in retirement.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tax-Advantaged Accounts</h5>
                    <div className="space-y-2">
                      <div className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Health Savings Accounts (HSAs) offer triple tax advantages: tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">529 plans allow tax-free growth and withdrawals for qualified education expenses.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Income Timing and Tax-Loss Harvesting</h5>
                    <div className="space-y-2">
                      <div className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Time income recognition and deductions to minimize tax liability across tax years.</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Harvest investment losses to offset capital gains and up to $3,000 of ordinary income annually.</span>
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
                  This content is educational in nature and updated as of March 2024. Tax laws change frequently, and this information may not reflect the most current tax regulations. For complete information about our services, please review our 
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

export default IncomeTaxBasics; 