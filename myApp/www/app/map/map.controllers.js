(function () {

  angular
  .module('starter')
  .controller('mapCtrl', mapCtrl);

  mapCtrl.$inject = [];

  function mapCtrl () {
    var vm = this;

    vm.test = 'hello world';

    initMap();

    var map;

    function initMap () {
      // Create a map object and specify the DOM element for display.
      console.log('working?');
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.712653, lng: -104.902180},
        scrollwheel: false,
        zoom: 14
      });
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
    });
  }

})();