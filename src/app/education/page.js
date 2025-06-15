import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import EducationAboutSection from '@/components/EducationAboutSection';
import educationContent from '@/data/education-content.json';
import { iconMap } from '@/utils/icons';
import { Calendar } from 'lucide-react';

function EducationPage() {
	// Sort articles by date in descending order (newest first)
	const sortedArticles = [...educationContent.articles].sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	// Format date for display
	const formatDate = (dateString) => {
		const [year, month, day] = dateString.split('-').map(Number);
		const date = new Date(year, month - 1, day);
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	};

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
						{sortedArticles.map((article) => {
							const IconComponent = iconMap[article.icon];
							return (
								<Link 
									key={article.id}
									href={`/education/${article.id}`} 
									className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
								>
									<div className="flex items-center gap-2 mb-3">
										{IconComponent ? <IconComponent className="w-5 h-5 text-blue-600" /> : null}
										<h3 className="text-xl font-bold text-blue-700">{article.title}</h3>
									</div>
									<p className="text-gray-600 mb-2">
										{article.description}
									</p>
									<div className="flex items-center justify-between">
										<div className="text-blue-600 font-medium">Read Article →</div>
										<div className="flex items-center text-gray-500 text-sm">
											<Calendar className="w-3.5 h-3.5 mr-1" />
											{formatDate(article.date)}
										</div>
									</div>
								</Link>
							);
						})}
					</div>
					
					<EducationAboutSection />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default EducationPage; 