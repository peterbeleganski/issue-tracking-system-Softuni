app.controller('EditIssueCtrl', ['$scope','$routeParams','userData','issuesData','projectData','$location', function($scope, $routeParams, userData, issuesData, projectData, $location){
    var id = $routeParams.id;
    var currentUserId = angular.fromJson(localStorage.getItem('details')).Id;
    $scope.users = [];
    $scope.old = {};
    $scope.issue = {};
    $scope.project = {};
    $scope.priorities = [];
    $scope.statuses = [];

    issuesData.getIssuesById(id).then(function(response) {
        $scope.old = response.data;
        $scope.issue.title = $scope.old.Title;
        $scope.issue.description = $scope.old.Description;
        $scope.issue.assignee = $scope.old.Assignee.Id;
        $scope.issue.labelsString = getLabelsString($scope.old.Labels);
        $scope.statuses = $scope.old.AvailableStatuses;

        projectData.projectById($scope.old.Project.Id).then(function(response) {
            $scope.project = response.data;
            $scope.priorities = $scope.project.Priorities;

            if ((($scope.project.Lead.Id !== currentUserId) && $scope.old.Assignee.Id !== currentUserId)) {
                $location.path('/issues/' + $scope.old.Id)
            }
        });
    });

    userData.getAllUsers().then(function(response) {
        $scope.users = response.data;
    });


    $scope.edit = function () {

        var issueForAdding = {
            Title: $scope.issue.title,
            Description: $scope.issue.description,
            DueDate: $scope.issue.duedate,
            AssigneeId: $scope.issue.assignee,
            PriorityId: $scope.issue.priority
        };

        var labelsSplit = $scope.issue.labelsString.split(' ');
        issueForAdding.labels = [];

        for (var i = 0; i < labelsSplit.length; i++) {
            if (labelsSplit[i] !== '') {
                issueForAdding.labels.push({Name: labelsSplit[i]});
            }
        }

        issuesData.editIssue(id, issueForAdding).then(function () {
            $location.path('/issues/' + id);
        }, function(err){
            console.log(err);
        });


        if ($scope.issue.status !== undefined) {
            $scope.changeStatus();
        }

        $location.path('/issues/' + id);
    };

    $scope.changeStatus = function changeStatus() {
        issuesData.editIssue(id, $scope.issue.status);
    };

    function getLabelsString(labels) {
        var labelsString = '';

        for (var i = 0; i < labels.length; i++) {
            labelsString += labels[i].Name + ' ';
        }

        return labelsString;
    }


}]);