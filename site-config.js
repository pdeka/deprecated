const SiteConfiguration  = require('kenekt-site-configuration');
const { apiEndpoint } = require('./prismic-configuration');

console.log("Running script to produce site config");

SiteConfiguration().run(apiEndpoint, './.env', './.netlify.toml', 'mosman', 8001)
