var knex = require('./knex');

var Coords = function () {return knex('coords');};

function addCoords (lat, lon) {
  return Coords()
  .insert({
    lat: lat,
    lon: lon
  });
}

module.exports = {
  addCoords: addCoords
};