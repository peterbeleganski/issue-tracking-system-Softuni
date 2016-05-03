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

    function getIssuesById(id) {
        var deferred = $q.defer();

        $http.get(baseUrl + 'issues/' + id,{
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

    function getComments(id) {
        var deferred = $q.defer();

        $http.get(baseUrl + 'issues/' + id + '/comments',{
            headers:auth.getHeaders()
        }).then(function(response) {
            deferred.resolve(response);
        }, function(err){
            deferred.reject(err);
        });

        return deferred.promise;

    }

    function create(issues) {
        var deferred = $q.defer();

        $http.post(baseUrl + 'issues',issues,{
            headers:auth.getHeaders()
        }).then(function(response){
            deferred.resolve(response);
        }, function(error){
           deferred.reject(error);
        });

        return deferred.promise;

    }

    function editIssue(id, issue){
        var deferred = $q.defer();

        $http.put(baseUrl + 'issues/' + id,issue,{
            headers:auth.getHeaders()
        }).then(function(response){
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getMyIssues:getMy,
        getIssuesByProjectId:getByProjectId,
        getIssuesById:getIssuesById,
        getComments:getComments,
        createIssue:create,
        editIssue: editIssue
    }
}]);