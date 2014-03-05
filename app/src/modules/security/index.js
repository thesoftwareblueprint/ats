/**
 * Created by walter on 3/4/14.
 */
module.exports = angular.module('atsApp.security',[])
    .config(['$httpProvider', function($httpProvider) {
        var interceptor = ['$rootScope', '$q', 'httpRequestQueue', function($rootScope, $q, httpRequestQueue) {
            return {
                response: function (response) {
                    //only called for http codes up to 300
                    console.log(response);
                    return response;
                },

                responseError: function (rejection) {
                    console.log(rejection);
                    httpRequestQueue.addHttpRequest();

                    return $q.reject(rejection);
                 }
            }

        }];
        $httpProvider.interceptors.push(interceptor);
    }])

    .factory('httpRequestQueue', function() {

        var httpRequestQueue = [];

        return {
            addHttpRequest: function() {
                console.log('need to add a request to the queue!');

            },

            clearAllRequest: function() {

            },

            retryAllRequest: function() {

            },

            cancelAllRequest: function() {

            }
        }
    })