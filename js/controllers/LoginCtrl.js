'use strict';

app.controller('LoginCtrl',['$scope','userData','auth', function($scope, userData, auth){
    $scope.login = function(user){
        userData.login(user).then(function(loggedInUser){
            console.log(loggedInUser);
            auth.saveUser(loggedInUser.data);
        }, function(err) {
            console.log(err);
        });
    };

    $scope.test = function(){
        userData.getCurrentUserDetails().then(function(response) {
            console.log("Success response for current user:");
            console.log(response);
        }, function(error) {
            console.log("Error response");
            console.log(error);
        });
    }
}]);