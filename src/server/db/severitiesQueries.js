var knex = require('./knex');

var Severities = function () {return knex('severities');};

function getSeverities () {
  return Severities();
}

module.exports = {
  getSeverities: getSeverities
};