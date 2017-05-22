angular.module('app').controller('msGameApplListCtrl', function ($scope, msGameAppl) {
  $scope.gameAppls = msGameAppl.query();
});