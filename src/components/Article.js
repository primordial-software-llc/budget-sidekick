import React from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Disclaimer from '@/components/Disclaimer';
import educationContent from '@/data/education-content.json';

function Article({ 
  children, 
  title, 
  icon: Icon, 
  articleId,
  breadcrumbTitle,
  accentColor = 'blue',
  disclaimerMessage
}) {
  // Find the article data to get the date
  const articleData = educationContent.articles.find(article => article.id === articleId);
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Map color names to tailwind classes
  const colorMap = {
    blue: {
      icon: 'text-blue-600',
      light: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-800',
      accent: 'text-blue-600'
    },
    green: {
      icon: 'text-green-600',
      light: 'bg-green-50',
      border: 'border-green-100',
      text: 'text-green-800',
      accent: 'text-green-600'
    },
    purple: {
      icon: 'text-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-100',
      text: 'text-purple-800',
      accent: 'text-purple-600'
    },
    indigo: {
      icon: 'text-indigo-600',
      light: 'bg-indigo-50',
      border: 'border-indigo-100',
      text: 'text-indigo-800',
      accent: 'text-indigo-600'
    },
    amber: {
      icon: 'text-amber-600',
      light: 'bg-amber-50',
      border: 'border-amber-100',
      text: 'text-amber-800',
      accent: 'text-amber-600'
    }
  };

  const colors = colorMap[accentColor] || colorMap.blue;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Education Center', href: '/education' },
              { label: breadcrumbTitle || title }
            ]} />
            <div className="flex items-center gap-3 mt-2">
              {Icon && <Icon className={`h-8 w-8 ${colors.icon}`} />}
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center gap-2">
                {Icon && <Icon className={`w-5 h-5 ${colors.icon}`} />}
                <p className={`${colors.accent} text-sm font-medium`}>Financial Education Series</p>
              </div>
              {articleData && articleData.date && (
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(articleData.date)}
                </div>
              )}
            </div>
            
            {children}
          </div>

          <Disclaimer 
            articleId={articleId}
            message={disclaimerMessage}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Article;