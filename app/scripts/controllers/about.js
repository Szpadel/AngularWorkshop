'use strict';

/**
 * @ngdoc function
 * @name tutorialChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tutorialChatApp
 */
angular.module('tutorialChatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
