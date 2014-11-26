'use strict';

/**
 * @ngdoc function
 * @name fakeFullRailsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakeFullRailsApp
 */
angular.module('fakeFullRailsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
