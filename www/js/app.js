angular.module('App', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        url: '/index',
        controller: 'IndexController',
        templateUrl: 'index.html'
      })
      .state('uatOutSection', {
        url: '/uatOutSection',
        controller: 'UatOutController',
        templateUrl: 'views/uatOutSection/uatOutSection.html'
      })

      .state('morePopover', {
        url: '/morePopover',
        controller: 'morePopoverController',
        templateUrl: 'views/uatOutSection/morePopover.html'
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
      .state('uatOutModeStatusTest', {
        url: '/uatOutModeStatusTest',
        templateUrl: 'views/uatOutDetailTest/uatOutModeStatusTest.html',
        controller: 'UatOutModeStatusTestController'
      })
      .state('uatOutAUXStateVectorTest', {
        url: '/uatOutAUXStateVectorTest',
        templateUrl: 'views/uatOutDetailTest/uatAUXStateVectorTest.html',
        controller: 'UatOutAuxStateVectorTestController'
      })
      .state('uatOutTrajectoryChangeTest', {
        url: '/uatOutTrajectoryChangeTest',
        templateUrl: 'views/uatOutDetailTest/uatOutTrajectoryChangeTest.html',
        controller: 'UatOutTrajectoryChangeTestController'
      })
      .state('uatOutSummary', {
        url: '/uatOutSummary',
        templateUrl: 'views/uatOutDetailTest/uatOutSummary.html',
        controller: 'UatOutSummaryController'
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
