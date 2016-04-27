app.factory('issuesData',['$q','$http','auth','baseUrl',function($q, $http, auth, baseUrl){

    function getMy() {

        var deferred = $q.defer();

        $http.get(baseUrl + 'issues/me?pageSize=100000&pageNumber=1&orderBy=Project.Name',{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;
    }

    function getByProjectId(id){
        var deferred = $q.defer();

        $http.get(baseUrl + 'projects/' + id + '/issues',{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;
    }

    return {
        getMyIssues:getMy,
        getIssuesByProjectId:getByProjectId
    }
}]);