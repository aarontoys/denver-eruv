(function () {

  'use strict';

  angular
  .module('starter')
  .service('reportService', reportService);

  reportService.$inject = ['$http'];

  function reportService ($http) {
    var dev = false;
    var uri;

    if (dev) {
      uri = 'http://localhost:5000/'
    } else {
      uri = 'https://denver-eruv.herokuapp.com/'
    }

    return {
      getReport: function () {
        return $http.get(uri+'report')
        .then(function (result) {
          console.log(result);
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