angular.module('App')
    .controller('UatOutSectionController', function ($scope, $timeout, $state, $http, $ionicLoading, $ionicPopover, $rootScope) {
        $scope.Val = 'UATOut';
        $scope.button2 = false;
        $scope.counter = 90;

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

        $scope.runButton_Click = function (val) {
            $scope.button2 = val;
        }
        $scope.selectedRow = null;
        $scope.singleClick = function (val) {

            $scope.Val = val;
            $scope.selectedRow = val;
        }

        $scope.doubleClick = function (val) {
            $scope.Val = val;

            switch ($scope.Val) {
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
            $ionicLoading.show();

            $http.get('http://13.90.248.158:8081/run_test_get?msgID=' + $scope.Val + '&reqID=12')
                .success(function (res) {
                    if ($scope.button2) { $scope.RunAll(res); }
                    else { $scope.SelectedCard(res); }
                    $ionicLoading.hide();
                })
                .error(function (err) {
                    $ionicLoading.hide();
                });

        }

        $scope.SelectedCard = function (res) {
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

        $scope.RunAll = function (res) {
            for (var i = 1; i < 8; i++) {
                switch (i) {
                    case 1:
                        $scope.result1 = res.data;
                        $scope.$parent.result1 = res.data;
                        break;
                    case 2:
                        $scope.result2 = res.data;
                        $scope.$parent.result2 = res.data;
                        break;
                    case 3:
                        $scope.result3 = res.data;
                        $scope.$parent.result3 = res.data;
                        break;
                    case 4:
                        $scope.result4 = res.data;
                        $scope.$parent.result4 = res.data;
                        break;
                    case 5:
                        $scope.result5 = res.data;
                        $scope.$parent.result5 = res.data;
                        break;
                    case 6:
                        $scope.result6 = res.data;
                        $scope.$parent.result6 = res.data;
                        break;
                    case 7:
                        $scope.result7 = res.data;
                        $scope.$parent.result7 = res.data;
                        break;

                    default:
                }
            }
        }
    });