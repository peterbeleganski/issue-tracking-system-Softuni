'use strict';

app.controller('LoginCtrl',['$scope','userData','auth','notifier', function($scope, userData, auth, notifier){
    $scope.login = function(user){
        userData.login(user).then(function(loggedInUser){
            auth.saveUser(loggedInUser.data);
            userData.getCurrentUserDetails().then(function(response) {
                auth.saveDetailsForCurrentUser(response.data);
                notifier.success('Success login!')
            }, function(errorResponse) {
                console.log("Error getting details for current User");
                console.log(errorResponse);
            })
        }, function(err) {
            console.log(err);
            notifier.error('Failed login, invalid params!!');
        });
    };

}]);