/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Add basePath if your site isn't at the root of your domain
  // basePath: '/your-repo-name',
};

export default nextConfig;
