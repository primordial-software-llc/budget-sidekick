export function getArticleMetadata(article, articleId) {
  return {
    title: `Budget Sidekick - ${article.title}`,
    description: article.description,
    openGraph: {
      title: `Budget Sidekick - ${article.title}`,
      description: article.description,
      type: 'article',
      url: `https://www.budgetsidekick.com/education/${articleId}`
    }
  };
} 