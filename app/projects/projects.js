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

    .controller('ProjCtrl', ['$routeParams', 'DataFactory', '$rootScope', '$scope', function ($routeParams, DataFactory, $rootScope, $scope) {
        //console.log('$routeParams', $routeParams);
        this.projs = DataFactory.getProjs().slice(0,3);
        var route = ''+$routeParams.id;
        this.proj = DataFactory.getProj(route);
        if (this.proj) {
            $rootScope.details = this.proj;
            $rootScope.details.isSmall = true;
        }
        this.projimgs = this.proj.imgs;
        this.imgNum = 0;
        this.curentImg = this.projimgs[this.imgNum];
        this.swipe = function(value){
            if(value === -1 && this.imgNum === 0 || value === 1 && this.imgNum >= this.projimgs.length-1  ) return
            this.imgNum += value;
            this.curentImg = this.projimgs[this.imgNum];
        };
        console.log(this.projimgs);


        $scope.$on('$destroy', function () {
            $rootScope.details = null;
        });



    }]);