angular.module('starter.controllers')
.controller('BrowseCtrl', function($scope, $cordovaCamera) {
  $scope.takePicture = function() {
    
    $cordovaCamera.getPicture({ quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
    }).then(showImage).error(showError);

  };

  function showImage(imageData){
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
  }

  function showError() {
    console.log('error');
  }

})

.controller('PlaylistCtrl', function($scope) {

});
