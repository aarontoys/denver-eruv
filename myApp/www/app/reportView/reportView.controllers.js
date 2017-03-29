(function () {

  angular
  .module('starter')
  .controller('reportViewCtrl', reportViewCtrl);

  reportViewCtrl.$inject = ['$scope', 'mapService', 'reportService', 'logService'];

  function reportViewCtrl ($scope, mapService, reportService, logService) {
    var vm = this;

    vm.test = "hello worlds!";

    $scope.$on('$ionicView.enter', function(e) {
      vm.getReport();
      // $ionicScrollDelegate.scrollTop();
    });

    vm.getReport = function () {
      reportService.getReport()
      .then(function (result) {
        vm.report = result.data.result;
        $scope.$broadcast('scroll.refreshComplete');
      })
      .catch(function (err) {
        console.log(err);
        return err;
      });
    }

    logService.getDropDownData()
    .then(function (result) {
      vm.issues = result.issues;
      vm.severities = result.severities;
    })
    .catch(function (err) {
      console.log(err);
      return err;
    })
  }

})();