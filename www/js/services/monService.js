/*global angular*/  
  
angular.module('starter').service('myDataService',  
[  
    '$http',  
    '$q',  
    '$log',  
    function (  
        $http,  
        $q,  
        $log  
    ) {  
        'use strict';  
        var self = this;  

        self.getBadges = function () {  
            return $http.get(serviceBase+'/Badges');
        };  

        self.post = function (url, data, parseJson) {  
            var deferred = $q.defer(), startTime = new Date();  
            $http.post(url, data).success(function (data, status, header, config) {  
                /*jslint unparam:true*/  
                var endTime = new Date();  
                $log.log(url, status, endTime - startTime, "ms");  
                if (parseJson) {  
                    deferred.resolve(angular.fromJson(data.d));  
                } else {  
                    deferred.resolve(data.d);  
                }  
            }).error(function (data, status, header, config) {  
                /*jslint unparam:true*/  
                var endTime = new Date();  
                $log.log(url, status, endTime - startTime, "ms");  
            });  
            return deferred.promise;  
        };  
    }]);  