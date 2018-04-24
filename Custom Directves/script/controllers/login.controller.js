angular.module('bootstrapApp')
	.controller('loginCtrl', ['$scope', 'authService', function ($scope, authService) {
		// console.log($scope.loginFrm);
		$scope.user = {
			username: null,
			password: null
		};
		$scope.save = function () {
			authService.validateUser($scope.user)
				.then(function (data) {
					console.log(data);
					// success
					// $location
				}, function (err) {
					console.log(err);
				});
		};

		console.log($scope.user);
	}]);