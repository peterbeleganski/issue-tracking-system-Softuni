app.controller('ProjectDetailsCtrl',['$scope','$http','$routeParams','baseUrl','auth',function($scope, $http, $routeParams, baseUrl, auth){
    $scope.project = undefined;

    $http.get(baseUrl + 'Projects/' + $routeParams.id, {
        headers:auth.getHeaders()
    }).then(function(response) {
        $scope.project = response.data;
        console.log(response);
    },function(err){
        console.log(err);
    });

    $scope.showButtons = function(){
        
    }

}]);