import React from 'react';
import Link from 'next/link';
import { PieChart, DollarSign, AlertTriangle, BarChart3, Wallet, BadgeCheck, Percent, Scale, ExternalLink, Lock, CreditCard, PiggyBank, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Disclaimer from '@/components/Disclaimer';

const RetirementAccountGuide = () => {
	return (
		<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
			<div className="flex items-center justify-center gap-2 mb-2">
				<PieChart className="w-5 h-5 text-blue-600" />
				<p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
			</div>
			<h2 className="text-2xl font-bold text-center mb-3 text-gray-900">Retirement Account Contribution Limits</h2>
			<h3 className="text-lg text-center text-gray-700 mb-6">Understanding Your Options for Long-Term Financial Security</h3>
			
			<p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
				Navigating retirement accounts can be complex, but understanding contribution limits and 
				account differences is essential for maximizing your long-term financial security. This guide explains current limits and 
				important distinctions between various retirement accounts, particularly Roth IRAs vs. traditional 401(k) plans.
			</p>
			
			<div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
				<h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
					<AlertTriangle className="w-5 h-5 mr-2" />
					Why This Matters
				</h3>
				<p className="text-gray-700">
					The choices you make about retirement accounts today can significantly impact your financial future. 
					Account ownership, contribution limits, tax advantages, and investment options all play crucial roles in 
					determining how much money you'll have available in retirement and how much flexibility you'll have in accessing those funds.
				</p>
			</div>
			
			<h3 className="text-2xl font-bold text-center mb-6">2024-2025 Contribution Limits</h3>
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
				<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
					<div className="bg-purple-100 p-4 rounded-t-xl">
						<h4 className="font-bold text-gray-900 flex items-center">
							<PiggyBank className="w-5 h-5 mr-2 text-purple-700" />
							Roth IRA
						</h4>
					</div>
					<div className="p-5">
						<div className="space-y-4">
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2024 Contribution Limits</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Under age 50</span>
									<span className="text-purple-600 font-medium">$7,000</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Age 50 and older (catch-up)</span>
									<span className="text-purple-600 font-medium">$8,000 ($1,000 extra)</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2025 Contribution Limits</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Under age 50</span>
									<span className="text-purple-600 font-medium">$7,000</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Age 50 and older (catch-up)</span>
									<span className="text-purple-600 font-medium">$8,000 ($1,000 extra)</span>
								</div>
								<div className="text-xs text-gray-500 italic mt-1">No increase from 2024</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2024 Income Limits (Single Filers)</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Full contribution allowed</span>
									<span className="text-purple-600 font-medium">&lt; $146,000</span>
								</div>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Partial contribution</span>
									<span className="text-purple-600 font-medium">$146,000 - $161,000</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">No contribution allowed</span>
									<span className="text-purple-600 font-medium">≥ $161,000</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2024 Income Limits (Married Filing Jointly)</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Full contribution allowed</span>
									<span className="text-purple-600 font-medium">&lt; $230,000</span>
								</div>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Partial contribution</span>
									<span className="text-purple-600 font-medium">$230,000 - $240,000</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">No contribution allowed</span>
									<span className="text-purple-600 font-medium">≥ $240,000</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2025 Income Limits (Single Filers)</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Full contribution allowed</span>
									<span className="text-purple-600 font-medium">&lt; $150,000</span>
								</div>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Partial contribution</span>
									<span className="text-purple-600 font-medium">$150,000 - $165,000</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">No contribution allowed</span>
									<span className="text-purple-600 font-medium">≥ $165,000</span>
								</div>
								<div className="text-xs text-gray-500 italic mt-1">Increased from 2024 limits</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2025 Income Limits (Married Filing Jointly)</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Full contribution allowed</span>
									<span className="text-purple-600 font-medium">&lt; $236,000</span>
								</div>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Partial contribution</span>
									<span className="text-purple-600 font-medium">$236,000 - $246,000</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">No contribution allowed</span>
									<span className="text-purple-600 font-medium">≥ $246,000</span>
								</div>
								<div className="text-xs text-gray-500 italic mt-1">Increased from 2024 limits</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
					<div className="bg-blue-100 p-4 rounded-t-xl">
						<h4 className="font-bold text-gray-900 flex items-center">
							<BarChart3 className="w-5 h-5 mr-2 text-blue-700" />
							401(k) Plans
						</h4>
					</div>
					<div className="p-5">
						<div className="space-y-4">
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2024 Contribution Limits</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Employee contribution (under age 50)</span>
									<span className="text-blue-600 font-medium">$23,000</span>
								</div>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Age 50 and older (catch-up)</span>
									<span className="text-blue-600 font-medium">$30,500 ($7,500 extra)</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Total limit (employer + employee)</span>
									<span className="text-blue-600 font-medium">$69,000</span>
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">2025 Contribution Limits</h5>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Employee contribution (under age 50)</span>
									<span className="text-blue-600 font-medium">$23,500</span>
								</div>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Age 50-59 (catch-up)</span>
									<span className="text-blue-600 font-medium">$31,000 ($7,500 extra)</span>
								</div>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-gray-600">Age 60-63 (enhanced catch-up)</span>
									<span className="text-blue-600 font-medium">$34,750 ($11,250 extra)</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Total limit (employer + employee)</span>
									<span className="text-blue-600 font-medium">$70,000</span>
								</div>
								<div className="text-xs text-gray-500 italic mt-1">New higher catch-up limits for ages 60-63 in 2025</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Income Limits</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">No income restrictions</span>
									<span className="text-blue-600 font-medium"><BadgeCheck className="w-4 h-4 inline" /></span>
								</div>
								<div className="text-xs text-gray-500 italic mt-1">
									Unlike Roth IRAs, 401(k) plans have no income limits for participation
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Employer Match</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Typical employer match</span>
									<span className="text-blue-600 font-medium">3-6% of salary</span>
								</div>
								<div className="text-xs text-gray-500 italic mt-1">
									This is essentially "free money" toward your retirement - always try to contribute enough to maximize your employer match
								</div>
							</div>
							
							<div>
								<h5 className="font-medium text-gray-900 mb-2">Required Minimum Distributions (RMDs)</h5>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Traditional 401(k)</span>
									<span className="text-blue-600 font-medium">Required at age 73</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-600">Roth 401(k)</span>
									<span className="text-blue-600 font-medium">No RMDs after 2023</span>
								</div>
								<div className="text-xs text-gray-500 italic mt-1">
									SECURE 2.0 Act eliminated RMDs for Roth 401(k)s starting in 2024
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<h3 className="text-2xl font-bold text-center mb-6 mt-12">Roth Accounts vs. Traditional 401(k): Key Differences</h3>
			
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
					<div className="flex items-center mb-4">
						<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
							<Wallet className="w-5 h-5 text-white" />
						</div>
						<h3 className="text-xl font-bold text-gray-900">Account Ownership</h3>
					</div>
					<p className="text-gray-700 mb-3">
						<span className="font-semibold">Roth IRA:</span> You own and control the account directly. It stays with you regardless of employment changes.
					</p>
					<p className="text-gray-700 mb-3">
						<span className="font-semibold">401(k):</span> Employer-sponsored and managed. Your account is tied to your employment with limited control and portability.
					</p>
					<div className="text-purple-700 text-sm font-medium border-t border-purple-200 pt-2 mt-2">
						<span className="font-semibold">Key advantage:</span> Roth IRAs offer greater control and flexibility throughout your career.
					</div>
				</div>
				
				<div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
					<div className="flex items-center mb-4">
						<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
							<Percent className="w-5 h-5 text-white" />
						</div>
						<h3 className="text-xl font-bold text-gray-900">Tax Treatment</h3>
					</div>
					<p className="text-gray-700 mb-3">
						<span className="font-semibold">Roth IRA:</span> Funded with after-tax dollars. Qualified withdrawals in retirement are completely tax-free, including earnings.
					</p>
					<p className="text-gray-700 mb-3">
						<span className="font-semibold">401(k):</span> Funded with pre-tax dollars, reducing your current taxable income. All withdrawals in retirement are taxed as ordinary income.
					</p>
					<div className="text-blue-700 text-sm font-medium border-t border-blue-200 pt-2 mt-2">
						<span className="font-semibold">Key advantage:</span> Roth accounts offer tax-free growth and retirement income.
					</div>
				</div>
				
				<div className="bg-green-50 p-5 rounded-xl border border-green-100">
					<div className="flex items-center mb-4">
						<div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
							<Scale className="w-5 h-5 text-white" />
						</div>
						<h3 className="text-xl font-bold text-gray-900">Investment Options</h3>
					</div>
					<p className="text-gray-700 mb-3">
						<span className="font-semibold">Roth IRA:</span> Wide range of investment options including individual stocks, bonds, ETFs, and low-cost index funds from any provider.
					</p>
					<p className="text-gray-700 mb-3">
						<span className="font-semibold">401(k):</span> Limited investment menu typically featuring mutual funds selected by your employer or plan administrator.
					</p>
					<div className="text-green-700 text-sm font-medium border-t border-green-200 pt-2 mt-2">
						<span className="font-semibold">Key advantage:</span> Roth IRAs provide greater investment flexibility with potentially lower fees.
					</div>
				</div>
			</div>
			
			<div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
				<h3 className="text-xl font-semibold text-gray-900 mb-6">The Power of Account Ownership: Why Roth IRAs Stand Out</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="bg-white p-5 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-purple-700 mb-3 flex items-center">
							<Lock className="w-5 h-5 mr-2" />
							Complete Control Over Your Investments
						</h4>
						<p className="text-gray-600 text-sm mb-3">
							With a Roth IRA, you can choose from virtually any investment option on the market. This means access to low-cost 
							index funds across all market segments—from S&P 500 to small-cap and international markets—providing proper 
							diversification often unavailable in employer 401(k) plans.
						</p>
						<p className="text-gray-600 text-sm">
							You're not limited to the handful of funds your employer selected, which may have higher expense ratios or inadequate 
							performance. You can seek out the most cost-effective funds with the lowest expense ratios.
						</p>
					</div>
					
					<div className="bg-white p-5 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-purple-700 mb-3 flex items-center">
							<ExternalLink className="w-5 h-5 mr-2" />
							Flexibility in Accessing Your Money
						</h4>
						<p className="text-gray-600 text-sm mb-3">
							Roth IRA contributions (not earnings) can be withdrawn at any time without penalties or taxes. This provides an 
							emergency backstop that 401(k) plans simply don't offer unless you qualify for a hardship withdrawal.
						</p>
						<p className="text-gray-600 text-sm">
							A 401(k) loan must be repaid immediately if you leave your job, potentially forcing you to take a 10% penalty plus 
							pay income tax if you can't repay the full amount. This creates significant financial risk during job transitions.
						</p>
					</div>
					
					<div className="bg-white p-5 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-purple-700 mb-3 flex items-center">
							<CreditCard className="w-5 h-5 mr-2" />
							No Required Minimum Distributions
						</h4>
						<p className="text-gray-600 text-sm">
							Roth IRAs have no required minimum distributions (RMDs) during your lifetime, giving you complete control over when 
							and how much to withdraw. Traditional 401(k)s force withdrawals starting at age 73 whether you need the money or not, 
							potentially pushing you into higher tax brackets.
						</p>
					</div>
					
					<div className="bg-white p-5 rounded-lg border border-gray-200">
						<h4 className="text-lg font-medium text-purple-700 mb-3 flex items-center">
							<BookOpen className="w-5 h-5 mr-2" />
							Superior Legacy Planning
						</h4>
						<p className="text-gray-600 text-sm">
							Roth IRAs offer significant inheritance advantages. When passed to heirs, they typically maintain their tax-free 
							status. With a 401(k), your heirs will owe income taxes on every dollar they withdraw from their inheritance, 
							potentially reducing its value significantly.
						</p>
					</div>
				</div>
			</div>
			
			<div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
				<h3 className="text-xl font-semibold text-gray-900 mb-4">The Math Behind Roth vs. Traditional Accounts</h3>
				<p className="text-gray-700 mb-5">
					From a purely mathematical perspective, if your tax rate remains exactly the same in retirement as during your working years, 
					the end result of a Roth vs. traditional account would be identical. However, several factors typically make Roth accounts more advantageous:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 className="text-lg font-medium text-blue-700 mb-3">The Tax Bracket Consideration</h4>
						<p className="text-gray-600 text-sm mb-3">
							Many people will be in a lower tax bracket in retirement, which conventionally suggests traditional accounts would be better. 
							However, this fails to account for potential future tax rate increases and the impact of required minimum distributions 
							from traditional accounts pushing you into higher brackets.
						</p>
						<p className="text-gray-600 text-sm">
							With a Roth, your entire withdrawal is tax-free, regardless of how tax rates change in the future. This provides immunity 
							from potential tax increases that may occur between now and your retirement.
						</p>
					</div>
					
					<div>
						<h4 className="text-lg font-medium text-blue-700 mb-3">Tax-Free Growth Advantage</h4>
						<p className="text-gray-600 text-sm mb-3">
							With a traditional 401(k), your tax savings occur upfront but at your marginal tax rate. However, when you withdraw, 
							you'll pay taxes on both contributions and decades of growth. With a Roth, you pay taxes only on the initial contribution, 
							while all growth becomes completely tax-free.
						</p>
						<p className="text-gray-600 text-sm">
							For example, a $6,000 contribution that grows to $60,000 over 30 years:
						</p>
						<ul className="list-disc pl-5 text-gray-600 text-sm">
							<li>Traditional: Pay taxes on the full $60,000 when withdrawn</li>
							<li>Roth: Pay taxes only on the initial $6,000 contribution, with the $54,000 in growth completely tax-free</li>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
				<div className="flex items-center mb-4">
					<DollarSign className="w-6 h-6 text-blue-600 mr-3" />
					<h3 className="text-xl font-bold text-gray-900">Optimal Retirement Saving Strategy</h3>
				</div>
				<p className="text-gray-700 mb-4">
					The ideal approach for most people is to utilize both types of accounts. First, contribute enough to your employer's 401(k) 
					to capture the full company match—this is essentially free money. Then, fund a Roth IRA up to the annual contribution limit 
					for tax-free growth and greater flexibility. If you still have funds to invest after maxing out your Roth IRA, return to your 
					401(k) and contribute additional amounts toward the annual limit.
				</p>
				<p className="text-gray-700 text-sm italic">
					Remember: Everyone's financial situation is unique. While this guide provides general information, consider consulting with a 
					financial advisor to develop a retirement strategy aligned with your specific circumstances and goals.
				</p>
			</div>
		</div>
	);
};

function RetirementAccountLimitsPage() {
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
										<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Retirement Account Limits</span>
									</div>
								</li>
							</ol>
						</nav>
						<h1 className="text-3xl font-bold text-gray-900 mt-2">Financial Education Center</h1>
					</div>
					
					<div className="grid grid-cols-1 gap-8">
						{/* Featured Article */}
						<RetirementAccountGuide />
						<Disclaimer 
							articleId="retirement-account-limits"
							message="This content is educational in nature and updated as of {{year}}. Retirement account rules and limits are subject to change. For personalized advice, consult with a qualified financial professional."
						/>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default RetirementAccountLimitsPage; 