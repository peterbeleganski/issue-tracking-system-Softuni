app.controller('DashboardCtrl', ['$scope','projectData','auth','issuesData', function($scope, projectData, auth, issuesData){

    $scope.myProjects = [];
    $scope.allProjects = [];
    var check = false;
    var allProjectsLoaded = false;

    projectData.allProjects().then(function(response) {
        var allProjects = response.data;
        var currUserId = auth.getDetailsForCurrentUser().Id;
        for(var i = 0; i< allProjects.length;i++){
            if(allProjects[i].Lead.Id === currUserId){
                $scope.myProjects.push(allProjects[i]);
            }
        }
        check = true;
        $scope.isEmptyAllProjects = function(){
            return $scope.allProjects.length === 0;
        };
    }, function(error) {
        console.log("Error get all projects");
        console.log(error);
    });

    projectData.allProjects().then(function(response){
        $scope.allProjects = response.data;
        allProjectsLoaded = true;


        $scope.isEmptyMyProjects = function(){
            return $scope.myProjects.length === 0;
        }
    });

    issuesData.getMyIssues().then(function(response) {
        $scope.issues = response.data.Issues;
    });


    $scope.loading = function(){
        return check;
    };

    $scope.loadingAllProjects = function(){
        return allProjectsLoaded;
    };


}]);