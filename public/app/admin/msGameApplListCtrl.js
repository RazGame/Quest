angular.module('app').controller('msGameApplListCtrl', function ($scope, msGameAppl, $routeParams) {
  msGameAppl.query().$promise.then(data => {
    console.log(data);
    $scope.gameAppls = data.filter(el => el.gameParent ? (el.gameParent._id == $routeParams.id) : false);

  });
});