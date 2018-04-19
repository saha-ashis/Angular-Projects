angular.module('myLoginRegApp')
        .controller('manageEmpCtrl', function ($scope, $location, userAeServices) {
            $scope.goToAddEmp = function () {
                $location.path('/add-emp');
            },
                    $scope.addEmployee = function () {
                        userAeServices.addUser($scope.emp)
                                .then(function (data) {
                                    console.log(data);
									$location.path('/manage-emp');
                                }, function (error) {
                                    $scope.errorMsg = error.data.error;
                                });
                    }
            var AutoReload = function () {
                userAeServices.getAllUser()
                        .then(function (_ResData) {
                            console.log(_ResData);
							$scope.empDetails = _ResData;
                        }, function (error) {
                            $scope.errorMsg = error.data.error;
                        });
            }
            AutoReload();
        });