angular.module('myLoginRegApp')
        .controller('addEmpCtrl', function ($scope) {
            console.log('Test');
                    $scope.addEmployee = function () {
                        console.log($scope.emp);
                    }
        });