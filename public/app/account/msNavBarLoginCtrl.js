angular.module('app').controller('msNavBarLoginCtrl', function ($scope, $http, msIdentity, msNotifier, msAuth, $location, $route) {
  $scope.identity = msIdentity;
  $scope.signin = function (username, password) {
    if (username) {
      msAuth.authenticateUser(username, password).then(function (success) {
        if (success) {
          msNotifier.notify('Вы успешно вошли!');
        } else {
          msNotifier.error('Неверный E-mail/пароль');
        }
      });
    }
  };

  $scope.signout = function () {
    msAuth.logoutUser().then(function () {
      $scope.username = "";
      $scope.password = "";
      msNotifier.warning('Вы успешно вышли!');
      $location.path('/');
      $scope.$apply();
      window.location.reload(true);
    });
  };
});