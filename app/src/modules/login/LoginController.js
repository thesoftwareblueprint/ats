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
        authenticationService.login($scope.user);
    };

    $scope.$on('swbp-event:auth-loginConfirmed', function() {
        console.log('successful login confirmed');
        $location.path('/welcome');

    });

    $scope.$on('swbp-event:auth-loginFailed', function() {
        console.log('login failed');

    });

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
