import React from 'react';
import Link from 'next/link';
import { BookOpenIcon, AlertTriangle, Calculator } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';

const ARTICLE_ID = 'tax-efficient-investing';

const articleData = getArticleData(ARTICLE_ID);

export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

function TaxEfficientInvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Tax-Efficient Investing' }
            ]} />
            <h1 className="text-3xl font-bold text-gray-900 mt-2">Tax-Efficient Investing</h1>
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 mb-6">
              Tax-efficient investing is about maximizing your after-tax returns by strategically placing investments in different types of accounts 
              and choosing tax-efficient investment strategies. This approach can significantly impact your long-term investment growth.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Tax-Advantaged Accounts</h2>
            <p className="text-gray-600 mb-4">
              Different types of accounts offer different tax benefits:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Traditional 401(k) and IRA: Tax-deferred growth, contributions may be tax-deductible</li>
              <li>Roth 401(k) and IRA: Tax-free growth, contributions are made with after-tax dollars</li>
              <li>Health Savings Account (HSA): Triple tax advantage for medical expenses</li>
              <li>529 Plans: Tax-free growth for education expenses</li>
              <li>Taxable Brokerage Accounts: No special tax benefits but offers flexibility</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Asset Location Strategy</h2>
            <p className="text-gray-600 mb-4">
              Where you hold your investments can significantly impact your tax bill:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Place tax-inefficient investments in tax-advantaged accounts</li>
              <li>Keep tax-efficient investments in taxable accounts</li>
              <li>Consider the tax treatment of different investment types</li>
              <li>Balance growth potential with tax implications</li>
              <li>Regularly review and adjust your asset location</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax-Efficient Investment Choices</h2>
            <p className="text-gray-600 mb-4">
              Some investments are more tax-efficient than others:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Index funds and ETFs typically generate fewer taxable events</li>
              <li>Municipal bonds offer tax-free interest income</li>
              <li>Growth stocks may defer capital gains taxes</li>
              <li>Tax-managed funds are designed to minimize tax impact</li>
              <li>Dividend-paying stocks may be better in tax-advantaged accounts</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax-Loss Harvesting</h2>
            <p className="text-gray-600 mb-4">
              This strategy involves selling investments at a loss to offset capital gains:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Can reduce your current year's tax bill</li>
              <li>Unused losses can be carried forward</li>
              <li>Must be careful of wash sale rules</li>
              <li>Can be used to rebalance your portfolio</li>
              <li>Works best in taxable accounts</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Getting Started</h3>
              <p className="text-gray-700 mb-4">
                To implement tax-efficient investing:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-600">
                <li>Review your current investment accounts and holdings</li>
                <li>Understand the tax implications of your investments</li>
                <li>Consider your current and future tax brackets</li>
                <li>Develop an asset location strategy</li>
                <li>Regularly review and adjust your approach</li>
              </ol>
            </div>

            <Disclaimer 
              articleId="tax-efficient-investing"
              message="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
            />
          </div>
        </div>
      </main>
      <Footer />
      <Article
        title={articleData.title}
        icon={Calculator}
        articleId={ARTICLE_ID}
        accentColor="amber"
        disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
      >
        {/* Article content */}
      </Article>
    </>
  );
}

export default TaxEfficientInvesting; 