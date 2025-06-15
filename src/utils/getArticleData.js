import educationContent from '@/data/education-content.json';

export function getArticleData(articleId) {
  const article = educationContent.articles.find(a => a.id === articleId);
  if (!article) {
    throw new Error(`Article data not found for id: ${articleId}`);
  }
  return article;
} 