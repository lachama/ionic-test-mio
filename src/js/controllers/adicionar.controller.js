angular.module('starter.controllers')

.controller('AdicionarController', function($scope) {
  // var scope = this;

  // console.log("-----------2");
  // console.log(scope);
  $scope.listCandies = [];

  $scope.addCandy = function() {
    console.log("1---------->");
    console.log($scope.formCandy.valorPaquete);
    $scope.listCandies.push($scope.formCandy);
   
    console.log("2---------->");
    console.log($scope.listCandies);
    $scope.formCandy = "";

    
    //
    
   
  };
});
