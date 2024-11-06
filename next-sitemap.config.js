/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://glow.team',
  generateRobotsTxt: true,
  exclude: ['/form-success'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/form-success', '/scene', '/cgi-bin', '*?'] },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://glow.team'}/sitemap-0.xml`,
    ],
  },
  outDir: 'out',
};
