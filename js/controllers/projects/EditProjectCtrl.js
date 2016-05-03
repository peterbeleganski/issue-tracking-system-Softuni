app.controller('EditProjectCtrl',['$scope','userData','projectData','$location','$routeParams',function($scope, userData, projectData, $location, $routeParams){
    $scope.users = [];
    $scope.project = {};
    $scope.old = {};
    var id = $routeParams.id;
    userData.getAllUsers().then(function(response) {
        $scope.users = response.data;
    }, function(error){
        console.log(error);
    });

    projectData.projectById(id).then(function(response){
        $scope.old = response.data;
        $scope.project.name = $scope.old.Name;
        $scope.project.description = $scope.old.Description;
        $scope.project.leader = $scope.old.Lead.Id;
        $scope.project.key = $scope.old.ProjectKey;
        $scope.project.labelsString = getLabelsString($scope.old.Labels);
        $scope.project.prioritiesString = getPrioritiesString($scope.old.Priorities);

        if ($scope.old.Lead.Id !== angular.fromJson(localStorage.getItem('details')).Id) {
            $location.path('/projects/' + $scope.old.Id);
        }

    });

    $scope.edit = function edit() {
        $scope.dataLoading = true;
        var name = $scope.project.name;

        var projectForAdding = {
            Name: name,
            Description: $scope.project.description,
            ProjectKey: $scope.project.key,
            LeadId: $scope.project.leader
        };

        var labelsSplit = $scope.project.labelsString.split(' ');
        projectForAdding.labels = [];

        for (var i = 0; i < labelsSplit.length; i++) {
            if (labelsSplit[i] !== '') {
                projectForAdding.labels.push({Name: labelsSplit[i]});
            }
        }

        var prioritiesSplit = $scope.project.prioritiesString.split(' ');
        projectForAdding.priorities = [];

        for (var e = 0; e < prioritiesSplit.length; e++) {
            if (prioritiesSplit[e] !== '') {
                projectForAdding.priorities.push({Name: prioritiesSplit[e]});
            }
        }

        projectData.editProject(id, projectForAdding).then(function() {
            $location.path('/projects/' + id);
        });
    };

    function getLabelsString(labels) {
        var labelsString = '';

        for (var i = 0; i < labels.length; i++) {
            labelsString += labels[i].Name + ' ';
        }

        return labelsString;
    }

    function getPrioritiesString(priorities) {
        var prioritiesString = '';

        for (var i = 0; i < priorities.length; i++) {
            prioritiesString += priorities[i].Name + ' ';
        }

        return prioritiesString;
    }

}]);