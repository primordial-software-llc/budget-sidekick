import React from 'react';
import Link from 'next/link';
import { Percent, ArrowRight, HelpCircle } from 'lucide-react';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';
import QuizClient from './QuizClient';

const ARTICLE_ID = 'mortgage-type-comparison-tool';
const articleData = getArticleData(ARTICLE_ID);
export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

const mortgageTypes = [
  {
    name: '30-Year Fixed',
    pros: ['Predictable payments', 'Lower monthly payment'],
    cons: ['Higher total interest', 'Slower equity build'],
    bestFor: 'Long-term buyers wanting stability',
  },
  {
    name: '15-Year Fixed',
    pros: ['Lower total interest', 'Faster equity build'],
    cons: ['Higher monthly payment'],
    bestFor: 'Buyers who can afford higher payments and want to save on interest',
  },
  {
    name: '5/1 ARM',
    pros: ['Lower initial rate', 'Potential savings if moving soon'],
    cons: ['Rates can rise', 'Uncertainty after fixed period'],
    bestFor: 'Short-term buyers or those expecting to refinance',
  },
  {
    name: 'FHA Loan',
    pros: ['Low down payment', 'Flexible credit requirements'],
    cons: ['Mortgage insurance required', 'Loan limits apply'],
    bestFor: 'First-time buyers or those with lower credit',
  },
  {
    name: 'VA Loan',
    pros: ['No down payment', 'No mortgage insurance'],
    cons: ['Must be eligible veteran/military', 'Funding fee applies'],
    bestFor: 'Eligible veterans, active-duty, or surviving spouses',
  },
  {
    name: 'USDA Loan',
    pros: ['No down payment', 'Low mortgage insurance'],
    cons: ['Rural areas only', 'Income limits apply'],
    bestFor: 'Buyers in eligible rural areas',
  },
];

const generateStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How do I choose the right mortgage type?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Choosing the right mortgage depends on your financial goals, how long you plan to stay in the home, your down payment, and eligibility for special programs. Use our comparison tool and quiz to find your best fit.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are the main differences between fixed and adjustable-rate mortgages?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Fixed-rate mortgages have the same interest rate for the life of the loan, while adjustable-rate mortgages (ARMs) start with a lower rate that can change after a set period.'
      }
    }
  ]
});

export default function MortgageTypeComparisonTool() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }} />
      <Article
        title={articleData.title}
        icon={Percent}
        articleId={ARTICLE_ID}
        accentColor="purple"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">Compare Major Mortgage Types</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Not sure which mortgage is right for you? Use our comparison table and quick quiz to find the best fit for your needs.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-8">
          <h3 className="flex items-center text-purple-800 font-semibold text-lg mb-2">
            <HelpCircle className="w-5 h-5 mr-2" />
            Why Compare Mortgage Types?
          </h3>
          <p className="text-gray-700">
            The right mortgage can save you thousands. Comparing your options helps you make an informed, confident decision.
          </p>
        </div>
        <h3 className="text-2xl font-bold text-center mb-6">Mortgage Type Comparison Table</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Type</th>
                <th className="px-4 py-2 border-b">Best For</th>
                <th className="px-4 py-2 border-b">Pros</th>
                <th className="px-4 py-2 border-b">Cons</th>
              </tr>
            </thead>
            <tbody>
              {mortgageTypes.map((type) => (
                <tr key={type.name} className="border-b last:border-b-0">
                  <td className="px-4 py-2 font-semibold text-purple-700">{type.name}</td>
                  <td className="px-4 py-2">{type.bestFor}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside text-green-700">
                      {type.pros.map((pro) => <li key={pro}>{pro}</li>)}
                    </ul>
                  </td>
                  <td className="px-4 py-2">
                    <ul className="list-disc list-inside text-red-700">
                      {type.cons.map((con) => <li key={con}>{con}</li>)}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-2xl font-bold text-center mb-6">Find Your Best Fit: Quick Quiz</h3>
        <QuizClient />
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-8">
          <h3 className="flex items-center text-purple-800 font-semibold text-lg mb-2">
            <ArrowRight className="w-5 h-5 mr-2" />
            Next Steps
          </h3>
          <p className="text-gray-700">
            Want to dive deeper? Explore our full guide on <Link href="/education/mortgage-types-explained" className="text-purple-600 hover:text-purple-700 mx-1">Mortgage Types</Link> or use our <Link href="/education/mortgage-payment-calculators" className="text-purple-600 hover:text-purple-700 mx-1">Payment Calculators</Link> to estimate your costs.
          </p>
        </div>
      </Article>
    </>
  );
} 