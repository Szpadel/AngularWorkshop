'use strict';

/**
 * @ngdoc function
 * @name tutorialChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialChatApp
 */
angular.module('tutorialChatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
