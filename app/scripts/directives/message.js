'use strict';

/**
 * @ngdoc directive
 * @name tutorialChatApp.directive:message
 * @description
 * # message
 */
angular.module('tutorialChatApp')
  .directive('message', function ($cookies) {
    return {
      templateUrl: 'views/directives/message.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.me = false;
        scope.color = '55C1E7';
        scope.shortName = scope.message.nick[0];
        if($cookies.userid === scope.message.nick) {
          scope.message.nick = 'Me';
          scope.me = true;
          scope.color = 'FA6F57';
          scope.shortName = 'Me';
        }

      }
    };
  });
