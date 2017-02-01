(function () {

  angular
  .module('eruvApp')
  .directive('eruvReport', report)

  function report () {
    return {
      restrict: 'EA',
      templateUrl: 'web_app/report/report.view.html',
      controller: 'reportCtrl',
      controllerAs: 'vm'
    }
  }
})();