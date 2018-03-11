angular.module('starter')
.controller("badgesController",function(badegesService, $scope){
    alert()
    $scope.badges = [];
    badegesService.getBages().then(function(data){
        $scope.badges = data;
    },function(err){
        alert(err);
    });


    $scope.saveBadge = function(badge){
        badegesService.postBage(badge).then(function(data){
            alert("saved");
        },function(err){
            alert(err);
        })
    }

    $scope.choix = {
        Id: "",
        Name_Boisson: "",
        sucre: 0,
        Mug: false,
        Badge: false
    };


    
    $scope.counter = 0;
    $scope.icrementer = function() {
     $scope.choix = angular.fromJson($scope.choix);
       if ($scope.choix.sucre<10) {
         $scope.choix.sucre++;
       } 
      
    }
    $scope.decrement = function() {
       if ($scope.choix.sucre>0) {
         $scope.choix.sucre--;
       } 
      
    }



})
