import React from 'react';
import Link from 'next/link';
import { BookOpenIcon, PieChart, Calendar, TrendingUp, AlertTriangle, Shield, PiggyBank } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

function EducationPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-gray-50 py-12">
				<div className="max-w-6xl mx-auto px-6">
					<div className="mb-8">
						<Breadcrumbs items={[
							{ label: 'Home', href: '/' },
							{ label: 'Education Center' }
						]} />
						<h1 className="text-3xl font-bold text-gray-900 mt-2">Financial Education Center</h1>
					</div>
					
					<div className="text-center mb-10">
						<p className="text-gray-600 max-w-2xl mx-auto">
							Strengthen your financial knowledge with our growing library of educational resources
							designed to help you make better financial decisions and take control of your financial future.
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						<Link href="/education/sec-filing-timelines" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
							<div className="flex items-center gap-2 mb-3">
								<Calendar className="w-5 h-5 text-blue-600" />
								<h3 className="text-xl font-bold text-blue-700">SEC Filing Timelines</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Understanding when companies report their official numbers is essential for making informed investment decisions.
							</p>
							<div className="text-blue-600 font-medium">Read Article →</div>
						</Link>
						
						<Link href="/education/50-30-20-budget" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
							<div className="flex items-center gap-2 mb-3">
								<PieChart className="w-5 h-5 text-blue-600" />
								<h3 className="text-xl font-bold text-blue-700">50/30/20 Budget Rule</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Divides after-tax income into needs (50%), wants (30%), and savings/debt (20%) for a balanced financial life.
							</p>
							<div className="text-blue-600 font-medium">Read Article →</div>
						</Link>
						
						<Link href="/education/retirement-account-limits" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
							<div className="flex items-center gap-2 mb-3">
								<PiggyBank className="w-5 h-5 text-blue-600" />
								<h3 className="text-xl font-bold text-blue-700">Retirement Account Limits</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Comparison of Roth vs. 401(k) account limits, tax advantages, and why account ownership matters for your retirement.
							</p>
							<div className="text-blue-600 font-medium">Read Article →</div>
						</Link>
					</div>
					
					<div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Education Center</h2>
						<p className="text-gray-600 mb-6">
							At Budget Sidekick, we believe that financial education is essential for making sound financial decisions. 
							Our educational resources are designed to help you understand financial concepts in a clear, accessible way.
						</p>
						
						<h3 className="text-xl font-semibold text-gray-900 mb-3">What's Coming?</h3>
						<p className="text-gray-600 mb-4">
							We're constantly developing new content to help you navigate the complex world of personal and business finance.
							Here are some topics we'll be covering in the future:
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
								<h3 className="text-lg font-medium text-gray-800 mb-2">Financial Statement Analysis</h3>
								<p className="text-gray-600 text-sm">Learning how to extract meaningful insights from balance sheets, income statements, and cash flow reports.</p>
							</div>
							
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
								<h3 className="text-lg font-medium text-gray-800 mb-2">Business Entity Structures</h3>
								<p className="text-gray-600 text-sm">Comparing different business structures and their financial implications.</p>
							</div>
							
							<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
								<h3 className="text-lg font-medium text-gray-800 mb-2">Investment Basics</h3>
								<p className="text-gray-600 text-sm">Understanding the fundamentals of investing and building a diversified portfolio.</p>
							</div>
						</div>
						
						<div className="mt-8 py-4 px-5 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
							<AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
							<div>
								<p className="text-gray-700 text-sm">
									All content is educational in nature and updated as of March 2025. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our 
									<Link href="/terms" className="text-blue-600 hover:underline"> Terms of Service</Link>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default EducationPage; 