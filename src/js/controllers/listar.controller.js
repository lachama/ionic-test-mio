angular.module('starter.controllers')

.controller('ListarCtrl', function($scope) {
  $scope.candies = [
    { 
      nombre: 'Nerd', 
      id: 1,
      img: "img/nerds.jpg",
      valorPaquete:7000
    },
    { 
      nombre: 'Milky Way', 
      id: 1,
      img: "img/milkyWay.jpeg",
      valorPaquete:7000
    },
    { 
      nombre: 'Chiclets Adams', 
      id: 1,
      img: "img/chicles_adams.jpg",
      valorPaquete:7000
    },
    { 
      nombre: 'Pirulin', 
      id: 1,
      img: "img/pirulin.jpg",
      valorPaquete:7000
    },
    { 
      nombre: 'Boleros', 
      id: 1,
      img: "img/boleros.JPG",
      valorPaquete:7000
    }
  ];
});
