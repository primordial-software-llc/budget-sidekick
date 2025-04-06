import React from 'react';
import Link from 'next/link';
import { Shield, ArrowRight, DollarSign, Heart, FileText, AlertTriangle, Users } from 'lucide-react';
import Article from '@/components/Article';

function FinancialSafetyNets() {
  return (
    <Article
      title="Financial Safety Nets"
      icon={Shield}
      articleId="emergency-fund-basics"
      accentColor="indigo"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Financial safety nets should be tailored to your individual circumstances. We recommend consulting with qualified financial professionals for personalized advice on building appropriate financial protections."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Financial safety nets provide protection during unexpected life events, helping you weather financial storms without derailing your long-term financial plans. Building a comprehensive system of protections involves more than just a single emergency fund—it requires layered strategies to address different types of financial risks.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <Shield className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">78% of Americans live paycheck to paycheck at some point</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <DollarSign className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">Medical issues cause 66% of personal bankruptcies</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
          <Users className="h-10 w-10 text-indigo-600 mb-2" />
          <p className="font-medium text-indigo-800">Only 41% of adults could cover a $1,000 emergency</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Shield className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">The Five Essential Financial Safety Nets</h2>
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-indigo-700" />
              </div>
              Emergency Fund
            </h4>
            <p className="text-gray-700 mb-2">A dedicated cash reserve to cover unexpected expenses and income disruptions.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Implementation Strategy:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Start with a goal of 3-6 months of essential expenses</li>
                <li>Keep funds in high-yield savings accounts for accessibility</li>
                <li>Consider a tiered approach with different levels of liquidity</li>
                <li>Automate small, regular contributions to build the fund gradually</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/emergency-fund-basics" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline text-sm">
                Learn more about emergency funds <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Heart className="h-5 w-5 text-indigo-700" />
              </div>
              Insurance Protection
            </h4>
            <p className="text-gray-700 mb-2">A suite of insurance policies to protect against catastrophic financial losses.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Components:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Health insurance:</strong> Shields from major medical expenses</li>
                <li><strong>Auto & home/renters insurance:</strong> Protects valuable assets</li>
                <li><strong>Life insurance:</strong> Financial protection for dependents</li>
                <li><strong>Disability insurance:</strong> Income replacement if unable to work</li>
                <li><strong>Umbrella liability:</strong> Extended protection against lawsuits</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/insurance-basics" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline text-sm">
                Learn more about insurance basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <FileText className="h-5 w-5 text-indigo-700" />
              </div>
              Legal Documents
            </h4>
            <p className="text-gray-700 mb-2">Essential legal protections to ensure your wishes are honored and assets are protected.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Core Documents:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Will:</strong> Directs asset distribution and guardianship for minor children</li>
                <li><strong>Healthcare directive:</strong> Outlines medical treatment preferences</li>
                <li><strong>Power of attorney:</strong> Designates decision-makers for financial matters</li>
                <li><strong>Trust documents:</strong> Provides greater control over asset distribution</li>
                <li><strong>Beneficiary designations:</strong> Ensures proper transfer of retirement accounts and insurance</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/estate-planning-basics" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline text-sm">
                Learn more about estate planning <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Users className="h-5 w-5 text-indigo-700" />
              </div>
              Social Support Networks
            </h4>
            <p className="text-gray-700 mb-2">Relationships and communities that provide practical and emotional support during challenging times.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Building Strong Networks:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Maintain strong family relationships that include open financial discussions</li>
                <li>Foster friendships with people who have diverse skills and resources</li>
                <li>Connect with professional networks that can provide job opportunities</li>
                <li>Engage with community organizations and faith-based groups</li>
                <li>Consider how you can reciprocate support to strengthen mutual aid</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h4 className="font-semibold text-indigo-800 mb-3 flex items-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-indigo-700" />
              </div>
              Diversified Income Streams
            </h4>
            <p className="text-gray-700 mb-2">Multiple sources of income that provide financial stability if one source is disrupted.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Income Diversification Strategies:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Develop marketable skills in more than one area or industry</li>
                <li>Create passive income through investments and dividend-paying assets</li>
                <li>Consider part-time or freelance work to supplement primary income</li>
                <li>Build a small business or side hustle that could scale if needed</li>
                <li>Dual-income households provide natural diversification</li>
              </ul>
            </div>
            <div className="mt-3">
              <Link href="/education/side-hustle-strategies" className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline text-sm">
                Learn about side hustle strategies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <AlertTriangle className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Financial Vulnerabilities Assessment</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Identifying your specific financial vulnerabilities is crucial for building appropriate safety nets. Consider these common risk areas:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full rounded-md overflow-hidden border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Risk Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Potential Impact</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Primary Safety Nets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Job Loss</td>
                <td className="px-4 py-3 text-sm text-gray-600">Loss of primary income for 3-6+ months</td>
                <td className="px-4 py-3 text-sm text-gray-600">Emergency fund, unemployment insurance, network</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Medical Crisis</td>
                <td className="px-4 py-3 text-sm text-gray-600">High expenses and possible income loss</td>
                <td className="px-4 py-3 text-sm text-gray-600">Health insurance, disability insurance, emergency fund</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Property Damage</td>
                <td className="px-4 py-3 text-sm text-gray-600">High replacement/repair costs</td>
                <td className="px-4 py-3 text-sm text-gray-600">Home/renters insurance, emergency fund</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Disability</td>
                <td className="px-4 py-3 text-sm text-gray-600">Long-term income loss and care costs</td>
                <td className="px-4 py-3 text-sm text-gray-600">Disability insurance, emergency fund, social support</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm text-gray-800">Death of Provider</td>
                <td className="px-4 py-3 text-sm text-gray-600">Permanent loss of income and support</td>
                <td className="px-4 py-3 text-sm text-gray-600">Life insurance, estate planning documents</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">Legal Issues</td>
                <td className="px-4 py-3 text-sm text-gray-600">Liability claims, legal expenses</td>
                <td className="px-4 py-3 text-sm text-gray-600">Umbrella insurance, legal documents, emergency fund</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Shield className="h-7 w-7 text-indigo-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Building Your Financial Safety System</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Follow this framework to develop comprehensive financial protection:
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-800 mb-2">Step 1: Assess Your Risks</h5>
            <p className="text-gray-700">
              Identify your specific vulnerabilities based on your life situation, dependents, health history, career field, and geographic location.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-800 mb-2">Step 2: Prioritize Protection</h5>
            <p className="text-gray-700">
              Address catastrophic risks first (health insurance, basic emergency fund), then build additional protections in order of potential impact.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-800 mb-2">Step 3: Implement Incrementally</h5>
            <p className="text-gray-700">
              Start with the most critical safeguards and build your protection system over time rather than attempting everything at once.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-800 mb-2">Step 4: Regular Review</h5>
            <p className="text-gray-700">
              Revisit your financial safety nets annually and after major life changes (marriage, children, career changes, relocations).
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-800 mb-2">Step 5: Balance Cost vs. Protection</h5>
            <p className="text-gray-700">
              Find the optimal balance between adequate protection and not overpaying for insurance or keeping excessive cash reserves.
            </p>
          </div>
        </div>
      
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Financial Resilience Self-Assessment</h3>
          <p className="mb-4 text-indigo-50">
            Rate your current level of protection in each area on a scale of 1-5:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-indigo-50">Do I have sufficient emergency savings to cover 3-6 months of expenses?</li>
            <li className="text-indigo-50">Are my insurance policies adequate and up-to-date for my current situation?</li>
            <li className="text-indigo-50">Do I have essential legal documents in place and accessible to trusted individuals?</li>
            <li className="text-indigo-50">Have I cultivated strong personal and professional networks for support?</li>
            <li className="text-indigo-50">Do I have alternative income sources or skills that could generate income if needed?</li>
          </ol>
          <p className="text-indigo-50 mb-4">
            A score below 3 in any area indicates a priority for strengthening your financial safety nets.
          </p>
          <Link href="/education/financial-goal-setting" className="inline-flex items-center gap-1 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            Set Financial Safety Goals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default FinancialSafetyNets; 