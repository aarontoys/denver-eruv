(function () {

  angular
  .module('starter')
  .controller('mapCtrl', mapCtrl);

  mapCtrl.$inject = [];

  function mapCtrl () {
    var vm = this;

    vm.test = 'hello world';

    initMap();

    function initMap () {
      // Create a map object and specify the DOM element for display.
      console.log('working?');
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.712653, lng: -104.902180},
        scrollwheel: false,
        zoom: 14
      });
    }
  }

})();