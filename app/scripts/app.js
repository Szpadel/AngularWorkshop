'use strict';

/**
 * @ngdoc overview
 * @name tutorialChatApp
 * @description
 * # tutorialChatApp
 *
 * Main module of the application.
 */
angular
  .module('tutorialChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .factory('Chat', function($firebase) {
      return $firebase(new Firebase("https://wit-workshop.firebaseio.com/demo/").endAt().limit(100));
    });
