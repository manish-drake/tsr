angular.module('App')
    .controller('UatOutSectionController', function ($scope, $timeout, $state, $ionicModal, $http, $ionicLoading, $ionicPopover, $rootScope) {

        $scope.Val = 'UATOut';
        $scope.isRunningAllEnabled = false;
        $scope.listOfUATOut = [
            { text: 'uatStateVectorTestSubsonic' },
            { text: 'uatModeStatusTest' },
            { text: 'uatTargetStateTest' },
            { text: 'uatAUXStateVectorTest' },
            { text: 'uatDetailRFLinkTest' },
            { text: 'uatTrajectoryChangeTest' },
            { text: 'uatDetailSummary' }
        ];

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

        //Code for run all toggle button is enable or not
        $scope.onRunClick = function (isRunningAllEnabled) {
            $scope.IsRunningAllEnabled = isRunningAllEnabled;
        }

        //Code to get selectedRow on single click 
        $scope.selectedRow = null;
        $scope.onSingleClick = function (msgId) {

            $scope.MsgId = msgId;
            $scope.selectedRow = msgId;
        }


        //Code for navigation on double click
        $scope.onDoubleClick = function (msgId) {
            $scope.MsgId = msgId;
            $state.go($scope.MsgId);

        }

        //Code for Run test card
        $scope.$on('runTestEvent', $scope.runTest);

        $scope.runTest = function () {
            //$ionicLoading.show();
            $scope.showionicLoading();
            if ($scope.IsRunningAllEnabled) { $scope.onRunAll(); }
            else {
                $http.get('http://13.90.248.158:8081/run_test_get?msgID=' + $scope.MsgId + '&reqID=12')
                    .success(function (res) {
                        $scope.onSelectedCard(res);
                        var theJSON = JSON.stringify(res);
                        $ionicLoading.hide();
                    })
                    .error(function (err) {
                        $ionicLoading.hide();
                    });
            }

        }


        $scope.showionicLoading = function () {
            $ionicLoading.show({
                template: 'Running...'
            });
        };

        //Code for selected card
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
            var index = 1000;
            angular.forEach($scope.listOfUATOut, function (section) {
                $timeout(function () {
                    $http.get('http://13.90.248.158:8081/run_test_get?msgID=' + section.text + '&reqID=12')
                        .success(function (res) {
                            $ionicLoading.hide();
                            $scope.selectedRow = section.text;
                            $scope.MsgId = section.text;
                            $scope.onSelectedCard(res);
                        })
                        .error(function (err) {
                            $ionicLoading.hide();
                        });
                }, index);
                index += 1000;
            });
        }
    });