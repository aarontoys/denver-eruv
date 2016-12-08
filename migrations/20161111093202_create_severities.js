
exports.up = function(knex, Promise) {
  return knex.schema.createTable('severities', function (table) {
    table.increments();
    table.string('severity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('severities');
};
