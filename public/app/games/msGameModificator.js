angular.module('app').factory('msGameModificator', function (msGame, msGameAppl, $q, msUser, msIdentity, $http) {
  return {
    createGame: function (newGameData) {
      var newGame = new msGame(newGameData);
      var dfd = $q.defer();
      newGame.$save().then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },

    signToGame: function (gameApplData) {
      var dfd = $q.defer();
      var newGameAppl = new msGameAppl({userParent: gameApplData.user._id, gameParent: gameApplData.game._id, signed: gameApplData.signed});
      newGameAppl.$save().then(function (response) {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    }
  };
});