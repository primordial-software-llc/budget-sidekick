import React from 'react';
import Link from 'next/link';
import { Home, Calendar, CheckCircle, DollarSign, TrendingUp, PiggyBank, FileText, Calculator, Shield, ArrowRight  } from 'lucide-react';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';

const ARTICLE_ID = 'one-year-homebuying-guide';
const articleData = getArticleData(ARTICLE_ID);
export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

const generateStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'One-Year Guide to Saving For and Buying a Home',
  'description': 'A month-by-month, step-by-step guide to help you save, plan, and purchase your first home.',
  'step': [
    { '@type': 'HowToStep', 'name': 'Assess Your Finances', 'url': '/education/credit-score-fundamentals' },
    { '@type': 'HowToStep', 'name': 'Set a Savings Goal', 'url': '/education/mortgage-down-payment-strategies' },
    { '@type': 'HowToStep', 'name': 'Research Mortgage Types', 'url': '/education/mortgage-types-explained' },
    { '@type': 'HowToStep', 'name': 'Get Pre-Approved', 'url': '/education/mortgage-payment-calculators' },
    { '@type': 'HowToStep', 'name': 'Start Your Home Search', 'url': '/education/home-buying-process' },
    { '@type': 'HowToStep', 'name': 'Make an Offer & Close', 'url': '/education/mortgage-closing-costs-explained' }
  ]
});

function OneYearHomebuyingGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }} />
      <Article
        title={articleData.title}
        icon={Calendar}
        articleId={ARTICLE_ID}
        accentColor="rose"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        <h2 className="text-lg text-center text-gray-700 mb-6">A Month-by-Month Roadmap to Homeownership</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Ready to buy your first home? This one-year guide breaks down the process into manageable monthly steps—so you can save, plan, and purchase with confidence.
        </p>
        <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 mb-8">
          <h3 className="flex items-center text-rose-800 font-semibold text-lg mb-2">
            <CheckCircle className="w-5 h-5 mr-2" />
            Why Follow a Yearlong Plan?
          </h3>
          <p className="text-gray-700">
            Buying a home is a marathon, not a sprint. Spreading out the steps over a year helps you build savings, improve your credit, and avoid costly mistakes. Use this guide as your personalized checklist!
          </p>
        </div>
        <h3 className="text-2xl font-bold text-center mb-6">Your 12-Month Homebuying Checklist</h3>
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-rose-700 mb-2 flex items-center"><PiggyBank className="w-5 h-5 mr-2" /> Months 1-2: Assess & Prepare</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Check your credit score and report (<Link href="/education/credit-score-fundamentals" className="text-rose-600 hover:text-rose-700">learn how</Link>).</li>
              <li>Pay down high-interest debt and avoid new credit inquiries.</li>
              <li>Set a realistic home price range using our <Link href="/education/mortgage-payment-calculators" className="text-rose-600 hover:text-rose-700">mortgage calculators</Link>.</li>
              <li>Start a dedicated home savings account.</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-rose-700 mb-2 flex items-center"><DollarSign className="w-5 h-5 mr-2" /> Months 3-4: Build Your Savings</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Automate monthly transfers to your home fund.</li>
              <li>Research down payment assistance programs (<Link href="/education/mortgage-down-payment-strategies" className="text-rose-600 hover:text-rose-700">see options</Link>).</li>
              <li>Cut unnecessary expenses and boost your savings rate.</li>
              <li>Track your progress with a visual savings goal chart.</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-rose-700 mb-2 flex items-center"><TrendingUp className="w-5 h-5 mr-2" /> Months 5-6: Research & Plan</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Explore <Link href="/education/mortgage-types-explained" className="text-rose-600 hover:text-rose-700">different mortgage types</Link> and loan programs.</li>
              <li>Estimate closing costs (<Link href="/education/mortgage-closing-costs-explained" className="text-rose-600 hover:text-rose-700">see breakdown</Link>).</li>
              <li>Decide on your must-haves vs. nice-to-haves in a home.</li>
              <li>Start gathering documents for pre-approval (pay stubs, tax returns, etc.).</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-rose-700 mb-2 flex items-center"><FileText className="w-5 h-5 mr-2" /> Months 7-8: Get Pre-Approved</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Shop around for mortgage lenders and compare rates.</li>
              <li>Get pre-approved for a loan (not just pre-qualified).</li>
              <li>Review your pre-approval letter and understand your budget.</li>
              <li>Keep your finances stable—avoid big purchases or job changes.</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-rose-700 mb-2 flex items-center"><Home className="w-5 h-5 mr-2" /> Months 9-10: Start Your Home Search</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Find a trusted real estate agent.</li>
              <li>Tour homes and attend open houses.</li>
              <li>Compare neighborhoods, schools, and commute times.</li>
              <li>Refine your list and prepare to make an offer.</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h4 className="font-bold text-rose-700 mb-2 flex items-center"><Shield className="w-5 h-5 mr-2" /> Months 11-12: Offer, Close & Move In</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Make an offer and negotiate with the seller.</li>
              <li>Schedule inspections and finalize your loan.</li>
              <li>Review your closing disclosure (<Link href="/education/mortgage-closing-costs-explained" className="text-rose-600 hover:text-rose-700">see what to expect</Link>).</li>
              <li>Sign documents, get your keys, and celebrate your new home!</li>
            </ul>
          </div>
        </div>
        <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 mt-10">
          <h3 className="flex items-center text-rose-800 font-semibold text-lg mb-2">
            <ArrowRight className="w-5 h-5 mr-2" />
            Next Steps
          </h3>
          <p className="text-gray-700">
            Ready to dive deeper? Explore our full library of home buying resources, or jump to:
            <Link href="/education/mortgage-types-explained" className="text-rose-600 hover:text-rose-700 mx-1">Mortgage Types</Link>,
            <Link href="/education/mortgage-payment-calculators" className="text-rose-600 hover:text-rose-700 mx-1">Payment Calculators</Link>,
            <Link href="/education/mortgage-closing-costs-explained" className="text-rose-600 hover:text-rose-700 mx-1">Closing Costs</Link>,
            <Link href="/education/home-buying-process" className="text-rose-600 hover:text-rose-700 mx-1">Home Buying Process</Link>.
          </p>
        </div>
      </Article>
    </>
  );
}

export default OneYearHomebuyingGuide; 