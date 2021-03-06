angular.module('app').controller('msProfileCtrl', function ($scope, msAuth, msIdentity, msNotifier) {
  $scope.email = msIdentity.currentUser.username;
  $scope.fname = msIdentity.currentUser.firstName;
  $scope.lname = msIdentity.currentUser.lastName;
  $scope.phone = msIdentity.currentUser.phone;
  $scope.city = msIdentity.currentUser.city;

  $scope.update = function () {
    var newUserData = {
      username: $scope.email,
      phone: $scope.phone,
      firstName: $scope.fname,
      lastName: $scope.lname,
      city: $scope.city
    };
    if ($scope.password && $scope.password.length > 0) {
      newUserData.password = $scope.password;
    }

    msAuth.updateCurrentUser(newUserData).then(function () {
      msNotifier.notify('Ваш профиль обновлён');
    }, function (reason) {
      msNotifier.error(reason);
    });
  };
});