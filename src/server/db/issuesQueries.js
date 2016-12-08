var knex = require('./knex');

var Issues = function () {return knex('issues');};

function getIssues () {
  return Issues();
}

module.exports = {
  getIssues: getIssues
}