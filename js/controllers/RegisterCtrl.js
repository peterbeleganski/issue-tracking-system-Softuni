'use strict';

app.controller('RegisterCtrl', ['$scope','userData','auth','notifier', function($scope, userData, auth, notifier) {
    $scope.register = function(user){
        userData.register(user).then(function(response) {
            userData.login(user).then(function(result) {
                notifier.success("Registered successful!!!");
                auth.saveUser(result.data);
            }, function(error) {
                console.log("err in login");
                console.log(error);
            })

        }, function(err) {
            console.log(err);
            notifier.error("Registration failed!");
        });
    }
}]);