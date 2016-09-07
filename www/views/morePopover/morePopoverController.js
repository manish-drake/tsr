angular.module('App')
  .controller('MorePopoverController', function ($scope, $ionicPopup, $ionicModal, $rootScope) {
      
    $ionicModal.fromTemplateUrl('views/modal/help/help.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (helpModal) {
      $scope.helpModal = helpModal;
    });
    $scope.openHelp = function () {
      $scope.helpModal.show();
      $scope.closePopover();
    };
    $scope.closeHelp = function () {
      $scope.helpModal.hide();
    };


    
    $ionicModal.fromTemplateUrl('views/modal/setup/setup.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (setupModal) {
      $scope.setupModal = setupModal;
    });
    $scope.openSetup = function () {
      $scope.setupModal.show();
      $scope.closePopover();
    };
    $scope.closeSetup = function () {
      $scope.setupModal.hide();
    };
    $scope.openShowStatus = function () {

            $scope.closePopover();
        }
     $scope.save = function () {

            $scope.closePopover();
        }
     
  })

 
