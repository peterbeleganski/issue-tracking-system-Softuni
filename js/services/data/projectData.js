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
        var deferred = $q.defer();

        $http.get(baseUrl + 'Projects/' + id,{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function addProject(project) {

    }

    function editProject(id, project) {
        var deferred = $q.defer();

        $http.put(baseUrl + 'Projects/' + id,project,{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;
    }


    return{
        allProjects: getAllProjects,
        projectById: getProjectById,
        addProject: addProject,
        editProject:editProject
    }
}]);