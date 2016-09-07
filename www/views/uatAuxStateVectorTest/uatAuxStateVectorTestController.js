angular.module('App')
    .controller('UatAuxStateVectorTestController', function ($scope, $http, $ionicLoading, $ionicPopover, $ionicModal, $rootScope) {

        $ionicPopover.fromTemplateUrl('views/morePopover/morePopover.html', {
            scope: $scope,
        }).then(function (popover) {
            $scope.popover = popover;
        })

        /**
         * 
         * 
         * @param {any} $event
         */
        $scope.openMore = function ($event) {
            $scope.popover.show($event);
        }

        /**
         * 
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
         * 
         */
        $scope.openConnection = function () {
            $scope.connectionModal.show();
        };
        /**
         * 
         */
        $scope.closeConnection = function () {
            $scope.connectionModal.hide();
        };

        /**
         * @func runTest
         * 
         * this function run test on particular detail page.
         */
        $scope.runTest = function () {
            $ionicLoading.show();
            //$scope.showionicLoading();
            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatAUXStateVectorTest&reqID=12')
                .success(function (res) {
                    $scope.uatAUXStateVectorTest = res.data;
                    $scope.$parent.uatAUXStateVectorTest = res.data;
                    $ionicLoading.hide();
                })
                .error(function (err) {
                    $ionicLoading.hide();
                });
        }
    });