angular.module('App')
  .controller('MorePopoverController', function ($scope, $ionicPopup, $ionicModal, $rootScope) {
      
    $ionicModal.fromTemplateUrl('views/modal/help/help.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (helpModal) {
      $scope.helpModal = helpModal;
    });
    
      
    /**
     * @func openHelp
     * 
     * open helpModalPopup on help button 
     */
    $scope.openHelp = function () {
      $scope.helpModal.show();
      $scope.closePopover();
    };

    /**
     * @func closeHelp
     * 
     * close helpModalPopup on cancel button
     */
    $scope.closeHelp = function () {
      $scope.helpModal.hide();
    };


    $ionicModal.fromTemplateUrl('views/modal/setup/setup.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (setupModal) {
      $scope.setupModal = setupModal;
    });


    /**
     * @func openSetup
     * 
     * open setupModalPopup on setup button 
     */
    $scope.openSetup = function () {
      $scope.setupModal.show();
      $scope.closePopover();
    };

    /**
     * @func closeHelp
     * 
     * close setupModalPopup on cancel button
     */
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

 
