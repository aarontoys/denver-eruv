var knex = require('./knex');

var Sections = function () {return knex('sections');};

function getSections () {
  // return Sections().join('statuses', 'status_id', '=', 'statuses.id').select('*');
  return Sections();
}

module.exports = {
  getSections: getSections
};