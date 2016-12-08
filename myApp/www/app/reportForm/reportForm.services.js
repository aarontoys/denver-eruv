(function () {

  'use strict';

  angular
  .module('starter')
  .service('logService', logService);

  logService.$inject = ['$http'];

  function logService ($http) {

    return {
      createLogItem: function (userId, issueId, severityId, address, lat, lon, img) {
        return $http.post('http://localhost:5000/postLog', {
          userId: userId,
          issueId: issueId,
          severityId: severityId,
          address: address,
          lat: lat,
          lon: lon,
          img: img
        });
      },
      getDropDownData: function () {
        return $http.get('http://localhost:5000/')
        .then(function (result) {
          console.log(result.data);
          return result.data;
        })
        .catch(function (err) {
          console.log(err);
          return(err);
        });
      }
    };
  }

})();