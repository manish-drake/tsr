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
                case 'uatOutModeStatusTest':
                    $state.go('uatOutModeStatusTest');
                    break;
                case 'uatOutTargetStateTest':
                    $state.go('uatOutTargetStateTest');
                    break;
                case 'uatOutAUXStateVectorTest':
                    $state.go('uatOutAUXStateVectorTest');
                    break;
                case 'uatOutRFLinkTest':
                    $state.go('uatOutRFLinkTest');
                    break;
                case 'uatOutTrajectoryChangeTest':
                    $state.go('uatOutTrajectoryChangeTest');
                    break;
                case 'uatOutSummary':
                    $state.go('uatOutSummary');
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
                        case 'uatOutModeStatusTest':
                            $scope.result2 = res.data.uatOutModeStatusTest;
                            $scope.$parent.result2 = res.data.uatOutModeStatusTest;
                            break;
                        case 'uatOutTargetStateTest':
                            $scope.result3 = res.data.uatOutTargetStateTest;
                            $scope.$parent.result3 = res.data.uatOutTargetStateTest;
                            break;
                        case 'uatOutAUXStateVectorTest':
                            $scope.result4 = res.data.uatOutAUXStateVectorTest;
                            $scope.$parent.result4 = res.data.uatOutAUXStateVectorTest;
                            break;
                        case 'uatOutRFLinkTest':
                            $scope.result5 = res.data.uatOutDetailRFLinkTest;
                            $scope.$parent.result5 = res.data.uatOutDetailRFLinkTest;
                            break;
                        case 'uatOutTrajectoryChangeTest':
                            $scope.result6 = res.data.uatOutTrajectoryChangeTest;
                            $scope.$parent.result6 = res.data.uatOutTrajectoryChangeTest;
                            break;
                        case 'uatOutSummary':
                            $scope.result7 = res.data.uatOutDetailSummary;
                            $scope.$parent.result7 = res.data.uatOutDetailSummary;
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