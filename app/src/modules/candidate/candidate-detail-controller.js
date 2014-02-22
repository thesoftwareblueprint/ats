/**
 * Created by walter on 2/21/14.
 */
var CandidateDetailController = function($scope,$window,$location) {
    $scope.tabs = [
        { title:"Dynamic Title 1", content:"Dynamic content 1" },
        { title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            alert("You've selected the alert tab!");
        });
    };

    $scope.navType = 'pills';
};

CandidateDetailController.$inject =['$scope','$window','$location'];
module.exports = CandidateDetailController;