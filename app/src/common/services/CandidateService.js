/**
 * Created by walter on 2/17/14.
 */
var CandidateService = function($http,$location,$q) {

    this.getCandidates = function(candidateRequest,scope) {
        var deferred = $q.defer();

        setTimeout(function() {
            scope.$apply(function() {
                var candidates = [
                    {firstname:'Sam', lastname:'Mitchell'},
                    {firstname:'Sam', lastname:'Mitchell'},
                    {firstname:'Sam', lastname:'Mitchell'},
                    {firstname:'Sam', lastname:'Mitchell'},
                    {firstname:'Sam', lastname:'Mitchell'}
                ];
                deferred.resolve(candidates);
            })

        }, 1000);

        return deferred.promise;

    }

};

CandidateService.$inject = ['$http','$location','$q'];
module.exports = CandidateService;