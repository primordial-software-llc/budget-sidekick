import Link from 'next/link';
import React from 'react';
import {
  BookOpenIcon
} from 'lucide-react';
import Header from '@/components/Header';
import Reviews from '@/components/Reviews';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import educationContent from '@/data/education-content.json';
import { iconMap } from '@/utils/icons';

function SimpleLedgerDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex items-center justify-center mb-3">
          <h3 className="text-gray-900 font-semibold text-base">Pay Stub</h3>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Income:Salary:Gross</span>
            <span className="text-green-600 font-medium">+$3,500</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Expenses:Tax:Federal</span>
            <span className="text-red-600 font-medium">-$875</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-green-600 font-medium">$2,625</span>
          </div>

        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex items-center justify-center mb-3">
          <h3 className="text-gray-900 font-semibold text-base">S-Corp Income</h3>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Income:Consulting:Project</span>
            <span className="text-green-600 font-medium">+$4,200</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Expenses:Software:SaaS</span>
            <span className="text-red-600 font-medium">-$189</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-green-600 font-medium">$4,011</span>
          </div>

        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex items-center justify-center mb-3">
          <h3 className="text-gray-900 font-semibold text-base">Budget</h3>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Income:Freelance:Design</span>
            <span className="text-green-600 font-medium">+$1,850</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Expenses:Meals:Client</span>
            <span className="text-red-600 font-medium">-$156</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-green-600 font-medium">$1,694</span>
          </div>

        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex items-center justify-center mb-3">
          <h3 className="text-gray-900 font-semibold text-base">Rental Property</h3>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-700 truncate pr-2">Income:Rental:Monthly</span>
            <span className="text-green-600 font-medium tabular-nums">+$2,400</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700 truncate pr-2">Expenses:Maintenance</span>
            <span className="text-red-600 font-medium tabular-nums">-$350</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700 truncate pr-2">Expenses:Property:Tax</span>
            <span className="text-red-600 font-medium tabular-nums">-$425</span>
          </div>
          <div className="flex justify-between text-sm pt-1.5 mt-1.5 border-t border-gray-200">
            <span className="text-gray-900 font-medium">Net:</span>
            <span className="text-green-600 font-medium tabular-nums">$1,625</span>
          </div>

        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <p style={{display: 'none'}}>Impact-Site-Verification: 16cbfc71-8040-45c7-86ca-473d8644df52</p>
      <main className="min-h-full bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
        {/* Fresh, Approachable Header with Integrated Nav */}
        <div className="text-gray-900 relative overflow-hidden">
          {/* Organic flowing shapes */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          {/* Flowing guide lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#0284c7" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path d="M0,30 Q25,20 50,35 T100,40" stroke="url(#flowGrad)" strokeWidth="0.5" fill="none"/>
              <path d="M0,60 Q30,50 60,65 T100,70" stroke="url(#flowGrad)" strokeWidth="0.3" fill="none"/>
              <path d="M0,85 Q40,75 80,90 T100,85" stroke="url(#flowGrad)" strokeWidth="0.4" fill="none"/>
            </svg>
          </div>
          {/* Subtle connection dots */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-1/4 left-2/3 w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full"></div>
          </div>
          
          {/* Integrated Header Navigation */}
          <header className="relative z-50">
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" className="h-10">
                  <style>
                    {`.logo-text { font-family: Arial, sans-serif; font-weight: bold; }
                      .budget { fill: #1e3a5f; }
                      .sidekick { fill: #3498db; }`}
                  </style>
                  <g transform="translate(5,10) scale(0.83)">
                    <path d="M10 50 L20 40 L30 45 L40 15 L50 25" fill="none" stroke="#27ae60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    <circle cx="20" cy="40" r="3" fill="#3498db"></circle>
                    <circle cx="30" cy="45" r="3" fill="#3498db"></circle>
                    <circle cx="40" cy="15" r="3" fill="#3498db"></circle>
                    <path d="M5 55 L55 55" stroke="#1e3a5f" strokeWidth="2"></path>
                    <path d="M5 10 L5 55" stroke="#1e3a5f" strokeWidth="2"></path>
                  </g>
                  <text x="70" y="35" className="logo-text budget" fontSize="24">Budget</text>
                  <text x="70" y="55" className="logo-text sidekick" fontSize="24">Sidekick</text>
                </svg>
              </Link>
              
              <Link 
                href="/dashboard" 
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg"
              >
                Get Started →
              </Link>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
            <div className="text-center relative">
              {/* Subtle content backdrop */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl -m-8"></div>
              <div className="relative z-10 p-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Budget Sidekick</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 leading-tight">
                Financial Clarity Without Compromise
              </p>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Stop drowning in scattered income streams and expense categories. 
                Bring order to your financial chaos with clear organization that actually makes sense.
              </p>
              </div>
            </div>
            
            <div className="relative">
              {/* Subtle content backdrop for main grid */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl -m-4"></div>
              <div className="relative z-10 p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image with floating features */}
              <div className="relative order-2 lg:order-1">
                {/* Layered workspace scene */}
                <div className="relative">
                  {/* Main image with enhanced styling */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50">
                    <img 
                      src="/images/professional-woman-working-at-clean-modern-desk.jpg" 
                      alt="Professional woman managing finances at a clean, organized workspace" 
                      className="w-full h-auto object-cover"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                  </div>
                  

                </div>
                
                {/* Floating feature cards */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Beautiful Reports</div>
                      <div className="text-xs text-gray-600">You can share</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src="/icons/import-export.svg" alt="Privacy" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Import/Export Data</div>
                      <div className="text-xs text-gray-600">Your data, your way</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA and key features */}
               <div className="text-center lg:text-left order-1 lg:order-2">
                 <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl">
                     <div className="w-10 h-10 rounded-full flex items-center justify-center">
                       <img src="/icons/shield-privacy.svg" alt="Privacy" className="w-6 h-6" />
                     </div>
                     <div className="text-left">
                       <div className="font-semibold text-gray-900">100% Private</div>
                       <div className="text-gray-600 text-sm">All data stored locally</div>
                     </div>
                   </div>
                   <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl">
                     <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <img src="/icons/always-free.svg" alt="Privacy" className="w-6 h-6" />
                     </div>
                     <div className="text-left">
                       <div className="font-semibold text-gray-900">Always Free</div>
                       <div className="text-gray-600 text-sm">No subscriptions or limits</div>
                     </div>
                   </div>
                   <div className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl">
                     <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <img src="/icons/instant-setup.svg" alt="Privacy" className="w-6 h-6" />
                     </div>
                     <div className="text-left">
                       <div className="font-semibold text-gray-900">Instant Setup</div>
                       <div className="text-gray-600 text-sm">Start tracking in seconds</div>
                     </div>
                   </div>
                </div>                
                <div className="space-y-4">
                  <Link 
                    href="/dashboard" 
                    className="inline-flex items-center px-10 py-5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 font-bold text-xl shadow-2xl"
                  >
                    Try Budget Sidekick Free →
                  </Link>
                  <div className="text-gray-700 text-sm">
                    No signup required • Works offline • Your data stays yours
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Enhanced accent colors for Features section */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-16 left-1/6 w-48 h-48 bg-gradient-to-br from-emerald-300/40 to-emerald-400/30 rounded-full blur-3xl"></div>
            <div className="absolute top-32 right-1/5 w-40 h-40 bg-gradient-to-br from-blue-300/35 to-cyan-300/25 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-52 h-52 bg-gradient-to-br from-purple-300/40 to-purple-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-1/4 w-44 h-44 bg-gradient-to-br from-indigo-300/35 to-indigo-400/25 rounded-full blur-3xl"></div>
          </div>
          


          {/* Main Features */}
          <div className="features-section max-w-6xl mx-auto px-6 pt-20 pb-20 relative z-10">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl -m-6"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Financial Management Features</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to track and manage complex financial situations across multiple entities and accounts.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 to-emerald-200/40 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-emerald-100 p-3 rounded-2xl mr-4 group-hover:bg-emerald-200 transition-colors">
                      <img src="/icons/nested-accounts.svg" alt="Nested Accounts" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Nested Accounts</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    Use intuitive colon-separated hierarchies like Expenses:Food:Groceries or Income:Salary:Gross for powerful organization.
                  </p>
                </div>
              </div>

              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 p-3 rounded-2xl mr-4 group-hover:bg-purple-200 transition-colors">
                      <img src="/icons/detailed-transactions.svg" alt="Detailed Transactions" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Detailed Transactions</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    Record individual transactions with dates and descriptions, then post them to your ledger accounts when ready.
                  </p>
                </div>
              </div>

              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-cyan-200/40 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-2xl mr-4 group-hover:bg-blue-200 transition-colors">
                      <img src="/icons/flexible-reporting.svg" alt="Flexible Reporting" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Flexible Reporting</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    Generate custom reports across your entities and account hierarchies to gain insights into your financial health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ledger Demo Section - The Showcase */}
          <div className="demo-section relative pb-20 overflow-hidden">
            {/* Clean, organic showcase background */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="relative">
                {/* Premium content container */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/80 to-white/60 backdrop-blur-sm rounded-3xl shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-transparent to-blue-100/20 rounded-3xl"></div>
                
                <div className="relative px-12">
                  <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl -m-6"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">
                        <img src="/icons/chart-demo.svg" alt="Chart" className="w-8 h-8" />
                        <span className="text-sm font-semibold tracking-wider uppercase">Live Demo</span>
                      </div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Budget Sidekick</span> Reports:<br/>
                        Complete Financial & Month-End Clarity
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        This is how your Overview page aggregates data across multiple ledgers. 
                        Each card shows the account hierarchy from a different ledger - S-Corp, personal, freelance, and investment accounts.
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced demo container */}
                  <div className="relative">
                    <div className="relative z-10 p-4">
                      <SimpleLedgerDemo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Education Section */}
          <div className="financial-education-section max-w-6xl mx-auto px-6 pb-20 relative">
            {/* Rich accent colors for Education section */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-12 left-8 w-56 h-56 bg-gradient-to-br from-purple-300/45 to-purple-400/35 rounded-full blur-3xl"></div>
              <div className="absolute top-20 right-12 w-44 h-44 bg-gradient-to-br from-indigo-300/40 to-blue-300/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-16 left-1/4 w-48 h-48 bg-gradient-to-br from-emerald-300/40 to-emerald-400/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 right-1/5 w-52 h-52 bg-gradient-to-br from-cyan-300/40 to-blue-300/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-emerald-50/60 via-blue-50/60 to-purple-50/60 backdrop-blur-sm px-8 rounded-3xl border border-emerald-200/30">
              <div className="text-center mb-12 relative">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl -m-6"></div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <BookOpenIcon className="w-6 h-6 text-emerald-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Financial Education</h2>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Strengthen your financial knowledge with our growing library of educational resources
                    designed to help you make better financial decisions.
                  </p>
                </div>
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {['one-year-homebuying-guide', 'mortgage-type-comparison-tool', 'sba-loans-for-first-time-business-owners']
                .map(id => educationContent.articles.find(article => article.id === id))
                .filter(Boolean)
                .map((article, index) => {
                  const IconComponent = iconMap[article.icon];
                  const colors = [
                    { bg: 'from-emerald-100/70 to-emerald-200/50', border: 'border-emerald-200/60', icon: 'text-emerald-600', accent: 'text-emerald-600' },
                    { bg: 'from-blue-100/70 to-cyan-200/50', border: 'border-blue-200/60', icon: 'text-blue-600', accent: 'text-blue-600' },
                    { bg: 'from-purple-100/70 to-purple-200/50', border: 'border-purple-200/60', icon: 'text-purple-600', accent: 'text-purple-600' }
                  ][index];
                  
                  return (
                    <Link 
                      key={article.id}
                      href={`/education/${article.id}`} 
                      className="relative group flex flex-col h-full"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-3xl blur-sm group-hover:blur-none transition-all duration-300`}></div>
                      <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border ${colors.border} hover:bg-white/90 transition-all duration-300 flex flex-col h-full`}>
                        <div className="flex items-center gap-3 mb-4">
                          {IconComponent && <IconComponent className={`w-8 h-8 ${colors.icon} group-hover:scale-110 transition-transform`} />}
                          <div className="flex-1">
                            <h3 className={`text-lg font-bold text-gray-900 group-hover:${colors.accent} transition-colors line-clamp-2`}>{article.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed flex-grow">
                          {article.description}
                        </p>
                        <div className="mt-auto">
                          <div className={`${colors.accent} font-semibold group-hover:scale-105 transition-transform inline-block`}>Read Guide →</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
            
            <div className="text-center relative">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl -m-4"></div>
              <div className="relative z-10 p-4">
                <Link 
                  href="/education" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-emerald-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <BookOpenIcon className="w-5 h-5 mr-2" />
                  <span>Explore All Educational Resources</span>
                </Link>
              </div>
            </div>
            </div>
          </div>

          {/* Reviews Section with accent colors */}
          <div className="reviews-section relative pb-20">
            {/* Blue accent colors for Reviews section */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <div className="absolute top-16 left-1/8 w-50 h-50 bg-gradient-to-br from-blue-300/40 to-cyan-300/35 rounded-full blur-3xl"></div>
              <div className="absolute top-32 right-1/6 w-42 h-42 bg-gradient-to-br from-emerald-300/35 to-emerald-400/25 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-300/40 to-purple-300/30 rounded-full blur-3xl"></div>
            </div>
            <Reviews />
          </div>

          {/* Call to Action with accent colors */}
          <div className="relative">
            {/* Energetic accent colors for CTA section */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-8 left-1/5 w-44 h-44 bg-gradient-to-br from-emerald-300/45 to-cyan-300/35 rounded-full blur-3xl"></div>
              <div className="absolute bottom-12 right-1/4 w-52 h-52 bg-gradient-to-br from-blue-300/40 to-purple-300/30 rounded-full blur-3xl"></div>
            </div>
            <CallToAction />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;