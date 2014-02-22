/**
 * Created by walter on 2/17/14.
 */
module.exports = angular.module('atsApp.candidate', ['ui.bootstrap'])
    .controller('CandidateController', require('./CandidateController'))
    .controller('CandidateDetailController', require('./candidate-detail-controller'))
    .config(function($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('candidate', {
                abstract: true,
                url: '/candidate',
                templateUrl: 'modules/candidate/candidate-base.tpl.html'
            })
            .state('candidate.detail', {
                url: '/detail',
                views: {
                    header: {
                        templateUrl: 'common/templates/header.tpl.html'
                    },
                    sidebar: {
                        templateUrl: 'modules/candidate/candidate-list-nav.tpl.html'
                    },
                    content: {
                        templateUrl: 'modules/candidate/candidate.tpl.html',
                        controller: 'CandidateDetailController'

                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            });
    });