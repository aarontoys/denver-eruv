var express = require('express');
var router = express.Router();

// var Coords = require('../db/coordsQueries');
// var Report = require('../db/reportQueries');
var Issues = require('../db/issuesQueries');
var Severities = require('../db/severitiesQueries');
var Sections = require('../db/sectionsQueries');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', /*render,*/ getIssues, getSeverities, getSections, sendData);

  // function render (req, res, next) {
  //   res.render('index', {title: 'Express'});
  //   return next();
  // }

  function getIssues (req, res, next) {
    // console.log('line20');
    Issues.getIssues()
    .then(function(result) {
      req.issues = result;
      // console.log(result);
      // res.status(200).json({
      //   status: 'success',
      //   data: result
      // });
      return next();
    })
    .catch(function (err) {
      console.log('error: report.js: line32: ', err);
      return next(err);
    });
  }

  function getSeverities (req, res, next) {
    Severities.getSeverities()
    .then(function(result) {
      req.severities = result;
      // console.log(result);
      // res.status(200).json({
      //   status: 'success',
      //   data: result
      // });
      return next();
    })
    .catch(function (err) {
      console.log('error: report.js: line49: ', err);
      return next(err);
    });
  }

  function getSections (req, res, next) {
    Sections.getSections()
    .then(function(result) {
      req.sections = result;
      return next();
    })
    .catch(function (err) {
      console.log('error: report.js: line62: ', err);
      return next(err);
    })
  }

  function sendData (req, res, next) {
    res.status(200).json({
      status: 'success',
      issues: req.issues,
      severities: req.severities,
      sections: req.sections
    }); 
}

// router.post('/addCoords', function(req, res, next) {
//   var body = req.body;
//   // console.log(body);
//   Coords.addCoords(body.lat, body.lon)
//   .then(function() {
//     res.status(200).json({
//       status: 'success'
//     });
//   });
// });

// router.post('/postLog', function (req, res, next) {
//   var body = req.body;
//   console.log('line75: body: '/*, body*/);
//   Report.addLog(body.userId, body.issueId, body.severityId, body.address, body.lat, body.lon, body.img)
//   .then(function (id) {
//     console.log('line78 return id: ', id);
//     res.status(200).json({
//       status: 'success',
//       result: id
//     });
//   });
// });

// router.get('/report', function (req, res, next) {
//   Report.getLog()
//   .then(function (result) {
//     res.status(200).json({
//       status: 'success',
//       result: result
//     });
//   })
//   .catch(function (err) {
//     console.log('error: report.js: line93: ', err);
//     return next(err);
//   });
// })

module.exports = router;
