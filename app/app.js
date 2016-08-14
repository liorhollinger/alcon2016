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
    'myApp.directives',
    'pascalprecht.translate',
    'templates'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/home'});

    }])

    .run(function($rootScope,$translate) {
        $rootScope.langKey = 'heb';
        $rootScope.changeLanguage = function(){
            if($rootScope.langKey == "heb"){
                //if(document.querySelector(".textContainer")){document.querySelectorAll(".textContainer").style.direction =  "ltr";}
                document.querySelector("footer").style.direction =  "ltr";
                $translate.use("en");
                $rootScope.langKey = "en";
                console.log($rootScope.langKey);

            }
            else{
                //if(document.querySelector(".textContainer")){document.querySelectorAll(".textContainer").style.direction =  "rtl";}
                document.querySelector("footer").style.direction =  "rtl";
                $translate.use("heb");
                $rootScope.langKey = "heb";
                console.log($rootScope.langKey);
            }

        };


        //$rootScope.userPlayed = function () {
        //    $rootScope.userPlay = true;
        //    //$rootScope.videoPlayer = document.getElementById("videoPlayer");
        //    //$rootScope.videoPlayer.onended = function() {
        //    //    alert("The video has ended");
        //    //};
        //    $rootScope.videoPlayer = document.getElementById("videoPlayer");
        //    setTimeout(function(){
        //        //$rootScope.videoPlayer = document.getElementById("videoPlayer");
        //        console.log($rootScope.videoPlayer);
        //        $rootScope.videoPlayer.onended = function() {
        //            alert("The video has ended");
        //        };
        //    },10)
        //
        //};



        $rootScope.$on('$viewContentLoaded', function(){


            //angular.element(document).ready(function () {
            //    console.log('page loaded');
            //    console.log($rootScope.langKey);
            //    if($rootScope.langKey == "en"){
            //        if(document.querySelector(".textContainer")){document.querySelectorAll(".textContainer").style.direction =  "ltr";}
            //        document.querySelector("footer").style.direction =  "ltr";
            //        //$rootScope.langKey = "en"
            //    }
            //    else{
            //        console.log(document.querySelectorAll(".textContainer"));
            //        if(document.querySelector(".textContainer")){document.querySelectorAll(".textContainer").style.direction =  "rtl";}
            //        document.querySelector("footer").style.direction =  "rtl";
            //        //$rootScope.langKey = "heb"
            //    }
            //});


        });

    });




