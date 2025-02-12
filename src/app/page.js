import Image from "next/image";
import Link from 'next/link';

import React from 'react';
import {
  PieChartIcon,
  TrendingUpIcon,
  ArrowDownIcon,
  LightbulbIcon,
  BarChart3Icon,
  CircleDollarSignIcon
} from 'lucide-react';

function BusinessFlowSVG() {
  return (
      <svg viewBox="0 0 800 400" className="w-full h-auto">
          <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
              </marker>
          </defs>

          {/* Business Tools Section */}
          <rect x="50" y="30" width="180" height="160" fill="#EEF2FF" rx="12"/>
          <text x="140" y="60" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#1E3A8A">Business Tools</text>
          <text x="140" y="90" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">Insertion Order System (IOS) - Quotes</text>
          <text x="140" y="110" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">Adobe Sign - Purchase Orders</text>
          <text x="140" y="130" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">Accelo - Client Invoicing</text>
          <text x="150" y="150" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">Media Expense System (MXS) - Margin Management</text>
          <text x="140" y="170" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">Media Pacing System (MPS) - Daily Actuals</text>
          <text x="140" y="190" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">Media Billing System (MBS) - Monthly Actuals</text>

          {/* GL Core Section */}
          <rect x="310" y="30" width="180" height="160" fill="#3B82F6" rx="12"/>
          <text x="400" y="60" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">GL Core</text>
          <rect x="330" y="80" width="140" height="90" fill="white" rx="8"/>
          <text x="400" y="120" textAnchor="middle" fontFamily="Courier" fontSize="10" fill="#6B7280">Sales:Food | AR $5.00</text>
          <text x="400" y="140" textAnchor="middle" fontFamily="Courier" fontSize="10" fill="#6B7280">AR | Cash $5.00</text>
          <text x="400" y="160" textAnchor="middle" fontFamily="Courier" fontSize="10" fill="#6B7280">COGS | Inventory $2.00</text>

          {/* Accounting Systems Section */}
          <rect x="570" y="30" width="180" height="160" fill="#EEF2FF" rx="12"/>
          <text x="660" y="60" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold"
                fill="#1E3A8A">Accounting Systems
          </text>
          <text x="660" y="90" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">QuickBooks Online
          </text>
          <text x="660" y="110" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">QuickBooks Desktop
          </text>
          <text x="660" y="130" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">Xero</text>
          <text x="660" y="150" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">FreshBooks</text>
          <text x="660" y="170" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#4B5563">NetSuite
              Financials
          </text>

          {/* Connecting Arrows */}
          <path d="M 255 110 L 310 110" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <path d="M 490 110 L 570 110" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"/>

          {/* Reports Section */}
          <rect x="50" y="240" width="700" height="120" fill="#EEF2FF" rx="12"/>
          <text x="400" y="270" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold"
                fill="#1E3A8A">The Story in Reports
          </text>

          {/* Report Flow */}
          <rect x="80" y="290" width="140" height="50" fill="#3B82F6" rx="8"/>
          <text x="150" y="320" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="white">Forecast</text>
          <text x="150" y="335" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="white">Sale Planned!</text>

          <rect x="250" y="290" width="140" height="50" fill="#3B82F6" rx="8"/>
          <text x="320" y="320" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="white">Cash Flow</text>
          <text x="320" y="335" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="white">$5 Received!</text>

          <rect x="420" y="290" width="140" height="50" fill="#3B82F6" rx="8"/>
          <text x="490" y="320" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="white">P&L Statement</text>
          <text x="490" y="335" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="white">$3 Profit!</text>

          <rect x="590" y="290" width="140" height="50" fill="#3B82F6" rx="8"/>
          <text x="660" y="320" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="white">Balance Sheet</text>
          <text x="660" y="335" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="white">Assets +$3!</text>

          {/* Vertical Arrow */}
          <path d="M 400 190 L 400 240" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"/>

          {/* Report Flow Arrows */}
          <path d="M 220 315 L 250 315" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <path d="M 390 315 L 420 315" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <path d="M 560 315 L 590 315" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      </svg>
  );
}

