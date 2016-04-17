'use strict';

app.directive('registerForm', function() {
    return{
        controller: 'HomeCtrl',
        restrict:'E',
        templateUrl:'templates/public/register-form.html',
        replace: true
    }
});