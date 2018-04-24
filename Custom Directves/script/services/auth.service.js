angular.module('bootstrapApp')
	.service('authService', ['$http', function ($http) {
		this.isLoggedIn = false;

		this.checkAuth = function () {
			var isLoggedIn = localStorage.getItem('admin') ? true : false;
			this.isLoggedIn = isLoggedIn;
			return isLoggedIn;
		}

		this.validateUser = function (user) {
			return $http.post('urlhere', user)
				.then(function (data) {
					return data.data;
				});
		}
	}]);