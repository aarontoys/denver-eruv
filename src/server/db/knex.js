
var environment = process.env.NODE_ENV || 'development';

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('environment', environment);
var config = require('../../../knexfile.js')[environment];
module.exports = require('knex')(config);