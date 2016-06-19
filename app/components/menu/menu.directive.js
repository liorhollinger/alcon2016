'use strict';

angular.module('myApp.directives', [])
    .directive('menu', ['$location', function ($location) {
        return {
            templateUrl: 'components/menu/menu.html',
            restrict: 'E',
            replace: true,
            link: function menuLink(scope, element, attrs) {
                scope.isActive = function (pathName) {
                    return $location.path().indexOf(pathName) != -1;
                };
            }
        };
    }]);
