
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
      severity: 'Eruv is down'
    });
  })
  .then(function () {
    return knex('severities').insert({
      severity: 'Need 2nd opinion'
    });
  })
  .then(function () {
    return knex('severities').insert({
      severity: 'Question'
    });
  })
  .then(function () {
    return knex('severities').insert({
      severity: 'Maintenence Issue (still up)'
    });
  })
  .then(function () {
    return knex('severities').insert({
      severity: 'Other'
    });
  });
};
