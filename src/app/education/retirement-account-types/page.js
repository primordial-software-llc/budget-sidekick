import React from 'react';
import Link from 'next/link';
import { PiggyBank, ArrowRight, Shield, Calculator, Briefcase, BarChart2, TrendingUp } from 'lucide-react';
import Article from '@/components/Article';

function RetirementAccountTypes() {
  return (
    <Article
      title="Retirement Account Types"
      icon={PiggyBank}
      articleId="retirement-account-strategies"
      accentColor="green"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Tax rules and contribution limits for retirement accounts may change over time. This information is not tax or investment advice. Please consult with a qualified tax professional or financial advisor before making decisions about your retirement accounts."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Navigating the various types of retirement accounts can be overwhelming, but understanding their features, benefits, and limitations is essential for effective retirement planning. Different account types offer unique advantages that can significantly impact your financial future.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
          <PiggyBank className="h-10 w-10 text-green-600 mb-2" />
          <p className="font-medium text-green-800">Only 55% of Americans participate in a workplace retirement plan</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
          <Calculator className="h-10 w-10 text-green-600 mb-2" />
          <p className="font-medium text-green-800">The right account choice can save $100K+ in lifetime taxes</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center">
          <Shield className="h-10 w-10 text-green-600 mb-2" />
          <p className="font-medium text-green-800">Most retirement accounts offer protection from creditors</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <PiggyBank className="h-7 w-7 text-green-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Employer-Sponsored Retirement Plans</h2>
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Briefcase className="h-5 w-5 text-green-700" />
              </div>
              Traditional 401(k)
            </h4>
            <p className="text-gray-700 mb-2">An employer-sponsored plan that allows employees to contribute pre-tax dollars from their paycheck.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Pre-tax contributions reduce your current taxable income</li>
                  <li>Employer matching contributions (free money)</li>
                  <li>Higher contribution limits than IRAs ($23,000 in 2024)</li>
                  <li>Additional $7,500 catch-up contribution if age 50+</li>
                  <li>Tax-deferred growth until withdrawal</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Limitations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Withdrawals taxed as ordinary income in retirement</li>
                  <li>10% penalty on withdrawals before age 59½ (with exceptions)</li>
                  <li>Required Minimum Distributions (RMDs) at age 73</li>
                  <li>Limited investment options compared to IRAs</li>
                  <li>Plan fees can be higher than individually managed accounts</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Those who expect to be in a lower tax bracket in retirement and want to reduce current taxable income.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Briefcase className="h-5 w-5 text-green-700" />
              </div>
              Roth 401(k)
            </h4>
            <p className="text-gray-700 mb-2">A variation of the traditional 401(k) that allows after-tax contributions with tax-free withdrawals in retirement.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>After-tax contributions (no current tax reduction)</li>
                  <li>Tax-free growth and qualified withdrawals</li>
                  <li>Same contribution limits as traditional 401(k)</li>
                  <li>Employer matches go into traditional 401(k)</li>
                  <li>No income limits for participation</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Limitations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>No current-year tax benefit</li>
                  <li>Five-year holding requirement for tax-free withdrawals</li>
                  <li>RMDs required at age 73 (unlike Roth IRAs)</li>
                  <li>Not all employers offer Roth 401(k) option</li>
                  <li>Cannot convert existing traditional 401(k) within the plan</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Young professionals expecting to be in a higher tax bracket in retirement or those who want tax diversification.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Briefcase className="h-5 w-5 text-green-700" />
              </div>
              403(b) Plans
            </h4>
            <p className="text-gray-700 mb-2">Similar to 401(k) plans but designed for employees of public schools, non-profit organizations, and certain ministries.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Differences from 401(k):</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Often offers annuity products as investment options</li>
                <li>May have lower administrative costs</li>
                <li>Special 15-year catch-up provision (additional $3,000/year for 5 years)</li>
                <li>Often has simpler investment menus</li>
                <li>Traditional and Roth versions available</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Employees of qualifying non-profit organizations, especially long-term employees who can utilize the special catch-up provision.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Briefcase className="h-5 w-5 text-green-700" />
              </div>
              457(b) Plans
            </h4>
            <p className="text-gray-700 mb-2">Deferred compensation plans available to state and local government employees and some non-profit organizations.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Unique Features:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>No 10% early withdrawal penalty before age 59½</li>
                <li>Special "double contribution" catch-up in final three years before retirement</li>
                <li>Can contribute to both a 457(b) and a 401(k)/403(b) simultaneously</li>
                <li>Generally fewer investment options</li>
                <li>Potential concerns about creditor protection (for non-governmental plans)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Government employees who want to maximize retirement contributions or who may need access to funds before age 59½.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Shield className="h-7 w-7 text-green-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Individual Retirement Accounts (IRAs)</h2>
        </div>
        <p className="text-gray-600 mb-4">
          IRAs are retirement accounts that individuals can establish independent of their employer, offering more control and investment options.
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-green-700" />
              </div>
              Traditional IRA
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Tax-deductible contributions (income limits apply)</li>
                  <li>Tax-deferred growth until withdrawal</li>
                  <li>Maximum contribution: $7,000 in 2024 ($8,000 if age 50+)</li>
                  <li>Wide range of investment options</li>
                  <li>No employer participation required</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Limitations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Deduction phase-out for those with employer plans</li>
                  <li>Withdrawals taxed as ordinary income</li>
                  <li>10% penalty on early withdrawals (with exceptions)</li>
                  <li>Required Minimum Distributions starting at age 73</li>
                  <li>Lower contribution limits than employer-sponsored plans</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Those without access to employer plans or who want additional tax-deferred savings beyond their workplace plan.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-green-700" />
              </div>
              Roth IRA
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>After-tax contributions (no current tax deduction)</li>
                  <li>Tax-free growth and qualified withdrawals</li>
                  <li>Contributions can be withdrawn at any time without penalty</li>
                  <li>No Required Minimum Distributions during original owner's lifetime</li>
                  <li>Same contribution limits as Traditional IRA</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Limitations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Income limits for contributions ($161K-$176K single, $240K-$256K married in 2024)</li>
                  <li>Five-year holding requirement for tax-free earnings withdrawals</li>
                  <li>No immediate tax benefit</li>
                  <li>Cannot contribute past age 73 without earned income</li>
                  <li>Backdoor Roth conversion needed for high-income earners</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Younger investors, those expecting higher future tax rates, or anyone wanting tax-free withdrawals and no RMDs in retirement.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-green-700" />
              </div>
              SEP IRA
            </h4>
            <p className="text-gray-700 mb-2">Simplified Employee Pension IRA designed for self-employed individuals and small business owners.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Unique Features:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Higher contribution limits: up to 25% of compensation or $69,000 (2024), whichever is less</li>
                <li>Only employers contribute (including self-employed)</li>
                <li>Must include all eligible employees</li>
                <li>Simple administration with minimal paperwork</li>
                <li>Contributions are discretionary year-to-year</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Self-employed individuals or small business owners with few or no employees who want higher contribution limits.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-green-700" />
              </div>
              SIMPLE IRA
            </h4>
            <p className="text-gray-700 mb-2">Savings Incentive Match Plan for Employees IRA designed for small businesses with 100 or fewer employees.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Unique Features:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Employee contribution limit: $16,000 in 2024 ($19,000 if age 50+)</li>
                <li>Mandatory employer contributions: either 2% for all eligible employees or 3% matching</li>
                <li>Easier administration than a 401(k) plan</li>
                <li>Immediate vesting of all contributions</li>
                <li>25% penalty on withdrawals within first 2 years of participation</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Small business owners who want to offer a retirement plan with lower administrative costs than a 401(k).
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Calculator className="h-7 w-7 text-green-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Specialized Retirement Accounts</h2>
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <BarChart2 className="h-5 w-5 text-green-700" />
              </div>
              Solo 401(k)
            </h4>
            <p className="text-gray-700 mb-2">A 401(k) plan for self-employed individuals with no employees (except a spouse).</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Advantages:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Highest possible contribution limits among retirement plans</li>
                <li>Contribute as both employer (up to 25% of compensation) AND employee ($23,000 in 2024)</li>
                <li>Can offer both traditional and Roth options</li>
                <li>Loan provisions available (unlike IRAs)</li>
                <li>Can accept rollovers from other qualified plans</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best for:</strong> Self-employed individuals with no employees who want to maximize retirement savings.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <TrendingUp className="h-5 w-5 text-green-700" />
              </div>
              Health Savings Account (HSA)
            </h4>
            <p className="text-gray-700 mb-2">While primarily for healthcare expenses, HSAs can function as powerful retirement savings vehicles.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Retirement Benefits:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Triple tax advantage: tax-deductible contributions, tax-free growth, tax-free withdrawals for medical expenses</li>
                <li>After age 65, can withdraw for non-medical purposes (taxed like a traditional IRA, but no penalty)</li>
                <li>No Required Minimum Distributions</li>
                <li>Can be invested for long-term growth</li>
                <li>Contribution limits: $4,150 individual/$8,300 family in 2024 (plus $1,000 catch-up at 55+)</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/health-savings-accounts" className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline text-sm">
                Learn more about HSAs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      
        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Strategic Account Selection Framework</h3>
          <p className="mb-4 text-green-50">
            Use this decision framework to optimize your retirement account strategy:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-green-50"><strong>First priority:</strong> Contribute enough to employer plans to get full matching (free money)</li>
            <li className="text-green-50"><strong>If eligible for HSA:</strong> Maximize HSA contributions for triple tax benefits</li>
            <li className="text-green-50"><strong>Tax diversification:</strong> Balance between traditional and Roth accounts based on current/future tax situations</li>
            <li className="text-green-50"><strong>Consider flexibility:</strong> Roth IRAs offer withdrawal options not available in other retirement accounts</li>
            <li className="text-green-50"><strong>Maximize limits:</strong> After optimizing the above, contribute to other available accounts to reach savings goals</li>
          </ol>
          <Link href="/education/retirement-account-strategies" className="inline-flex items-center gap-1 bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
            Explore Retirement Account Strategies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default RetirementAccountTypes; 