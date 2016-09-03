angular.module('App')
    .controller('UatOutSectionController', function ($scope, $timeout, $state, $http, $ionicLoading, $ionicPopover, $rootScope) {
        $scope.Val = 'UATOut';
        $scope.button2 = false;

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

        $scope.onRunClick = function (isRunningAllEnabled) {
            $scope.button2 = isRunningAllEnabled;
        }

        $scope.selectedRow = null;
        $scope.onSingleClick = function (msgId) {

            $scope.MsgId = msgId;
            $scope.selectedRow = msgId;
        }

        $scope.onDoubleClick = function (msgId) {
            $scope.MsgId = msgId;

            switch ($scope.MsgId) {
                case 'uatStateVectorTestSubsonic':
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
                case 'uatDetailRFLinkTest':
                    $state.go('uatRFLinkTest');
                    break;
                case 'uatTrajectoryChangeTest':
                    $state.go('uatTrajectoryChangeTest');
                    break;
                case 'uatDetailSummary':
                    $state.go('uatSummary');
                    break;

            }
        }

        $scope.runTest = function () {
            if ($scope.button2) {
                $ionicLoading.show();
                $scope.onRunAll();
            }
            else {
                $http.get('http://13.90.248.158:8081/run_test_get?msgID=' + $scope.Val + '&reqID=12')
                    .success(function (res) {
                        
                        $scope.onSelectedCard(res);
                        $ionicLoading.hide();
                    })
                    .error(function (err) {
                        $ionicLoading.hide();
                    });

            }

        }

        $scope.onSelectedCard = function (res) {
            switch ($scope.Val) {
                case 'uatStateVectorTestSubsonic':
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
                case 'uatDetailRFLinkTest':
                    $scope.result5 = res.data;
                    $scope.$parent.result5 = res.data;
                    break;
                case 'uatTrajectoryChangeTest':
                    $scope.result6 = res.data;
                    $scope.$parent.result6 = res.data;
                    break;
                case 'uatDetailSummary':
                    $scope.result7 = res.data;
                    $scope.$parent.result7 = res.data;
                    break;
                default:
            }
        }

        $scope.onRunAll = function () {
            for (var i = 1; i < 8; i++) {
                switch (i) {
                    case 1:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatStateVectorTestSubsonic&reqID=12')
                                .success(function (res) {
                                    $ionicLoading.hide();
                                    $scope.selectedRow = "uatStateVectorTestSubsonic";
                                    $scope.result1 = res.data;
                                    $scope.$parent.result1 = res.data;
                                })
                                .error(function (err) {
                                    $ionicLoading.hide();
                                });
                        }, 1000);

                        break;
                    case 2:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatModeStatusTest&reqID=12')
                                .success(function (res) {
                                    $scope.selectedRow = "uatModeStatusTest";
                                    $scope.result2 = res.data;
                                    $scope.$parent.result2 = res.data;
                                })
                                .error(function (err) {
                                    $ionicLoading.hide();
                                });
                        }, 2000);

                        break;
                    case 3:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatTargetStateTest&reqID=12')
                                .success(function (res) {
                                    $scope.selectedRow = "uatTargetStateTest";
                                    $scope.result3 = res.data;
                                    $scope.$parent.result3 = res.data;
                                })
                                .error(function (err) {
                                    $ionicLoading.hide();
                                });
                        }, 3000);

                        break;
                    case 4:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatAUXStateVectorTest&reqID=12')
                                .success(function (res) {
                                    $scope.selectedRow = "uatAUXStateVectorTest";
                                    $scope.result4 = res.data;
                                    $scope.$parent.result4 = res.data;
                                })
                                .error(function (err) {
                                    $ionicLoading.hide();
                                });
                        }, 4000);

                        break;
                    case 5:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatDetailRFLinkTest&reqID=12')
                                .success(function (res) {
                                    $scope.selectedRow = "uatDetailRFLinkTest";
                                    $scope.result5 = res.data;
                                    $scope.$parent.result5 = res.data;
                                })
                                .error(function (err) {
                                    $ionicLoading.hide();
                                });
                        }, 5000);

                        break;
                    case 6:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatTrajectoryChangeTest&reqID=12')
                                .success(function (res) {
                                    $scope.selectedRow = "uatTrajectoryChangeTest";
                                    $scope.result6 = res.data;
                                    $scope.$parent.result6 = res.data;;
                                })
                                .error(function (err) {
                                    $ionicLoading.hide();
                                });

                        }, 6000);
                        break;
                    case 7:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatDetailSummary&reqID=12')
                                .success(function (res) {
                                    $scope.selectedRow = "uatDetailSummary";
                                    $scope.result7 = res.data;
                                    $scope.$parent.result7 = res.data;
                                })
                                .error(function (err) {
                                    $ionicLoading.hide();
                                });

                        }, 6000);
                        break;
                    default:
                }
            }
        }
    });