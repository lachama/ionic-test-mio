angular.module('starter.controllers')

.controller('AdicionarController', function($scope) {
  //var scope = $scope;
  //scope.formCandy ={};
  $scope.listCandies = [];

  $scope.addCandy = function() {
    console.log("1---------->");
    console.log($scope.formCandy);
    $scope.listCandies.push($scope.formCandy);
    console.log("2---------->");
    console.log($scope.listCandies);
    $scope.formCandy = "";

    
    
    
   
  };
});
