import React from 'react';
import Link from 'next/link';
import { BookOpenIcon, AlertTriangle, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';

function DirectTreasuryInvesting() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: 'Direct Treasury Investing' }
            ]} />
            <h1 className="text-3xl font-bold text-gray-900 mt-2">Direct Treasury Investing</h1>
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 mb-6">
              When it comes to the safest investments in your portfolio, why add unnecessary layers of risk? 
              Direct treasury investing allows you to hold government bonds in your name, eliminating the middleman and reducing potential points of failure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Safety Chain</h2>
            <p className="text-gray-600 mb-4">
              Every link in the investment chain represents a potential point of failure. When you invest in bond funds or ETFs, you're adding several links to that chain:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Fund management company</li>
              <li>ETF structure and operations</li>
              <li>Market makers and liquidity providers</li>
              <li>Brokerage platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Direct Ownership Advantages</h2>
            <p className="text-gray-600 mb-4">
              By holding treasuries directly in your name through TreasuryDirect or your brokerage account, you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Eliminate fund management fees and expenses</li>
              <li>Remove counterparty risk from fund managers</li>
              <li>Have direct control over your bond holdings</li>
              <li>Can precisely match your investment duration to your needs</li>
              <li>Receive interest payments directly from the U.S. government</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation in Retirement Accounts</h2>
            <p className="text-gray-600 mb-4">
              Direct treasury investing is particularly effective in retirement accounts where you're already holding bonds. 
              By holding treasuries directly, you're making the safest part of your portfolio even safer, which allows you to be more strategic with risk in other areas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Building Your Custom Bond Ladder</h2>
            <p className="text-gray-600 mb-4">
              One of the most powerful advantages of direct treasury investing is the ability to create a perfectly customized bond ladder. Unlike bond funds that have fixed durations, you can:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Purchase treasuries with exact maturities that match your cash flow needs</li>
              <li>Set up recurring purchases at different intervals (e.g., monthly, quarterly)</li>
              <li>Mix different types of treasuries (bills, notes, bonds) in your ladder</li>
              <li>Adjust the rungs of your ladder as your needs change</li>
              <li>Create a rolling ladder where maturing bonds are automatically reinvested</li>
            </ul>
            <p className="text-gray-600 mb-4">
              For example, you could set up a 5-year ladder by purchasing treasuries that mature in 1, 2, 3, 4, and 5 years. As each bond matures, you can reinvest the proceeds in a new 5-year bond, maintaining your ladder while potentially capturing higher yields if rates have risen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Inflation Protection Built-In</h2>
            <p className="text-gray-600 mb-4">
              Treasury Inflation-Protected Securities (TIPS) offer a unique advantage: they're the only bonds that come with built-in inflation insurance. The principal value of TIPS adjusts with inflation, and your interest payments are calculated on this adjusted principal. This means:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Your purchasing power is preserved regardless of inflation</li>
              <li>You receive higher interest payments when inflation rises</li>
              <li>At maturity, you get back the greater of the original or inflation-adjusted principal</li>
              <li>You can ladder TIPS just like regular treasuries for consistent inflation protection</li>
            </ul>
            <p className="text-gray-600 mb-4">
              The inflation adjustment is based on the Consumer Price Index for All Urban Consumers (CPI-U), published monthly by the Bureau of Labor Statistics. This is the same index used to calculate Social Security cost-of-living adjustments, making TIPS one of the most reliable hedges against inflation available to individual investors.
            </p>
            <p className="text-gray-600 mb-4">
              TIPS can be particularly valuable in retirement portfolios, where preserving purchasing power is crucial. By combining regular treasuries and TIPS in your ladder, you create a robust defense against both interest rate risk and inflation risk.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Getting Started</h3>
              <p className="text-gray-700 mb-4">
                To start investing directly in treasuries:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-600">
                <li>Open a TreasuryDirect account or use your existing brokerage account</li>
                <li>Decide on the type of treasuries (bills, notes, or bonds) that match your investment horizon</li>
                <li>Purchase treasuries at auction or on the secondary market</li>
                <li>Set up automatic reinvestment of interest payments if desired</li>
              </ol>
            </div>

            <Disclaimer 
              articleId="direct-treasury-investing"
              message="This content is educational in nature and updated as of {{year}}. Treasury product offerings and regulations may change over time. For complete information about government securities, visit TreasuryDirect.gov."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DirectTreasuryInvesting; 