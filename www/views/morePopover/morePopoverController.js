angular.module('App')
  .controller('MorePopoverController', function ($scope, $ionicModal, $rootScope) {
      
    $ionicModal.fromTemplateUrl('views/modal/help/help.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (helpModal) {
      $scope.helpModal = helpModal;
    });
    
      
    /**
     * @func openHelp
     * 
     * open helpModalPopup on help button and close More popover on Help button 
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
     * open setupModalPopup on setup button and close More Popover on Setup button
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
    
    /**
     * @func openShowStatus
     * 
     * close More popover on Show Status button 
     */
    $scope.openShowStatus = function () {

            $scope.closePopover();
        }
     /**
      * @func save

      * close More popover on Save button 
      */
     $scope.save = function () {

            $scope.closePopover();
        }
     
  })

 
