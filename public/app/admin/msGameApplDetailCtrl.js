angular.module('app').controller('msGameApplDetailCtrl', function ($scope, $routeParams, msGameAppl) {
  $scope.gameAppls = msGameAppl.get({_id: $routeParams.id}).$promise.then(data => {
      $scope.gameAppl = data;
      console.log(data);
  });
});