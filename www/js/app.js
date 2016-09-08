angular.module('App', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        url: '/index',
        controller: 'IndexController',
        templateUrl: 'index.html',
      })

    .state('connection', {
        url: '/connection',
        controller: 'ConnectionController',
        templateUrl: 'views/modal/connection/connection.html',
      })
      .state('uatAUXStateVectorTest', {
        url: '/uatAUXStateVectorTest',
        controller: 'UatAuxStateVectorTestController',
        templateUrl: 'views/uatAUXStateVectorTest/uatAUXStateVectorTest.html',
      })
      .state('uatModeStatusTest', {
        url: '/uatModeStatusTest',
        controller: 'UatModeStatusTestController',
        templateUrl: 'views/uatModeStatusTest/uatModeStatusTest.html',
      })
      .state('uatOutSection', {
        url: '/uatOutSection',
        controller: 'UatOutSectionController',
        templateUrl: 'views/uatOutSection/uatOutSection.html',
      })
      .state('uatDetailRFLinkTest', {
        url: '/uatDetailRFLinkTest',
        templateUrl: 'views/uatRFLinkTest/uatRFLinkTest.html',
        controller: 'UatRFLinkTestController',
      })
      .state('uatStateVectorTestSubsonic', {
        url: '/uatStateVectorTestSubsonic',
        controller: 'UatStateVectorTestController',
        templateUrl: 'views/uatStateVectorTest/uatStateVectorTest.html',
      })
      .state('uatDetailSummary', {
        url: '/uatDetailSummary',
        controller: 'UatSummaryController',
        templateUrl: 'views/uatSummary/uatSummary.html',
      })
      .state('uatTargetStateTest', {
        url: '/uatTargetStateTest',
        controller: 'UatTargetStateTestController',
        templateUrl: 'views/uatTargetStateTest/uatTargetStateTest.html',

      })
      .state('uatTrajectoryChangeTest', {
        url: '/uatTrajectoryChangeTest',
        controller: 'UatTrajectoryChangeTestController',
        templateUrl: 'views/uatTrajectoryChangeTest/uatTrajectoryChangeTest.html',
      });
      // if none of the above states are matched, use this as the fallback
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
