export const reviews = [
  {
    name: "Sarah Johnson",
    role: "First-Time Homebuyer",
    content: "Budget Sidekick's one-year homebuying guide and mortgage comparison tools were invaluable in my journey to homeownership.",
    rating: 5,
    date: "2025-03-15"
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    content: "The nested account structure helps me keep extremely detailed projections that I can compare directly against my Quickbooks online profit and loss report.",
    rating: 5,
    date: "2025-03-10"
  },
  {
    name: "Emma Rodriguez",
    role: "Personal Finance Enthusiast",
    content: "Budget Sidekick's overview report helps me consolidate my entire financial view across multiple financial institutions into one clear picture.",
    rating: 5,
    date: "2025-03-05"
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