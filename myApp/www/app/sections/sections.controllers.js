(function () {

  angular
  .module('starter')
  .controller('sectionsCtrl', sectionsCtrl);

  sectionsCtrl.$inject = ['sectionsService']

  function sectionsCtrl (sectionsService) {
    var vm = this;

    vm.test = "hello worlds!";

    sectionsService.getSections()
    .then(function (result) {
      console.log(result);
      vm.sections = result.data.sections;
    })
    .catch(function (err) {
      console.log(err);
      return err;
    });

    // vm.classArr = ['ion-checkmark-circled','ion-close-circled','ion-more','ion-load-a'];


  //   vm.doRefresh = function () {
  //     reportService.getReport()
  //     .then(function (result) {
  //       console.log(result);
  //       vm.report = result.data.result;
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //       return err;
  //     });
  //   }
  }


})();