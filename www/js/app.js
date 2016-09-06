angular.module('App', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        url: '/index',
        controller: 'IndexController',
        templateUrl: 'index.html'
      })
      // setup an abstract state for the tabs directive
    .state('connection', {
    url: '/connection',
    abstract: true,
    templateUrl: 'templates/connection.html'
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
