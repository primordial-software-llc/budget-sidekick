import React from 'react';
import Link from 'next/link';
import { Briefcase, AlertTriangle, ArrowRight, Percent, Clock, Landmark, Shield, DollarSign, Building } from 'lucide-react';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';
import ChecklistClient from './ChecklistClient';

const ARTICLE_ID = 'sba-loans-for-first-time-business-owners';

const articleData = getArticleData(ARTICLE_ID);

// Generate metadata for the page
export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

// Generate JSON-LD structured data
const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the minimum down payment for SBA loans?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'SBA 7(a) loans require a minimum of 10% down payment from the borrower, though the SBA may require up to 15% depending on the use of funds. This is significantly lower than conventional business loans which often require 20-25% or more.'
        }
      },
      {
        '@type': 'Question',
        'name': "What's the difference between SBA 7(a) and SBA 504 loans?",
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'SBA 7(a) loans are the most common and flexible, used for working capital, equipment, and real estate. SBA 504 loans are specifically for purchasing real estate or major equipment, offering lower interest rates but requiring owner-occupied property.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I need perfect credit for an SBA loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, SBA loans are designed for borrowers who might not qualify for conventional financing. While credit requirements vary by lender, many accept credit scores as low as 650, and some specialty programs accept even lower scores.'
        }
      }
    ]
  };
};

