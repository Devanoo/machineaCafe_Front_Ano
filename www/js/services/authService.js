'use strict';

angular.module('MachineaCafe')
.factory('authService', ['$http', '$q', 'localStorageService','$rootScope', function ($http, $q, localStorageService,$rootScope) {

    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName : ""
    };

    var _login = function (loginData) {

        var data = "Id="+10+"Name_Boisson="+"Lait de poule"+Sucre+"=1"+"Mug="+true+"Badge="+true
        // "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post(serviceBase , data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            // localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

            // _authentication.isAuth = true;
            // _authentication.userName = loginData.userName;

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function () {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";

    };

    $rootScope.logOut = _logOut;

    var _fillAuthData = function () {

        var authData = localStorageService.get('authorizationData');
        if (authData)
        {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
        }
    }
    _fillAuthData();

    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
}]);

