module.exports = angular.module('atsApp.main', [])
    .controller('MainController', require('./MainController'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'modules/main/main.tpl.html',
                controller: 'MainController'
            });
        $urlRouterProvider.otherwise('/');
    });