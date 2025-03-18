export const reviews = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "Budget Sidekick has transformed how I manage my business finances. The nested account structure makes it incredibly easy to track different revenue streams and expenses.",
    rating: 5,
    date: "2024-03-15"
  },
  {
    name: "Michael Chen",
    role: "Freelance Developer",
    content: "As someone who juggles multiple clients and projects, this tool has been a game-changer. The ability to maintain separate ledgers for each client is invaluable.",
    rating: 5,
    date: "2024-03-10"
  },
  {
    name: "Emma Rodriguez",
    role: "Personal Finance Enthusiast",
    content: "The free version is incredibly powerful! I love how intuitive the interface is and how easy it is to import/export data. Perfect for tracking personal and business finances.",
    rating: 5,
    date: "2024-03-05"
  }
];

export const getStructuredDataReviews = () => reviews.map(review => ({
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": review.name
  },
  "reviewBody": review.content,
  "datePublished": review.date
})); 