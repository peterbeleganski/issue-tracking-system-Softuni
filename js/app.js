'use strict';

var app  = angular.module('issueTracker', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',{
        templateUrl: 'templates/public/home.html',
        controller:'HomeCtrl'
    })
}]);