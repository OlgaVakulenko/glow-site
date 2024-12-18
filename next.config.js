/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    // loader: 'custom',
    formats: ['image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    unoptimized: true,
  },

  experimental: {
    // optimizeCss: {
    //   fonts: true,
    //   minimumExternalSize: 10 * 1000 * 1000,
    // },
    scrollRestoration: true,
  },
  transpilePackages: ['gsap'],
  async redirects() {
    return [
      {
        source: '/blog/the-design-looks-great%2C-but-the-final-product-does-not-fix-frontend-issues-with-design-qa/',
        destination: '/blog/the-design-looks-great,-but-the-final-product-does-not-fix-frontend-issues-with-design-qa/',
        permanent: true,
				statusCode: 301,
      },
      {
        source: '/blog/terms-of-service/',
        destination: '/terms-of-service/',
        permanent: true,
				statusCode: 301,
      },
      {
        source: '/contact/',
        destination: '/contact-us/',
        permanent: true,
				statusCode: 301,
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

// module.exports = nextConfig;
