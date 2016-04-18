'use strict';

app.factory('auth', [function(){

    var key = 'user';

    function setUserData(data){
        localStorage.setItem(key,angular.toJson(data));
    }

    function getUserData(){
        return angular.toJson(localStorage.getItem(key));
    }

    function getHeaders(){
        var headers = {};
        var userData = getUserData();

        if(userData){
            headers.Authorization = 'Bearer ' + userData().access_token;
        }

        return headers;
    }

    function logoutUser(){
        localStorage.removeItem(key);
    }

    return {
        saveUser:setUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        logoutUser: logoutUser

    }
}]);