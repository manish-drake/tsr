angular.module('App')
  .controller('MorePopoverController', function ($scope, $ionicPopup, $ionicModal, $rootScope) {
    //Code for Help Modal  
    $ionicModal.fromTemplateUrl('views/modal/help/help.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openHelp = function () {
      $scope.modal.show();
    };
    $scope.closeHelp = function () {
      $scope.modal.hide();
    };


    //Code for Setup Modal 
    $ionicModal.fromTemplateUrl('views/modal/setup/setup.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (modal1) {
      $scope.modal1 = modal1;
    });
    $scope.openSetup = function () {
      $scope.modal1.show();
    };
    $scope.closeSetup = function () {
      $scope.modal1.hide();
    };

  })
