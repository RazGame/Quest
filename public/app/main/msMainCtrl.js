angular.module('app').controller('msMainCtrl', function ($scope, msGame) {
  $scope.games = msGame.query();
});