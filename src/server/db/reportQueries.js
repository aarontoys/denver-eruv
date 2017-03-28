var knex = require('./knex');
var now = new Date();

var Report = function () {
  return knex('report_log')
          .join('issues', 'report_log.issue_id', '=', 'issues.id')
          .join('severities', 'report_log.severity_id', '=', 'severities.id')
          .select('report_log.id','report_log.user_id','report_log.issue_id','report_log.severity_id',
            'report_log.address','report_log.lat','report_log.lon','report_log.img','report_log.other_issue',
            'report_log.other_severity','report_log.created_at','report_log.updated_at','report_log.status',
            'severities.severity','issues.issue','report_log.comments', 'report_log.bucket_truck');
          // .select('report_log.id');
};

function addLog (userId, issueId, severityId, address, lat, lon, img, status, comments, bucket_truck) {
  // console.log('line6', userId);
  return Report()
  .insert({
      user_id: userId,
      issue_id: issueId,
      severity_id: severityId,
      address: address,
      lat: lat,
      lon: lon,
      img: img,
      status: status,
      created_at: now,
      updated_at: now,
      comments: comments,
      bucket_truck: bucket_truck
  }, 'id')
  .then(function (result) {
    console.log('then hit: ', result)
  })
  .catch(function (err) {
    console.log('error: ', err)
    return err;
  })
}

function getLog () {
  return Report();
}

function getLogDetail (id) {
  return Report()
  .where('report_log.id', id)
}

function updateStatus (id) {
  return Report()
  .where('report_log.id', id)
  .update({
    status: 0
  }, 'id')
}

module.exports = {
  addLog: addLog,
  getLog: getLog,
  getLogDetail: getLogDetail,
  updateStatus: updateStatus
};