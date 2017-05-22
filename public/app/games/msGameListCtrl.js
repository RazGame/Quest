angular.module('app').controller('msGameListCtrl', function ($scope, msGame) {

  $scope.games = msGame.query();

  $scope.sortOptions = [
    {value: "title", text: "Сортировать по названию"},
    {value: "dateofstart", text: "Сортировать по дате начала"}
  ];
  $scope.sortOrder = $scope.sortOptions[0].value;
});