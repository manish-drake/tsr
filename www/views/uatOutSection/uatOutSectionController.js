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

        $scope.singleClick = function (val) {

            $scope.Val = val;
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
                            $scope.result1 = res.data;
                            $scope.$parent.result1 = res.data;
                            break;
                        case 'uatModeStatusTest':
                            $scope.result2 = res.data;
                            $scope.$parent.result2 = res.data;
                            break;
                        case 'uatTargetStateTest':
                            $scope.result3 = res.data;
                            $scope.$parent.result3 = res.data;
                            break;
                        case 'uatAUXStateVectorTest':
                            $scope.result4 = res.data;
                            $scope.$parent.result4 = res.data;
                            break;
                        case 'uatRFLinkTest':
                            $scope.result5 = res.data;
                            $scope.$parent.result5 = res.data;
                            break;
                        case 'uatTrajectoryChangeTest':
                            $scope.result6 = res.data;
                            $scope.$parent.result6 = res.data;
                            break;
                        case 'uatSummary':
                            $scope.result7 = res.data;
                            $scope.$parent.result7 = res.data;
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