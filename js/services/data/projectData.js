app.factory('projectData', ['$http','baseUrl','auth', '$q',function($http, baseUrl, auth, $q){

    function getAllProjects(){
        var deferred = $q.defer();


        $http.get(baseUrl + 'projects',{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function getProjectById(id){

    }

    function addProject(project) {

    }


    return{
        allProjects: getAllProjects,
        projectById: getProjectById,
        addProject: addProject

    }
}]);