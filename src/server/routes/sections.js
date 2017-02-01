var express = require('express');
var router = express.Router();

var Sections = require('../db/sectionsQueries');

router.get('/', getSections);

function getSections (req, res, next) {
  Sections.getSections()
  .then(function(result) {
    // console.log('test', result);
    res.status(200).json({
      status: 'success',
      sections: result
    })
    // req.sections = result;
    // return next();
  })
  .catch(function (err) {
    console.log('error: sections.js: line19: ', err);
    return next(err);
  })
}

module.exports = router;