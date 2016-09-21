
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coords', function (table) {
    table.increments();
    table.string('lat');
    table.string('lon');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('coords');
};
