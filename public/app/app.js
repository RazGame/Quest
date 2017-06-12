    angular.module('app', ['ngResource', 'ngRoute', 'restangular']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {
            auth: function (msAuth) {
                return msAuth.authorizeCurrentUserForRoute('admin');
            }
        },
        user: {
            auth: function (msAuth) {
                return msAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/vMain',
            controller: 'msMainCtrl'
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/vUser-list',
            controller: 'msUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/admin/addGame', {
            templateUrl: '/partials/admin/vGame-create',
            controller: 'msGameCreateCtrl', resolve: routeRoleChecks.admin
        })
        .when('/games/:id/gameEditor', {
            templateUrl: '/partials/games/vGame-editor',
            controller: 'msGameEditor', resolve: routeRoleChecks.admin
        })
        .when('/game/game-appls-list/:id', {
            templateUrl: '/partials/admin/vGame-appl-list',
            controller: 'msGameApplListCtrl'
        })
        .when('/game/game-appls/:id', {
            templateUrl: '/partials/admin/vGame-appl-details',
            controller: 'msGameApplDetailCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/vSignup',
            controller: 'msSignupCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/vProfile',
            controller: 'msProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/games', {
            templateUrl: '/partials/games/vGame-list',
            controller: 'msGameListCtrl'
        })
        .when('/games/:id', {
            templateUrl: '/partials/games/vGame-details',
            controller: 'msGameDetailCtrl'
        });
})
;

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    });
});