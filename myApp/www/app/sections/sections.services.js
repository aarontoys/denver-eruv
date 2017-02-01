(function () {

  'use strict';

  angular
  .module('starter')
  .service('sectionsService', sectionsService);

  sectionsService.$inject = ['$http'];

  function sectionsService ($http) {
    var dev = false;
    var uri;

    // dev = true;

    if (dev) {
      uri = 'http://localhost:5000/api/'
    } else {
      uri = 'https://denver-eruv.herokuapp.com/api/'
    }

    return {
      getSections: function () {
        // return $http.get(uri+'report')
        return $http.get(uri+'sections')
        .then(function (result) {
          // console.log('sections line28: ', result);
          return result;
        })
        .catch(function (err) {
          console.log(err);
          return err;
        });
      }
    };
  }

})();