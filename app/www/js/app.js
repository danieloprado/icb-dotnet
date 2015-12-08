angular.module('starter', ['ionic', 'ngMaterial', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.close();
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            window.StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: '/search',
            views: {
            'menuContent': {
                    templateUrl: 'templates/search.html'
                }
                }
            })

    .state('app.browse', {
        url: '/browse',
            views: {
            'menuContent': {
                    templateUrl: 'templates/browse.html'
                }
                }
            })
      .state('app.playlists', {
              url: '/playlists',
              views: {
              'menuContent': {
                      templateUrl: 'templates/playlists.html',
                      controller: 'PlaylistsCtrl'
                  }
              }
              })

    .state('app.single', {
        url: '/playlists/:playlistId',
            views: {
            'menuContent': {
                    templateUrl: 'templates/playlist.html',
                    controller: 'PlaylistCtrl'
                }
                }
            });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
    });
