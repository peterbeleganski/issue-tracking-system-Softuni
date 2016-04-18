'use strict';

var app  = angular.module('issueTracker', ['ngRoute','ngResource']);

app.constant('baseUrl','http://softuni-issue-tracker.azurewebsites.net/');

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


    $routeProvider.when('/',{
        templateUrl: 'templates/home.html',
        controller:'HomeCtrl'
    })
}]);