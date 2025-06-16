import React from 'react';
import Link from 'next/link';
import { Home, Leaf, CheckCircle, DollarSign, MapPin, Info, ExternalLink } from 'lucide-react';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';

const ARTICLE_ID = 'usda-loan-explained';
const articleData = getArticleData(ARTICLE_ID);
export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

const generateStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is a USDA loan?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A USDA loan is a government-backed mortgage for eligible rural and some suburban homebuyers, offering zero down payment and low mortgage insurance.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Who qualifies for a USDA loan?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Eligibility is based on location, income limits, and other factors. Use the USDA eligibility map and check income requirements to see if you qualify.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How do I apply for a USDA loan?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You apply through approved lenders. The process is similar to other mortgages, but you must meet USDA guidelines.'
      }
    }
  ]
});

export default function USDALoanExplained() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }} />
      <Article
        title={articleData.title}
        icon={Leaf}
        articleId={ARTICLE_ID}
        accentColor="green"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">USDA Loans: The Zero-Down Hidden Gem</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          USDA loans make homeownership possible for millions of Americans in rural and some suburban areas—with no down payment, low fees, and competitive rates. Learn how this program works, who qualifies, and how to apply.
        </p>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-8">
          <h3 className="flex items-center text-green-800 font-semibold text-lg mb-2">
            <CheckCircle className="w-5 h-5 mr-2" />
            Why USDA Loans Are So Powerful
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><span className="font-semibold">Zero down payment:</span> Buy a home with no money down</li>
            <li><span className="font-semibold">Low mortgage insurance:</span> Lower fees than FHA or conventional low-down loans</li>
            <li><span className="font-semibold">Competitive rates:</span> Government backing means great rates</li>
            <li><span className="font-semibold">Flexible credit:</span> More forgiving than many conventional loans</li>
            <li><span className="font-semibold">Not just for farms:</span> Many eligible areas are suburbs or small towns</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
          <div className="bg-green-100 p-4 rounded-t-xl flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-700" />
            <span className="font-bold text-gray-900">Check If You Qualify: USDA Eligibility Map</span>
          </div>
          <div className="p-5">
            <p className="mb-2 text-gray-700">Many people are surprised to learn their area qualifies! Use the official map to check property eligibility:</p>
            <a href="https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-700 hover:text-green-900 underline font-semibold">
              <ExternalLink className="w-4 h-4 mr-1" /> USDA Property Eligibility Map ↗
            </a>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-6">How USDA Loans Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-green-700 mb-2 flex items-center"><DollarSign className="w-5 h-5 mr-2" /> No Down Payment</h4>
            <p className="text-gray-700 mb-2">USDA loans allow you to finance 100% of the home’s price. This is a huge advantage for buyers who haven’t saved a large down payment.</p>
            <a href="https://www.rd.usda.gov/programs-services/single-family-housing-guaranteed-loan-program" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">USDA: Single Family Housing Loan Program ↗</a>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-green-700 mb-2 flex items-center"><Info className="w-5 h-5 mr-2" /> Who Is Eligible?</h4>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Property must be in an eligible area (<a href="https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">check here</a>)</li>
              <li>Household income must be below the local limit (<a href="https://www.rd.usda.gov/sites/default/files/RD-DirectLimitMap.pdf" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">see income limits</a>)</li>
              <li>Must use the home as your primary residence</li>
              <li>U.S. citizenship or eligible non-citizen status</li>
              <li>Stable, reliable income and reasonable credit history</li>
            </ul>
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-usda-loan-en-2073/" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">CFPB: What is a USDA loan? ↗</a>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-6">How to Apply</h3>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-2">
            <li>Check property and income eligibility using the links above</li>
            <li>Find a USDA-approved lender (<a href="https://www.rd.usda.gov/files/SFHGLDApprovedLenders.pdf" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">see list</a>)</li>
            <li>Gather documents: pay stubs, tax returns, bank statements, etc.</li>
            <li>Apply through the lender and complete the USDA loan process</li>
          </ol>
          <a href="https://www.rd.usda.gov/programs-services/single-family-housing-guaranteed-loan-program/how-to-apply" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">USDA: How to Apply ↗</a>
        </div>
        <h3 className="text-2xl font-bold text-center mb-6">Common Myths & FAQs</h3>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <h4 className="font-bold text-green-700 mb-2 flex items-center"><Info className="w-5 h-5 mr-2" /> Myths</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>USDA loans are only for farmers (not true—most buyers are not farmers!)</li>
            <li>Only remote rural areas qualify (many suburbs and small towns are eligible)</li>
            <li>Income limits are very low (they’re often higher than you think)</li>
            <li>It’s hard to find a USDA lender (there are thousands nationwide)</li>
          </ul>
          <h4 className="font-bold text-green-700 mb-2 flex items-center"><Info className="w-5 h-5 mr-2" /> FAQs</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Can I use a USDA loan for a manufactured home? <span className="text-gray-500">Yes, if it meets program requirements.</span></li>
            <li>Can I buy a fixer-upper? <span className="text-gray-500">Some repairs are allowed, but the home must be safe and livable.</span></li>
            <li>Can I own another home? <span className="text-gray-500">Generally, no—you must use the USDA home as your primary residence.</span></li>
            <li>How long does it take to close? <span className="text-gray-500">Usually 30-45 days, similar to other loans.</span></li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-10">
          <h3 className="flex items-center text-green-800 font-semibold text-lg mb-2">
            <CheckCircle className="w-5 h-5 mr-2" />
            Next Steps
          </h3>
          <p className="text-gray-700">
            Ready to see if you qualify? Start with the <a href="https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">USDA eligibility map</a>, or explore more home buying guides like our <Link href="/education/mortgage-type-comparison-tool" className="text-green-700 underline hover:text-green-900">Mortgage Type Comparison Tool</Link>.
          </p>
        </div>
      </Article>
    </>
  );
}