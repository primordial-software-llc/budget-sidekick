const generator = require('sitemap-generator');
const path = require('path');
const fs = require('fs');
const { DOMParser, XMLSerializer } = require('xmldom');

// Define the site URLs
const siteUrl = 'https://www.budgetsidekick.com'; // Production domain for the sitemap
const localUrl = 'http://localhost:3000'; // Local URL to crawl

// Load education content data
const educationContent = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'education-content.json'), 'utf8'));
const articleDates = {};
educationContent.articles.forEach(article => {
	articleDates[article.id] = article.date;
});

// Initialize the generator to crawl local URL
const sitemap = generator(localUrl, {
	stripQuerystring: true,
	filepath: path.join(__dirname, 'public', 'sitemap.xml'),
	lastMod: true,
	maxDepth: 0,  // Set to 0 for unlimited crawl depth
	priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2]
});

// Register event listeners
sitemap.on('done', () => {
	console.log('Local site crawl completed!');
	
	try {
		// Read the generated sitemap file
		const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
		const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
		
		// Parse the XML
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(sitemapContent, 'text/xml');
		
		// Find all <loc> elements
		const locElements = xmlDoc.getElementsByTagName('loc');
		
		// Replace the local URL with the production URL in each <loc> element
		// and update lastmod if we have a date for this article
		for (let i = 0; i < locElements.length; i++) {
			const locElement = locElements[i];
			const currentUrl = locElement.textContent;
			const updatedUrl = currentUrl.replace(localUrl, siteUrl);
			locElement.textContent = updatedUrl;
			
			// Try to extract article ID from URL
			const urlPath = new URL(currentUrl).pathname;
			const articleId = urlPath.split('/').pop();
			
			// If we have a date for this article, update the lastmod
			if (articleDates[articleId]) {
				const urlElement = locElement.parentNode;
				const lastmodElement = urlElement.getElementsByTagName('lastmod')[0];
				if (lastmodElement) {
					lastmodElement.textContent = articleDates[articleId];
				}
			}
		}
		
		// Serialize the XML back to a string
		const serializer = new XMLSerializer();
		const updatedSitemapContent = serializer.serializeToString(xmlDoc);
		
		// Write the updated sitemap back to the file
		fs.writeFileSync(sitemapPath, updatedSitemapContent);
		
		console.log('Sitemap updated with production URL and article dates successfully!');
		console.log('Sitemap saved to:', sitemapPath);
	} catch (error) {
		console.error('Error processing sitemap:', error);
	}
});

sitemap.on('error', (error) => {
	console.error('Error generating sitemap:', error);
});

// Log before starting the generator
console.log('Starting sitemap generation...');
console.log('Crawling local URL:', localUrl);
console.log('Using production domain in sitemap:', siteUrl);

// Start the crawler
sitemap.start();