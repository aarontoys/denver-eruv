(function () {

  angular
  .module('starter')
  .controller('reportFormCtrl', reportFormCtrl);

  reportFormCtrl.$inject = ['mapService', '$cordovaCamera']

  function reportFormCtrl (mapService, $cordovaCamera) {
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
        // targetWidth: 100,
        // targetHeight: 100,
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
  }


})();