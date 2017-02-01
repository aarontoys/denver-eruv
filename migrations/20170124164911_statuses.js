
exports.up = function(knex, Promise) {
  return knex.schema.createTable('statuses', function (table) {
    table.increments();
    table.string('status');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('statuses');
};
