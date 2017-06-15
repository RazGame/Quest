angular.module('app').factory('msGame', function ($resource) {
  return $resource('/api/games/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
});