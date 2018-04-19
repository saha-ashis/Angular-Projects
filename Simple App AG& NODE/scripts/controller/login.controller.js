angular.module('myLoginRegApp')
        .controller('loginCtrl', function ($scope, $location, userAuthService, $http) {
            $scope.errorMsg = null;
            $scope.goToReg = function () {
                $location.path('/register');
            },
                    $scope.submitSignInForm = function () {
                        console.log($scope.user);
                        $scope.errorMsg = null;
                        userAuthService.UserLogin($scope.user)
                                .then(function (data) {
                                    console.log(data);
                                    userAuthService.setUser(data.user);
                                    $location.path('/admin-dashboard');
                                }, function (error) {
                                    $scope.errorMsg = error.data.error;
                                });
                    };
        });