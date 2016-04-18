'use strict';

app.controller('LoginCtrl',['$scope','userData','auth', function($scope, userData, auth){
    $scope.login = function(user){
        userData.login(user).then(function(loggedInUser){
            console.log(loggedInUser);
            auth.saveUser(loggedInUser.data);
        }, function(err) {
            console.log(err);
        });
    }
}]);