angular.module('starter.controllers')

.controller('AdicionarController', function($scope, obtenerLista) {
  //$scope.listCandies = [];

  $scope.addCandy = function() {
    //$scope.listCandies.push($scope.formCandy);
    //$scope.formCandy = "";
    console.log("-----------------");
    console.log($scope.formCandy);
    obtenerLista.writeData($scope.formCandy);
    $scope.formCandy = "";
  };
});
