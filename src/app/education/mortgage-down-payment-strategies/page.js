import React from 'react';
import Link from 'next/link';
import { PiggyBank, Home, Percent, Calculator, ArrowRight, Shield } from 'lucide-react';
import Article from '@/components/Article';

// Generate metadata for the page
export const metadata = {
  title: "Mortgage Down Payment Strategies: Save Faster & Buy Sooner (2025 Guide) - Budget Sidekick",
  description: "Learn minimum down payment requirements by loan type, discover down payment assistance programs, and master strategies to save for your home purchase faster.",
  openGraph: {
    title: "Mortgage Down Payment Strategies: Save Faster & Buy Sooner (2025 Guide)",
    description: "Learn minimum down payment requirements by loan type, discover down payment assistance programs, and master strategies to save for your home purchase faster.",
    type: "article",
    url: "https://www.budgetsidekick.com/education/mortgage-down-payment-strategies"
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
        'name': 'What is the minimum down payment for a mortgage?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Minimum down payments vary by loan type: Conventional loans require 3-5%, FHA loans need 3.5%, VA loans allow 0%, and USDA loans also allow 0%. However, putting down less than 20% typically requires mortgage insurance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are there programs to help with down payments?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, there are numerous down payment assistance programs including FHA loans, VA loans, USDA loans, state and local programs, and grants from non-profit organizations. Many programs offer grants or low-interest loans specifically for down payments.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I save for a down payment faster?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Effective strategies include creating a dedicated savings account, automating monthly transfers, reducing expenses, using windfalls (tax refunds, bonuses), and considering side hustles. Setting up a high-yield savings account can also help your down payment grow faster.'
        }
      }
    ]
  };
};

function MortgageDownPaymentStrategies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <Article
        title="Mortgage Down Payment Strategies"
        icon={PiggyBank}
        articleId="mortgage-down-payment-strategies"
        accentColor="emerald"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">Smart Strategies for Your Home Purchase</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Your down payment is often the biggest hurdle to homeownership. Understanding the requirements 
          and available strategies can help you buy your home sooner than you might think.
        </p>

        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mb-8">
          <h3 className="flex items-center text-emerald-800 font-semibold text-lg mb-2">
            <Shield className="w-5 h-5 mr-2" />
            Why This Matters
          </h3>
          <p className="text-gray-700">
            A larger down payment can mean lower monthly payments, better interest rates, and no mortgage insurance. 
            But don't let the traditional 20% down payment requirement stop you from buying a home - there are many 
            programs and strategies to help you get started with less.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Minimum Down Payment Requirements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-emerald-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Home className="w-5 h-5 mr-2 text-emerald-700" />
                Conventional Loans
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Standard Requirements</h5>
                  <p className="text-sm text-gray-700">
                    Minimum 3-5% down payment required, with 20% needed to avoid PMI. Higher credit scores may qualify for lower down payments.
                  </p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">First-Time Homebuyer Programs</h5>
                  <p className="text-sm text-gray-700">
                    Special programs may allow as little as 3% down with competitive interest rates and reduced PMI requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-blue-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-700" />
                Government-Backed Loans
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">FHA Loans</h5>
                  <p className="text-sm text-gray-700">
                    Minimum 3.5% down payment with credit scores as low as 580. Higher down payments may reduce MIP costs.
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">VA & USDA Loans</h5>
                  <p className="text-sm text-gray-700">
                    Zero down payment options for eligible veterans and rural homebuyers. No mortgage insurance required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Down Payment Assistance Programs</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-purple-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-700" />
              Available Programs
            </h4>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Government Programs</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">FHA First-Time Homebuyer Programs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">VA Home Loan Program</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">USDA Rural Development Loans</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">State and Local Housing Programs</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Non-Profit Programs</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Neighborhood Assistance Programs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Community Development Programs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Employer-Assisted Housing Programs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-gray-700">Down Payment Grant Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Saving Strategies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-amber-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <PiggyBank className="w-5 h-5 mr-2 text-amber-700" />
                Saving Methods
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Automated Savings</h5>
                  <p className="text-sm text-gray-700">
                    Set up automatic transfers to a dedicated down payment savings account. Consider using a high-yield savings account to earn more interest.
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Budget Adjustments</h5>
                  <p className="text-sm text-gray-700">
                    Review your budget for areas to cut back. Consider reducing discretionary spending and redirecting those funds to your down payment savings.
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Windfall Strategy</h5>
                  <p className="text-sm text-gray-700">
                    Direct unexpected income (tax refunds, bonuses, gifts) to your down payment fund. Even small amounts can add up quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-rose-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-rose-700" />
                Planning Tools
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Down Payment Calculator</h5>
                  <p className="text-sm text-gray-700">
                    Use our calculator to determine how much you need to save and how long it will take based on your target home price and savings rate.
                  </p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Savings Timeline</h5>
                  <p className="text-sm text-gray-700">
                    Create a realistic timeline for reaching your down payment goal, considering your current savings and monthly contributions.
                  </p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cost Comparison</h5>
                  <p className="text-sm text-gray-700">
                    Compare the total costs of different down payment amounts, including mortgage insurance and interest payments.
                  </p>
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
            Ready to start your home buying journey? Check out our 
            <Link href="/education/mortgage-types-explained" className="text-emerald-600 hover:text-emerald-700 mx-1">
              mortgage types guide
            </Link>
            to understand your loan options, or explore our
            <Link href="/education/mortgage-closing-costs-explained" className="text-emerald-600 hover:text-emerald-700 mx-1">
              closing costs guide
            </Link>
            to prepare for all expenses involved in buying a home.
          </p>
        </div>
      </Article>
    </>
  );
}

export default MortgageDownPaymentStrategies; 