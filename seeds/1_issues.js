
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
      id: 1,
      issue: 'Pole'
    });
  })
  .then(function () {
    return knex('issues').insert({
      id: 2,
      issue: 'Lechi'
    });
  })
  .then(function () {
    return knex('issues').insert({
      id: 3,
      issue: 'Fence'
    });
  })
  .then(function () {
    return knex('issues').insert({
      id: 4,
      issue: 'String'
    });
  })
  .then(function () {
    return knex('issues').insert({
      id: 5,
      issue: 'Other'
    });
  });
};
