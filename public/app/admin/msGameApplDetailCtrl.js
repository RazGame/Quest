angular.module('app').controller('msGameApplDetailCtrl', function ($scope, $routeParams, msGameAppl) {

  $scope.gameAppl = msGameAppl.get({_id: $routeParams.id});

});