'use strict';

angular.module('myApp.techs', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/techs', {
            templateUrl: 'techs/techs.html',
            controller: 'techsCtrl as vm'
        });
        $routeProvider.when('/tech/:id', {
            templateUrl: 'techs/tech.html',
            controller: 'TechCtrl as vm'
        });

    }])

    .controller('techsCtrl', ['DataFactory', function (DataFactory) {
        //console.log('DataFactory:', DataFactory);
        this.techs = DataFactory.getTechs();
    }])

    .controller('TechCtrl', ['$routeParams', 'DataFactory', function ($routeParams, DataFactory) {
        //console.log('$routeParams', $routeParams);
        this.techs = DataFactory.getTechs();
        var route = ''+$routeParams.id;
        this.tech = DataFactory.getTech(route);
        this.techimgs = this.tech.imgs;        
        this.imgNum = 0;
        this.curentImg = this.techimgs[this.imgNum];
        this.swipe = function(value){
            if(value === -1 && this.imgNum === 0 || value === 1 && this.imgNum >= this.techimgs.length-1  ) return
            this.imgNum += value;
            this.curentImg = this.techimgs[this.imgNum];
        };
    }]);