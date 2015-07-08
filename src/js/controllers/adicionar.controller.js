angular.module('starter.controllers')

.controller('AdicionarController', function($scope, obtenerLista) {
  //$scope.listCandies = [];

  $scope.addCandy = function() {
    //$scope.listCandies.push($scope.formCandy);
    //$scope.formCandy = "";
    $scope.formCandy.imgTipo === "porDefecto"?$scope.formCandy.imgTipo = "img/ionic.png":$scope.formCandy.imgTipo = "img/" + Math.floor((Math.random() * 5) + 1) + ".jpg";    
    obtenerLista.writeData($scope.formCandy);
    $scope.formCandy = "";
  };
});
