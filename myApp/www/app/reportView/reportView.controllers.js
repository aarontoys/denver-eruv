(function () {

  angular
  .module('starter')
  .controller('reportViewCtrl', reportViewCtrl);

  reportViewCtrl.$inject = ['mapService', 'reportService', '$cordovaCamera']

  function reportViewCtrl (mapService, reportService, $cordovaCamera) {
    var vm = this;

    vm.test = "hello worlds!";

    reportService.getReport()
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.log(err);
      return err;
    });


  }


})();