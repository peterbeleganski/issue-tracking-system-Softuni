'use strict';

app.controller('RegisterCtrl', ['$scope','userData','auth','notifier', function($scope, userData, auth, notifier) {
    $scope.register = function(user){

        if($scope.register.confirmPassword !== $scope.register.password){
            notifier.error('Passwords do not match!');
            return;
        }

        if($scope.register.password.length < 6){
            notifier.error('passwords must be more than 6  symbols!');
            return;
        }

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