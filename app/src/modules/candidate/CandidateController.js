/**
 * Created by walter on 2/17/14.
 */
var CandidateController = function($scope,$window,$location,candidateService){


    var init = function() {


        var promise = candidateService.getCandidates(null,$scope);

        promise.then(function(result){
            console.log(result);
        }), function(error){

        }, function(update) {

        };



    };
    init();
};
CandidateController.$inject = ['$scope','$window','$location','candidateService'];
module.exports = CandidateController;