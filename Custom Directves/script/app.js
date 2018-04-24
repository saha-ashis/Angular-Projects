var app = angular.module('bootstrapApp', ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: 'includes/login.html',
			controller: 'loginCtrl'
		});
});