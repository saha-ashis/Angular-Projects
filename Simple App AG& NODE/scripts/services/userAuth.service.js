angular.module('myLoginRegApp')
        .service('userAuthService', function ($http) {
            this.userLogInStatus = false;
            this.user = null;
            this.UserLogin = function (userData) {
                console.log(userData);
                return $http.post('http://localhost:3000/login', userData)
                        .then(function (data) {
                            //console.log(data);
                            return data.data;
                        });
            };
            this.setUser = function (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
                this.setLoginStatus();
            };
            this.setLoginStatus = function () {
                this.userLogInStatus = true;
                localStorage.setItem('userLogInStatus', true);
                return this.userLogInStatus;
            };
            this.getUser = function () {
                return JSON.parse(localStorage.getItem(user));
            };
            this.isUserLoggedIn=function(){
              return localStorage.getItem('userLogInStatus')?true:false;  
            };
            this.logout = function () {
                localStorage.removeItem('user');
                localStorage.removeItem('userLogInStatus');
                this.userLogInStatus = false;
            };
        });