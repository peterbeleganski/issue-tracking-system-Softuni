'use strict';

app.controller('LoginCtrl',['$scope','userData','auth', function($scope, userData, auth){
    $scope.login = function(user){
        userData.login(user).then(function(loggedInUser){
            console.log(loggedInUser);
            auth.saveUser(loggedInUser.data);
            userData.getCurrentUserDetails().then(function(response) {
                auth.saveDetailsForCurrentUser(response.data);
            }, function(errorResponse) {
                console.log("Error getting details for current User");
                console.log(errorResponse);
            })
        }, function(err) {
            console.log(err);
        });
    };

}]);