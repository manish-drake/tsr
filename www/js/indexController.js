angular.module('App')

    .controller('IndexController', function ($scope, $http, $ionicLoading, $ionicPopover,$broadcast) {

        $ionicPopover.fromTemplateUrl('views/uatOutSection/morePopover.html', {
            scope: $scope,
        }).then(function (popover) {
            $scope.popover = popover;
        })

        $scope.openMore = function ($event) {
            $scope.popover.show($event);
        }

        $scope.closePopover = function () {
            $scope.popover.hide();
        }

        

        $scope.runTest = function () {

            $scope.$broadcast('runTestEvent');
        }
    });