(function () {

  angular
  .module('starter')
  .controller('reportDetailCtrl', reportDetailCtrl);

  reportDetailCtrl.$inject = ['$stateParams', '$location', 'reportService', 'reportDetailService', '$cordovaClipboard', '$cordovaToast'];

  function reportDetailCtrl ($stateParams, $location,reportService, reportDetailService, $cordovaClipboard, $cordovaToast) {
    var vm = this;

    vm.test = 'report detail working';

    // console.log('report detail console log');
    // console.log('id: ', $stateParams.reportId);
    var id = $stateParams.reportId;

    reportService.getReportDetail(id)
    .then(function (result) {
      vm.detail = result.data.result[0];
      map.setCenter({lat: +vm.detail.lat, lng: +vm.detail.lon});
      map.setZoom(16);
      addMarker({lat: +vm.detail.lat, lng: +vm.detail.lon})
    })
    .catch(function (err) {
      console.log(err);
      return err;
    });

    var map;

    initMap();

    function initMap (latLon) {
      map = new google.maps.Map(document.getElementById('detail-map'), {
        center: {lat: 39.71788288458772, lng: -104.91222381591797},
        scrollwheel: false,
        zoom: 13
      })
    }

    function addMarker (latLon) {
      var marker = new google.maps.Marker({
        position: latLon,
        map: map
      });
    }

    vm.updateStatus = function (id) {
      reportDetailService.updateStatus(id)
      .then(function (result) {
        $location.path('tab/reportView');
      })
    }

    vm.copyAddress = function (lat, lon) {
      $cordovaClipboard
      .copy(lat+','+lon)
      .then(function () {
        // console.log('address copied')
        $cordovaToast.showShortCenter('copied');
      })
      .catch(function (err) {
        // console.log('there was an error: ', err)
        $cordovaToast.showShortCenter('copy failed: ', err);

      });
    }

  }

})();