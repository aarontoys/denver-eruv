
var express = require('express');
var router = express.Router();
var request = require('request-promise');


var apikey = process.env.API_KEY;

var host;

if (process.env.NODE_ENV === 'production') {
  host = '';
} else {
  host = 'http://localhost:5000/';
}

router.get('/map', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.sendFile('/index.html')
  console.log('qs: ', req.query);
  var lat = req.query.lat;
  var lon = req.query.lon;
  request('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'&key='+apikey)
  .then(function (result) {
    // console.log(result);
    res.status(200).json({
      status: 'success',
      result: JSON.parse(result)
    });

    //     res.status(200).json({
    //   status: 'success',
    //   product: JSON.parse(data).result.products
    // })
  })
  .catch (function (err) {
    console.log(err);
    return next(err);
  });
});

module.exports = router;