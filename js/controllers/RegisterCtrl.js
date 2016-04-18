'use strict';

app.controller('RegisterCtrl', ['$scope','userData','auth', function($scope, userData, auth) {
    $scope.register = function(user){

        userData.register(user).then(function(response) {
            userData.login(user).then(function(result) {
                console.log("logged in:");
                console.log(result);
                auth.saveUser(result.data);
            }, function(error) {
                console.log("err in login");
                console.log(error);
            })

        }, function(err) {
            console.log(err);
        });
    }
}]);