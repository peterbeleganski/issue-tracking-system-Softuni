'use strict';

app.controller('RegisterCtrl', ['$scope','userData', function($scope, userData) {
    $scope.register = function(user){

        userData.register(user);
    }
}]);