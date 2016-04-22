'use strict';

app.controller('HomeCtrl', ['$scope','auth',function($scope, auth){
    $scope.authenticate = function(){
        return !!auth.getUser();
    }

}]);