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
      }
    };
  }

})();