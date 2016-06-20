'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ksSwiper',
    'myApp.home',
    'myApp.about',
    'myApp.projects',
    'myApp.contact',
    'myApp.version',
    'myApp.techs',
    'myApp.directives'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
