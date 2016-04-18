'use strict';

app.controller('RegisterCtrl', ['$scope','userData', 'baseUrl', '$http', function($scope, userData, baseUrl, $http) {
    $scope.register = function(user){

        userData.register(user).then(function(response) {
            userData.login(user).then(function(result) {
                console.log("logged in:");
                console.log(result);
            }, function(error) {
                console.log("err in login");
                console.log(error);
            })

        }, function(err) {
            console.log(err);
        });
    }
}]);