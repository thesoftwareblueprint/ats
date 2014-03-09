/**
 * Created by walter on 2/13/14.
 */
'use strict';

var AuthenticationService = function($http, $location, $q, $rootScope, httpRequestQueue) {

    this.login = function(user) {
        //attempt to use the $http service to authenticate the user
        $http.post('/authenticate', user).
            success(function(data,status,headers,config) {
                if (data.authresult.status) {
                    $rootScope.$broadcast('swbp-event:auth-loginConfirmed');
                    httpRequestQueue.retryAllRequest();
                } else {
                    $rootScope.$broadcast('swbp-event:auth-loginFailed');
                }
            }).
            error(function(data,status,headers,config) {
                return false;
            });
    };
};
AuthenticationService.$inject = ['$http', '$location', '$q', '$rootScope', 'httpRequestQueue'];
module.exports = AuthenticationService;