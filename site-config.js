const {prodConfiguration}  = require('kenekt-site-configuration');
const _  = require('lodash');
const { apiEndpoint } = require('./prismic-configuration');
const argv = require('yargs').argv;

if (_.isEmpty(argv.theme) || _.includes(["mosman", "narrabeen", "randwick"], argv.theme) === false || _.isEmpty(argv.themeversion)) {
  throw new Error('Usage: --theme=mosman --theme-version="1.0.0" . Theme can be mosman, randwick or narrabeen');
}

console.log("Running script to produce site config. Theme: " + argv.theme);

prodConfiguration(apiEndpoint, argv.theme, 8000, argv.themeversion);
