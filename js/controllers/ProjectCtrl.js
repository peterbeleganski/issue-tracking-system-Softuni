app.controller('ProjectCtrl', ['$scope','projectData',function($scope,projectData){
    $scope.projects = [];

    var check = false;

    projectData.allProjects().then(function(response) {
        $scope.projects = response.data;
        check = true;
    }, function(error) {
        console.log("Error get all projects");
        console.log(error);
    });

    $scope.loading = function(){
        return check;
    };
}]);