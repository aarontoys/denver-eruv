(function () {

  angular
  .module('starter')
  .controller('reportFormCtrl', reportFormCtrl);

  reportFormCtrl.$inject = ['mapService', 'logService', '$cordovaCamera', '$cordovaToast']

  function reportFormCtrl (mapService, logService, $cordovaCamera, $cordovaToast) {
    var vm = this;
    vm.position = mapService.getPosition();
    vm.address = mapService.getAddress();

    vm.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (vm.isMobile) {
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
    }

    vm.takePhoto = function () {

      if(vm.isMobile) {
        $cordovaCamera.getPicture(options).then(function(imageData) {

          vm.imgLen = imageData.length;

          if (vm.imgLen > 100000) {

            $cordovaToast.showShortCenter('Image was too large, please try again . . .')
            var factor = Math.sqrt(1 - (vm.imgLen - 90000)/vm.imgLen);
            options.targetWidth = Math.round(options.targetWidth * factor);
            options.targetHeight = Math.round(options.targetHeight * factor);

          }

          vm.img = "data:image/jpeg;base64," + imageData;
          
        }, function(err) {

          console.log(err);
        });

      } else {
        vm.message = 'The ability to take a photo requires a mobile deveice'
      }

    };


    vm.submit = function (issue, severity) {
      logService.createLogItem (2,issue,severity,vm.address.address,vm.position,vm.img,1,vm.comments, vm.bucket_truck)
      .then(function (result) {
        if (result[0]) {
          vm.success = 'Successful! Id = ' + result[0];
          vm.id = result[0];
          if (vm.isMobile) {     
            options.targetWidth = 1008;
            options.targetHeight = 756;
          }
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

    })
    .catch(function (err) {
      console.log(err);
      return err;
    })

  }


})();