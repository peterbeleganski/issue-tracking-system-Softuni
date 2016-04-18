'use strict';

app.factory('userData',['$resource','baseUrl' , '$http', '$q',function($resource, baseUrl, $http, $q){
    function registerUser(user) {

       return $resource(baseUrl + 'api/Account/Register')
           .save(user).$promise.then(function(data){
                loginUser(data);
            }, function(err) {
                console.log("err: " + err);
            });
    }

    function loginUser(user) {
        var deferred = $q.defer();

        var data = {
            username:user.email,
            password:user.password,
            grant_type:'password'
        };


        $http.post(baseUrl + 'api/Token',data)
            .then(function(response) {
                console.log(response.data);
                deferred.resolve(response.data);
            }, function() {

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