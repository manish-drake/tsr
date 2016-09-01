angular.module('App')
    .controller('UatOutController', function ($scope, $state, $http, $ionicLoading, $ionicPopover) {
        $scope.Val = 'UATOut';

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

        $scope.singleClick = function (val) {

            $scope.Val = val;
        }

        $scope.doubleClick = function (val) {

            $scope.Val = val;

            switch ($scope.Val) {
                case 'uatOutStateVectorTest':
                    $state.go('uatOutStateVectorTest');
                    break;
                case 'uatOutTargetStateTest':
                    $state.go('uatOutTargetStateTest');
                    break;
                case 'uatOutRFLinkTest':
                    $state.go('uatOutRFLinkTest');
                    break;

            }
        }


        $scope.runTest = function () {
            $ionicLoading.show();

            $http.get('http://13.90.248.158:8081/run_test_get?msgID=2&reqID=12')
                .success(function (res) {
                    switch ($scope.Val) {
                        case 'uatOutStateVectorTest':
                            $scope.result1 = res.data.uatOutStateVectorTestSubsonic;
                            $scope.$parent.result1 = res.data.uatOutStateVectorTestSubsonic;
                            break;
                        case 'uatOutTargetStateTest':
                            $scope.result2 = res.data.uatOutTargetStateTest;
                            $scope.$parent.result2 = res.data.uatOutTargetStateTest;
                            break;
                        case 'uatOutRFLinkTest':
                            $scope.result3 = res.data.uatOutDetailRFLinkTest;
                            $scope.$parent.result3 = res.data.uatOutDetailRFLinkTest;
                            break;
                        default:
                    }
                    $ionicLoading.hide();
                })
                .error(function (err) {
                    $ionicLoading.hide();
                });

        }
    });