'use strict';

app.controller('HomeCtrl', ['$scope','auth','notifier',function($scope, auth, notifier){
    $scope.authenticate = function(){
        return !!auth.getUser();
    };

    $scope.logout = function(){
        auth.logoutUser();
        notifier.success("Successful logout!");

    };
}]);