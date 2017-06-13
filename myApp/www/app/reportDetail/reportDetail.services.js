(function () {

  'use strict';

  angular
  .module('starter')
  .service('reportDetailService', reportDetailService);

  reportDetailService.$inject = ['$http'];

  function reportDetailService ($http) {
    var dev = false;
    var uri;

    // dev = true;

    if (dev) {
      uri = 'http://localhost:5000/api/';
    } else {
      uri = 'https://denver-eruv.herokuapp.com/api/';
    }

    return {
      updateStatus: function (id) {
        return $http.post(uri+'report/updateStatus/'+id)
        .then(function (result) {
          console.log(result);
          return result.data.result;
        })
        .catch(function (err) {
          console.log(err);
          return err;
        });
      }
    };
  }

})();