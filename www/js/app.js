angular.module('App', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        url: '/index',
        controller: 'IndexController',
        templateUrl: 'index.html'
      })
      .state('uatAUXStateVectorTest', {
        url: '/uatAUXStateVectorTest',
        templateUrl: 'views/uatAUXStateVectorTest/uatAUXStateVectorTest.html',
        controller: 'UatAuxStateVectorTestController'
      })
      .state('uatModeStatusTest', {
        url: '/uatModeStatusTest',
        templateUrl: 'views/uatModeStatusTest/uatModeStatusTest.html',
        controller: 'UatModeStatusTestController'
      })
      .state('uatOutSection', {
        url: '/uatOutSection',
        controller: 'UatOutSectionController',
        templateUrl: 'views/uatOutSection/uatOutSection.html'
      })
       .state('uatRFLinkTest', {
        url: '/uatRFLinkTest',
        templateUrl: 'views/uatRFLinkTest/uatRFLinkTest.html',
        controller: 'UatRFLinkTestController'
      })      
      .state('uatStateVectorTest', {
        url: '/uatStateVectorTest',
        templateUrl: 'views/uatStateVectorTest/uatStateVectorTest.html',
        controller: 'UatStateVectorTestController'
      })
      .state('uatSummary', {
        url: '/uatSummary',
        templateUrl: 'views/uatSummary/uatSummary.html',
        controller: 'UatSummaryController'
      })
      .state('uatTargetStateTest', {
        url: '/uatTargetStateTest',
        templateUrl: 'views/uatTargetStateTest/uatTargetStateTest.html',
        controller: 'UatTargetStateTestController'
      })
      .state('uatTrajectoryChangeTest', {
        url: '/uatTrajectoryChangeTest',
        templateUrl: 'views/uatTrajectoryChangeTest/uatTrajectoryChangeTest.html',
        controller: 'UatTrajectoryChangeTestController'
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
