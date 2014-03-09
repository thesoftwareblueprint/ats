'use strict';
//require('ats-templates');

var App = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
};

App.$inject = ['$urlRouterProvider'];

angular.module('atsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    'ats.templates',
    require('./modules/login').name,
    require('./modules/welcome').name,
    require('./modules/candidate').name,
    require('./modules/client').name,
    require('./modules/security').name,
    require('./common/services').name
    ], App);






