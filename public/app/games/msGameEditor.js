angular.module('app').controller('msGameEditor', function ($scope, msGame, $routeParams,$q, $http, ) {

    $scope.game = msGame.get({_id: $routeParams.id});

    $scope.update = function () {
        $http.put('/api/games/'+$routeParams.id, $scope.game).then((response) => {
            console.log(response);
        },(error => {
                console.log(error);
          })
        )
    };

    $scope.deletegame = function () {
        $http.delete('/api/games/'+$routeParams.id).then((response) => {
            document.location.href = '/';
          },(error => {
            console.log(error);
          })
        )
    }
});