angular.module('logRegApp')
        .directive('appHeader', function () {
            return{
                restrict: 'AE',
                templateUrl: 'directives/layouts/header.html',
                template:'login'
            }

        });
