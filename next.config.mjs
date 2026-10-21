const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Present-category';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? `/${repoName}` : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    domains: ['placehold.co', 'images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || '',
  },
};

export default nextConfig;

