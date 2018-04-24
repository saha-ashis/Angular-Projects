angular.module('bootstrapApp')
	.directive('appSidebar', ['authService', function (authService) {
		return {
			restrict: 'E',
			templateUrl: 'includes/layouts/sidebar.html',
			link: function ($scope, $element, $attr) {
				jQuery('#sidebar .sub-menu > a').click(function () {
					var last = jQuery('.sub-menu.open', jQuery('#sidebar'));
					jQuery('.menu-arrow').removeClass('arrow_carrot-right');
					jQuery('.sub', last).slideUp(200);
					var sub = jQuery(this).next();
					if (sub.is(":visible")) {
						jQuery('.menu-arrow').addClass('arrow_carrot-right');
						sub.slideUp(200);
					} else {
						jQuery('.menu-arrow').addClass('arrow_carrot-down');
						sub.slideDown(200);
					}
					var o = (jQuery(this).offset());
					diff = 200 - o.top;
					if (diff > 0)
						jQuery("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
					else
						jQuery("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
				});

				$scope.isLoggedIn = authService.checkAuth();

				$scope.$watch(authService.isLoggedIn, function (newValue, oldValue) {
					console.log(newValue, oldValue);
				});
			}
		}
	}]);