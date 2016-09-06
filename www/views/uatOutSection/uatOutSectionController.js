angular.module('App')
    .controller('UatOutSectionController', function ($scope, $timeout, $state, $http, $ionicLoading, $ionicPopover,$ionicModal, $rootScope) {
        $scope.Val = 'UATOut';
        $scope.isRunningAllEnabled = false;
//Code for More Popover
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

 //Code for Connection Modal  
    $ionicModal.fromTemplateUrl('views/modal/connection/connection.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function (connectionModal) {
      $scope.connectionModal = connectionModal;
    });
    $scope.openConnection = function () {
      $scope.connectionModal.show();
    };
    $scope.closeConnection = function () {
      $scope.connectionModal.hide();
    };

    //Code to Run the Test
        $scope.onRunClick = function (isRunningAllEnabled) {
            $scope.IsRunningAllEnabled = isRunningAllEnabled;
        }

        $scope.selectedRow = null;
        $scope.onSingleClick = function (msgId) {

            $scope.MsgId = msgId;
            $scope.selectedRow = msgId;
        }
//Code for double click to navigate to detail page
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
            //$ionicLoading.show();
            $scope.showionicLoading();
            if ($scope.IsRunningAllEnabled) { $scope.onRunAll(); }
            else {
                $http.get('http://13.90.248.158:8081/run_test_get?msgID=' + $scope.MsgId + '&reqID=12')
                    .success(function (res) {
                        $scope.onSelectedCard(res);
                        $ionicLoading.hide();
                    })
                    .error(function (err) {
                        $ionicLoading.hide();
                    });
            }

        }

          $scope.showionicLoading = function() {
            $ionicLoading.show({
              template: 'Running...'
        });
          };

        $scope.onSelectedCard = function (res) {
            switch ($scope.MsgId) {
                case 'uatStateVectorTestSubsonic':
                    $scope.uatStateVectorTestSubsonic = res.data;
                    $scope.$parent.uatStateVectorTestSubsonic = res.data;
                    break;
                case 'uatModeStatusTest':
                    $scope.uatModeStatusTest = res.data;
                    $scope.$parent.uatModeStatusTest = res.data;
                    break;
                case 'uatTargetStateTest':
                    $scope.uatTargetStateTest = res.data;
                    $scope.$parent.uatTargetStateTest = res.data;
                    break;
                case 'uatAUXStateVectorTest':
                    $scope.uatAUXStateVectorTest = res.data;
                    $scope.$parent.uatAUXStateVectorTest = res.data;
                    break;
                case 'uatDetailRFLinkTest':
                    $scope.uatDetailRFLinkTest = res.data;
                    $scope.$parent.uatDetailRFLinkTest = res.data;
                    break;
                case 'uatTrajectoryChangeTest':
                    $scope.uatTrajectoryChangeTest = res.data;
                    $scope.$parent.uatTrajectoryChangeTest = res.data;
                    break;
                case 'uatDetailSummary':
                    $scope.uatDetailSummary = res.data;
                    $scope.$parent.uatDetailSummary = res.data;
                    break;
                default:
            }
        }
//Code to Run all the Tests of UAT OUT
        $scope.onRunAll = function () {
            for (var i = 1; i < 8; i++) {
                switch (i) {
                    case 1:
                        $timeout(function () {
                            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatStateVectorTestSubsonic&reqID=12')
                                .success(function (res) {
                                    $ionicLoading.hide();
                                    $scope.selectedRow = "uatStateVectorTestSubsonic";
                                    $scope.uatStateVectorTestSubsonic = res.data;
                                    $scope.$parent.uatStateVectorTestSubsonic = res.data;
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
                                    $scope.uatModeStatusTest = res.data;
                                    $scope.$parent.uatModeStatusTest = res.data;
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
                                    $scope.uatTargetStateTest = res.data;
                                    $scope.$parent.uatTargetStateTest = res.data;
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
                                    $scope.uatAUXStateVectorTest = res.data;
                                    $scope.$parent.uatAUXStateVectorTest = res.data;
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
                                    $scope.uatDetailRFLinkTest = res.data;
                                    $scope.$parent.uatDetailRFLinkTest = res.data;
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
                                    $scope.uatTrajectoryChangeTest = res.data;
                                    $scope.$parent.uatTrajectoryChangeTest = res.data;;
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
                                    $scope.uatDetailSummary = res.data;
                                    $scope.$parent.uatDetailSummary = res.data;
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