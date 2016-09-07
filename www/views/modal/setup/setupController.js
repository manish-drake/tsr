 angular.module('App')
  .controller('SetupController', function ($scope,$rootScope) {

  
  $scope.show = false;
  /**
   * @func openToggle
   * 
   * visible and collapse power setup slider
   */
  $scope.openToggle = function () {
     $scope.show = !$scope.show;
    };
    
    
  })