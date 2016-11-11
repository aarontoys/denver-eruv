(function () {

  angular
  .module('starter')
  .controller('mapCtrl', mapCtrl);

  mapCtrl.$inject = ['mapService', '$location', '$timeout', '$cordovaGeolocation', '$cordovaCamera'];

  function mapCtrl (mapService, $location, $timeout, $cordovaGeolocation, $cordovaCamera) {
    var vm = this;

    vm.test = 'hello world';

    // initMap();
    var lat;
    var lon;

    var posOptions = {timeout: 10000, enableHighAccuracy: true};

    console.log('line20: ', mapService.getPosition());



    
    function getGeoLoc () {
      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        lat  = position.coords.latitude;
        lon = position.coords.longitude;
        console.log('lat: ',lat, 'long: ',lon);
        map.setCenter({lat:lat, lng:lon});
        map.setZoom(20);
        map.setMapTypeId('satellite');
      }, function(err) {
        // error
        console.log(err);
      });
    }

    initMap();

    var map;

    function initMap () {
      // Create a map object and specify the DOM element for display.
      console.log('working?');
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.71788288458772, lng: -104.91222381591797},
        scrollwheel: false,
        zoom: 13
      });
      getGeoLoc();
    }

    var line = new google.maps.Polyline({
      path: [
          {lat: 39.708184153118765, lng: -104.90341007709503}, 
          {lat: 39.70029155733921, lng: -104.90341544151306}
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      // setMap: map
    });

    line.setMap(map);

    map.addListener('click', function(event) {
      console.log('test', event.latLng.lat(),', ', event.latLng.lng());
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
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);

  watch.then(
    null, function(err) {
      console.log(err);
    },
    function(position) {
      console.log('position: ',position);
    });

  watch.clearWatch();

}

})();