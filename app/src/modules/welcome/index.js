/**
 * Created with IntelliJ IDEA.
 * User: walter
 * Date: 2/13/14
 * Time: 12:35 AM
 * To change this template use File | Settings | File Templates.
 */
module.exports = angular.module('atsApp.welcome', ['ui.router'])
    .controller('WelcomeController', require('./WelcomeController'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'modules/welcome/welcome.tpl.html',
                controller: 'WelcomeController'
            });
        $urlRouterProvider.otherwise('/login');
    });
