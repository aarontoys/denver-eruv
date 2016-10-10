(function () {

  'use strict';

  angular
  .module('starter')
  .service('mapService', mapService);

  mapService.$inject = ['$http'];

  function mapService ($http) {
    return {
      addMapCoords: function (lat, lon) {
        return $http.post('http://localhost:5000/addCoords', {
          lat: lat,
          lon: lon,
        });
      },
      lookupAddress: function (lat, lon) {
        return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'+&key=AIzaSyDm4rpHOtR3CuS4uBugM_7FqzRFYleLMyY')
          .then(function(result) {
            return console.log(result.data.results[0].formatted_address);
          });
      }
    };
  }

})();