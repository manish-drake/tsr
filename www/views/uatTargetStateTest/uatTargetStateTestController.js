angular.module('App')
    .controller('UatTargetStateTestController', function ($scope, $http, $ionicLoading, $ionicPopover) {

      $ionicPopover.fromTemplateUrl('views/morePopover/morePopover.html', {
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
            $ionicLoading.show();

            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatTargetStateTest&reqID=12')
                .success(function (res) {
                    $scope.result3 = res.data;
                    $scope.$parent.result3 = res.data;
                    $ionicLoading.hide();
                })
                .error(function (err) {
                    $ionicLoading.hide();
                });
        }
    });