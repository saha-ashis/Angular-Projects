angular.module('myLoginRegApp')
        .controller('regController', function ($scope, $location) {
            $scope.goToLogin = function () {
                $location.path('/');
            };
        });