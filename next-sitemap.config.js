/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://glow.team',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: '/form-success' }],
  },
  outDir: 'out',
  // ...other options
};
