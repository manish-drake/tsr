angular.module('App')
    .controller('UatOutSectionController', function ($scope, $timeout, $state, $ionicModal, $http, $ionicLoading, $ionicPopover, $rootScope) {

        $scope.Val = 'UATOut';
        $scope.IsRunEnable=true;
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

       
        $ionicPopover.fromTemplateUrl('views/morePopover/morePopover.html', {
            scope: $scope,

        }).then(function (popover) {
            $scope.popover = popover;
        })

        /**
         * @func openMore
         * 
         *  open morePopover on more button
         * 
         * @param {any} $event
         * 
         * The $event object contains the browser's event object.
         */
        $scope.openMore = function ($event) {
            $scope.popover.show($event);
        }

        /**
         * @func closePopover
         * 
         *close morePopover on cancel button
         */
        $scope.closePopover = function () {
            $scope.popover.hide();
        }
        
        $ionicModal.fromTemplateUrl('views/modal/connection/connection.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function (connectionModal) {
            $scope.connectionModal = connectionModal;
        });

        /**
         * @func openConnection
         * 
         *  open connection modal popup on cconnection`s click.
         */
        $scope.openConnection = function () {
            $scope.connectionModal.show();
        };

        /**
         * @func closeConnection
         * 
         *close connection modal popup on cancel`s click
         */
        $scope.closeConnection = function () {
            $scope.connectionModal.hide();
        };

        
        /**
         * 
         * @func onRunClick
         * 
         * this function enable run toggle button in more popup and enable run button as well
         * @param {any} isRunningAllEnabled
         * 
         *true or false
         */
        $scope.onRunClickEnable = function (isRunningAllEnabled) {
            $scope.IsRunningAllEnabled = isRunningAllEnabled;
            $scope.IsRunEnable=false;
        }

       
        $scope.selectedRow = null;
        /**
         * @func onSingleClick
         * 
         * this function does 3 task. 
         * (1) set MsgId to get result from the server
         * (2) enable run button.
         * (3) set card as selected.
         * @param {any} msgId
         * 
         * indentificaion of single card.
         */
        $scope.onSingleClick = function (msgId) {

            $scope.MsgId = msgId;
            $scope.IsRunEnable=false;
            $scope.selectedRow = msgId;
        }


     
        /**
         * @func onDoubleClick
         * 
         * this function call when user double click on the card.when user double click on the card than this function
         *  navigate in selected card detail page. 
         * @param {any} msgId
         * 
         * 'navigation state' where user wants to navigate.
         */
        $scope.onDoubleClick = function (state) {

            $state.go(state);
        }

       
        $scope.$on('runTestEvent', $scope.runTest);

        /**
         * @func runTest
         * 
         * this function call on run button`s click.it run cards on the basis of two condition.
         * (1) when user wants to run a selected card. user select a card and tap on run button.
         * (2) when user enable runall button from the morePopover and tap on run button.
         */
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


        /**
         * @func showionicLoading
         * 
         * change template iconicloading.
         */
        $scope.showionicLoading = function () {
            $ionicLoading.show({
                template: 'Running...'
            });
        };


        /**
         * @func onSelectedCard
         * 
         * this function call from the "runTest()" when user select a particular card and click on run button.
         * 
         * @param {any} res
         * 
         * http-responce from the server for selected card only
         */
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


        /**
         * @func onRunAll
         * 
         * this fucntion call from the "runTest()" to  run all cards simultaneously when RunAll button enable from the popup.
         */
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