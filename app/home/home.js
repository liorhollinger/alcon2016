'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl as vm'
        });
    }])

    .controller('homeCtrl', ["DataFactory","$rootScope", function (DataFactory,$rootScope) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.userPlayed = function () {
            this.userPlay = true;
        };

        var howManySlides = Math.floor(window.innerWidth / 440);
        if (howManySlides <= 0){
            howManySlides = 1;
        }
        // array of 3 array in item
        this.projs = _.chunk(DataFactory.getProjs(), howManySlides);

    }]).directive('videoContainer', [function () {
        return {
            templateUrl: 'home/video-container.html',
            restrict: 'E',
            replace: true,
            link: function menuLink(scope, element, attrs) {
                scope.isPlaying = false;
                var videoEl = element.find('video')[0];

                scope.toggle = function () {
                    if (scope.isPlaying) {
                        videoEl.pause();
                    } else {
                        videoEl.play();
                    }
                    scope.isPlaying = !scope.isPlaying;
                };

            }
        }
    }]);

