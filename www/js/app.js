angular.module('App', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('uatOutSection', {
        url: '/uatOutSection',
        controller: 'UatOutController',
        templateUrl: 'views/uatOutSection/uatOutSection.html'
      })
      
      .state('uatOutStateVectorTest', {
        url: '/uatOutStateVectorTest',
        templateUrl: 'views/uatOutDetailTest/uatOutStateVectorTest.html',
        controller: 'UatOutStateVectorTestController'
      })
      .state('uatOutTargetStateTest', {
        url: '/uatOutTargetStateTest',
        templateUrl: 'views/uatOutDetailTest/uatOutTargetStateTest.html',
        controller: 'UatOutTargetStateTestController'
      })
       .state('uatOutRFLinkTest', {
        url: '/uatOutRFLinkTest',
        templateUrl: 'views/uatOutDetailTest/uatOutRFLinkTest.html',
        controller: 'UatOutRFLinkTestController'
      })
      ;

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
