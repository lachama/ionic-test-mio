// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'firebase'])

.run(["$ionicPlatform", function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tabs', {
    url: "/tabs",
    templateUrl: 'templates/nomenu.html'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.listar', {
    url: "/listar", 
    views: {
      'menuContent': {
        templateUrl: "templates/listar.html",
        controller: 'ListarCtrl'
      }
    }
  })
  .state('app.adicionar', {
    url: "/adicionar", 
    views: {
      'menuContent': {
        templateUrl: "templates/adicionar.html",
        controller: 'AdicionarController'
      }
    }
  })
  .state('app.search', {
    url: "/search", // -> /app/search
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html",
        controller: "BrowseCtrl"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
}])
.factory("obtenerLista", ["$firebaseArray", function($firebaseArray){
  var myFirebaseRef = new Firebase("https://blazing-inferno-5723.firebaseIO.com/"); 
  var interfaz = {
    writeData: function(datoss) {
      myFirebaseRef.push(datoss); 
    },
    readData: function() {
      console.log("-------1");
      return  $firebaseArray;
      // myFirebaseRef.once("value", function(snapshot) {
      //   console.log("entro!");
      //   console.log(snapshot.val());
      //   return snapshot.val();
      // }, function (errorObject) {
      //   return null;
      // });
    }
  };
  return interfaz;
}]);

angular.module('starter.controllers', []);

angular.module('starter.controllers')
.controller('BrowseCtrl', ["$scope", "$cordovaCamera", function($scope, $cordovaCamera) {
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

}])

.controller('PlaylistCtrl', ["$scope", function($scope) {

}]);

angular.module('starter.controllers')

.controller('AdicionarController', ["$scope", "obtenerLista", function($scope, obtenerLista) {
  //$scope.listCandies = [];

  $scope.addCandy = function() {
    //$scope.listCandies.push($scope.formCandy);
    //$scope.formCandy = "";
    console.log("-----------------");
    console.log($scope.formCandy);
    obtenerLista.writeData($scope.formCandy);
    $scope.formCandy = "";
  };
}]);

angular.module('some', [])
.controller('ASome', function() {

});

angular.module('starter.controllers')

.controller('AppCtrl', ["$scope", function($scope) {
  
}]);

angular.module('starter.controllers')

.controller('ListarCtrl', ["$scope", "obtenerLista", function($scope, obtenerLista) {
  console.log("-----------2");
  console.log(obtenerLista.readData());


  // $scope.candies = [
  //   { 
  //     nombre: 'Nerd', 
  //     id: 1,
  //     img: "img/nerds.jpg",
  //     valorPaquete:7000
  //   },
  //   { 
  //     nombre: 'Milky Way', 
  //     id: 1,
  //     img: "img/milkyWay.jpeg",
  //     valorPaquete:7000
  //   },
  //   { 
  //     nombre: 'Chiclets Adams', 
  //     id: 1,
  //     img: "img/chicles_adams.jpg",
  //     valorPaquete:7000
  //   },
  //   { 
  //     nombre: 'Pirulin', 
  //     id: 1,
  //     img: "img/pirulin.jpg",
  //     valorPaquete:7000
  //   },
  //   { 
  //     nombre: 'Boleros', 
  //     id: 1,
  //     img: "img/boleros.JPG",
  //     valorPaquete:7000
  //   }
  // ];
}]);

angular.module('starter.controllers')

.controller('PlaylistsCtrl', ["$scope", function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
}]);
