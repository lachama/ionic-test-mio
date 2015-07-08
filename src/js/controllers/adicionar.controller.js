angular.module('starter.controllers')

.controller('AdicionarController', function($scope, obtenerLista) {
  //$scope.listCandies = [];

  $scope.formCandy = {imgTipo:"porDefecto"};

  $scope.addCandy = function() {
    //$scope.listCandies.push($scope.formCandy);
    //$scope.formCandy = "";
    $scope.formCandy.imgTipo === "porDefecto"?$scope.formCandy.imgTipo = "img/ionic.png":$scope.formCandy.imgTipo = "img/" + Math.floor((Math.random() * 5) + 1) + ".jpg";    
    obtenerLista.writeData($scope.formCandy);
    $scope.formCandy = "";
  };

  $scope.optCamera = function (){
  	console.log($scope.formCandy.imgTipo);

  };

  $scope.optGallery = function (){
  	console.log($scope.formCandy.imgTipo);
  };

  $scope.optDefault = function (){
  	console.log($scope.formCandy.imgTipo);
  };

});
