/**
 * Created by walter on 3/4/14.
 */
module.exports = angular.module('security',[])
    .config(['$httpProvider', function($httpProvider) {
        var interceptor = ['$rootScope', '$q', 'httpRequestQueue', function($rootScope, $q, httpRequestQueue) {
            return {
                response: function (response) {
                    //only called for http codes up to 300
                    console.log(response);
                    return response;
                },

                responseError: function (rejection) {
                    console.log(rejection)
                    if (rejection.status === 401) {
                        var deferred = $q.defer();
                        httpRequestQueue.addHttpRequest(rejection.config, deferred);
                        $rootScope.$broadcast('swbp-event:auth-loginRequired', rejection);
                        return deferred.promise;
                    }
                    //default behavior
                    return $q.reject(rejection);
                 }
            }

        }];
        $httpProvider.interceptors.push(interceptor);
    }])

    .factory('httpRequestQueue', function($injector) {

        var httpRequestQueue = [];
        var http;

        var retryHttpRequest = function(config,deferred) {
            var callbacks = {
                successCallback: function(data,status,headers,config) {
                    deferred.resolve();

                },
                errorCallback: function(data,sstatus,headers,config) {
                    deferred.reject();
                }
            };
            $http = $http || $injector.get('$http');
            $http(config).then(callbacks);
        };

        return {
            addHttpRequest: function(config,deferred) {
                console.log('need to add a request to the queue!');
                httpRequestQueue.push({
                    config: config,
                    deferred: deferred
                });
            },

            clearAllRequest: function() {

            },

            retryAllRequest: function() {
                for (var i in httpRequestQueue) {
                    retryHttpRequest(httpRequestQueue[i].config,httpRequestQueue[i].deferred);
                }
                httpRequestQueue = [];
            },

            cancelAllRequest: function() {

            },

            retrieveQueueRequestCount: function() {
                return httpRequestQueue.length;
            },

            callForTest: function() {
                return 'This is a test....only a test';
            }
        }
    })

    .value('version','0.0.1');