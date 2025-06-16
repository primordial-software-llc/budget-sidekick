import React from 'react';
import Link from 'next/link';
import { Calculator, AlertTriangle, ArrowRight, Percent, DollarSign, Shield, TrendingUp } from 'lucide-react';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';

const ARTICLE_ID = 'mortgage-payment-calculators';

const articleData = getArticleData(ARTICLE_ID);

export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

// Generate JSON-LD structured data
const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I calculate my monthly mortgage payment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Your monthly mortgage payment is calculated using the principal amount, interest rate, and loan term. It includes principal, interest, property taxes, insurance, and any mortgage insurance premiums. Use our calculators to get a detailed breakdown of your potential payments.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What factors affect my mortgage payment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Key factors include the loan amount, interest rate, loan term, down payment, property taxes, homeowners insurance, and mortgage insurance (if applicable). Your credit score and loan type also influence these factors.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I estimate my total monthly housing costs?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Total monthly housing costs include your mortgage payment (PITI), plus utilities, maintenance, HOA fees (if applicable), and any other recurring housing expenses. Our calculators help you estimate these costs to ensure you can comfortably afford your home.'
        }
      }
    ]
  };
};

function MortgagePaymentCalculators() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <Article
        title={articleData.title}
        icon={Calculator}
        articleId={ARTICLE_ID}
        accentColor="emerald"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">Calculate Your Mortgage Payments</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Understanding your potential mortgage payments is crucial for budgeting and financial planning. 
          Use our calculators to estimate your monthly payments and total costs over the life of your loan.
        </p>

        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mb-8">
          <h3 className="flex items-center text-emerald-800 font-semibold text-lg mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Why This Matters
          </h3>
          <p className="text-gray-700">
            Your mortgage payment is likely your largest monthly expense. Understanding all components of your payment 
            helps you budget effectively and avoid financial stress. Small differences in interest rates or loan terms 
            can significantly impact your total costs.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Mortgage Payment Components</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-emerald-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-emerald-700" />
                Principal & Interest (P&I)
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Principal</h5>
                  <p className="text-sm text-gray-700">
                    The amount you borrow to purchase your home. This is paid back over the life of your loan.
                  </p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Interest</h5>
                  <p className="text-sm text-gray-700">
                    The cost of borrowing money, expressed as a percentage rate. This is the lender's profit.
                  </p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Amortization</h5>
                  <p className="text-sm text-gray-700">
                    The process of paying off your loan through regular payments. Early payments are mostly interest, while later payments are mostly principal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-blue-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-700" />
                Additional Costs (T&I)
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Property Taxes</h5>
                  <p className="text-sm text-gray-700">
                    Annual taxes paid to local governments, typically collected monthly through escrow.
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Insurance</h5>
                  <p className="text-sm text-gray-700">
                    Homeowners insurance and, if required, mortgage insurance (PMI or MIP).
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Escrow</h5>
                  <p className="text-sm text-gray-700">
                    An account managed by your lender to pay property taxes and insurance premiums.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Government Resources</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-purple-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-700" />
              Official Calculators & Tools
            </h4>
          </div>
          <div className="p-5">
            <div className="space-y-5">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Consumer Financial Protection Bureau (CFPB)</h5>
                <p className="text-sm text-gray-700 mb-3">
                  The CFPB provides official mortgage calculators and educational resources to help you make informed decisions.
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://www.consumerfinance.gov/owning-a-home/mortgage-estimate/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <span>Mortgage Estimate Calculator</span>
                  </a>
                  <a 
                    href="https://www.consumerfinance.gov/owning-a-home/closing-disclosure/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <span>Closing Disclosure Explainer</span>
                  </a>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Department of Housing and Urban Development (HUD)</h5>
                <p className="text-sm text-gray-700 mb-3">
                  HUD offers resources for homebuyers, including calculators and guides for FHA loans.
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://www.hud.gov/program_offices/housing/sfh/hcc/hcs.cfm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <span>FHA Mortgage Calculator</span>
                  </a>
                  <a 
                    href="https://www.hud.gov/program_offices/housing/sfh/hcc/hcs.cfm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <span>Homebuying Education</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mb-8">
          <h3 className="flex items-center text-emerald-800 font-semibold text-lg mb-2">
            <ArrowRight className="w-5 h-5 mr-2" />
            Next Steps
          </h3>
          <p className="text-gray-700">
            Ready to learn more about your mortgage options? Explore our guides on
            <Link href="/education/mortgage-types-explained" className="text-emerald-600 hover:text-emerald-700 mx-1">
              different mortgage types
            </Link>
            and
            <Link href="/education/mortgage-closing-costs-explained" className="text-emerald-600 hover:text-emerald-700 mx-1">
              closing costs
            </Link>
            to make an informed decision about your home purchase.
          </p>
        </div>
      </Article>
    </>
  );
}

export default MortgagePaymentCalculators; 