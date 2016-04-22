'use strict';

app.directive('dashboard', function() {
    return{
        controller: 'DashboardCtrl',
        restrict:'E',
        templateUrl:'templates/dashboard.html',
        replace: true
    }
});