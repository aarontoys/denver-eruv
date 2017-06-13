
exports.seed = function(knex, Promise) {
  // return Promise.join(
  //   // Deletes ALL existing entries
  //   knex('table_name').del(),

  //   // Inserts seed entries
  //   knex('table_name').insert({id: 1, colName: 'rowValue'}),
  //   knex('table_name').insert({id: 2, colName: 'rowValue2'}),
  //   knex('table_name').insert({id: 3, colName: 'rowValue3'})
  // );
  return knex('severities').del()
  .then(function () {
    return knex('severities').insert({
      id: 1,
      severity: 'Eruv is down'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 2,
      severity: 'Need 2nd opinion'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 3,
      severity: 'Question'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 4,
      severity: 'Maintenence Issue (still up)'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 5,
      severity: 'Other'
    });
  });
};
