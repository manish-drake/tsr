angular.module('App')
    .controller('morePopupController',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
      title: 'ADS-B Velocity Test',
     subTitle: 'Help',
     template: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
     scope: $scope,
     buttons: [
       { text: '' },
       {
         text: 'Cancel',
         type: 'button-positive',
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
  };
});