
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sections', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('start_lat');
    table.string('start_lon');
    table.string('end_lat');
    table.string('end_lon');
    table.text('start_img');
    table.text('end_img');
    table.integer('status_id').references('statuses.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sections');
};
