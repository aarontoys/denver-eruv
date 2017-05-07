
exports.seed = function(knex, Promise) {

  return knex('report_log').del();

}
