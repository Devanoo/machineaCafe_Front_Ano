angular.module('starter')
.service("badegesService",function($http, $q){

    var url = serviceBase +"/badges";
    function getBages() {

        var deferred = $q.defer();
        $http.get(url).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function getBageById(id){
        var deferred = $q.defer();
        $http.get(url+"/"+id).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function postBage(data){
        var deferred = $q.defer();
        $http.post(url,data).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function deleteBage(id){
        var deferred = $q.defer();
        $http.delete(url+"/"+id).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function putBadge(id,data){
        var deferred = $q.defer();
        $http.get(url+"/"+id,data).success(function (response) {

            deferred.resolve(response);

        }).error(function (err, status) {
            // _logOut();
            deferred.reject(err);
        });

        return deferred.promise;
    }

    return{
        getBages : getBages ,
        getBageById:getBageById,
        postBage : postBage,
        deleteBage : deleteBage
    }

})