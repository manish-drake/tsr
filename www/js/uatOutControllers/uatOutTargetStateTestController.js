angular.module('App')
.controller('UatOutTargetStateTestController', function($scope, $http, $ionicLoading, $ionicPopover){
    
    $ionicPopover.fromTemplateUrl('views/uatOutSection/morePopover.html', {
           scope: $scope, 
        }).then(function(popover){
            $scope.popover = popover;
        })
        
        $scope.openMore = function($event){
            $scope.popover.show($event);
        }

          $scope.closePopover = function() {
             $scope.popover.hide();
         }

  $scope.runTest = function () {
            $ionicLoading.show();

            $http.get('http://13.90.248.158:8081/run_test_get?msgID=2&reqID=12')
                .success(function (res) {
                    $scope.result = res.data;
                    $scope.$parent.result = res.data;
                    $ionicLoading.hide();
                })
                .error(function(err){
                    $ionicLoading.hide();
                });
        }
    });