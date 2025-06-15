import React from 'react';
import Link from 'next/link';
import { Home, AlertTriangle, ArrowRight, Percent, Clock, Landmark, Shield } from 'lucide-react';
import Article from '@/components/Article';

// Generate metadata for the page
export const metadata = {
  title: "7 Mortgage Types That Could Save You $50K+ (2025 Guide) - Budget Sidekick",
  description: "Compare all 7 mortgage types side-by-side. See which saves you the most money based on your credit score, down payment, and timeline. Free mortgage calculator included.",
  openGraph: {
    title: "7 Mortgage Types That Could Save You $50K+ (2025 Guide)",
    description: "Compare all 7 mortgage types side-by-side. See which saves you the most money based on your credit score and down payment.",
    type: "article",
    url: "https://www.budgetsidekick.com/education/mortgage-types-explained"
  }
};

// Generate JSON-LD structured data
const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Which mortgage type has the lowest interest rate?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Fixed-rate mortgages typically offer the most predictable rates, while ARMs often start with lower initial rates. Government-backed loans like VA and USDA can offer competitive rates for eligible borrowers.'
        }
      },
      {
        '@type': 'Question',
        'name': "What's the difference between FHA and conventional loans?",
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'FHA loans require as little as 3.5% down and accept lower credit scores (580+), while conventional loans typically require higher credit scores but may offer better rates for well-qualified borrowers.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Should I choose a 15-year or 30-year mortgage?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While shorter terms like 15-year mortgages offer lower interest rates, they require significantly higher monthly payments. Most borrowers benefit from the flexibility of a 30-year mortgage, which allows for lower required payments while still enabling early payoff. Learn more about choosing the right mortgage term in our detailed guide.'
        }
      }
    ]
  };
};

