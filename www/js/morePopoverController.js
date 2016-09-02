angular.module('App')
    .controller('MorePopoverController', function ($scope) {

        $scope.button2_Click = function () {
            this.button2.clicked = !this.button2.clicked
        }
    });