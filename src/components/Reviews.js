import { StarIcon, QuoteIcon } from 'lucide-react';
import { reviews } from '@/data/reviews';

export default function Reviews() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Budget Sidekick for their financial management needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm relative"
            >
              <QuoteIcon className="absolute top-4 right-4 w-6 h-6 text-blue-100" />
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{review.content}</p>
              <div className="border-t pt-3">
                <p className="text-gray-900">{review.name}</p>
                <p className="text-sm text-blue-600">{review.role}</p>
                <p className="text-xs text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 