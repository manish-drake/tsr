angular.module('App')
  .controller('MorePopoverController', function ($scope, $ionicPopup, $timeout) {

      $scope.runButton_Click = function ($event) 
      {
        params.button2.clicked = !params.button2.clicked
      }

  })