function MortgageTypesExplained() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <Article
        title="Mortgage Types Explained"
        icon={Home}
        articleId="mortgage-types-explained"
        accentColor="blue"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">Navigating Your Home Financing Options</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Choosing the right mortgage can save you thousands of dollars over the life of your loan. 
          Understanding the different types of mortgages available will help you make the best decision 
          for your financial situation and homeownership goals.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
          <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Why This Matters
          </h3>
          <p className="text-gray-700">
            A mortgage is likely the largest debt you'll ever take on. The type you choose affects your monthly payment, 
            total interest paid, and how long you'll be making payments. Small differences in terms can have big financial impacts.
            <Link href="/education/mortgage-term-selection" className="text-blue-600 hover:text-blue-800 ml-1">
              Learn more about choosing the right mortgage term →
            </Link>
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Conventional Mortgage Types</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-blue-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Percent className="w-5 h-5 mr-2 text-blue-700" />
                Fixed-Rate Mortgages
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">30-Year Fixed</h5>
                  <p className="text-sm text-gray-700">
                    The most common mortgage type with unchanging interest rates and monthly payments for the entire 30-year term.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Lower monthly payments
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Higher total interest
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">15-Year Fixed</h5>
                  <p className="text-sm text-gray-700">
                    Higher monthly payments but with substantial interest savings over the life of the loan and faster equity building.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Higher monthly payments
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Lower total interest
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">20-Year Fixed</h5>
                  <p className="text-sm text-gray-700">
                    A middle ground between 15 and 30-year terms, offering a balance of monthly payment size and interest paid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-purple-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-700" />
                Adjustable-Rate Mortgages (ARMs)
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">5/1 ARM</h5>
                  <p className="text-sm text-gray-700">
                    Fixed rate for the first 5 years, then adjusts annually based on market rates. 
                    Often starts with lower rates than fixed-rate mortgages.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">7/1 and 10/1 ARMs</h5>
                  <p className="text-sm text-gray-700">
                    Similar to 5/1 ARMs but with longer initial fixed periods of 7 or 10 years before adjustments begin.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">ARM Caps</h5>
                  <p className="text-sm text-gray-700">
                    Limits on how much rates can increase in a single adjustment, annually, and over the life of the loan.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Initial cap (first adjustment)
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Periodic cap (each adjustment)
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Lifetime cap (total increase)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Government-Backed Loans</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-teal-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-700" />
              Special Program Mortgages
            </h4>
          </div>
          <div className="p-5">
            <div className="space-y-5">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Landmark className="w-6 h-6 text-teal-700" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">FHA Loans</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Backed by the Federal Housing Administration, these loans are designed for borrowers with lower credit scores 
                      or smaller down payments (as low as 3.5%).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        Lower down payment
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        Mortgage insurance required
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        More flexible credit requirements
                      </span>
                    </div>
                    <div className="mt-3 bg-teal-50 p-3 rounded-lg border border-teal-100">
                      <h6 className="font-semibold text-gray-900 mb-1">Understanding MIP (Mortgage Insurance Premium)</h6>
                      <p className="text-sm text-gray-700">
                        FHA loans require two types of mortgage insurance:
                      </p>
                      <ul className="text-sm text-gray-700 list-disc list-inside mt-1 space-y-1">
                        <li>Upfront MIP: A one-time fee of 1.75% of the loan amount, typically added to your loan balance</li>
                        <li>Annual MIP: Monthly payments of 0.45% to 1.05% of the loan amount, depending on your loan term and down payment</li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-1">
                        Unlike conventional loans, FHA MIP typically cannot be removed, even after reaching 20% equity, unless you refinance to a conventional loan.
                        <Link href="/education/mortgage-insurance-premium-explained" className="text-teal-600 hover:text-teal-700 ml-1">
                          Learn more about MIP →
                        </Link>
                      </p>
                      <div className="mt-3 bg-white p-3 rounded-lg border border-teal-200">
                        <h6 className="font-semibold text-gray-900 mb-2">Real Cost Example: $250,000 FHA Loan</h6>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Upfront MIP (1.75%)</span>
                            <span className="font-medium text-gray-900">$4,375</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Annual MIP (0.85%)</span>
                            <span className="font-medium text-gray-900">$2,125/year</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Monthly MIP Payment</span>
                            <span className="font-medium text-gray-900">$177/month</span>
                          </div>
                          <div className="border-t border-gray-200 pt-2 mt-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Total MIP Cost (10 years)</span>
                              <span className="font-medium text-gray-900">$25,375</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              *This includes upfront MIP plus 10 years of monthly payments. Total cost over 30 years would be approximately $68,125.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Shield className="w-6 h-6 text-teal-700" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">VA Loans</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Available to eligible veterans, active duty service members, and some military spouses. 
                      Guaranteed by the Department of Veterans Affairs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        No down payment required
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        No mortgage insurance
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        Competitive interest rates
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Home className="w-6 h-6 text-teal-700" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">USDA Loans</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Designed for rural and some suburban homebuyers with moderate to low incomes. 
                      Guaranteed by the U.S. Department of Agriculture.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        No down payment required
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        Lower-than-average fees
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        Geographic and income restrictions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Special Mortgage Types</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-amber-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Home className="w-5 h-5 mr-2 text-amber-700" />
                Alternative Options
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Jumbo Loans</h5>
                  <p className="text-sm text-gray-700">
                    Loans that exceed the conforming loan limits set by Fannie Mae and Freddie Mac. 
                    Generally require larger down payments and excellent credit.
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Interest-Only Mortgages</h5>
                  <p className="text-sm text-gray-700">
                    Allow payment of only interest for a specified period, followed by larger payments covering principal and interest.
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Balloon Mortgages</h5>
                  <p className="text-sm text-gray-700">
                    Feature smaller monthly payments but require a large lump-sum payment at the end of a short loan term.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-rose-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Home className="w-5 h-5 mr-2 text-rose-700" />
                Refinancing Options
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Rate-and-Term Refinance</h5>
                  <p className="text-sm text-gray-700">
                    Replaces your existing mortgage with a new one that has a different interest rate, term, or both.
                  </p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cash-Out Refinance</h5>
                  <p className="text-sm text-gray-700">
                    Allows you to borrow more than you currently owe and receive the difference in cash.
                  </p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Streamline Refinance</h5>
                  <p className="text-sm text-gray-700">
                    Simplified refinancing process for existing FHA or VA loans with reduced paperwork and faster processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Choosing the Right Mortgage</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-indigo-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-indigo-700" />
              Decision Factors
            </h4>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Consider a Fixed-Rate Mortgage If:</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">
                      You plan to stay in your home for many years
                      <Link href="/education/mortgage-term-selection" className="text-indigo-600 hover:text-indigo-700 ml-1">
                        Learn about mortgage terms →
                      </Link>
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">You prefer stable, predictable payments</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Current interest rates are low</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">You have a steady, reliable income</span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Consider an ARM If:</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">You plan to move or refinance within a few years</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Current interest rates are high and expected to fall</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">You want lower initial payments to qualify for a larger loan</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">You expect your income to increase over time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Article>
    </>
  );
}

export default MortgageTypesExplained; 