'use strict';

app.factory('userData',['$resource','baseUrl' , '$http', '$q',function($resource, baseUrl, $http, $q){
    function registerUser(user) {
        var deferred = $q.defer();

        var registerUserData = "email=" + user.email + "&password=" + user.password + "&ConfirmPassword="+user.confirmPassword;

        $http.post(baseUrl + 'api/Account/Register', registerUserData, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            deferred.resolve(response);
        } , function(err) {
            deferred.reject(err);
        });


        return deferred.promise;
    }

    function loginUser(user) {
        var deferred = $q.defer();

        var loginUserData = "grant_type=password&username=" + user.email + "&password=" + user.password;

        $http.post(baseUrl + 'api/Token', loginUserData, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            deferred.resolve(response);
        } , function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    function logoutUser() {

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);