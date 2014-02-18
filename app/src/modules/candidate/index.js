/**
 * Created by walter on 2/17/14.
 */
module.exports = angular.module('atsApp.candidate', [])
    .controller('CandidateController', require('./CandidateController'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('candidate', {
                abstract: true,
                url: '/candidate',
                templateUrl: 'modules/candidate/candidate.tpl.html'
            })
            .state('candidate.detail', {
                url: '/detail',
                views: {
                    header: {
                        templateUrl: 'common/templates/header.tpl.html'
                    },
                    sidebar: {
                        templateUrl: ''
                    },
                    content: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            });
    });