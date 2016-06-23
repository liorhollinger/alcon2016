'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl as vm'
        });
    }])

    .controller('homeCtrl', ["DataFactory", function (DataFactory) {

        this.userPlayed = function(){
            this.userPlay = true;
        };

        // array of 3 array in item
        this.projs = _.chunk(DataFactory.getProjs(), 3);

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