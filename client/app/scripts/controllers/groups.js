 'use strict';
 
/**
* @ngdoc function
* @name fakeLunchHubApp.controller:GroupsCtrl
* @description
* # GroupsCtrl
* Controller of the fakeLunchHubApp
*/
angular.module('fakeFullRailsApp')
  .controller('GroupsCtrl', ['$scope', 'Group', function ($scope, Group) {
    $scope.groups = Group.query();
  }]);