const {prodConfiguration}  = require('kenekt-site-configuration');
const { apiEndpoint } = require('./prismic-configuration');

console.log("Running script to produce site config");

prodConfiguration(apiEndpoint, 'mosman', 8000);
