(function () {

angular
  .module('eruvApp')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider']

function config ($routeProvider, $locationProvider) {
  // console.log('hi');
  $routeProvider
    .when('/', {
      template: '<div eruv-report></div>'
    });
    // .when('/account', {
    //   template: '<div user-admin></div>'
    //   // controller: MyGeneralController
    // })
    // .when('/addItem', {
    //   template: '<div add-item></div>'
    // });

  // $locationProvider.html5Mode(true);
}


})();