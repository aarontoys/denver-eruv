var knex = require('./knex');

var Report = function () {return knex('report_log');};

function addLog (userId, issueId, severityId, address, lat, lon, img) {
  console.log('line6', userId);
  return Report()
  .insert({
      user_id: userId,
      issue_id: issueId,
      severity_id: severityId,
      address: address,
      lat: lat,
      lon: lon,
      img: img
  });
}

function getLog () {
  return Report();
}

module.exports = {
  addLog: addLog
};