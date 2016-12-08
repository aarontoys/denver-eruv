var express = require('express');
var router = express.Router();

var Coords = require('../db/coordsQueries');
var Report = require('../db/reportQueries');
var Issues = require('../db/issuesQueries');
var Severities = require('../db/severitiesQueries');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', /*render,*/ getIssues, getSeverities, sendData);

  // function render (req, res, next) {
  //   res.render('index', {title: 'Express'});
  //   return next();
  // }

  function getIssues (req, res, next) {
    console.log('line20');
    Issues.getIssues()
    .then(function(result) {
      req.issues = result;
      console.log(result);
      // res.status(200).json({
      //   status: 'success',
      //   data: result
      // });
      return next();
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
  }

  function getSeverities (req, res, next) {
    Severities.getSeverities()
    .then(function(result) {
      req.severities = result;
      console.log(result);
      // res.status(200).json({
      //   status: 'success',
      //   data: result
      // });
      return next();
    })
    .catch(function (err) {
      console.log(err);
      return next(err);
    });
  }

  function sendData (req, res, next) {
    res.status(200).json({
      status: 'success',
      issues: req.issues,
      severities: req.severities
    }); 
}

router.post('/addCoords', function(req, res, next) {
  var body = req.body;
  console.log(body);
  Coords.addCoords(body.lat, body.lon)
  .then(function() {
    res.status(200).json({
      status: 'success'
    });
  });
});

router.post('/postLog', function (req, res, next) {
  var body = req.body;
  console.log('body', body);
  Report.addLog(body.userId, body.issueId, body.severityId, body.address, body.lat, body.lon, body.img)
  .then(function () {
    res.status(200).json({
      status: 'success'
    });
  });
});

module.exports = router;