function SBALoansForFirstTimeBusinessOwners() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <Article
        title={articleData.title}
        icon={Briefcase}
        articleId={ARTICLE_ID}
        accentColor="green"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">Government-Backed Financing for New Entrepreneurs</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Just like FHA loans help first-time homebuyers access affordable financing, SBA loans provide government-backed 
          funding for entrepreneurs who might not qualify for traditional business loans. These programs offer lower down 
          payments, flexible terms, and support for new business owners.
        </p>

        <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-8">
          <h3 className="flex items-center text-green-800 font-semibold text-lg mb-2">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Why SBA Loans Matter for First-Time Business Owners
          </h3>
          <p className="text-gray-700">
            Starting a business is challenging, and traditional lenders often require extensive collateral, perfect credit, 
            and significant down payments. SBA loans bridge this gap by providing government backing that reduces lender risk, 
            making financing accessible to entrepreneurs who are just starting out.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Main SBA Loan Programs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-green-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Percent className="w-5 h-5 mr-2 text-green-700" />
                SBA 7(a) Loans
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Standard 7(a)</h5>
                  <p className="text-sm text-gray-700">
                    The most common SBA loan type, offering up to $5 million for working capital, equipment, inventory, 
                    and real estate purchases.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Up to $5M
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      10-25 year terms
                    </span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">SBA Express</h5>
                  <p className="text-sm text-gray-700">
                    Faster approval process for loans up to $500,000, with decisions typically made within 36 hours.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Quick approval
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Up to $500K
                    </span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">CAPLines</h5>
                  <p className="text-sm text-gray-700">
                    Lines of credit designed to help small businesses meet short-term and cyclical working capital needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-blue-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Building className="w-5 h-5 mr-2 text-blue-700" />
                SBA 504 Loans
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Real Estate & Equipment</h5>
                  <p className="text-sm text-gray-700">
                    Designed specifically for purchasing real estate or major equipment. Offers some of the lowest 
                    interest rates available for business financing.
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Three-Party Structure</h5>
                  <p className="text-sm text-gray-700">
                    Combines a bank loan (50%), SBA debenture (40%), and borrower down payment (10%) to finance projects.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Fixed rates
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      20-year terms
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Owner-Occupied Requirement</h5>
                  <p className="text-sm text-gray-700">
                    The business must occupy at least 51% of the property being financed, ensuring it's for operational use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Small Business Financing Options</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-purple-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-700" />
              Specialized SBA Programs
            </h4>
          </div>
          <div className="p-5">
            <div className="space-y-5">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <DollarSign className="w-6 h-6 text-purple-700" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">SBA Microloans</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Small loans up to $50,000 designed for startups and small businesses needing modest amounts of capital. 
                      Perfect for first-time entrepreneurs with limited collateral.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Up to $50K
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Lower credit requirements
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Business mentoring included
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Briefcase className="w-6 h-6 text-purple-700" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Community Advantage</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Provides financing up to $250,000 to small businesses in underserved markets, with flexible 
                      underwriting and lower down payment requirements.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Underserved communities
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Flexible terms
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Business development support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">SBA vs. Conventional Business Loans</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-green-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-700" />
                SBA Loan Advantages
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lower Down Payments</h5>
                  <p className="text-sm text-gray-700">
                    Typically require only 10-15% down payment compared to 20-25% for conventional business loans.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Competitive Interest Rates</h5>
                  <p className="text-sm text-gray-700">
                    Government backing allows lenders to offer rates typically 2-3% lower than conventional loans.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Longer Repayment Terms</h5>
                  <p className="text-sm text-gray-700">
                    Up to 25 years for real estate and 10 years for equipment, reducing monthly payment burden.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Flexible Credit Requirements</h5>
                  <p className="text-sm text-gray-700">
                    Accept borrowers with credit scores as low as 650, compared to 700+ for many conventional loans.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="bg-red-100 p-4 rounded-t-xl">
              <h4 className="font-bold text-gray-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-700" />
                Considerations
              </h4>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Longer Processing Time</h5>
                  <p className="text-sm text-gray-700">
                    SBA loans typically take 30-90 days to process, compared to 2-4 weeks for conventional loans.
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">More Documentation</h5>
                  <p className="text-sm text-gray-700">
                    Requires extensive paperwork including business plans, financial projections, and personal guarantees.
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Use Restrictions</h5>
                  <p className="text-sm text-gray-700">
                    Funds cannot be used for certain purposes like debt refinancing or speculative investments.
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Personal Guarantees</h5>
                  <p className="text-sm text-gray-700">
                    Owners with 20% or more ownership must provide personal guarantees, putting personal assets at risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Getting Started with SBA Loans</h3>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-indigo-100 p-4 rounded-t-xl">
            <h4 className="font-bold text-gray-900 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-indigo-700" />
              Application Process
            </h4>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Before You Apply:</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Develop a comprehensive business plan</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Gather 3 years of financial statements</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Check your personal and business credit scores</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Determine how much capital you need</span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Application Steps:</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Find an SBA preferred lender</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Complete the loan application package</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Submit to lender for initial review</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
                    <span className="text-gray-700">Lender forwards to SBA for guarantee approval</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h5 className="font-semibold text-gray-900 mb-2">Eligibility Requirements:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h6 className="font-medium text-gray-900 mb-1">Business Requirements:</h6>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>Operate for profit</li>
                    <li>Qualify as small under SBA size standards</li>
                    <li>Be located in the United States</li>
                    <li>Use funds for legitimate business purpose</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium text-gray-900 mb-1">Owner Requirements:</h6>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>Have invested own time and money</li>
                    <li>Provide personal guarantee if 20%+ owner</li>
                    <li>Demonstrate good character and credit history</li>
                    <li>Show management capability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">SBA Loan Readiness Checklist</h3>
        
        <ChecklistClient />

        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Ready to Explore SBA Financing?</h3>
          <p className="text-gray-700 text-center mb-4">
            SBA loans can provide the government-backed financing that makes entrepreneurship accessible, even for first-time business owners.
          </p>
          <div className="text-center space-y-3">
            <div>
              <a 
                href="https://www.sba.gov/funding-programs/loans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition mr-4"
              >
                Visit SBA.gov for Official Information
              </a>
            </div>
            <div>
              <Link href="/education/financial-planning-for-entrepreneurs" className="text-green-600 hover:text-green-800 font-medium">
                Learn more about financial planning for entrepreneurs →
              </Link>
            </div>
          </div>
        </div>
      </Article>
    </>
  );
}

export default SBALoansForFirstTimeBusinessOwners; 