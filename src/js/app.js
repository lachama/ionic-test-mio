// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'firebase'])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider) {
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
})
.factory("obtenerLista", function($firebaseArray){
  var myFirebaseRef = new Firebase("https://blazing-inferno-5723.firebaseIO.com/"); 
  var interfaz = {
    writeData: function(datos) {
      myFirebaseRef.push(datos); 
    },
    readData: function() {
      return  $firebaseArray(myFirebaseRef);
    }
  };
  return interfaz;
});

angular.module('starter.controllers', []);
