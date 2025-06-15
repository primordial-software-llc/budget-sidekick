import React from 'react';
import Link from 'next/link';
import { Clock, AlertTriangle, Calculator, ArrowRight, TrendingUp, Shield } from 'lucide-react';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';

const ARTICLE_ID = 'mortgage-term-selection';

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
        'name': 'Is a 15-year mortgage better than a 30-year mortgage?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While 15-year mortgages offer lower interest rates, they require significantly higher monthly payments. For most borrowers, a 30-year mortgage provides better flexibility and financial security, allowing you to pay extra when possible while maintaining lower required payments.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much more do you pay with a 30-year mortgage?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The total interest paid on a 30-year mortgage is higher than a 15-year mortgage, but the monthly payments are significantly lower. For example, on a $300,000 loan at 6.5%, a 15-year mortgage would cost about $2,613 monthly, while a 30-year mortgage would cost about $1,896 monthly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'When does a shorter mortgage term make sense?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Shorter mortgage terms typically make sense when refinancing an existing loan, when you have substantial savings, or when you\'re close to retirement and want to eliminate mortgage payments. For most first-time homebuyers, a 30-year mortgage offers better flexibility.'
        }
      }
    ]
  };
};

function MortgageTermSelection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <Article
        title={articleData.title}
        icon={Clock}
        articleId={ARTICLE_ID}
        accentColor="blue"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">Making the Right Choice for Your Financial Future</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          While shorter mortgage terms like 15-year loans might seem attractive due to lower interest rates, 
          they often come with significant trade-offs. Understanding these trade-offs is crucial for making 
          an informed decision about your mortgage term.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
          <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Key Takeaway
          </h3>
          <p className="text-gray-700">
            A 30-year mortgage gives you the flexibility to pay extra when you can while maintaining lower required payments. 
            This approach often provides better financial security than committing to higher required payments with a shorter term.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Real Cost Comparison</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-blue-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-blue-700" />
              $300,000 Loan at 6.5% Interest
            </h4>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">15-Year Mortgage</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly Payment</span>
                    <span className="font-medium text-gray-900">$2,613</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Interest</span>
                    <span className="font-medium text-gray-900">$170,340</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Cost</span>
                    <span className="font-medium text-gray-900">$470,340</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">30-Year Mortgage</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly Payment</span>
                    <span className="font-medium text-gray-900">$1,896</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Interest</span>
                    <span className="font-medium text-gray-900">$382,560</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Cost</span>
                    <span className="font-medium text-gray-900">$682,560</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              *These calculations assume no early payments. With a 30-year mortgage, you can pay extra when possible to reduce total interest while maintaining the flexibility of lower required payments.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Why 30-Year Mortgages Often Make More Sense</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-green-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-700" />
                Better Financial Security
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Lower Required Payments</h5>
                    <p className="text-sm text-gray-700">
                      The significantly lower monthly payment of a 30-year mortgage provides better protection against financial emergencies and job loss.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">More Investment Flexibility</h5>
                    <p className="text-sm text-gray-700">
                      Lower required payments allow you to invest in retirement accounts, emergency funds, or other opportunities that might offer better returns than mortgage interest savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-purple-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-700" />
                Early Payoff Options
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Pay Extra When Possible</h5>
                    <p className="text-sm text-gray-700">
                      With a 30-year mortgage, you can make additional payments when your finances allow, reducing total interest without the risk of higher required payments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Refinance Later</h5>
                    <p className="text-sm text-gray-700">
                      If your financial situation improves, you can always refinance to a shorter term later, often with better rates than when you first bought the home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">When Shorter Terms Make Sense</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-amber-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-amber-700" />
              Special Circumstances
            </h4>
          </div>
          <div className="p-5">
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Refinancing Existing Loans</h5>
                <p className="text-sm text-gray-700">
                  If you're refinancing an existing mortgage and can comfortably afford higher payments, a shorter term might make sense to reduce total interest costs.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Substantial Savings</h5>
                <p className="text-sm text-gray-700">
                  If you have significant savings and want to minimize interest costs, a shorter term could be appropriate, but only if you're confident in your financial stability.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Near Retirement</h5>
                <p className="text-sm text-gray-700">
                  If you're close to retirement and want to eliminate mortgage payments before you stop working, a shorter term might be worth considering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
          <h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Important Consideration
          </h3>
          <p className="text-gray-700">
            Before choosing a shorter mortgage term, ensure you have a substantial emergency fund and stable income. 
            The higher required payments of shorter terms can become a significant burden if your financial situation changes.
          </p>
        </div>

        <div className="text-center">
          <Link 
            href="/education/mortgage-types-explained"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to Mortgage Types
          </Link>
        </div>
      </Article>
    </>
  );
}

export default MortgageTermSelection; 