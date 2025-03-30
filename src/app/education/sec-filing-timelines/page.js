import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle, AlertTriangle, Clock, Calendar, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const Timeline = () => {
	return (
		<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
			<div className="flex items-center justify-center gap-2 mb-2">
				<BookOpen className="w-5 h-5 text-blue-600" />
				<p className="text-blue-600 text-sm font-medium">Financial Education Series</p>
			</div>
			<h2 className="text-2xl font-bold text-center mb-3 text-gray-900">Understanding SEC Filing Timelines</h2>
			<h3 className="text-lg text-center text-gray-700 mb-6">The Smart Investor's Guide to Authoritative Financial Data</h3>
			
			<p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
				Knowing when companies report their official numbers is essential for making informed investment decisions. 
				Here's our research-backed guide to the SEC filing schedule that savvy investors rely on.
			</p>
			
			<div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
				<h3 className="flex items-center text-blue-800 font-semibold text-lg mb-2">
					<AlertTriangle className="w-5 h-5 mr-2" />
					Why This Matters
				</h3>
				<p className="text-gray-700">
					In today's information-saturated market, distinguishing between speculation and fact is crucial. These filing dates 
					represent when <strong>100% authoritative</strong> financial information becomes available. Our clients appreciate 
					having this clarity when building their financial systems of record.
				</p>
			</div>
			
			<div className="space-y-8">
				{/* Q1 Report */}
				<div className="relative">
					<div className="absolute left-0 top-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
						<CheckCircle className="w-5 h-5 text-white" />
					</div>
					<div className="ml-12 pb-8 border-l-2 border-gray-200 pl-6">
						<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
							<div className="flex items-center mb-3">
								<Calendar className="w-5 h-5 text-gray-700 mr-2" />
								<h3 className="text-xl font-semibold text-gray-900">May 15</h3>
							</div>
							<h4 className="text-lg font-medium text-blue-700 mb-2">Q1 Financial Reports (January-March)</h4>
							<p className="text-gray-600 mb-2">
								All companies must file their Q1 reports by this date. This includes financial data for the first quarter 
								of the calendar year.
							</p>
							<div className="bg-green-50 p-3 rounded-lg border border-green-100">
								<h5 className="text-sm font-medium text-green-800 mb-2">System of Record Action</h5>
								<p className="text-gray-700 text-sm">
									Record Q1 financial data from all your tracked public companies after this date for 100% authoritative numbers.
								</p>
							</div>
						</div>
					</div>
				</div>
				
				{/* Q2 Report */}
				<div className="relative">
					<div className="absolute left-0 top-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
						<CheckCircle className="w-5 h-5 text-white" />
					</div>
					<div className="ml-12 pb-8 border-l-2 border-gray-200 pl-6">
						<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
							<div className="flex items-center mb-3">
								<Calendar className="w-5 h-5 text-gray-700 mr-2" />
								<h3 className="text-xl font-semibold text-gray-900">August 14</h3>
							</div>
							<h4 className="text-lg font-medium text-blue-700 mb-2">Q2 Financial Reports (April-June)</h4>
							<p className="text-gray-600 mb-2">
								All companies must file their Q2 reports by this date. This includes financial data for the second quarter 
								of the calendar year.
							</p>
							<div className="bg-green-50 p-3 rounded-lg border border-green-100">
								<h5 className="text-sm font-medium text-green-800 mb-2">System of Record Action</h5>
								<p className="text-gray-700 text-sm">
									Record Q2 financial data from all your tracked public companies after this date for 100% authoritative numbers.
								</p>
							</div>
						</div>
					</div>
				</div>
				
				{/* Q3 Report */}
				<div className="relative">
					<div className="absolute left-0 top-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
						<CheckCircle className="w-5 h-5 text-white" />
					</div>
					<div className="ml-12 pb-8 border-l-2 border-gray-200 pl-6">
						<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
							<div className="flex items-center mb-3">
								<Calendar className="w-5 h-5 text-gray-700 mr-2" />
								<h3 className="text-xl font-semibold text-gray-900">November 14</h3>
							</div>
							<h4 className="text-lg font-medium text-blue-700 mb-2">Q3 Financial Reports (July-September)</h4>
							<p className="text-gray-600 mb-2">
								All companies must file their Q3 reports by this date. This includes financial data for the third quarter 
								of the calendar year.
							</p>
							<div className="bg-green-50 p-3 rounded-lg border border-green-100">
								<h5 className="text-sm font-medium text-green-800 mb-2">System of Record Action</h5>
								<p className="text-gray-700 text-sm">
									Record Q3 financial data from all your tracked public companies after this date for 100% authoritative numbers.
								</p>
							</div>
						</div>
					</div>
				</div>
				
				{/* Annual Report */}
				<div className="relative">
					<div className="absolute left-0 top-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
						<CheckCircle className="w-5 h-5 text-white" />
					</div>
					<div className="ml-12 pl-6">
						<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
							<div className="flex items-center mb-3">
								<Calendar className="w-5 h-5 text-gray-700 mr-2" />
								<h3 className="text-xl font-semibold text-gray-900">March 31</h3>
							</div>
							<h4 className="text-lg font-medium text-blue-700 mb-2">Annual Reports/Q4 Financial Reports (October-December)</h4>
							<p className="text-gray-600 mb-2">
								All companies must file their annual reports (10-K) by this date. This includes Q4 data and the full 
								year financial summary.
							</p>
							<div className="bg-green-50 p-3 rounded-lg border border-green-100">
								<h5 className="text-sm font-medium text-green-800 mb-2">System of Record Action</h5>
								<p className="text-gray-700 text-sm">
									Record annual financial data from all your tracked public companies after this date for 100% authoritative numbers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-10 bg-gray-50 rounded-lg p-4 border border-gray-200">
				<h3 className="text-lg font-semibold text-gray-900 mb-3">The Information Landscape Between Official Filing Dates</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-md font-medium text-gray-900 mb-2">Company Voluntary Disclosures</h4>
						<p className="text-gray-600 text-sm">
							Press releases, earnings calls, and forward guidance. Often preliminary and subject to later adjustment.
						</p>
					</div>
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-md font-medium text-gray-900 mb-2">Form 8-K (Special Events)</h4>
						<p className="text-gray-600 text-sm">
							Reports of significant events like mergers, acquisitions, or executive changes. Important but often lacks full financial context.
						</p>
					</div>
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-md font-medium text-gray-900 mb-2">Analyst Estimates</h4>
						<p className="text-gray-600 text-sm">
							Third-party projections based on past results and market trends. Informative but inherently speculative.
						</p>
					</div>
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<h4 className="text-md font-medium text-gray-900 mb-2">Market Commentary</h4>
						<p className="text-gray-600 text-sm">
							Media and financial analyst opinions rather than official data. Valuable for context but not for accounting records.
						</p>
					</div>
				</div>
			</div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Smart Investing Starts With Quality Data</h3>
                </div>
                <p className="text-gray-700 mb-4">
                    This timeline reflects our commitment to providing our clients with objective, fact-based financial intelligence. 
                    As a carrier of information, we relay what we believe to be accurate financial data, while users maintain responsibility for their financial decisions.
                </p>
                <div className="flex items-start gap-2 text-gray-700 text-sm italic border-t border-blue-100 pt-4">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p>
                        This educational resource presents factual information about SEC filing requirements as of March 2025, similar to how a newspaper would report financial deadlines.
                        While we strive for accuracy, regulations may change over time. See our <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> for more information.
                    </p>
                </div>
            </div>
		</div>
	);
};

function SECFilingTimelinesPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-gray-50 py-12">
				<div className="max-w-6xl mx-auto px-6">
					<div className="mb-8">
						<Breadcrumbs items={[
							{ label: 'Home', href: '/' },
							{ label: 'Education Center', href: '/education' },
							{ label: 'SEC Filing Timelines' }
						]} />
						<h1 className="text-3xl font-bold text-gray-900 mt-2">Financial Education Center</h1>
					</div>
					
					<div className="grid grid-cols-1 gap-8">
						<Timeline />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default SECFilingTimelinesPage; 