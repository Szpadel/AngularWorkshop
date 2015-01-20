'use strict';

/**
 * @ngdoc function
 * @name tutorialChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialChatApp
 */
angular.module('tutorialChatApp')
    .controller('MainCtrl', function ($scope, $cookies, Chat) {
        $scope.messages = Chat.$asArray();

        $scope.newMessage = '';


        $scope.send = function () {
            $scope.messages.$add({
                nick: $cookies.userid,
                msg: $scope.newMessage,
                timestamp: new Date().toString()
            });

            $scope.newMessage = '';
        };

        $scope.$watch('messages', function(){
            var chat = $(".panel-body").first();
            chat.animate({scrollTop: chat.prop("scrollHeight")}, 250);
        });

        while ($cookies.userid === null || $cookies.userid.trim().length < 3) {
            $cookies.userid = prompt('Wpisz swoje imie i nazwisko');
        }
    });
