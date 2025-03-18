import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getStructuredDataReviews } from '@/data/reviews';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Budget Sidekick - Free Personal & Business Finance Manager",
  description: "Track income and expenses across multiple revenue streams and entities with powerful account hierarchies. Free personal and business finance management tool.",
  openGraph: {
    title: "Budget Sidekick - Free Personal & Business Finance Manager",
    description: "Track income and expenses across multiple revenue streams and entities with powerful account hierarchies. Free personal and business finance management tool.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Sidekick - Free Personal & Business Finance Manager",
    description: "Track income and expenses across multiple revenue streams and entities with powerful account hierarchies. Free personal and business finance management tool.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Budget Sidekick",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "description": "Budget Sidekick is a powerful, free financial management tool that helps you track income and expenses across multiple revenue streams and entities. Perfect for both personal and business use, it features an intuitive nested account structure that makes organizing your finances simple and efficient.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "Nested account hierarchies",
                "Multiple entity support",
                "Import/Export functionality",
                "Detailed financial reports",
                "Account summary reports",
                "Account servicers tracking"
              ],
              "screenshot": [
                {
                  "@type": "ImageObject",
                  "contentUrl": "/screenshots/dashboard.png",
                  "caption": "Budget Sidekick Dashboard"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "/screenshots/reports.png",
                  "caption": "Financial Reports"
                }
              ],
              "softwareVersion": "1.0.0",
              "applicationSubCategory": "Personal Finance Software",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "downloadUrl": "https://budget-sidekick.com",
              "fileSize": "2MB",
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/UseAction",
                "userInteractionCount": 10000
              },
              "keywords": "budget, finance, accounting, personal finance, business finance, ledger, expense tracking",
              "review": getStructuredDataReviews(),
              "softwareHelp": {
                "@type": "CreativeWork",
                "text": "Visit our documentation at https://budget-sidekick.com/docs"
              },
              "url": "https://budget-sidekick.com",
              "sameAs": [
                "https://twitter.com/budgetsidekick",
                "https://github.com/budget-sidekick"
              ],
              "about": {
                "@type": "Thing",
                "name": "Budget Sidekick",
                "description": "Budget Sidekick is designed for individuals and businesses who need a flexible, powerful way to manage their finances. Whether you're tracking personal expenses, managing multiple business entities, or handling client accounts, our nested account structure provides the organization you need.",
                "category": "Financial Management Software",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Target Audience",
                    "value": "Individuals, Small Business Owners, Freelancers, Financial Enthusiasts"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Use Cases",
                    "value": "Personal Finance, Business Accounting, Client Account Management, Expense Tracking"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Key Benefits",
                    "value": "Free to Use, No Hidden Costs, Intuitive Interface, Powerful Organization, Data Import/Export"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
