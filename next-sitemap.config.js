/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://glow.team',
  generateRobotsTxt: true, // (optional)
  outDir: 'out',
  // ...other options
};
