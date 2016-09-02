angular.module('App')
    .controller('UatOutSectionController', function ($scope, $state, $http, $ionicLoading, $ionicPopover) {
        $scope.Val = 'UATOut';

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

        $scope.selectedRow = null;
        $scope.singleClick = function (val) {

            $scope.Val = val;
            $scope.selectedRow = val;
        }

        $scope.doubleClick = function (val) {

            $scope.Val = val;

            switch ($scope.Val) {
                case 'uatStateVectorTest':
                    $state.go('uatStateVectorTest');
                    break;
                case 'uatModeStatusTest':
                    $state.go('uatModeStatusTest');
                    break;
                case 'uatTargetStateTest':
                    $state.go('uatTargetStateTest');
                    break;
                case 'uatAUXStateVectorTest':
                    $state.go('uatAUXStateVectorTest');
                    break;
                case 'uatRFLinkTest':
                    $state.go('uatRFLinkTest');
                    break;
                case 'uatTrajectoryChangeTest':
                    $state.go('uatTrajectoryChangeTest');
                    break;
                case 'uatSummary':
                    $state.go('uatSummary');
                    break;

            }
        }

        $scope.runTest = function () {
            $ionicLoading.show();

            $http.get('http://13.90.248.158:8081/run_test_get?msgID=2&reqID=12')
                .success(function (res) {
                    switch ($scope.Val) {
                        case 'uatStateVectorTest':
                            $scope.result1 = res.data.uatOutStateVectorTestSubsonic;
                            $scope.$parent.result1 = res.data.uatOutStateVectorTestSubsonic;
                            break;
                        case 'uatModeStatusTest':
                            $scope.result2 = res.data.uatOutModeStatusTest;
                            $scope.$parent.result2 = res.data.uatOutModeStatusTest;
                            break;
                        case 'uatTargetStateTest':
                            $scope.result3 = res.data.uatOutTargetStateTest;
                            $scope.$parent.result3 = res.data.uatOutTargetStateTest;
                            break;
                        case 'uatAUXStateVectorTest':
                            $scope.result4 = res.data.uatOutAUXStateVectorTest;
                            $scope.$parent.result4 = res.data.uatOutAUXStateVectorTest;
                            break;
                        case 'uatRFLinkTest':
                            $scope.result5 = res.data.uatOutDetailRFLinkTest;
                            $scope.$parent.result5 = res.data.uatOutDetailRFLinkTest;
                            break;
                        case 'uatTrajectoryChangeTest':
                            $scope.result6 = res.data.uatOutTrajectoryChangeTest;
                            $scope.$parent.result6 = res.data.uatOutTrajectoryChangeTest;
                            break;
                        case 'uatSummary':
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