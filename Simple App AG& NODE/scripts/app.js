var userLoginApp = angular.module('myLoginRegApp', ["ngRoute"]);
userLoginApp.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: 'view/login.html',
                controller: 'loginCtrl'
            })
            .when("/register", {
                templateUrl: 'view/registration.html',
                controller: 'regController'
            })
            .when("/admin-dashboard", {
                resolve: {
                    auth: ['$q', 'userAuthService', '$location', function ($q, userAuthService, $location) {
                            var deferred = $q.defer();
                            if (userAuthService.isUserLoggedIn()) {
                                deferred.resolve({});
                            } else {
                                deferred.reject({
                                });
                            }
                            return deferred.promise;
                        }]
                },
                templateUrl: 'view/dashboard.html'
                //controller: 'adminDashboardCtrl'
            })
            .when("/logout", {
                resolve: {
                    out: [
                        '$location', 'userAuthService', function ($location, userAuthService) {
                            userAuthService.logout();
                            return $location.path("/");
                        }
                    ]
                }
            })
            .when("/manage-emp", {
                templateUrl: 'view/manage-user.html',
                controller: 'manageEmpCtrl'
            })
            .when("/add-emp", {
                templateUrl: 'view/add-user.html',
                controller: 'manageEmpCtrl'
            });
});