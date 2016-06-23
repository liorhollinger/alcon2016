'use strict';

angular.module('myApp.directives')
    .directive('alconSwiper', ['$location', function ($location) {
        return {
            templateUrl: 'components/alcon-swiper/alcon-swiper.html',
            restrict: 'E',
            replace: true,
            transclude: true,
            link: function menuLink(scope, element, attrs) {
            }
        };
    }]);
