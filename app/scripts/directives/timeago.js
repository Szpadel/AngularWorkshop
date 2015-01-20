'use strict';

/**
 * @ngdoc directive
 * @name tutorialChatApp.directive:timeago
 * @description
 * # timeago
 */
angular.module('tutorialChatApp')
  .directive('timeago', function () {
      return {
        template: '<span>{{ displayTime }}</span>',
        restrict: 'E',
        scope: {
          timestamp: '='
        },
        link: function postLink(scope, element, attrs) {
          var time = 0;
          var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
          scope.displayTime = 'just right now';
          var timestampObject = new Date(scope.timestamp);
          var updateTime = function () {
            scope.$apply(function () {
              var now = new Date();
              var t = timestampObject;
              time = Math.floor((now.getTime() - t.getTime())/1000);
              var m = t.getMinutes();
              if(m < 10) {
                m = '0' + m;
              }
              if(time < 10) {
                scope.displayTime = 'just right now';
              }else if(time < 60) {
                scope.displayTime = time + ' seconds ago';
              }else if(time < 3600) {
                scope.displayTime = Math.floor(time/60) + ' minutes ago';
              }else if(time < 86400 && now.getDate() === t.getDate()){
                scope.displayTime = 'Today at ' + t.getHours() + ':' + m;
              }else {
                scope.displayTime = t.getDate() + ' ' + months[t.getMonth()] + ' at '  + t.getHours() + ':' + m;
              }
            });

            setTimeout(updateTime, 15000);
          };

          setTimeout(updateTime, 0);
        }
      };
  });
