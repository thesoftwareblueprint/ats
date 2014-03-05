/**
 * Created by walter on 2/13/14.
 */
'use strict';

var AuthenticationService = function($http, $location, $q) {

    this.login = function(user) {
        //attempt to use the $http service to authenticate the user
        var deferred = $q.defer();
        $http.post('/authenticate', user).
            success(function(data,status,headers,config) {
                deferred.resolve(true);
            }).
            error(function(data,status,headers,config) {
                return false;
            });
        return deferred.promise;
    };
};
AuthenticationService.$inject = ['$http', '$location', '$q'];
module.exports = AuthenticationService;