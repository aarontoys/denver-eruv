(function () {

  'use strict';

  angular
  .module('starter')
  .service('logService', logService);

  logService.$inject = ['$http'];

  function logService ($http) {
    var dev = false;
    var uri;

    // dev = true;

    if (dev) {
      uri = 'http://localhost:5000/api/'
    } else {
      uri = 'https://denver-eruv.herokuapp.com/api/'
    }

    return {
      createLogItem: function (userId, issueId, severityId, address, position, img) {
        return $http.post(uri+'report/postLog', {
          userId: userId,
          issueId: issueId,
          severityId: severityId,
          address: address,
          lat: position.myLat,
          lon: position.myLon,
          img: img
        })
        .then(function (result) {
          console.log(result)
          return result.data.result;
        })
        .catch(function (err) {
          console.log(err);
          return err;
        });
      },
      // rename getDropDownData to getAppData and move to app loading
      getDropDownData: function () {
        return $http.get(uri+'app-data')
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