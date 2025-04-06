import React from 'react';
import { AlertTriangle } from 'lucide-react';
import educationContent from '@/data/education-content.json';

function Disclaimer({ message, articleId }) {
  // Get current year or find the article's date from education content
  let year = new Date().getFullYear();
  
  if (articleId) {
    const article = educationContent.articles.find(article => article.id === articleId);
    if (article) {
      // Extract year from article date (format: YYYY-MM-DD)
      const articleDate = new Date(article.date);
      year = articleDate.getFullYear();
    }
  }
  
  // Replace any placeholder for year with the actual year
  const formattedMessage = message?.replace(/{{year}}/g, year.toString()) || 
    `This content is educational in nature and updated as of ${year}. The information provided is general in nature and not personalized financial advice. Please consult with qualified professionals before making financial decisions.`;

  return (
    <div className="mt-8 py-4 px-5 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-gray-700 text-sm">
          {formattedMessage}
        </p>
      </div>
    </div>
  );
}

export default Disclaimer; 