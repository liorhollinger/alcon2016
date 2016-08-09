'use strict';

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'AboutCtrl as vm'
        });


    }])

    .controller('AboutCtrl',["DataFactory","$rootScope", function (DataFactory,$rootScope) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        //setTimeout(function(){
        //    if($rootScope.langKey == "en"){
        //        document.querySelector(".main").style.direction =  "ltr";
        //        document.querySelector("footer").style.direction =  "ltr";
        //        //$rootScope.langKey = "en"
        //        console.log('about is working');
        //    }
        //    else{
        //        document.querySelector(".main").style.direction =  "rtl";
        //        document.querySelector("footer").style.direction =  "rtl";
        //        //$rootScope.langKey = "heb"
        //        //console.log('about is working');
        //    }
        //},300)


        this.staff = DataFactory.getStaff();
        console.log(this.staff);
    }]);