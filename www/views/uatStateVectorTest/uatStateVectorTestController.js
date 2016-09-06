angular.module('App')
    .controller('UatStateVectorTestController', function ($scope, $http, $ionicLoading, $ionicPopover, $rootScope) {

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