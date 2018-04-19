var userlogRegApp = angular.module('logRegApp', ["ngRoute"]);
userlogRegApp.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: 'view/login.html',
                controller: 'loginCtrl'
            })
            .when("/register", {
                templateUrl: 'view/registration.html',
                controller: 'regCtrl'
            })
            .when("/user-dashboard", {
                templateUrl: 'view/user-dashboard.html',
                        controller:'userDashboardCtrl'
            });
});
