
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
  return knex('sections').del()
  .then(function () {
    return knex('sections').insert({
      name: 'Alleyway between Jackson and Harrison Streets',
      status_id: 1,
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: '13th and 14th Streets',
      status_id: 2,
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: 'Magnolia to Lowry',
      status_id: 3,
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: 'AMLI/Lowry Park Apartments',
      status_id: 4,
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: 'Firehouse to Quebec/Leetsdale',
      status_id: 5,
      description: 'Starts on corner of SW corner Quebec & Leetsdale on Leetsdale where Burger King is and continues to the back of the Firehouse on Alameda where the fence connects to the AMLI appartment fence.',
      start_lat: '39.698301120738',
      start_lon: '-104.90370377898216',
      end_lat: '39.70832422431359',
      end_lon: '-104.8861326277256',
      start_img: 'https://goo.gl/maps/FBti2MHXAuM2',
      end_img: 'https://goo.gl/maps/zFNs89kwQQG2'
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: 'Quebec/Leetsdale to Cherry Creek N Dr',
      status_id: 6,
      description: 'Starts where lechi connects to fence near the end of the bike path and con to SW corner of Quebec & Leetsdale on Quebec.',
      start_lat: '39.69691332635728',
      start_lon: '-104.92203265428543',
      end_lat: '39.698301120738',
      end_lon: '-104.90370377898216',
      start_img: 'https://goo.gl/maps/3M9JiWEcFdQ2',
      end_img: 'https://goo.gl/maps/rjNc9vuHiNG2',
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: 'Cherry Creek Bike Path',
      status_id: 1,
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: 'Staybridge to Alleyway',
      status_id: 2,
    });
  })
  .then(function () {
    return knex('sections').insert({
      name: 'Ekar Farm',
      status_id: 3,
    });
  });
};
