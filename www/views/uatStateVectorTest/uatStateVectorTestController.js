angular.module('App')
    .controller('UatStateVectorTestController', function ($scope, $http, $ionicLoading, $ionicPopover, $ionicModal, $rootScope) {

        $ionicPopover.fromTemplateUrl('views/morePopover/morePopover.html', {
            scope: $scope,
        }).then(function (popover) {
            $scope.popover = popover;
        })

         /**
         * @func openMore
         * 
         * open morePopover on more button
         * 
         * @param {any} $event
         * 
         * The $event object contains the browser's event object.
         */
        $scope.openMore = function ($event) {
            $scope.popover.show($event);
        }

         /**
         * @func  closePopover
         * 
         * close morePopover on cancel button
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
         * open connectionModal popup on setup button
         */
        $scope.openConnection = function () {
            $scope.connectionModal.show();
        };

         /**
         * @func closeConnection
         * 
         * close connectionModal popup on cancel button.
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
            // $scope.showionicLoading();
            $http.get('http://13.90.248.158:8081/run_test_get?msgID=uatStateVectorTestSubsonic&reqID=12')
                .success(function (res) {
                    $scope.uatStateVectorTestSubsonic = res.data;
                    $scope.$parent.uatStateVectorTestSubsonic = res.data;
                    $ionicLoading.hide();
                })
                .error(function (err) {
                    $ionicLoading.hide();
                });
        }
        //  $scope.showionicLoading = function() {
        //     $ionicLoading.show({
        //       template: 'Running...'
        // });
        //   };
    });