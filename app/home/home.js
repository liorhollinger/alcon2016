'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl as vm'
        });
    }])

    .controller('homeCtrl', ["DataFactory", "$rootScope", "$timeout", function (DataFactory, $rootScope, $timeout) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var that = this;
        //this.userPlay = that.userPlay;
        this.userPlayed = function () {
            //if(this.userPlay){}
            that.userPlay = true;
            $timeout(function () {
                var videoPlayer = document.querySelector("#videoPlayer");
                videoPlayer.play();
                videoPlayer.onended = function () {
                    that.userPlay = false;
                    $rootScope.$apply();
                    //alert(that.userPlay);
                };
            }, 0)
        };

        var howManySlides = Math.floor(window.innerWidth / 440);
        if (howManySlides <= 0) {
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

