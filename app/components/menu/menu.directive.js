'use strict';

angular.module('myApp.directives')
    .directive('menu', ['$location','$translate','$rootScope', function ($location,$translate,$rootScope) {
        return {
            templateUrl: 'components/menu/menu.html',
            restrict: 'E',
            replace: true,
            link: function menuLink(scope, element, attrs) {
                //$rootScope.langKey = "heb";
                //document.querySelector(".main").style.direction =  "ltr";
                //console.log('dsfsd');
                scope.first = function (pathName) {
                    return $location.path().indexOf(pathName) != -1;
                };
                scope.isActive = function (pathName) {
                    return $location.path().indexOf(pathName) != -1;
                };

                //scope.changeLanguage = function(){
                //    if($rootScope.langKey == "heb"){
                //        document.querySelector(".main").style.direction =  "ltr";
                //        document.querySelector("footer").style.direction =  "ltr";
                //        $translate.use("en");
                //        $rootScope.langKey = "en"
                //    }
                //    else{
                //        document.querySelector(".main").style.direction =  "rtl";
                //        document.querySelector("footer").style.direction =  "rtl";
                //        $translate.use("heb");
                //        $rootScope.langKey = "heb"
                //    }
                //
                //}
            }
        };
    }]);
