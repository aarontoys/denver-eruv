(function () {

  angular
  .module('starter')
  .controller('reportFormCtrl', reportFormCtrl);

  reportFormCtrl.$inject = ['mapService', 'logService', '$cordovaCamera']

  function reportFormCtrl (mapService, logService, $cordovaCamera) {
    var vm = this;
    vm.test = mapService.getPosition();
    vm.address = mapService.getAddress();
    // vm.address = 'test';
    vm.takePhoto = function () {
      console.log('click works!');
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 1008,
        targetHeight: 756,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        console.log(imageData);
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
        console.log(err);
      });

    // }, false);

    };

    // vm.submit = () => logService.createLogItem (0,0,0,'7337 E Cedar','lat','lon','base64 text');
    vm.submit = function () {
      logService.createLogItem (1,0,1,'7337 E Cedar','93.333','104.444','SGVsbG8gQ29kZWJlYXV0aWZ5');
    };

    // function loadData () {
    logService.getDropDownData()
    .then(function (result) {
      vm.issues = result.issues;
      vm.severities = result.severities;
      console.log(vm.issues);
    })
    .catch(function (err) {
      console.log(err);
      return err;
    })

    // vm.issues = dropDowns.reportFormCtrl
    // }
  }


})();