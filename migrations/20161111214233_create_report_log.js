
exports.up = function(knex, Promise) {
  return knex.schema.createTable('report_log', function (table) {
    table.increments();
    table.integer('user_id');
    table.integer('issue_id').references('issues.id');
    table.integer('severity_id').references('severities.id');
    table.string('address');
    table.string('lat');
    table.string('lon');
    table.text('img');
    table.string('other_issue');
    table.string('other_severity');
    table.integer('status');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('report_log');
};
