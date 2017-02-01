
exports.seed = function(knex, Promise) {
  // return Promise.join(
  //   // Deletes ALL existing entries
  //   knex('table_name').del(),

  //   // Inserts seed entries
  //   knex('table_name').insert({id: 1, colName: 'rowValue'}),
  //   knex('table_name').insert({id: 2, colName: 'rowValue2'}),
  //   knex('table_name').insert({id: 3, colName: 'rowValue3'})
  // );
  return knex('issues').del()
  .then(function () {
    return knex('issues').insert({
      issue: 'Pole'
    });
  })
  .then(function () {
    return knex('issues').insert({
      issue: 'Lechi'
    });
  })
  .then(function () {
    return knex('issues').insert({
      issue: 'Fence'
    });
  })
  .then(function () {
    return knex('issues').insert({
      issue: 'String'
    });
  })
  .then(function () {
    return knex('issues').insert({
      issue: 'Other'
    });
  });
};
