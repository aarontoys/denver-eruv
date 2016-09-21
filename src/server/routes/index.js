var express = require('express');
var router = express.Router();

var Coords = require('../db/coordsQueries');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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

module.exports = router;
