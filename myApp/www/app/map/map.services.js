(function () {

  'use strict';

  angular
  .module('starter')
  .service('mapService', mapService);

  mapService.$inject = ['$http', '$cordovaGeolocation'];

  function mapService ($http, $cordovaGeolocation) {

    var myPosition = {
      myLat: '',
      myLon: ''
    };
    var address = {
      address: ''
    };

    return {
      addMapCoords: function (lat, lon) {
        return $http.post('http://localhost:5000/addCoords', {
          lat: lat,
          lon: lon,
        });
      },
      lookupAddress: function (lat, lon) {
        // return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'+&key=AIzaSyDm4rpHOtR3CuS4uBugM_7FqzRFYleLMyY')
        //   .then(function(result) {
        //     /*return*/ console.log(result.data.results[0].formatted_address);
        //     myPosition.myLat = lat;
        //     myPosition.myLon = lon;
        //     /*return*/ address.address = result.data.results[0].formatted_address;
        //     return result;
        //   });
        return $http.get('http://localhost:5000/map?lat='+lat+'&lon='+lon)
        .then(function (result) {
          console.log(result);
                   /*return*/ console.log(result.data.result.results[0].formatted_address);
            myPosition.myLat = lat;
            myPosition.myLon = lon;
            /*return*/ address.address = result.data.result.results[0].formatted_address;
            return result;
        })
        .catch(function (err) {
          return err;
        });
      },
      getGeoLocation: function (obj) {
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            myPosition.myLat = lat;
            myPosition.myLon = lon;
            console.log('lat: ',lat, 'long: ',lon);
            return position.coords;
          }, function(err) {
            // error
            console.log(err);
          });

      },
      getPosition: function () {
        console.log('myPosition ', myPosition);
        return myPosition;
      },
      getAddress: function () {
        console.log('address ', address);
        return address;
      }
    };
  }

})();