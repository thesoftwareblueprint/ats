/**
 * Created by walter on 2/14/14.
 */
module.exports = angular.module('atsApp.services', [])
    .service('authenticationService', require('./AuthenticationService'))
    .service('candidateService', require('./CandidateService'));