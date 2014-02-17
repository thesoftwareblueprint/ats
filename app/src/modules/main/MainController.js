/**
 * Controller for the main application screen that controls the header and menu.
 * @param $scope
 * @param $window
 * @param $route
 * @param $location
 * @constructor
 */
var MainController = function($scope, $window, $location, authenticationService) {
    $scope.username;
    $scope.password;

    $scope.login = function() {
        //attempt to login the user using the username and password.
        if (authenticationService.login('walter','password')) {
            console.log('successful login!');
        }else {
            console.log('try again bozo!');
        }
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
       //dostuff
    };
    init();
};

MainController.$inject = ['$scope', '$window', '$location', 'authenticationService'];
module.exports = MainController;
