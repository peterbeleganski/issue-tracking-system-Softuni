'use strict';

app.directive('loginForm', function() {
    return{
        controller: 'HomeCtrl',
        restrict:'E',
        templateUrl:'templates/public/login-form.html',
        replace: true
    }
});