function Home() {
    const sampleData = {
        monthlyIncome: [
            {category: 'Salary', amount: 6066.67},
            { category: 'Freelance', amount: 1933.33 }
    ],
    monthlyExpenses: [
      { category: 'Housing:Mortgage', amount: 2000.00 },
      { category: 'Utilities:Internet', amount: 69.99 },
      { category: 'Utilities:Water', amount: 44.22 }
    ]
  };

  return (
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Add Login Button at the top */}
        <div className="flex justify-end">
          <Link 
            href="/dashboard" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login to Dashboard →
          </Link>
        </div>

        {/* Financial Dashboard */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <PieChartIcon className="mr-2" />
            Monthly Financial Overview
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Income Summary */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Income</h3>
              <div className="space-y-2">
                {sampleData.monthlyIncome.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{item.category}</span>
                      <span className="font-mono text-green-600">${item.amount.toFixed(2)}</span>
                    </div>
                ))}
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total Income</span>
                  <span className="font-mono text-green-600">
                  ${sampleData.monthlyIncome.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
                </span>
                </div>
              </div>
            </div>

            {/* Expense Summary */}
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Expenses</h3>
              <div className="space-y-2">
                {sampleData.monthlyExpenses.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{item.category}</span>
                      <span className="font-mono text-red-600">${item.amount.toFixed(2)}</span>
                    </div>
                ))}
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total Expenses</span>
                  <span className="font-mono text-red-600">
                  ${sampleData.monthlyExpenses.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
                </span>
                </div>
              </div>
            </div>

            {/* Cash Flow */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUpIcon className="mr-2" />
                Cash Flow
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>Net Income</div>
                  <div className="font-mono text-right text-blue-600">$5,885.79</div>
                  <div>Savings Rate</div>
                  <div className="font-mono text-right text-blue-600">73.4%</div>
                </div>
              </div>
            </div>

            {/* Net Worth Tracking */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Net Worth</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Assets</span>
                  <span className="font-mono">$152,433.21</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Liabilities</span>
                  <span className="font-mono">$-23,544.88</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Net Worth</span>
                  <span className="font-mono">$128,888.33</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decomposition Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Business Event Section */}
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                    <CircleDollarSignIcon className="w-5 h-5 mr-2" />
                    Business Events
                </h3>
                <div className="bg-white rounded p-3 shadow-sm">
                    <div className="grid grid-cols-3 gap-4 font-mono">
                        <div>$1,000</div>
                        <div>1</div>
                        <div>Signed IO</div>

                        <div>$900</div>
                        <div>1-28</div>
                        <div>MXS Assigns Budget and Margin</div>

                        <div>$900</div>
                        <div>1-28</div>
                        <div>MPS Reports Daily Actuals</div>

                        <div>$900</div>
                        <div>28</div>
                        <div>Google Sends Invoice</div>

                        <div>$900</div>
                        <div>28</div>
                        <div>MBS Reconciles and Records Monthly Actuals</div>

                        <div>$900</div>
                        <div>28</div>
                        <div>AP Pays Invoice</div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center my-4 items-center">
            <ArrowDownIcon className="w-8 h-8 text-blue-500"/>
                <div className="ml-4 bg-blue-100 rounded-lg p-2 text-sm">
                End of Month Closing
            </div>
          </div>

            {/* GL Entries with Explanation */}
            <div className="bg-blue-50 rounded-lg p-4 mb-8">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                    <BarChart3Icon className="w-5 h-5 mr-2" />
                    GL Entries
                </h3>
                <p className="text-gray-600 mb-4">End of Month Entries</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm font-mono">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left p-2">Account</th>
                            <th className="text-left p-2">Day</th>
                            <th className="text-right p-2">Debit</th>
                            <th className="text-right p-2">Credit</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {/* Quote Signed */}
                        <tr className="border-t">
                            <td colSpan="4" className="p-2 bg-gray-50 font-semibold">Day 1 - Quote Signed</td>
                        </tr>
                        <tr>
                            <td className="p-2">AR:CompanyA</td>
                            <td className="p-2">1</td>
                            <td className="p-2 text-right">1,000.00</td>
                            <td className="p-2 text-right"></td>
                        </tr>
                        <tr>
                            <td className="p-2 pl-8">Media:Budget:Google</td>
                            <td className="p-2">28</td>
                            <td className="p-2 text-right"></td>
                            <td className="p-2 text-right">900.00</td>
                        </tr>
                        <tr>
                            <td className="p-2 pl-8">GrossProfit:Margin</td>
                            <td className="p-2">28</td>
                            <td className="p-2 text-right"></td>
                            <td className="p-2 text-right">100.00</td>
                        </tr>

                        {/* Platform Spend */}
                        <tr className="border-t">
                            <td colSpan="4" className="p-2 bg-gray-50 font-semibold">Day 28 - Platform Spend</td>
                        </tr>
                        <tr>
                            <td className="p-2">Media:Budget:Google</td>
                            <td className="p-2">28</td>
                            <td className="p-2 text-right">900.00</td>
                            <td className="p-2 text-right"></td>
                        </tr>
                        <tr>
                            <td className="p-2 pl-8">AP:Google</td>
                            <td className="p-2">28</td>
                            <td className="p-2 text-right"></td>
                            <td className="p-2 text-right">900.00</td>
                        </tr>

                        {/* Payment Made */}
                        <tr className="border-t">
                            <td colSpan="4" className="p-2 bg-gray-50 font-semibold">Day 28 - Payment</td>
                        </tr>
                        <tr>
                            <td className="p-2">AP:Google</td>
                            <td className="p-2">28</td>
                            <td className="p-2 text-right">900.00</td>
                            <td className="p-2 text-right"></td>
                        </tr>
                        <tr>
                            <td className="p-2 pl-8">Bank</td>
                            <td className="p-2">28</td>
                            <td className="p-2 text-right"></td>
                            <td className="p-2 text-right">900.00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>









            {/* Financial Reports Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 rounded-lg p-4 relative">
                    <div className="absolute -top-2 -right-2 bg-green-200 rounded-full p-2">
                        <LightbulbIcon className="w-4 h-4" />
              </div>
              <h3 className="font-bold mb-2">Income Statement</h3>
              <div className="space-y-1 font-mono text-sm">
                <div>Income: $6,066.67</div>
                <div className="pl-4">└─ Payroll</div>
                <div>Expenses: $1,380.05</div>
                <div className="pl-4">└─ Taxes</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 relative">
              <div className="absolute -top-2 -right-2 bg-purple-200 rounded-full p-2">
                <LightbulbIcon className="w-4 h-4" />
              </div>
              <h3 className="font-bold mb-2">Balance Sheet</h3>
              <div className="space-y-1 font-mono text-sm">
                <div>Assets: $4,686.62</div>
                <div className="pl-4">└─ Checking</div>
                <div>Liabilities: $1,380.05</div>
                <div className="pl-4">└─ Taxes</div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 relative">
              <div className="absolute -top-2 -right-2 bg-yellow-200 rounded-full p-2">
                <LightbulbIcon className="w-4 h-4" />
              </div>
              <h3 className="font-bold mb-2">Cash Flow</h3>
              <div className="space-y-1 font-mono text-sm">
                <div>Inflow: $6,066.67</div>
                <div>Outflow: $1,380.05</div>
                <div className="font-bold">Net: $4,686.62</div>
              </div>
            </div>
          </div>

          {/* The "Aha" Moment Callout */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">This isn't just budgeting...</h3>
            <p className="text-lg mb-6">
              It's a complete financial system with double-entry accounting, automated GL entries, and professional-grade financial reporting.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors mb-8">
              Get Your Financial Suite →
            </button>
            <div className="bg-white rounded-lg p-4">
              <BusinessFlowSVG />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;