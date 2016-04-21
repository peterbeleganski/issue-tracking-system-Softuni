'use strict';

app.factory('auth', [function(userData){

    var key = 'user';

    function setUserData(data){
        localStorage.setItem(key,angular.toJson(data));
    }

    function getUserData(){
        return angular.fromJson(localStorage.getItem(key));
    }

    function getHeaders(){
        var headers = {};
        var getUserData = angular.fromJson(localStorage.getItem(key));

        if(getUserData){
            headers.Authorization = 'Bearer ' + getUserData.access_token;
        }

        return headers;
    }

    function logoutUser(){
        localStorage.removeItem(key);
    }

    function isLoggedIn(){
        return !!getUserData();
    }

    function isAdmin(){
        var currUser = userData.getCurrentUserDetails().data;

        return currUser.isAdmin === "true";

    }

    return {
        saveUser:setUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        logoutUser: logoutUser,
        isLoggedIn:isLoggedIn
    }
}]);