app.controller('ChangePasswordCtrl',['$scope','userData','notifier','$location',function($scope, userData, notifier, $location){
    $scope.dataLoading = undefined;

    $scope.changePassword = function(){

        $scope.dataLoading = true;

        var passwords = {
            OldPassword: $scope.user.old_password,
            NewPassword: $scope.user.new_password,
            ConfirmPassword: $scope.user.confirm_password
        };

        userData.changePasswords(passwords)
            .then(function () {
               notifier.success('Password successfully changed!');
                $location.path('#/');
            }, function() {
                notifier.error('An error occurred while changing password!');
            });

    }
}]);