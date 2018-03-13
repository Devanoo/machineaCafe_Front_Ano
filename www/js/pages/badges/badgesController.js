angular.module('MachineaCafe')
.controller("badgesController",function(badegesService, $scope,$http,$ionicPopup, $timeout){
    $scope.badges = [];
    $scope.choix = {
        Id: "",
        Name_Boisson: "",
        sucre: 0,
        Mug: false,
        Badge: false
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
        console.log(choix.sucre);
       } 
      
    }
   
    $scope.decrement = function(choix) {
        if (choix.sucre>0) {
        choix.sucre--;
        console.log(choix.sucre);
       } 
      
    }

    $http.get(serviceBase+'/Boissons').then(function(response) {
         $scope.items = response.data;
    },function(err){
        alert("")
    });

///////POP-UP
// A confirm dialog
$scope.reset = function(choix) {
    choix.Id= "";
    choix.Name_Boisson= "";
    choix.sucre= 0;
    choix.Mug= false;
    choix.Badge= false;
};
$scope.showConfirm = function(choix) {
    // if(([choix.Name_Boisson].indexOf($scope.badges) == 0)){
    if (choix.Name_Boisson==""||choix.Name_Boisson=="undefined") {
        alert('Vous devez choisir un boisson');
    }
    else
    {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Machine à Café ',
      cssClass: 'popup-pin',
      template: 'voulez vous vraiment choisir du : ' + choix.Name_Boisson +
      '<br> avec ' + choix.sucre +' morceau(x) de sucres <br> ' 
      + '  Mug : ' + choix.Mug 
      + ' <br> Badge :' + choix.Badge +
      '<center><img src="img/boissonDestribut.png"/></center> <br> '
    
    });
    confirmPopup.then(function(res) {
      if(res) {
       
                if (choix.Badge==false){
                        alert(choix.Badge+' Vous devez cochez OUI pour le choix de sauvegarde Badge')
                        console.log('Vous devez cochez OUI pour le choix de sauvegarde Badge')
                    }
                    else{
                        $scope.saveBadge(choix);
                        $scope.reset(choix);
                    }
                
       
         console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
 } }; 
 

})
