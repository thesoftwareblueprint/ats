/**
 * Created by walter on 2/17/14.
 */
module.exports = angular.module('atsApp.client',[])
    .controller('ClientController', require('./ClientController'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('client', {
                url: '/client',
                templateUrl: 'modules/client/client.tpl.html',
                controller: 'ClientController'
            });
    })