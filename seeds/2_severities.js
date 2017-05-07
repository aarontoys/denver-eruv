
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
      severity: 'Pole - Caltrans'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 2,
      severity: 'Pole - Regular Freestanding'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 3,
      severity: 'Pole - Strapped'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 4,
      severity: 'Lechi - Wood'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 5,
      severity: 'Fence Repair'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 6,
      severity: 'Barracade'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 7,
      severity: 'Wood Fence Lechi)'
    });
  })
  .then(function () {
    return knex('severities').insert({
      id: 8,
      severity: 'Lechi Sign - Freestanding'
    });
  });
};
