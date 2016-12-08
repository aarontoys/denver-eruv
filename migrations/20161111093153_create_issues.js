
exports.up = function(knex, Promise) {
  return knex.schema.createTable('issues', function (table) {
    table.increments();
    table.string('issue');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('issues');
};
