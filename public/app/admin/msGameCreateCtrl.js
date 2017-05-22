angular.module('app').controller('msGameCreateCtrl', function ($scope, msNotifier, $route, msGameModificator) {
    $scope.createNewGame = function () {

        var newGameData = {
            title: $scope.title,
            city: $scope.city,
            dateofstart: $scope.dateofstart,
            dateofend: $scope.dateofend,
            deposit: $scope.deposit,
            prize: $scope.prize,
            description: $scope.description
        };

        console.log(newGameData);

        msGameModificator.createGame(newGameData).then(function () {
            msNotifier.notify('Игра создана!');
        }, function (reason) {
            msNotifier.error(reason);
        });

        $route.reload();

    };

    $scope.cleanInputs = function () {
        $scope.title = '';
        $scope.tags = '';
        $scope.published = '';
    };
});