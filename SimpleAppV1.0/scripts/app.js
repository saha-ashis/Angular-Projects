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
                templateUrl: 'view/dashboard.html',
                controller: 'dashboardCtrl'
            });
});