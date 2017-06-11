angular.module('app').controller('msGameApplListCtrl', function ($scope, msGameAppl, $routeParams) {
  msGameAppl.query().$promise.then(data => {
      $scope.gameAppls = data.filter(el => el.gameParent._id == $routeParams.id);
  });
});