import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight, Percent, DollarSign, Stethoscope, Shield, Activity } from 'lucide-react';
import Article from '@/components/Article';

function HealthcarePlanningInRetirement() {
  return (
    <Article
      title="Healthcare Planning in Retirement"
      icon={Heart}
      articleId="healthcare-planning-in-retirement"
      accentColor="red"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Healthcare laws, insurance options, and costs change frequently. This information is not medical or financial advice. Please consult with qualified healthcare and financial professionals to develop a healthcare strategy tailored to your specific situation."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Healthcare costs are one of the largest expenses in retirement, yet they're often underestimated in retirement planning. Understanding potential healthcare needs, insurance options, and strategies to manage costs is essential for maintaining both your health and financial well-being throughout retirement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex flex-col items-center text-center">
          <DollarSign className="h-10 w-10 text-red-600 mb-2" />
          <p className="font-medium text-red-800">Average retired couple needs $315,000 saved for healthcare expenses</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex flex-col items-center text-center">
          <Percent className="h-10 w-10 text-red-600 mb-2" />
          <p className="font-medium text-red-800">Healthcare costs typically rise 5-7% annually, outpacing general inflation</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex flex-col items-center text-center">
          <Activity className="h-10 w-10 text-red-600 mb-2" />
          <p className="font-medium text-red-800">Only 41% of retirees have specifically planned for healthcare expenses</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Stethoscope className="h-7 w-7 text-red-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Understanding Medicare Coverage</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Most Americans become eligible for Medicare at age 65, but understanding its various parts and coverage limits is essential:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-red-200 shadow-sm">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-red-700" />
              </div>
              Medicare Parts Explained
            </h4>
            <p className="text-gray-700 mb-2">Understanding the different components of Medicare and what each covers.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Coverage Components:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Part A (Hospital Insurance):</strong> Covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health care. Most people don't pay a premium if they've worked 10+ years.</li>
                <li><strong>Part B (Medical Insurance):</strong> Covers doctor visits, outpatient care, preventive services, and some home health services. Standard monthly premium of $170+ in 2024 (higher for high-income earners).</li>
                <li><strong>Part C (Medicare Advantage):</strong> Private insurance alternative to Original Medicare, often including drug coverage and extra benefits like vision or dental.</li>
                <li><strong>Part D (Prescription Drug Coverage):</strong> Optional coverage for prescription medications with monthly premiums varying by plan.</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-red-200 shadow-sm">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-red-700" />
              </div>
              What Medicare Doesn't Cover
            </h4>
            <p className="text-gray-700 mb-2">Important gaps in Medicare coverage that require additional planning and funding.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Coverage Gaps:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Long-term care:</strong> Custodial care in nursing homes or assisted living facilities</li>
                <li><strong>Most dental care and dentures</strong></li>
                <li><strong>Routine eye exams and most eyeglasses</strong></li>
                <li><strong>Hearing aids and related exams</strong></li>
                <li><strong>Routine foot care</strong></li>
                <li><strong>Healthcare while traveling outside the U.S.</strong> (with limited exceptions)</li>
                <li><strong>Cosmetic surgery</strong></li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-red-200 shadow-sm">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Activity className="h-5 w-5 text-red-700" />
              </div>
              Understanding Out-of-Pocket Costs
            </h4>
            <p className="text-gray-700 mb-2">Even with Medicare, retirees face significant healthcare expenses.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Typical Expenses:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Premiums:</strong> Monthly payments for Parts B, D, and supplemental coverage</li>
                <li><strong>Deductibles:</strong> Amount you pay before insurance begins covering costs</li>
                <li><strong>Copayments/Coinsurance:</strong> Your share of costs for services after meeting deductibles</li>
                <li><strong>Coverage gaps:</strong> Expenses for services not covered by Medicare</li>
                <li><strong>Income-Related Monthly Adjustment Amount (IRMAA):</strong> Higher-income beneficiaries pay additional premiums</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border border-red-100 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-red-600" />
            <h4 className="font-semibold text-red-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Health Savings Accounts can be a powerful tool for retirement healthcare planning.
          </p>
          <Link href="/education/health-savings-accounts" className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline">
            Explore Health Savings Accounts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Shield className="h-7 w-7 text-red-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Supplemental Coverage Options</h2>
        </div>
        <p className="text-gray-600 mb-4">
          To fill Medicare coverage gaps, consider these supplemental insurance options:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Coverage Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Key Features</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Medicare Supplement (Medigap)</td>
                <td className="px-4 py-3 text-sm text-gray-600">Helps cover Original Medicare's out-of-pocket costs; standardized plans labeled A-N; no prescription coverage</td>
                <td className="px-4 py-3 text-sm text-gray-600">Those who prefer Original Medicare, want predictable costs, and see providers nationwide</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Medicare Advantage (Part C)</td>
                <td className="px-4 py-3 text-sm text-gray-600">All-in-one alternative to Original Medicare; often includes drug coverage and extra benefits; network restrictions</td>
                <td className="px-4 py-3 text-sm text-gray-600">Those seeking potentially lower premiums, integrated coverage, and additional benefits</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Prescription Drug Plans (Part D)</td>
                <td className="px-4 py-3 text-sm text-gray-600">Standalone drug coverage for those with Original Medicare; formularies and costs vary by plan</td>
                <td className="px-4 py-3 text-sm text-gray-600">Anyone with Original Medicare who needs prescription drug coverage</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Long-Term Care Insurance</td>
                <td className="px-4 py-3 text-sm text-gray-600">Covers custodial care not included in Medicare; premiums increase with age; various benefit structures</td>
                <td className="px-4 py-3 text-sm text-gray-600">Those seeking protection from potentially catastrophic long-term care costs</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Dental/Vision/Hearing Plans</td>
                <td className="px-4 py-3 text-sm text-gray-600">Standalone coverage for services Medicare typically doesn't cover</td>
                <td className="px-4 py-3 text-sm text-gray-600">Those needing coverage for routine dental, vision, or hearing services</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-300">
          <strong>Important:</strong> The best time to enroll in Medicare and supplemental coverage is during your Initial Enrollment Period (three months before your 65th birthday, your birthday month, and three months after). Missing this window can result in permanent premium penalties and coverage gaps.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-red-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Sustainable withdrawal strategies are important when planning for healthcare costs.
          </p>
          <Link href="/education/sustainable-retirement-withdrawal-rates" className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline">
            Explore Sustainable Retirement Withdrawal Rates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <DollarSign className="h-7 w-7 text-red-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Financial Strategies for Healthcare Costs</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Consider these approaches to prepare for healthcare expenses in retirement:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Health Savings Accounts (HSAs):</strong> Triple tax advantage (tax-deductible contributions, tax-free growth, tax-free withdrawals for qualified medical expenses); can be used as a retirement healthcare fund if contributed to during working years</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Dedicated Healthcare Fund:</strong> Set aside a specific portion of retirement savings explicitly for healthcare expenses, separate from general living expenses</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Medicare Premium Planning:</strong> Understand how retirement income impacts Medicare premiums (IRMAA) and plan Roth conversions, capital gains, and other income accordingly</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Long-Term Care Strategy:</strong> Decide between traditional long-term care insurance, hybrid policies, self-funding, or Medicaid planning based on your risk tolerance and assets</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Healthcare Cost Projections:</strong> Build healthcare inflation (5-7% annually) into retirement planning projections rather than using general inflation rates</li>
        </ul>

        <div className="bg-red-50 p-5 rounded-lg border border-red-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-red-600" />
            <h4 className="font-semibold text-red-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Tax-efficient investment strategies can help manage healthcare costs in retirement.
          </p>
          <Link href="/education/tax-efficient-investment-strategies" className="inline-flex items-center gap-1 text-red-600 font-medium hover:underline">
            Explore Tax-Efficient Investment Strategies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Healthcare Planning Checklist</h3>
          <p className="mb-4 text-red-50">
            Use this checklist to develop your retirement healthcare strategy:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-red-50">Estimate your healthcare costs based on your health status, family history, and typical retiree spending patterns</li>
            <li className="text-red-50">Understand Medicare enrollment periods and required actions at ages 65 and beyond</li>
            <li className="text-red-50">Compare Original Medicare + Medigap vs. Medicare Advantage options for your situation</li>
            <li className="text-red-50">Develop a specific long-term care strategy (insurance, self-funding, or hybrid approach)</li>
            <li className="text-red-50">Create a dedicated healthcare fund or account within your retirement portfolio</li>
            <li className="text-red-50">Review your estate planning documents to ensure healthcare proxies and advance directives are in place</li>
          </ol>
          <Link href="/education/retirement-income-planning" className="inline-flex items-center gap-1 bg-white text-red-700 px-4 py-2 rounded-md font-medium hover:bg-red-50 transition-colors">
            Explore Retirement Income Planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default HealthcarePlanningInRetirement; 