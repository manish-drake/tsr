angular.module('App', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('uatOutSection', {
        url: '/uatOutSection',
        controller: 'UatOutController',
        templateUrl: 'views/uatOutSection/uatOutSection.html'
      })
      .state('uatOutStateVectorTest', {
        url: '/uatOutStateVectorTest/:temp',
        templateUrl: 'views/uatOutStateVectorTest/uatOutStateVectorTest.html',
        controller: 'UatOutStateVectorTestController'
      });

    $urlRouterProvider.otherwise('/uatOutSection');
  })





  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
