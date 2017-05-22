angular.module('app').controller('msGameDetailCtrl', function ($scope, msGame, $routeParams, msIdentity, msGameModificator, msNotifier) {

  $scope.game = msGame.get({_id: $routeParams.id});

  $scope.signToGame = function () {
    msGameModificator.signToGame({user: msIdentity.currentUser, game: $scope.game, signed: new Date()}).then(function () {
      msNotifier.notify('Подана заявка на ' + $scope.game.title);
    }, function (reason) {
      msNotifier.error(reason);
    });
  };

});