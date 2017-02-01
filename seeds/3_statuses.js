
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  //     return Promise.all([
  //       // Inserts seed entries
  //       knex('table_name').insert({id: 1, colName: 'rowValue1'}),
  //       knex('table_name').insert({id: 2, colName: 'rowValue2'}),
  //       knex('table_name').insert({id: 3, colName: 'rowValue3'})
  //     ]);
  //   });
  return knex('statuses').del()
  .then(function () {
    return knex('statuses').insert({
      status: 'Up'
    });
  })
  .then(function () {
    return knex('statuses').insert({
      status: 'Down'
    });
  })
  .then(function () {
    return knex('statuses').insert({
      status: 'Pending Check'
    });
  })
  .then(function () {
    return knex('statuses').insert({
      status: 'Check in Progress'
    });
  })
  .then(function () {
    return knex('statuses').insert({
      status: 'Assigned'
    });
  })
  .then(function () {
    return knex('statuses').insert({
      status: 'Unassigned'
    });
  });
};
