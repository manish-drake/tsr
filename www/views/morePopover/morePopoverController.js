angular.module('App')
  .controller('MorePopoverController', function ($scope, $ionicPopup, $ionicModal, $rootScope) {
    //Code for Help Modal  
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
    };

    /**
     * @func closeHelp
     * 
     * close setupModalPopup on cancel button
     */
    $scope.closeSetup = function () {
      $scope.setupModal.hide();
    };
  })
