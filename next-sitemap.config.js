/**
 * @type {import('next-sitemap').IConfig}
 * @see https://snapout-hackathon.vercel.app/
 */
module.exports = {
  siteUrl: 'https://snapout-hackathon.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
