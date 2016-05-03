app.controller('AddIssueController',['$scope','$routeParams','issuesData','userData','projectData','$location',function($scope, $routeParams, issuesData, userData,projectData, $location){
    $scope.users = [];
    $scope.project = {};
    var projectId = $routeParams.id;
    userData.getAllUsers().then(function(response) {
        $scope.users = response.data;
        console.log($scope.users[0]);
    });

    projectData.projectById(projectId).then(function(response) {
        $scope.project = response.data;
    });

    $scope.add = function() {
        $scope.dataLoading = true;
        var issueForAdding = {
            Title: $scope.issue.title,
            DueDate: $scope.issue.duedate,
            Description: $scope.issue.description,
            ProjectId: projectId,
            AssigneeId: $scope.issue.assignee,
            PriorityId: $scope.issue.priority
        };

        var labelsSplit = $scope.issue.labelsString.split(' ');
        issueForAdding.labels = [];

        for (var i = 0; i < labelsSplit.length; i++) {
            issueForAdding.labels.push({ Name: labelsSplit[i] });
        }

        issuesData.createIssue(issueForAdding)
            .then(function (response) {
                if (response.success) {
                    $location.path('/');
                } else {
                    $scope.dataLoading = false;
                }

                $location.path('/projects/' + $scope.project.Id);
            });
    }
}]);