app.controller('DashboardCtrl', ['$scope','projectData','auth', function($scope, projectData, auth){

    $scope.projects = [];

    var check = false;

    projectData.allProjects().then(function(response) {
        var allProjects = response.data;
        var currUserId = auth.getDetailsForCurrentUser().Id;
        for(var i = 0; i< allProjects.length;i++){
            if(allProjects[i].Lead.Id === currUserId){
                $scope.projects.push(allProjects[i]);
            }
        }
        check = true;
    }, function(error) {
        console.log("Error get all projects");
        console.log(error);
    });

    $scope.loading = function(){
        return check;
    };
}]);