
exports.up = function(knex, Promise) {
  return knex.schema.table('report_log', function (table) {
    table.string('comments');
    table.integer('bucket_truck');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('report_log', function (table) {
    table.dropColumn('comments');
    table.dropColumn('bucket_truck');
  });
};
