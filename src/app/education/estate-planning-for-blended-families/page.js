import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Users, ArrowRight, FileText, Heart, Home, Shield, GitMerge } from 'lucide-react';
import Article from '@/components/Article';

function EstatePlanningForBlendedFamilies() {
  return (
    <Article
      title="Estate Planning for Blended Families"
      icon={Users}
      articleId="estate-planning-for-blended-families"
      accentColor="indigo"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Estate planning laws vary significantly by state and individual circumstances. The strategies discussed may not be appropriate for everyone. This information is not legal or tax advice. Please consult with qualified legal and financial professionals to create an estate plan tailored to your specific family situation."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Blended families face unique challenges when planning for the future. With multiple sets of children, different marital assets, and complex family dynamics, a carefully crafted estate plan is essential to ensure your wishes are honored and all family members are treated according to your intentions. This guide explores key considerations and strategies for effective estate planning in blended family situations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <GitMerge className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">Over 40% of American families are blended with stepchildren or step-parents</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <Shield className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">Standard estate plans often fail to protect interests of all family members</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <FileText className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">Nearly 60% of Americans don't have a will or estate plan</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Users className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Unique Challenges for Blended Families</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Blended families face several distinctive estate planning challenges that require specialized solutions:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Users className="h-5 w-5 text-indigo-700" />
              </div>
              Balancing Competing Interests
            </h4>
            <p className="text-gray-700 mb-2">Managing the financial interests of your current spouse alongside children from previous relationships.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Common Scenarios:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Ensuring your current spouse has financial security while preserving assets for your biological children</li>
                <li>Preventing unintentional disinheritance of your children if your surviving spouse remarries or creates a new estate plan</li>
                <li>Addressing potential conflicts between stepchildren and biological children after your passing</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Home className="h-5 w-5 text-indigo-700" />
              </div>
              Property Ownership Complexities
            </h4>
            <p className="text-gray-700 mb-2">Navigating properties and assets acquired before and during the current marriage.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Considerations:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Separate property brought into the marriage vs. jointly acquired marital assets</li>
                <li>Family homes with emotional attachments for different family members</li>
                <li>Business interests or investments established before the current marriage</li>
                <li>Inheritance rights in community property vs. common law states</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <FileText className="h-5 w-5 text-indigo-700" />
              </div>
              Default Law Limitations
            </h4>
            <p className="text-gray-700 mb-2">Understanding how intestacy laws (dying without a will) typically fail blended families.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Legal Pitfalls:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Many states provide only a portion of assets to the current spouse with the remainder going to biological children</li>
                <li>Stepchildren generally have no inheritance rights without explicit provisions</li>
                <li>Simple wills often don't address the complexity of blended family dynamics</li>
                <li>Probate process can intensify family conflicts without clear directives</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-indigo-600" />
            <h4 className="font-semibold text-indigo-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Understanding the basics of estate planning is essential before addressing blended family considerations.
          </p>
          <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
            Explore Estate Planning Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Shield className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Effective Planning Strategies</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Several specialized estate planning tools and approaches can help blended families achieve their goals:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Strategy</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Appropriate For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Key Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">QTIP Trust</td>
                <td className="px-4 py-3 text-sm text-gray-600">Providing for spouse while protecting assets for your children</td>
                <td className="px-4 py-3 text-sm text-gray-600">Income for spouse during lifetime; principal preserved for your children</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Bypass Trust</td>
                <td className="px-4 py-3 text-sm text-gray-600">High-net-worth couples wanting to maximize tax benefits</td>
                <td className="px-4 py-3 text-sm text-gray-600">Shields assets from estate taxes; provides for spouse while preserving principal</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Life Insurance Trust</td>
                <td className="px-4 py-3 text-sm text-gray-600">Providing liquid assets for specific beneficiaries</td>
                <td className="px-4 py-3 text-sm text-gray-600">Creates inheritance outside of estate; avoids probate; provides liquidity</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Property Agreement</td>
                <td className="px-4 py-3 text-sm text-gray-600">Clarifying ownership of assets brought into marriage</td>
                <td className="px-4 py-3 text-sm text-gray-600">Legally documents separate property; reduces potential disputes</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Lifetime Gifting</td>
                <td className="px-4 py-3 text-sm text-gray-600">Transferring assets during your lifetime</td>
                <td className="px-4 py-3 text-sm text-gray-600">Reduces estate; provides certainty; allows you to witness benefits</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-gray-600 mb-4 bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-300">
          <strong>Important:</strong> A "simple will" that leaves everything to your spouse may unintentionally disinherit your children from previous relationships if your spouse later changes their estate plan or remarries. Consider trust structures that provide for your spouse during their lifetime while ensuring your assets ultimately pass to your intended beneficiaries.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-indigo-600" />
            <h4 className="font-semibold text-gray-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Learn more about multi-generational wealth transfer planning.
          </p>
          <Link href="/education/multi-generational-wealth-transfer" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
            Explore Multi-Generational Wealth Transfer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Heart className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Communication and Family Harmony</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Beyond legal documents, successful estate planning for blended families requires thoughtful communication:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
          <li className="bg-gray-50 p-2 rounded"><strong>Family Meetings:</strong> Consider facilitated discussions about your estate plan with adult family members to explain your decisions and address concerns</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Explanation Letters:</strong> Include a personal letter with your estate plan explaining the reasoning behind key decisions</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Document Personal Items:</strong> Create a detailed list of personal property with specific bequests for items with sentimental value to minimize conflicts</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Fair vs. Equal:</strong> Consider whether equal distributions to all children is appropriate, or if adjustments should be made based on prior gifts, needs, or relationship dynamics</li>
          <li className="bg-gray-50 p-2 rounded"><strong>Regular Updates:</strong> Review and update your plan regularly, especially after major life events such as births, deaths, marriages, or divorces</li>
        </ul>

        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="h-5 w-5 text-indigo-600" />
            <h4 className="font-semibold text-indigo-800 m-0">Related Resource</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Learn more about inheritance planning considerations.
          </p>
          <Link href="/education/inheritance-planning" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline">
            Explore Inheritance Planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Blended Family Estate Planning Checklist</h3>
          <p className="mb-4 text-indigo-50">
            Essential considerations for your blended family estate plan:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-indigo-50">Are there clear provisions for both your current spouse and children from previous relationships?</li>
            <li className="text-indigo-50">How are stepchildren treated in your plan compared to biological children?</li>
            <li className="text-indigo-50">Is separate property clearly identified and addressed differently from joint property?</li>
            <li className="text-indigo-50">Are there protections to ensure your assets eventually reach your intended beneficiaries?</li>
            <li className="text-indigo-50">Have you considered the potential impact of a surviving spouse's remarriage on your estate plan?</li>
          </ol>
          <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            Review Estate Planning Fundamentals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default EstatePlanningForBlendedFamilies; 