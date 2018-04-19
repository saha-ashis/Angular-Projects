angular.module('logRegApp')
        .controller('regCtrl', function ($scope, $location) {
            $scope.goToLogin = function () {
                $location.path('/');
            }

            $scope.submitRegForm = function () {
                var username = $scope.username;
                var email = $scope.email;
                var password = $scope.password;
                var conpassword = $scope.conpassword;
                console.log(username, email, password, conpassword);
            }

        });