(function () {

  angular
  .module('starter')
  .controller('reportFormCtrl', reportFormCtrl);

  reportFormCtrl.$inject = ['mapService', 'logService', '$cordovaCamera']

  function reportFormCtrl (mapService, logService, $cordovaCamera) {
    var vm = this;
    vm.position = mapService.getPosition();
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
        // console.log(imageData.length);

        // var image = document.getElementById('myImage');
        vm.img = "data:image/jpeg;base64," + imageData;
        vm.imgLen = imageData.length;
      }, function(err) {
        // error
        console.log(err);
      });

    // }, false);

    };

    // vm.submit = () => logService.createLogItem (0,0,0,'7337 E Cedar','lat','lon','base64 text');
    vm.submit = function (issue, severity) {
      logService.createLogItem (1,issue,severity,vm.address.address,vm.position,vm.img)
      .then(function (result) {
        if (result[0]) {
          vm.success = 'Successful! Id = ' + result[0];
          vm.id = result[0];
        } else {
          vm.success = 'Image is too large. Please try again'
        }
      })
      .catch (function (err) {
        vm.success = 'Error: ', err;
        return err;
      });
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