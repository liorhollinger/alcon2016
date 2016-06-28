'use strict';

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'AboutCtrl as vm'
        });


    }])

    .controller('AboutCtrl',['DataFactory',  function (DataFactory) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.staff = DataFactory.getStaff();
        console.log(this.staff);
    }]);