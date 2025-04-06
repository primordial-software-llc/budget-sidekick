import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, DollarSign, Map, Calculator, Users, Briefcase } from 'lucide-react';
import Article from '@/components/Article';

function HousingDecisionsInRetirement() {
  return (
    <Article
      title="Housing Decisions in Retirement"
      icon={Home}
      articleId="retirement-income-planning"
      accentColor="amber"
      disclaimerMessage="This content is educational in nature and updated as of {{year}}. Housing decisions in retirement involve complex financial, emotional, and lifestyle considerations. We recommend consulting with qualified financial and real estate professionals before making significant housing changes."
    >
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Where and how you live in retirement has a profound impact on your financial security, quality of life, and independence. Housing typically represents one of the largest expenses in retirement, making it a critical decision that affects nearly every aspect of your financial plan and daily life.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center text-center">
          <Home className="h-10 w-10 text-amber-600 mb-2" />
          <p className="font-medium text-amber-800">Housing costs average 30-40% of retirement spending</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center text-center">
          <DollarSign className="h-10 w-10 text-amber-600 mb-2" />
          <p className="font-medium text-amber-800">Home equity represents 66% of the average retiree's wealth</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center text-center">
          <Users className="h-10 w-10 text-amber-600 mb-2" />
          <p className="font-medium text-amber-800">77% of retirees want to stay in their current home</p>
        </div>
      </div>

      <div className="prose max-w-none mb-12 bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Home className="h-7 w-7 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Major Housing Options in Retirement</h2>
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Home className="h-5 w-5 text-amber-700" />
              </div>
              Aging in Place
            </h4>
            <p className="text-gray-700 mb-2">Remaining in your current home, potentially with modifications to accommodate changing needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Maintain community connections and familiarity</li>
                  <li>Avoid moving costs and emotional stress</li>
                  <li>Preserve stability and routine</li>
                  <li>Potentially lower costs if mortgage is paid off</li>
                  <li>Options to tap home equity if needed</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Considerations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Home may need costly accessibility modifications</li>
                  <li>Ongoing maintenance and repair responsibilities</li>
                  <li>Risk of social isolation as neighborhood changes</li>
                  <li>Home may be too large, inefficient, or expensive</li>
                  <li>Property taxes and insurance costs may rise</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-amber-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Home Modification Resources:</strong> Many communities offer grants or low-interest loans for aging-in-place modifications. Check with your Area Agency on Aging for local programs.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Home className="h-5 w-5 text-amber-700" />
              </div>
              Downsizing
            </h4>
            <p className="text-gray-700 mb-2">Moving to a smaller, more manageable, and often less expensive home.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Reduced housing costs and maintenance</li>
                  <li>Potential to free up home equity for retirement</li>
                  <li>Opportunity to relocate to more suitable area</li>
                  <li>More manageable living space</li>
                  <li>Lower utility and insurance costs</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Considerations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Significant transaction costs when selling/buying</li>
                  <li>Emotional challenge of leaving long-time home</li>
                  <li>Limited housing inventory in some markets</li>
                  <li>Potential capital gains tax implications</li>
                  <li>Challenge of disposing of possessions</li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <Link href="/education/tax-efficient-investing" className="inline-flex items-center gap-1 text-amber-600 font-medium hover:underline text-sm">
                Learn about tax implications <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Users className="h-5 w-5 text-amber-700" />
              </div>
              Age-Restricted Communities
            </h4>
            <p className="text-gray-700 mb-2">Residential communities designed specifically for older adults, typically 55+ or 62+.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Age-appropriate design:</strong> Single-level living, accessibility features</li>
                <li><strong>Amenities:</strong> Clubhouses, fitness centers, pools, social activities</li>
                <li><strong>Maintenance services:</strong> Often include lawn care and exterior maintenance</li>
                <li><strong>Community atmosphere:</strong> Neighbors in similar life stage</li>
                <li><strong>Housing options:</strong> Range from single-family homes to condos/apartments</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Built-in social network and activities</li>
                  <li>Reduced maintenance responsibilities</li>
                  <li>Age-friendly design and accessibility</li>
                  <li>Often located near medical facilities</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Considerations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>HOA fees can be substantial and rising</li>
                  <li>Community rules and restrictions</li>
                  <li>Limited age diversity</li>
                  <li>Potential for special assessments</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Briefcase className="h-5 w-5 text-amber-700" />
              </div>
              Continuing Care Retirement Communities (CCRCs)
            </h4>
            <p className="text-gray-700 mb-2">Communities offering a continuum of housing and care options from independent living to assisted living and nursing care.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Cost Structure Options:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Entry fee model:</strong> Large upfront payment ($100K-$1M+) plus monthly fees</li>
                <li><strong>Rental model:</strong> Higher monthly fees with no or lower entry fee</li>
                <li><strong>Equity model:</strong> Purchase your unit with additional monthly fees</li>
                <li><strong>Fee-for-service:</strong> Pay for higher levels of care only when needed</li>
                <li><strong>Life care:</strong> Guaranteed care for life with predictable costs</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Seamless transition between levels of care</li>
                  <li>Predictable housing and healthcare costs</li>
                  <li>Extensive amenities and social opportunities</li>
                  <li>Reduced burden on family for care decisions</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Considerations:</h5>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Significant financial commitment</li>
                  <li>Complex contracts and fee structures</li>
                  <li>Financial stability of the organization</li>
                  <li>Refund policies and estate implications</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Map className="h-5 w-5 text-amber-700" />
              </div>
              Relocation Strategies
            </h4>
            <p className="text-gray-700 mb-2">Moving to a new geographic area for lifestyle, cost, or family reasons.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Popular Approaches:</h5>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li><strong>Sunbelt/retirement destination:</strong> Moving to areas with milder climate, lower taxes</li>
                <li><strong>College town:</strong> Access to cultural activities, lifelong learning, healthcare</li>
                <li><strong>Closer to family:</strong> Relocating near adult children and grandchildren</li>
                <li><strong>Overseas retirement:</strong> Countries with lower cost of living and healthcare</li>
                <li><strong>Urban hub:</strong> Walkability, public transportation, cultural amenities</li>
              </ul>
            </div>
            <div className="mt-3 bg-amber-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Try Before You Buy:</strong> Consider renting in a new location for 6-12 months before committing to a purchase, especially if moving to an unfamiliar area or climate.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <DollarSign className="h-7 w-7 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Financial Considerations for Housing Decisions</h2>
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Calculator className="h-5 w-5 text-amber-700" />
              </div>
              Home Equity Strategies
            </h4>
            <p className="text-gray-700 mb-2">Options for utilizing home equity to support retirement needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Downsizing:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Selling your current home and purchasing a less expensive one can free up equity for retirement income.
                </p>
                <ul className="text-xs text-gray-700 list-disc pl-5 space-y-1">
                  <li>Net proceeds = Sale price - Mortgage balance - Transaction costs</li>
                  <li>Consider capital gains tax implications (exclusion: $250K single/$500K married)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Reverse Mortgage:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  A loan that allows homeowners 62+ to convert home equity into income while retaining ownership and residence.
                </p>
                <ul className="text-xs text-gray-700 list-disc pl-5 space-y-1">
                  <li>No monthly mortgage payments required</li>
                  <li>Repayment due when you sell, move out, or pass away</li>
                  <li>FHA-insured HECM is the most common type</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-amber-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Warning:</strong> Reverse mortgages have significant costs and complexities. Always seek independent financial advice before proceeding, and consider alternatives like a home equity line of credit.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm">
            <h4 className="font-semibold text-amber-800 mb-3">Cost Comparison Framework</h4>
            <p className="text-gray-700 mb-2">When evaluating housing options, consider all costs, not just the purchase price or rent.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-amber-200 rounded-lg overflow-hidden">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="p-3 text-left text-sm font-semibold text-amber-800 border-b border-amber-200">Expense Category</th>
                    <th className="p-3 text-left text-sm font-semibold text-amber-800 border-b border-amber-200">Current Home</th>
                    <th className="p-3 text-left text-sm font-semibold text-amber-800 border-b border-amber-200">Downsized Home</th>
                    <th className="p-3 text-left text-sm font-semibold text-amber-800 border-b border-amber-200">CCRC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100">
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">Mortgage/Rent</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700">$ (Monthly fee)</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">Property Tax</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700">$ (Often included)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">Insurance</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700">$ (Often included)</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">Utilities</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700">$ (Some included)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">Maintenance</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700">$ (Included)</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">HOA/Condo Fees</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700">$ (Included)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">Transportation</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm text-gray-700">$ (Some services)</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="p-3 text-sm font-semibold text-amber-800 border-r border-amber-100">Total Monthly Cost</td>
                    <td className="p-3 text-sm font-semibold text-amber-800 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm font-semibold text-amber-800 border-r border-amber-100">$</td>
                    <td className="p-3 text-sm font-semibold text-amber-800">$</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 text-sm font-semibold text-amber-800 border-r border-amber-100">Upfront Cost</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">N/A</td>
                    <td className="p-3 text-sm text-gray-700 border-r border-amber-100">Moving costs</td>
                    <td className="p-3 text-sm text-gray-700">Entry fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <Users className="h-7 w-7 text-amber-600 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900 m-0">Non-Financial Considerations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
            <h3 className="text-amber-800 font-semibold text-lg mb-3">Healthcare Access</h3>
            <p className="text-gray-700 text-sm mb-3">
              Proximity to quality healthcare becomes increasingly important as you age. Consider locations near medical facilities with specialists you may need.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Questions to ask:</strong> How far to the nearest hospital? Are specialists available? Do they accept your insurance? What about emergency response times?
            </p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
            <h3 className="text-amber-800 font-semibold text-lg mb-3">Social Connections</h3>
            <p className="text-gray-700 text-sm mb-3">
              Social isolation is a significant health risk for seniors. Housing choices should facilitate maintaining or building social networks.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Considerations:</strong> Proximity to family and friends, community engagement opportunities, access to social activities and organizations.
            </p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
            <h3 className="text-amber-800 font-semibold text-lg mb-3">Accessibility & Aging in Place</h3>
            <p className="text-gray-700 text-sm mb-3">
              The physical features of your home will impact your ability to live there safely as mobility changes.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Key features:</strong> Single-level living, no-step entries, wider doorways, accessible bathrooms, lever handles, good lighting, and low-maintenance design.
            </p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
            <h3 className="text-amber-800 font-semibold text-lg mb-3">Transportation & Walkability</h3>
            <p className="text-gray-700 text-sm mb-3">
              The ability to get around independently affects quality of life, especially when driving becomes challenging.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Look for:</strong> Public transportation options, walkable neighborhoods, proximity to essential services, senior transportation programs.
            </p>
          </div>
        </div>
      
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-lg border mt-10 mb-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-white">Housing Decision Action Plan</h3>
          <p className="mb-4 text-amber-50">
            Follow these steps to make an informed retirement housing decision:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-amber-50"><strong>Assess current and future needs:</strong> Health trajectory, desired lifestyle, family considerations</li>
            <li className="text-amber-50"><strong>Take housing inventory:</strong> Evaluate your current home's suitability, value, and any necessary modifications</li>
            <li className="text-amber-50"><strong>Calculate financial impact:</strong> Compare options using the cost framework above</li>
            <li className="text-amber-50"><strong>Research communities:</strong> Visit potential locations, talk to residents, review contracts thoroughly</li>
            <li className="text-amber-50"><strong>Consider timing:</strong> Develop a timeline that accounts for market conditions and personal readiness</li>
          </ol>
          <Link href="/education/retirement-income-planning" className="inline-flex items-center gap-1 bg-white text-amber-700 px-4 py-2 rounded-md font-medium hover:bg-amber-50 transition-colors">
            Explore Retirement Income Planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Article>
  );
}

export default HousingDecisionsInRetirement; 