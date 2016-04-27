app.controller('IssueDetailsCtrl',['$scope','issuesData','$routeParams','projectData','auth', function($scope, issuesData, $routeParams, projectData, auth){
    var id = $routeParams.id;
    $scope.issue = undefined;
    $scope.project = undefined;
    $scope.comments = undefined;

    issuesData.getIssuesById(id).then(function(response) {
        $scope.issue = response.data;
        console.log(response.data);

        $scope.showButtons = function(){
            var user = auth.getDetailsForCurrentUser();

            return $scope.issue.Author.Id === user.Id;

        };

        projectData.projectById($scope.issue.Project.Id).then(function (projectResponse) {
            $scope.project = projectResponse.data;
        });

        

    });

    issuesData.getComments(id).then(function(response) {
       $scope.comments = response.data;
    });
}]);