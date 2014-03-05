module.exports = angular.module('atsApp.login', [])
    .controller('LoginController', require('./LoginController'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/login.tpl.html',
                controller: 'LoginController'
            });
        $urlRouterProvider.otherwise('/login');
    });