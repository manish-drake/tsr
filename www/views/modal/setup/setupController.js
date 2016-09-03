 angular.module('App')
  .controller('SetupController', function ($scope,$rootScope) {

  //Code for toggle button 
  $scope.show = false;
  $scope.openToggle = function () {
     $scope.show = !$scope.show;
    };
    
    
  })