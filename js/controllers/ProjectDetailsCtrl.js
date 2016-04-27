app.controller('ProjectDetailsCtrl',['$scope','$routeParams','auth','projectData','issuesData',function($scope, $routeParams,auth,projectData, issuesData){
    $scope.project = undefined;
    $scope.issues = undefined;
    var id = $routeParams.id;


    projectData.projectById(id).then(function(response) {
        $scope.project = response.data;
        $scope.showButtons = function(){
            var user = auth.getDetailsForCurrentUser();

            return $scope.project.Lead.Id === user.Id;

        }
    }, function(err) {
        console.log(err);
    });

    issuesData.getIssuesByProjectId(id).then(function(response) {
        console.log(response.data);
        $scope.issues = response.data;
    });


}]);