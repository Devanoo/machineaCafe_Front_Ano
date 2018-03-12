angular.module('starter')
.controller("badgesController",function(badegesService, $scope,$http,$ionicPopup, $timeout){
    $scope.badges = [];
    $scope.choix = {
        Id: "",
        Name_Boisson: "",
        sucre: 0,
        Mug: false,
        Badge: false
    };
  $scope.orig = angular.copy($scope.choix);

  $scope.reset = function() {
     $scope.choix = angular.copy($scope.orig);
  };
    var getNowBadges = function(){
        badegesService.getBages().then(function(data){
        $scope.badges = data;
    },function(err){
        alert(err);
    });
    }
    
    
    getNowBadges();
    
    $scope.saveBadge = function(choix){
     var data = "Name_Boisson="+choix.Name_Boisson+"&sucre="+choix.sucre+"&Mug="+choix.Mug+"&Badge="+choix.Badge
        badegesService.postBage(data).then(function(data){
            alert("Votre choix est sauvegardé avec succes :)");
            postBadges = getNowBadges();
        },function(err){
            alert(err);
        })
    }


 


    $scope.counter = 0;
    $scope.icrementer = function(choix) {
       if (choix.sucre<10) {
        choix.sucre++;
       } 
      
    }
    $scope.decrement = function(choix) {
       if (choix.sucre>0) {
        choix.sucre--;
       } 
      
    }

    $http.get(serviceBase+'/Boissons').then(function(response) {
         $scope.items = response.data;
    },function(err){
        alert("")
    });

///////POP-UP
// A confirm dialog
$scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Machine à Café ',
      template: '<center><img src="img/ionic.png"/></center> <br> voulez vous vraiment choisir un {{$scope.choix.Name_Boisson}} ?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        $scope.saveBadge($scope.choix);
        $scope.reset();
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  }; 

})
