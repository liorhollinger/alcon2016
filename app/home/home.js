'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl as vm'
  });
}])

.controller('homeCtrl', ["DataFactory", function(DataFactory) {
  this.projs = DataFactory.getProjs().slice(0, 3);
}]);