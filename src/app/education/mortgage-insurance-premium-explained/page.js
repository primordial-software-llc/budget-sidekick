import React from 'react';
import { Shield, AlertTriangle, DollarSign, Calculator, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import Article from '@/components/Article';

// Generate metadata for the page
export const metadata = {
  title: "Mortgage Insurance Premium (MIP) Explained: The Safety Net Behind FHA Loans",
  description: "Learn how MIP makes low down payment FHA loans possible while protecting the financial system. Understand the costs, requirements, and why it's different from subprime lending.",
  openGraph: {
    title: "Mortgage Insurance Premium (MIP) Explained: The Safety Net Behind FHA Loans",
    description: "Learn how MIP makes low down payment FHA loans possible while protecting the financial system. Understand the costs, requirements, and why it's different from subprime lending.",
    type: "article",
    url: "https://www.budgetsidekick.com/education/mortgage-insurance-premium-explained"
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
        'name': 'What is Mortgage Insurance Premium (MIP)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'MIP is a type of insurance required on FHA loans that protects lenders against losses if a borrower defaults. It consists of an upfront fee and annual premiums, making low down payment loans possible while maintaining financial system stability.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much does MIP cost?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'MIP includes an upfront fee of 1.75% of the loan amount and annual premiums ranging from 0.45% to 1.05% of the loan amount, depending on the loan term and down payment size.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can MIP be removed from an FHA loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Unlike conventional PMI, FHA MIP typically cannot be removed, even after reaching 20% equity. The only way to eliminate MIP is to refinance to a conventional loan once you have sufficient equity.'
        }
      }
    ]
  };
};

function MortgageInsurancePremiumExplained() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <Article
        title="Mortgage Insurance Premium (MIP) Explained"
        icon={Shield}
        articleId="mortgage-insurance-premium-explained"
        accentColor="teal"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">The Safety Net Behind Low Down Payment Loans</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Mortgage Insurance Premium (MIP) is a crucial component of FHA loans that makes homeownership 
          accessible to more people while protecting the financial system. Understanding how MIP works 
          helps borrowers make informed decisions about their mortgage options.
        </p>

        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 mb-8">
          <h3 className="flex items-center text-teal-800 font-semibold text-lg mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Why MIP Matters
          </h3>
          <p className="text-gray-700">
            MIP is what makes FHA loans possible with down payments as low as 3.5%. It's a carefully designed 
            system that balances accessibility with financial stability, unlike the risky subprime lending 
            practices that contributed to the 2008 financial crisis.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">How MIP Works</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-teal-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-teal-700" />
                The Two Components of MIP
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Upfront MIP</h5>
                  <p className="text-sm text-gray-700">
                    A one-time fee of 1.75% of the loan amount, typically added to your loan balance. 
                    This helps build the FHA's insurance fund immediately.
                  </p>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Annual MIP</h5>
                  <p className="text-sm text-gray-700">
                    Monthly payments ranging from 0.45% to 1.05% of the loan amount, depending on your 
                    loan term and down payment size. This provides ongoing protection for the FHA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-teal-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-teal-700" />
                Real Cost Example
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">$250,000 FHA Loan</h5>
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
                        <span className="text-gray-600">Total MIP Cost (30 years)</span>
                        <span className="font-medium text-gray-900">$68,125</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Why MIP is Different from Subprime Lending</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-teal-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-teal-700" />
              A Sustainable System
            </h4>
          </div>
          <div className="p-5">
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Built-in Protection</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Unlike subprime lending, which relied on ever-increasing home values and quick refinancing, 
                  MIP provides a sustainable safety net through:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">Mandatory insurance premiums that build a reserve fund</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">Strict underwriting standards despite low down payments</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">Government backing that ensures lender protection</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Long-term Sustainability</h5>
                <p className="text-sm text-gray-700 mb-2">
                  MIP creates a sustainable system by:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">Building a reserve fund through premiums</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">Maintaining strict loan standards</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TrendingDown className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">Reducing default risk through proper underwriting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Making Informed Decisions</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-teal-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-teal-700" />
              Is an FHA Loan Right for You?
            </h4>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Consider FHA If:</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">You have a lower credit score (580+)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">You can only afford a small down payment</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">You plan to stay in the home long-term</span>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Consider Conventional If:</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">You have good credit (680+)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">You can make a larger down payment</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-teal-600" />
                    <span className="text-gray-700">You want to avoid permanent MIP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Key Takeaways</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>MIP makes low down payment FHA loans possible while protecting the financial system</li>
            <li>The cost includes both upfront and annual premiums</li>
            <li>Unlike subprime lending, MIP is a sustainable system with proper safeguards</li>
            <li>Consider your long-term plans and financial situation when choosing between FHA and conventional loans</li>
          </ul>
        </div>
      </Article>
    </>
  );
}

export default MortgageInsurancePremiumExplained; 