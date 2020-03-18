module.exports = {
  host: process.env.SITE_URL,
  sitemap: process.env.SITE_URL + "/sitemap.xml",
  policy: [
    {
      userAgent: "*",
      allow: "/",
      // disallow: ['/']
    },
  ],
};
