angular.module('app').factory('msGameAppl', function ($resource) {
  return $resource('/api/game-appls/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
});