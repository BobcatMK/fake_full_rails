'use strict';

/**
 * @ngdoc function
 * @name fakeFullRailsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fakeFullRailsApp
 */
angular.module('fakeFullRailsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
