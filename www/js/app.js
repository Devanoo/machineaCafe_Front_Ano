'use strict';
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'MachineaCafe' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var serviceBase ='http://localhost:50994/api'
angular.module('MachineaCafe', ['ionic'])

.run(function($ionicPlatform) {
  // $location.path('/login');
  $ionicPlatform.ready(function($ionicPlatform,$location) {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
  
})

.filter('slug', function() {
  return function(input) {
      if(input) {
          return input.toLowerCase().replace(/[^a-z-]/g, '-');
      }
  };
})
