angular.module('logRegApp')
        .controller('loginCtrl', function ($scope, $location, $http, userAuthService) {

            $scope.goToReg = function () {
                $location.path('/register');
            },
                    $scope.submitLoginForm = function () {
                        var userName = $scope.username;
                        var password = $scope.password;
                        //console.log(userName, password);
                        $http({
                            url: 'ajax_services.php',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            method: 'POST',
                            data: 'userName=' + userName + '&password=' + password
                        }).then(function (_responseData) {
                            console.log(_responseData.data);
                            if (_responseData.data.status == 'loggedIn') {
                                //$location.path('/user-dashboard');
                                userAuthService.setLoginStatus();
                                userAuthService.setUserName(_responseData.data.user);
                                if (userAuthService.isUserloggedIn()) {
                                    $location.path('/user-dashboard');
                                } else {
                                    $location.path('/');
                                }
                            }
                        }, function (resError) {
                            console.log(resError.statusText);
                        });
                    };
        });