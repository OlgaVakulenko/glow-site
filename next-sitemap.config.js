/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://glow.team',
  generateRobotsTxt: false, // (optional)
  // robotsTxtOptions: {
  //   policies: [
  //     { userAgent: '*', allow: '/', disallow: '/form-success' },
  //     { userAgent: '*', disallow: '/scene' },
  //     { userAgent: '*', disallow: '/cgi-bin' },
  //     { userAgent: '*', disallow: '*?' },
  //   ],
  // },
  outDir: 'out',
  // ...other options
};
