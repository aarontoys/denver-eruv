(function () {

  angular
  .module('starter')
  .controller('mapCtrl', mapCtrl);

  mapCtrl.$inject = ['mapService', '$location', '$timeout', '$cordovaGeolocation', '$cordovaCamera'];

  function mapCtrl (mapService, $location, $timeout, $cordovaGeolocation, $cordovaCamera) {
    var vm = this;

    // vm.test = 'hello world';

    // initMap();
    var lat;
    var lon;
    var oldLat;
    var oldLon;

    var posOptions = {timeout: 10000, enableHighAccuracy: true};

    // console.log('line20: ', mapService.getPosition());

    function getGeoLoc () {
      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        lat  = position.coords.latitude;
        lon = position.coords.longitude;
        // console.log('lat: ',lat, 'long: ',lon);
        map.setCenter({lat:lat, lng:lon});
        map.setZoom(20);
        map.setMapTypeId('satellite');
        oldLat = lat.toFixed(4);
        oldLon = lon.toFixed(4);
      }, function(err) {
        // error
        console.log(err);
      });
    }

    initMap();

    var map;

    function initMap () {
      // Create a map object and specify the DOM element for display.
      // console.log('working?');
      map = new google.maps.Map(document.getElementById('report-map'), {
        center: {lat: 39.71788288458772, lng: -104.91222381591797},
        scrollwheel: false,
        zoom: 13
      });
      getGeoLoc();
    }

    // var line = new google.maps.Polyline({
    //   path: [
    //       {lat: 39.708184153118765, lng: -104.90341007709503}, 
    //       {lat: 39.70029155733921, lng: -104.90341544151306}
    //   ],
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2,
    //   // setMap: map
    // });

    // line.setMap(map);

    map.addListener('click', function(event) {
      // console.log('test', event.latLng.lat(),', ', event.latLng.lng());
      mapService.addMapCoords(event.latLng.lat(), event.latLng.lng());
      mapService.lookupAddress(event.latLng.lat(), event.latLng.lng());
      placeMarker(event.latLng);
        // $location.path('tab/reportForm');
      $timeout(function(){
        $location.path('tab/reportForm');
      },1500);
    });

    function placeMarker(location) {
      var marker = new google.maps.Marker({
        position: location, 
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
      });
    }

    var watchOptions = {
      timeout : 10000,
      enableHighAccuracy: true // may cause errors if true
    };

    var watch;


    startWatch();
    // var count = 0;

    function startWatch () {
      // console.log('watch started');
      // console.log('line109: ',watch);
      // console.log(watch)
      // var oldLat = lat.toFixed(3);
      // var oldLon = lon.toFixed(3);

      // if (!watch) {

      watch = $cordovaGeolocation.watchPosition(watchOptions);
        // console.log('watch executed: ', watch.watchID);
      // }

      watch.then(
        null, function(err) {
          // console.log('line118', err);
          // console.log('watchID: ', watch.watchID);
        },
        function(position) {
          // console.log('lat: ', lat, ' lon: ', lon);
          // console.log('line101: position: ',position);
          // console.log('watchID: ', watch.watchID);

          // vm.refresh = new Date(position.timestamp).toLocaleString();

          var newLat = position.coords.latitude.toFixed(4);
          var newLon = position.coords.longitude.toFixed(4);

          if (newLat !== oldLat || newLon !== oldLon) {

            map.panTo({lat: position.coords.latitude, lng: position.coords.longitude});
            // vm.moved = 'moving';
            oldLat = newLat;
            oldLon = newLon;
            // count = 0;

          } 
          // else {
          //   vm.moved = 'not moving ' + count++;
          // }

            // vm.lat = 'newLat: ' + newLat + ' | oldLat: ' + oldLat;
            // vm.lon = 'newLon: ' + newLon + ' | oldLon: ' + oldLon;
          // console.log(position.coords.latitude);
          // console.log(typeof position.coords.latitude);
        });
    }

    map.addListener('dragstart', function (event) {
      // console.log('watchID: ', watch.watchID);
      watch.clearWatch(watch.watchID);
      $timeout(startWatch, 10000);
    });

    // watch.clearWatch();

    // $cordovaGeolocation.clearWatch(watch)
    // .then(function (result) {
    //   console.log('watch is cleared');
    //   console.log('result: ', result);
    //   return result;
    // })
    // .catch(function (err) {
    //   console.log('line111: err: ', err);
    //   return err;
    // });

    // vm.recenter = function () {
    //   console.log('recenter clicked');
    //   getGeoLoc();
    // };
 
  }

})();