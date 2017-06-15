angular.module('app').controller('msMainCtrl', function ($scope, msGame) {
    msGame.query().$promise.then(data => {
        console.log(data);
        $scope.games = data.filter(el => new Date(el.dateofstart).getTime() > new Date().getTime());
    });
});