/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $route
 * @param $location
 * @constructor
 */
var LoginController = function($scope, $window, $location, authenticationService) {
    $scope.user = {username: null, password: null};

    $scope.login = function() {
        //attempt to login the user using the username and password.
        authenticationService.login($scope.user).then(
            function(result) {
                $location.path('/welcome');

            },
            function(reason) {
               //Handle Error condition here
            }
        );
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
       //dostuff
    };
    init();
};

LoginController.$inject = ['$scope', '$window', '$location', 'authenticationService'];
module.exports = LoginController;
