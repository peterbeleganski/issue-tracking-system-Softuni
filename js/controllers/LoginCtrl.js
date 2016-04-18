'use strict';

app.controller('LoginCtrl',['$scope','userData', function($scope, userData){
    $scope.login = function(user){
        userData.login(user).then(function(loggedInUser){
            console.log(loggedInUser);
        }, function(err) {
            console.log(err);
        });
    }
}]);