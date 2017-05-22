angular.module('app').controller('msSignupCtrl', function ($scope, msNotifier, $location, msAuth) {
    $scope.signup = function () {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            nickname: $scope.nickname,
            firstName: $scope.fname,
            lastName: $scope.lname,
            city: $scope.city,
            phone: $scope.city
        };

        msAuth.createUser(newUserData).then(function () {
            msNotifier.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            msNotifier.error(reason);
        });
    };
});