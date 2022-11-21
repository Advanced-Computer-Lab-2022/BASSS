const countries = require('countries-list'); 
const countryCodes = Object.keys(countries.countries);
const countryNames = countryCodes.map(code => countries.countries[code].name);
console.log(countryNames);