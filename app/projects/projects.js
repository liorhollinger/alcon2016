'use strict';

angular.module('myApp.projects', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'projects/projects.html',
            controller: 'projectsCtrl as vm'
        });
        $routeProvider.when('/project/:id', {
            templateUrl: 'projects/proj.html',
            controller: 'ProjCtrl as vm'
        });

    }])

    .controller('projectsCtrl', ['DataFactory', function (DataFactory) {
        //console.log('DataFactory:', DataFactory);
        this.projs = DataFactory.getProjs();
    }])

    .controller('ProjCtrl', ['$routeParams', 'DataFactory', function ($routeParams, DataFactory) {
        //console.log('$routeParams', $routeParams);
        this.projs = DataFactory.getProjs();
        var route = ''+$routeParams.id;
        this.proj = DataFactory.getProj(route);
        this.projimgs = this.proj.imgs;
        this.imgNum = 0;
        this.curentImg = this.projimgs[this.imgNum];
        this.swipe = function(value){
            if(value === -1 && this.imgNum === 0 || value === 1 && this.imgNum >= this.projimgs.length-1  ) return
            this.imgNum += value;
            this.curentImg = this.projimgs[this.imgNum];
        };

        var self = this;
        this.slides = [];
        this.slides = this.proj.imgs.map(function (imgName) {
            var slide = {};
            slide.id = imgName;
            slide.image = self.proj.id + '/' + imgName;

            return slide;
        });

        console.log(this.slides, this.proj.imgs);






    }]);