angular.module('app').controller('msGameEditor', function ($scope, msGame, $routeParams,$q) {

    $scope.game = msGame.get({_id: $routeParams.id});
    $scope.game.title;
    $scope.game.description;

    $scope.update = function () {
        var newGameData = {
            title: $scope.game.title,
            description: $scope.game.description
        };
        var dfd = $q.defer();
        var clone = angular.copy(msGame.game);
        angular.extend(clone, newGameData);
        clone.$update().then(function () {
            msGame.game = clone;
            dfd.resolve();
        }, function (response) {
            dfd.reject(response.data.reason);
        });
        return dfd.promise;
    };

    %scope.deletegame = function () {

    }
});