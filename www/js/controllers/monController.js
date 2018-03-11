// 'use strict';
// angular.module('starter')

// .controller('monController',['$scope','$http','$filter','$log', 'myDataService','$q','$state', '$stateParams','$ionicPopup','$timeout',function($scope,$http,dbopService,$filter,$log,myDataService,$q,$state, $stateParams,$ionicPopup,$rootScope,$timeout,$dialogs){

//   $scope.savedBadges = []
//   $scope.choix = {
//    Id: "",
//     Name_Boisson: "",
//     sucre:0 ,
//     Mug:false,
//     Badge:false
//     };
//     var postBadges = $http.get(serviceBase+'/Badges')
//     postBadges.then(function(response) {
//       $scope.savedBadges = angular.fromJson(response.data);
//       console.log("$scope.savedBadges ", $scope.savedBadges)
//     })
//     var postBoissons = $http.get(serviceBase+'/Boissons')
//     postBoissons.then(function(response) {
//          $scope.items = response.data;
    
//          $scope.counter = 0;
//          $scope.icrementer = function() {
//           $scope.choix = angular.fromJson($scope.choix);
//             if ($scope.choix.sucre<10) {
//               $scope.choix.sucre++;
//             } 
           
//          }
//          $scope.decrement = function() {
//             if ($scope.choix.sucre>0) {
//               $scope.choix.sucre--;
//             } 
           
//          }
        
//           $scope.packetenvoye ="Name_Boisson="+$scope.choix.Name+"&Sucre="+ $scope.choix.Sucre+"&Mug="+$scope.choix.Mug+"&Badge="+$scope.choix.Badge
                  
//                   $scope.newPost = function () {
//                     // "Name_Boisson=Lait de poule&Sucre="+ 1 +"&Mug="+true+"&Badge="+true
//                             var data = "Name_Boisson="+$scope.choix.Name_Boisson+"&sucre="+$scope.choix.sucre+"&Mug="+$scope.choix.Mug+"&Badge="+$scope.choix.Badge
//                             $http.post(serviceBase+"/Badges/" , data).success(function (response) {
//                               alert("Votre choix est sauvegardé avec succes :)");
//                               postBadges = $http.get(serviceBase+'/Badges')
//                               postBadges.then(function(response) {
//                                 $scope.savedBadges = response.data;
//                               })
//                             }).error(function (err, status) {
                    
//                               console.log("Erreur de requete Post")
//                             });
                    
//                             return null;
                    
//                         };
//         console.log(response);
//         $scope.info = function(){
          
//       var confirmPopup = $ionicPopup.confirm({
//           // Here I tried to add $scope, but I'm not sure if is it usefull
//           scope:$scope,
//           title: 'Consume Ice Cream',
//           template: '<button class="button button-primary" ng-click="info()">Confirm</button>'
//          });
      
//          confirmPopup.then(function(res) {
//            if(res) {
//              console.log('You are sure');
//            } else {
//              console.log('You are not sure');
//            }
//          });
//        };
//     });
//     /////Pop up code :
//    // define create account view
// //    $scope.showConfirmation = function() {
// //    $ionicModal.fromTemplateUrl('js/templates/login.html', {
// //     scope: $scope,
// //     animation: 'slide-in-up'
// //  }).then(function(modal) {
// //      $scope.loginModal = modal;
// //  });
// // }
// //Popup
// $scope.showAlert = function() {
//   var alertPopup = $ionicPopup.alert({
//     title: 'Don\'t eat that!',
//     template: 'It might taste good'
//   });

//   alertPopup.then(function(res) {
//     console.log('Thank you for not eating my delicious ice cream cone');
//   });
// };
//     // $scope.initformulaire()= function(){
//     //   for (var iter in $scope.items ) {
//     //     alert('Itération n°' + iter);
//     //     document.getElementById("radioBoisson"+iter.Name_Boisson).Value = True        
//     // }
//     // }
//        // popup de confirmations
//        $scope.launch = function(which){
//         var dlg = null;
//         switch(which){
//           // Error Dialog
//       case 'error':
//       dlg = $dialogs.error('This is my error message');
//       break;
//       // Confirm Dialog
//       case 'confirm':
// alert()
//       dlg = $dialogs.confirm('Please Confirm','Is this awesome or what?');
//       dlg.result.then(function(btn){
//         $scope.confirmed = 'You thought this quite awesome!';
//       },function(btn){
//         $scope.confirmed = 'Shame on you for not thinking this is awesome!';
//       });
//       break;
//        }
//       }

//        //  $scope.showConfirm = function() {
//   //   $scope.edit = function(){
      
//   //     var itemToEdit = item;
//       $scope.checkbox=function(bool){
// if(bool=="true"){
//   document.GetElementByID('servwithsave').disabled = 'disabled';
// }else{
//   document.GetElementByID('servwithsave').disabled = '';
// }
//       };
//   //     $dialog.dialog(angular.extend(dialogOptions, {resolve: {item: angular.copy(itemToEdit)}}))
//   //       .open()
//   //       .then(function(result) {
//   //         if(result) {
//   //           angular.copy(result, itemToEdit);                
//   //         }
//   //         itemToEdit = undefined;
//   //     });
//   //   };
//   // };
//   $scope.info2 = function() {
    
//         var alertPopup = $ionicPopup.alert({
//           title: 'Status',
//           template: showingText,
//           buttons: [
//                     { text: 'Cancel', onTap: function(e) { 
//                       showingText = "Nicht gespeichert"
//                       return true; 
//                       } 
//                     },
//                     {
//                       text: '<b>Speichern</b>',
//                       type: 'button-positive',
//                       onTap: function(e) {
//                         showingText = "Gespeichert"
//                         return true;
//                       }
//                     },
//                   ]
//         });
//         alertPopup.then(function(res) {
//         });
//       }
//       }])
  