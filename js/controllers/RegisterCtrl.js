'use strict';

app.controller('RegisterCtrl', ['$scope','userData', 'baseUrl', '$http', function($scope, userData, baseUrl, $http) {
    $scope.register = function(user){

        userData.register(user).then(function(response) {
           console.log("Registered:");
            console.log(response);

            var loginUserData = "grant_type=password&username=" + user.email + "&password=" + user.password;

            $http.post(baseUrl + 'api/Token', loginUserData, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                console.log("success login");
                console.log(response);
            } , function(err) {
                console.log("errr login");
                console.log(err);
            });

        }, function(err) {
            console.log(err);
        });
    }
}]);