angular.module('App')
  .controller('MorePopoverController', function ($scope, $ionicPopup, $ionicModal, $rootScope) {
    //Code for Help Modal  
    $ionicModal.fromTemplateUrl('views/modal/help/help.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (helpModal) {
      $scope.helpModal = helpModal;
    });
    $scope.openHelp = function () {
      $scope.helpModal.show();
    };
    $scope.closeHelp = function () {
      $scope.helpModal.hide();
    };


    //Code for Setup Modal 
    $ionicModal.fromTemplateUrl('views/modal/setup/setup.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (setupModal) {
      $scope.setupModal = setupModal;
    });
    $scope.openSetup = function () {
      $scope.setupModal.show();
    };
    $scope.closeSetup = function () {
      $scope.setupModal.hide();
    };
  })
