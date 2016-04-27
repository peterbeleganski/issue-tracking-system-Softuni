'use strict';

var app  = angular.module('issueTracker', ['ngRoute','ngResource','LocalStorageModule']);

app.constant('baseUrl','http://softuni-issue-tracker.azurewebsites.net/');

app.config(['$routeProvider', function($routeProvider) {

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAdmin();
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return !!auth.getUser();
            }
        }
    };

    $routeProvider
        .when('/',{
            templateUrl: 'templates/home.html',
            controller:'HomeCtrl',
            access:{
                    authenticate: false
                }
        })
        .when('/projects',{
            templateUrl:'templates/projects.html',
            controller:'ProjectCtrl',
            access: {
                authenticate: true
            }
        })
        .when('/projects/:id', {
            templateUrl:'templates/project-details.html',
            controller:'ProjectDetailsCtrl',
            access: {
                authenticate: true
            }
        })
}]);

app.run(function($rootScope, $location, auth,notifier) {
    $rootScope.$on('$routeChangeStart', function(e, curr, prev){
        if(curr.$$route.access.authenticate){
           console.log("require login");
            if(auth.getUser() === null){
                $location.path('/');
                notifier.error('You have to login first!');
            }
        }
    });
});

