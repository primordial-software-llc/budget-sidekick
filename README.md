This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Budget Sidekick Features

### Ledger and Account Structure
Budget Sidekick organizes finances using a ledger and account structure:
- **Ledgers**: Separate sets of accounts for different entities (businesses, personal finances)
- **Accounts**: Hierarchical accounts using colon-separated notation (e.g., Income:Salary, Expenses:Food:Groceries)
- **Entries**: Individual financial entries with amount, day of month, and account name

### Transactions Feature (New)
The new transactions feature allows detailed tracking of individual financial transactions:

- **Transaction Recording**: Record individual transactions with detailed information:
  - Amount
  - Date
  - Account
  - Description
  - Category
  - Payee

- **Aggregation to Ledger Entries**: Transactions can be aggregated and posted to ledger entries
  - Transactions for the same account and day are combined
  - Maintains backwards compatibility with existing ledger entries
  - Use the "Post to Ledger" button to update ledger entries

- **Data Import/Export**: The import/export functionality now includes transaction data
  - Exports both ledger and transaction data
  - Imports preserve both data types

### Notes on Database Structure
The application uses IndexedDB for client-side storage:
- DB Version 2 adds support for transactions
- Existing ledger data is fully preserved
- Feature flags enable controlled rollout of transaction features

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
