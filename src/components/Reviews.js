import { StarIcon, QuoteIcon } from 'lucide-react';
import { reviews } from '@/data/reviews';

export default function Reviews() {
  // Get initials from name
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('');
  };

  // Get color scheme based on index
  const getColorScheme = (index) => {
    const schemes = [
      { bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600', text: 'text-white' },
      { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', text: 'text-white' },
      { bg: 'bg-gradient-to-br from-purple-500 to-purple-600', text: 'text-white' }
    ];
    return schemes[index % schemes.length];
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Budget Sidekick for their financial management needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => {
            const colorScheme = getColorScheme(index);
            return (
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
                <div className="border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${colorScheme.bg} ${colorScheme.text} flex items-center justify-center font-bold text-lg shadow-sm`}>
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">{review.name}</p>
                      <p className="text-sm text-blue-600">{review.role}</p>
                      <p className="text-xs text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 