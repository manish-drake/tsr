angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('uatOutSection', {
    url: '/uatOutSection',
    controller: 'UatOutController',
    templateUrl: 'views/uatOutSection/uatOutSection.html'
  });

  $urlRouterProvider.otherwise('/uatOutSection');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
