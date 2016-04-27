'use strict';

app.factory('userData',['$resource','baseUrl' , '$http', '$q','auth',function($resource, baseUrl, $http, $q, auth){
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

    function getCurrentUserDetails(){
        var deferred = $q.defer();

        $http.get(baseUrl + 'Users/me',{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function logoutUser() {

    }

    function changePasswords(passwords) {

        var deferred = $q.defer();

        $http.post(baseUrl + 'api/Account/ChangePassword',passwords,{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser,
        getCurrentUserDetails: getCurrentUserDetails,
        changePasswords:changePasswords
    }
}]);