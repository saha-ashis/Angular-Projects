angular.module('logRegApp')
        .controller('userDashboardCtrl', function ($scope, $location, $http, userAuthService) {
            console.log('Dashboard');
            this.userLoginStatus = userAuthService.isUserloggedIn();
            console.log(this.userLoginStatus);
            if (this.userLoginStatus == false) {
                $location.path('/');
            } else {
                $scope.user = userAuthService.getUserName();
            }
        });