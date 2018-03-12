angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
        $stateProvider.state('badges', {
            url: "/badges",
            templateUrl: "js/pages/badges/badges.html",
            controller: 'badgesController'
        })

            // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/badges');
    
    })