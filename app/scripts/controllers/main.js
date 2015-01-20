'use strict';

/**
 * @ngdoc function
 * @name tutorialChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialChatApp
 */
angular.module('tutorialChatApp')
    .controller('MainCtrl', function ($scope, $cookies) {
        $scope.messages = [
            {
                nick: 'User1',
                msg: 'Hello world'
            },
            {
                nick: 'User2',
                msg: 'Hi!'
            }
        ];

        $scope.newMessage = '';


        $scope.send = function () {
            $scope.messages.push({
                nick: 'My',
                msg: $scope.newMessage
            });

            $scope.newMessage = '';
        };


        while ($cookies.userid === null || $cookies.userid.trim().length < 3) {
            $cookies.userid = prompt('Wpisz swoje imie i nazwisko');
        }
    });
