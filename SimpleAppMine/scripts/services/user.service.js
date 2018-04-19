angular.module('logRegApp')
        .service('userAuthService', function () {
            this.logInStatus = false;
            this.userLoginStatus = false;

            this.setLoginStatus = function (userName) {
                var userLoginStatus = true;
                localStorage.setItem('userLoginStatus', true);
                this.userLoginStatus = userLoginStatus;
                return userLoginStatus;
            };
            this.isUserloggedIn = function () {
                var logInStatus = localStorage.getItem('userLoginStatus') ? true : false;
                this.logInStatus = logInStatus;
                return logInStatus;
            };
            this.setUserName = function (usrName) {
                this.userName = usrName;
                localStorage.setItem('usrName', this.userName);
            };
            this.getUserName = function () {
                this.user = localStorage.getItem('usrName');
                return this.user;
            };
        });