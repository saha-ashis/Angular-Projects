angular.module('bootstrapApp')
	.directive('appHeader', ['authService', function (authService) {
		return {
			restrict: 'E',
			templateUrl: 'includes/layouts/header.html',
			link: function ($scope, $element, $attr) {
				jQuery('.toggle-nav').click(function () {
					if (jQuery('#sidebar > ul').is(":visible") === true) {
						jQuery('#main-content').css({
							'margin-left': '0px'
						});
						jQuery('#sidebar').css({
							'margin-left': '-180px'
						});
						jQuery('#sidebar > ul').hide();
						jQuery("#container").addClass("sidebar-closed");
					} else {
						jQuery('#main-content').css({
							'margin-left': '180px'
						});
						jQuery('#sidebar > ul').show();
						jQuery('#sidebar').css({
							'margin-left': '0'
						});
						jQuery("#container").removeClass("sidebar-closed");
					}
				});

				$scope.isLoggedIn = authService.checkAuth();

				$scope.$watch(authService.isLoggedIn, function (newValue, oldValue) {
					console.log(newValue, oldValue);
				});

			}
		}
	}]);