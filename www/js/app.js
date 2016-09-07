angular.module('App', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        url: '/index',
        controller: 'IndexController',
        templateUrl: 'index.html',
      })
      // setup an abstract state for the tabs directive
      .state('connection', {
        url: '/connection',
        abstract: true,
        templateUrl: 'views/modal/connection/connection.html'
      })
      // Code for Connection tabs:Each tab has its own nav history stack:

      .state('tab.data', {
        url: '/data',
        views: {
          'tab-data': {
            templateUrl: 'views/modal/connection/tabs/tab-data.html',
            controller: 'DataController'
          }
        }
      })

      .state('tab.antenna', {
        url: '/antenna',
        views: {
          'tab-antenna': {
            templateUrl: 'views/modal/connection/tabs/tab-antenna.html',
            controller: 'AntennaController'
          }
        }
      })

      .state('tab.direct', {
        url: '/direct',
        views: {
          'tab-direct': {
            templateUrl: 'views/modal/connection/tabs/tab-direct.html',
            controller: 'DirectController'
          }
        }
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
