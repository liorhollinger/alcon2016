'use strict';

angular.module('myApp.techs', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/techs', {
            templateUrl: 'techs/techs.html',
            controller: 'techsCtrl as vm'
        });
        $routeProvider.when('/tech/:name', {
            templateUrl: 'techs/tech.html',
            controller: 'TechCtrl as vm'
        });

    }])

    .controller('techsCtrl', ['DataFactory', function (DataFactory) {
        //console.log('DataFactory:', DataFactory);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.techs = DataFactory.getTechs();
    }])

    .controller('TechCtrl', ['$routeParams', 'DataFactory', '$rootScope', '$scope', function ($routeParams, DataFactory, $rootScope, $scope) {
        //console.log('$routeParams', $routeParams);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.techs = _.chunk(DataFactory.getTechs(), 3);
        var route = ''+$routeParams.name;
        this.tech = DataFactory.getTech(route);

        if (this.tech) {
            $rootScope.details = this.tech;
        }

        this.techimgs = this.tech.imgs;
        this.imgNum = 0;
        this.curentImg = this.techimgs[this.imgNum];
        this.swipe = function(value){
            if(value === -1 && this.imgNum === 0 || value === 1 && this.imgNum >= this.techimgs.length-1  ) return
            this.imgNum += value;
            this.curentImg = this.techimgs[this.imgNum];
        };

        $scope.$on('$destroy', function () {
            $rootScope.details = null;
        });
    }]).directive('techsList', [function () {
        return {
            templateUrl: 'techs/techs-list.html',
            restrict: 'E',
            replace: true,
            scope: {
                techs: '=techs',
                isPreview: '=isPreview'
            },
            link: function menuLink(scope, element, attrs) {
            }
        }
    }]);