import React from 'react';
import Link from 'next/link';
import { PieChart, DollarSign, AlertTriangle, Percentage, BadgePercent, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Disclaimer from '@/components/Disclaimer';
import Article from '@/components/Article';
import { getArticleData } from '@/utils/getArticleData';
import { getArticleMetadata } from '@/utils/getArticleMetadata';

const ARTICLE_ID = '50-30-20-budget';

const articleData = getArticleData(ARTICLE_ID);

export const metadata = getArticleMetadata(articleData, ARTICLE_ID);

const BudgetGuide = () => {
	return (
		<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
			<div className="flex items-center justify-center gap-2 mb-2">
				<PieChart className="w-5 h-5 text-blue-600" />
				<p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
			</div>
			<h2 className="text-2xl font-bold text-center mb-3 text-gray-900">The 50/30/20 Budget Rule</h2>
			<h3 className="text-lg text-center text-gray-700 mb-6">A Simple Framework for Financial Success</h3>
			
			<p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
				The 50/30/20 rule divides your after-tax income into three categories: 50% for needs, 30% for wants, 
				and 20% for savings and debt repayment. This straightforward approach helps simplify budgeting while ensuring financial stability.
			</p>
			
			<div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
				<h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
					<AlertTriangle className="w-5 h-5 mr-2" />
					Why This Matters
				</h3>
				<p className="text-gray-700">
					Having a clear framework for your spending decisions eliminates the stress of daily money choices. The 50/30/20 rule
					creates boundaries that ensure you're meeting essential needs, enjoying life, and building financial security simultaneously.
				</p>
			</div>
			
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-green-50 p-5 rounded-xl border border-green-100">
					<div className="flex items-center mb-4">
						<div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
							<span className="text-white font-bold">50%</span>
						</div>
						<h3 className="text-xl font-bold text-gray-900">Needs</h3>
					</div>
					<p className="text-gray-700 mb-3">
						Essential expenses you can't avoid. These are costs required for basic living and financial obligations.
					</p>
					<p className="text-green-700 text-sm font-medium">
						Account Category: Cost of Living
					</p>
				</div>
				
				<div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
					<div className="flex items-center mb-4">
						<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
							<span className="text-white font-bold">30%</span>
						</div>
						<h3 className="text-xl font-bold text-gray-900">Wants</h3>
					</div>
					<p className="text-gray-700 mb-3">
						Non-essential purchases that enhance your life. These are costs you could technically live without.
					</p>
					<p className="text-blue-700 text-sm font-medium">
						Account Category: Discretionary
					</p>
				</div>
				
				<div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
					<div className="flex items-center mb-4">
						<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
							<span className="text-white font-bold">20%</span>
						</div>
						<h3 className="text-xl font-bold text-gray-900">Savings & Debt</h3>
					</div>
					<p className="text-gray-700 mb-3">
						Contributions toward financial security and reducing obligations. This builds wealth and reduces financial stress.
					</p>
					<p className="text-purple-700 text-sm font-medium">
						Account Category: Savings and Debt
					</p>
				</div>
			</div>
			
			<h3 className="text-2xl font-bold text-center mb-6 mt-12">Sample 50/30/20 Budget</h3>
			<p className="text-center text-gray-600 mb-8">Based on a monthly after-tax income of $4,000</p>
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
				<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
					<div className="bg-green-100 p-4 rounded-t-xl">
						<h4 className="font-bold text-gray-900 flex items-center justify-between">
							Needs (50%)
							<span className="text-green-700">$2,000</span>
						</h4>
					</div>
					<div className="p-4">
						<div className="space-y-3">
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Cost of Living:Housing:Rent</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Monthly apartment rent</span>
									<span className="text-red-600 font-medium">-$1,000.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Cost of Living:Utilities</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Cost of Living:Utilities:Electricity</span>
									<span className="text-red-600 font-medium">-$100.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Cost of Living:Utilities:Water</span>
									<span className="text-red-600 font-medium">-$50.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Cost of Living:Utilities:Internet</span>
									<span className="text-red-600 font-medium">-$75.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Cost of Living:Transportation</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Cost of Living:Transportation:Insurance</span>
									<span className="text-red-600 font-medium">-$125.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Cost of Living:Transportation:Gas</span>
									<span className="text-red-600 font-medium">-$150.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Cost of Living:Transportation:Parts and Labor</span>
									<span className="text-red-600 font-medium">-$75.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Cost of Living:Transportation:Tolls</span>
									<span className="text-red-600 font-medium">-$25.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Cost of Living:Groceries</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Weekly grocery shopping</span>
									<span className="text-red-600 font-medium">-$400.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
					<div className="bg-blue-100 p-4 rounded-t-xl">
						<h4 className="font-bold text-gray-900 flex items-center justify-between">
							Wants (30%)
							<span className="text-blue-700">$1,200</span>
						</h4>
					</div>
					<div className="p-4">
						<div className="space-y-3">
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Discretionary:Entertainment</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Discretionary:Entertainment:Streaming</span>
									<span className="text-red-600 font-medium">-$50.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Discretionary:Entertainment:Movies</span>
									<span className="text-red-600 font-medium">-$75.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Discretionary:Dining</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Restaurant meals</span>
									<span className="text-red-600 font-medium">-$250.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Discretionary:Shopping</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Clothing and accessories</span>
									<span className="text-red-600 font-medium">-$150.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Miscellaneous shopping</span>
									<span className="text-red-600 font-medium">-$100.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Discretionary:Vehicle</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Base reliable car alternative</span>
									<span className="text-gray-500 font-medium">-$200.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Luxury vehicle premium</span>
									<span className="text-red-600 font-medium">-$300.00</span>
								</div>
								<div className="flex justify-between text-sm text-xs italic mt-1">
									<span className="text-gray-500">Note: Only the premium above a reliable vehicle is counted as discretionary</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Discretionary:Subscriptions</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Various monthly subscriptions</span>
									<span className="text-red-600 font-medium">-$75.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
					<div className="bg-purple-100 p-4 rounded-t-xl">
						<h4 className="font-bold text-gray-900 flex items-center justify-between">
							Savings & Debt (20%)
							<span className="text-purple-700">$800</span>
						</h4>
					</div>
					<div className="p-4">
						<div className="space-y-3">
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Savings and Debt:Retirement</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">401(k) contribution</span>
									<span className="text-red-600 font-medium">-$300.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Roth IRA contribution</span>
									<span className="text-red-600 font-medium">-$100.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Savings and Debt:Emergency</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Emergency fund savings</span>
									<span className="text-red-600 font-medium">-$150.00</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Savings and Debt:Debt Repayment</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Savings and Debt:Debt Repayment:Student Loan</span>
									<span className="text-red-600 font-medium">-$150.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Savings and Debt:Debt Repayment:Credit Card</span>
									<span className="text-red-600 font-medium">-$100.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
				<h3 className="text-xl font-semibold text-gray-900 mb-4">Tips for Implementing the 50/30/20 Rule</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-blue-700 mb-2">Classify Your Expenses Correctly</h4>
						<p className="text-gray-600 text-sm">
							Be honest about which expenses are truly needs versus wants. For example, basic transportation is a need, but a luxury vehicle is a want. 
							The premium you pay for luxury should be categorized as discretionary.
						</p>
					</div>
					
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-blue-700 mb-2">Adjust the Percentages When Needed</h4>
						<p className="text-gray-600 text-sm">
							In high-cost areas, you might need to allocate more than 50% to needs. If you have significant debt, you might allocate more than 20% to the savings and debt category.
						</p>
					</div>
					
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-blue-700 mb-2">Use Detailed Account Hierarchies</h4>
						<p className="text-gray-600 text-sm">
							Create detailed account hierarchies to track spending within each category. This gives you greater visibility into exactly where your money is going.
						</p>
					</div>
					
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-blue-700 mb-2">Review and Adjust Regularly</h4>
						<p className="text-gray-600 text-sm">
							Review your budget monthly to ensure you're staying within your targets. Adjust as necessary when your income or expenses change.
						</p>
					</div>
				</div>
			</div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                    <BadgePercent className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Taking Control of Your Financial Future</h3>
                </div>
                <p className="text-gray-700 mb-4">
                    The 50/30/20 rule provides a simple but powerful framework for managing your finances. By allocating your 
                    income thoughtfully across needs, wants, and savings, you can build a sustainable financial future while 
                    still enjoying the present.
                </p>
                <p className="text-gray-700 text-sm italic">
                    Note: Every individual's financial situation is unique. This framework is intended as a starting point 
                    that you can adapt to your specific circumstances and goals.
                </p>
            </div>
		</div>
	);
};

function BudgetRulePage() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-gray-50 py-12">
				<div className="max-w-6xl mx-auto px-6">
					<div className="mb-8">
						<nav className="flex" aria-label="Breadcrumb">
							<ol className="inline-flex items-center space-x-1 md:space-x-3">
								<li className="inline-flex items-center">
									<Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
										Home
									</Link>
								</li>
								<li>
									<div className="flex items-center">
										<svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
											<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
										</svg>
										<Link href="/education" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
											Education Center
										</Link>
									</div>
								</li>
								<li aria-current="page">
									<div className="flex items-center">
										<svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
											<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
										</svg>
										<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">50/30/20 Budget Rule</span>
									</div>
								</li>
							</ol>
						</nav>
						<h1 className="text-3xl font-bold text-gray-900 mt-2">Financial Education Center</h1>
					</div>
					
					<div className="grid grid-cols-1 gap-8">
						{/* Featured Article */}
						<Article
							title={articleData.title}
							icon={PieChart}
							articleId={ARTICLE_ID}
							accentColor="blue"
							disclaimerMessage="This content is educational in nature and updated as of {{year}}. We aim to relay factual financial information, similar to how a newspaper would report market data. For complete information about our services, please review our Terms of Service."
						>
							<BudgetGuide />
						</Article>
						<Disclaimer 
							articleId="50-30-20-budget"
							message="This content is educational in nature and updated as of {{year}}. The 50/30/20 budgeting rule is a general guideline that may need to be adjusted based on your income level, cost of living in your area, stage of life, and specific financial goals. Budgeting percentages should be personalized to your unique circumstances. Please consult with a financial professional for advice tailored to your situation."
						/>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default BudgetRulePage; 