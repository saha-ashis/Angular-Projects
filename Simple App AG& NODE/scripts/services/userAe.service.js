angular.module('myLoginRegApp')
        .service('userAeServices', function ($http) {
            this.addUser = function (userData) {
                console.log(userData);
                return $http.post('http://localhost:3000/addUser', userData)
                        .then(function (data) {
                            console.log(data);
                            return data.data;
                        });
            },
                    this.getAllUser = function () {
						console.log('Test this');
                        return $http.get('http://localhost:3000/getAllUser')
                                .then(function (data) {
                                    return data.data;
                                });
                    }
        })