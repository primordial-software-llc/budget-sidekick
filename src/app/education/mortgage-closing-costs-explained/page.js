import React from 'react';
import Link from 'next/link';
import { Calculator, Receipt, DollarSign, ArrowRight, Shield, Percent } from 'lucide-react';
import Article from '@/components/Article';

// Generate metadata for the page
export const metadata = {
  title: "Mortgage Closing Costs Explained: Complete 2025 Guide - Budget Sidekick",
  description: "Get a detailed breakdown of all mortgage closing costs, learn which fees are negotiable, and discover strategies to reduce your closing costs. Includes a comprehensive closing cost calculator.",
  openGraph: {
    title: "Mortgage Closing Costs Explained: Complete 2025 Guide",
    description: "Get a detailed breakdown of all mortgage closing costs, learn which fees are negotiable, and discover strategies to reduce your closing costs. Includes a comprehensive closing cost calculator.",
    type: "article",
    url: "https://www.budgetsidekick.com/education/mortgage-closing-costs-explained"
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
        'name': 'What are typical mortgage closing costs?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Typical closing costs range from 2-5% of the loan amount and include loan origination fees, appraisal fees, title insurance, escrow deposits, and various government recording fees. The exact amount varies by location and loan type.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which closing costs are negotiable?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Many closing costs are negotiable, including loan origination fees, application fees, and some third-party fees. Title insurance and escrow fees may also be negotiable. However, government fees and taxes are typically non-negotiable.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I reduce my closing costs?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can reduce closing costs by shopping around for lenders, negotiating fees, asking for lender credits, timing your closing for the end of the month, and looking for first-time homebuyer programs that offer closing cost assistance.'
        }
      }
    ]
  };
};

function MortgageClosingCostsExplained() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <Article
        title="Mortgage Closing Costs Explained"
        icon={Calculator}
        articleId="mortgage-closing-costs-explained"
        accentColor="indigo"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">Understanding All Costs of Buying a Home</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Closing costs can add thousands to your home purchase. Understanding what these costs are, 
          which ones are negotiable, and how to reduce them can save you significant money.
        </p>

        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-8">
          <h3 className="flex items-center text-indigo-800 font-semibold text-lg mb-2">
            <Shield className="w-5 h-5 mr-2" />
            Why This Matters
          </h3>
          <p className="text-gray-700">
            Closing costs typically range from 2-5% of your loan amount. On a $300,000 home, that's $6,000-$15,000 
            in additional costs. Understanding these fees helps you budget accurately and potentially save thousands.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Common Closing Costs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-indigo-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Receipt className="w-5 h-5 mr-2 text-indigo-700" />
                Loan-Related Fees
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Origination Fees</h5>
                  <p className="text-sm text-gray-700">
                    Typically 0.5-1% of the loan amount. Covers the lender's costs for processing your loan.
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Application Fees</h5>
                  <p className="text-sm text-gray-700">
                    Usually $300-$500. Covers initial processing and credit checks.
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Points</h5>
                  <p className="text-sm text-gray-700">
                    Optional fees to lower your interest rate. Each point costs 1% of the loan amount.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-blue-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-blue-700" />
                Third-Party Fees
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Appraisal</h5>
                  <p className="text-sm text-gray-700">
                    $300-$500. Required to determine the home's value.
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Title Insurance</h5>
                  <p className="text-sm text-gray-700">
                    $1,000-$2,000. Protects against title defects and claims.
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Escrow Fees</h5>
                  <p className="text-sm text-gray-700">
                    $500-$1,000. Covers the cost of the escrow company's services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Negotiable vs. Non-Negotiable Fees</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-purple-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Percent className="w-5 h-5 mr-2 text-purple-700" />
              Fee Categories
            </h4>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Negotiable Fees</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Loan origination fees</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Application fees</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Title insurance (shop around)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Escrow fees</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Non-Negotiable Fees</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Government recording fees</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Property taxes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Appraisal fees</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Credit report fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Cost Reduction Strategies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-amber-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-amber-700" />
                Shopping Strategies
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Compare Lenders</h5>
                  <p className="text-sm text-gray-700">
                    Get quotes from multiple lenders and compare their closing cost estimates. Look for lenders offering credits or reduced fees.
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Shop Title Insurance</h5>
                  <p className="text-sm text-gray-700">
                    Title insurance rates can vary significantly. Get quotes from multiple providers to find the best rate.
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Ask for Credits</h5>
                  <p className="text-sm text-gray-700">
                    Lenders may offer credits to cover some closing costs, especially if you're a strong borrower or if they're trying to win your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-rose-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-rose-700" />
                Timing Strategies
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">End-of-Month Closing</h5>
                  <p className="text-sm text-gray-700">
                    Closing at the end of the month can reduce the amount of prepaid interest you need to pay at closing.
                  </p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">First-Time Buyer Programs</h5>
                  <p className="text-sm text-gray-700">
                    Look for programs that offer closing cost assistance for first-time homebuyers in your area.
                  </p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Seller Concessions</h5>
                  <p className="text-sm text-gray-700">
                    In some markets, you can negotiate for the seller to pay a portion of your closing costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-8">
          <h3 className="flex items-center text-indigo-800 font-semibold text-lg mb-2">
            <ArrowRight className="w-5 h-5 mr-2" />
            Next Steps
          </h3>
          <p className="text-gray-700">
            Ready to calculate your potential closing costs? Use our
            <Link href="/education/mortgage-payment-calculators" className="text-indigo-600 hover:text-indigo-700 mx-1">
              mortgage calculators
            </Link>
            to estimate your total costs, or learn more about
            <Link href="/education/mortgage-types-explained" className="text-indigo-600 hover:text-indigo-700 mx-1">
              different mortgage types
            </Link>
            to find the best loan for your situation.
          </p>
        </div>
      </Article>
    </>
  );
}

export default MortgageClosingCostsExplained; 