(function () {

  angular
  .module('eruvApp')
  .controller('reportCtrl', reportCtrl);

  reportCtrl.$inject = ['reportService'];

  function reportCtrl (reportService) {
    var vm = this;
    var maps = {};
    var infos = [];
    var map;

    // console.log('console is working')
    reportService.getReport()
    .then(function (result) {
      // console.log(result.data.result);
      vm.report = result.data.result;
      addMarkers();
    })
    .catch(function (err) {
      // console.log(err);
      return err;
    });

    initMap();

    function initMap () {
      // Create a map object and specify the DOM element for display.
      // console.log('working?');
      // console.log('report: ', vm.report )

      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.71788288458772, lng: -104.91222381591797},
        scrollwheel: false,
        zoom: 13
      });
      // getGeoLoc();

      

      // console.log('testFilter', testFilter);

      // var markers = locations.map(function(location, i) {
      //   return new google.maps.Marker({
      //     position: location,
      //     label: labels[i % labels.length]
      //   });
      // });
    }

    function addMarkers () {

      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      var markers = vm.report.filter(function(el) {
        return el.lat;
      }).map(function(el, i) {
        // console.log(typeof +el.lat, +el.lat);
        // console.log(typeof +el.lon, +el.lon);
        myLatLng = new google.maps.LatLng(+el.lat, +el.lon);
        console.log(el);
        var content = 
          '<h4>Issue:</h4><p>' + el.issue + '</p>' +
          '<h4>Severity:</h4><p>' + el.severity + '</p>' +
          '<h4>Address:</h4><p>' + el.address + '</p><img src=' + el.img + ' width=250px>';
        // console.log('content: ', content);
        var infowindow = new google.maps.InfoWindow();

        // console.log('infowindow: ', infowindow);

        var marker = new google.maps.Marker({
          position: myLatLng,
          // map: map,
          label: labels[i % labels.length]
        });

        marker.addListener('click', function (/*content, infowindow*/) {
          // console.log('infowindow: ', infowindow);
          resetMap();
          closeInfos();
          infowindow.setContent(content);
          infowindow.open(map,marker);
          infos[0] = infowindow;
        });

        google.maps.event.addListener(infowindow, 'closeclick', function () {
          resetMap(true);
        });
        return marker;
          // console.log('test');
      });

      var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      // var content = 'Address: ' 
      // console.log('markers', markers);
    }

    function closeInfos () {
      if (infos.length > 0) {
        infos[0].close();
        resetMap();
        // map.center = {lat: 39.71788288458772, lng: -104.91222381591797};
      }
      infos.length = 0;
    }

    var center, zoom;
    function resetMap (bool) {

      if (bool) {
        // console.log('centering map');
        map.panTo(center);
        map.setZoom(zoom);
      } else {
        center = map.getCenter();
        zoom = map.getZoom();
      }

      // console.log('c: ', center, 'z: ', zoom);

        // map.center = {lat: 39.71788288458772, lng: -104.91222381591797};

    }




  }

})();