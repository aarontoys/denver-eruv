(function () {

  'use strict';

  angular
  .module('starter')
  .service('logService', logService);

  logService.$inject = ['$http'];

  function logService ($http) {
    var dev = false;
    var uri;

    if (dev) {
      uri = 'http://localhost:5000/'
    } else {
      uri = 'https://denver-eruv.herokuapp.com/'
    }

    return {
      createLogItem: function (userId, issueId, severityId, address, position, img) {
        return $http.post(uri+'postLog', {
          userId: userId,
          issueId: issueId,
          severityId: severityId,
          address: address,
          lat: position.lat,
          lon: position.lon,
          img: img
        });
      },
      getDropDownData: function () {
        return $http.get(uri)
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