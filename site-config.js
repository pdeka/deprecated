const {prodConfiguration}  = require('kenekt-site-configuration');
const { apiEndpoint } = require('./prismic-configuration');
const argv = require('yargs').argv;

prodConfiguration(apiEndpoint, argv.theme, 8000, argv.themeversion);
