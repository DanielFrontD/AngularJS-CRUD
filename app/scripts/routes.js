/**
 * Created by cibersys001 on 3/19/2016.
 */
(function () {
  'use strict';
  angular.module('prueba')
    .config(function ($stateProvider, $urlRouterProvider, $logProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          views: {
            "index-view": {
              templateUrl: 'views/main.html',
              controller: "MainCtrl",
              controllerAs: "ctrl"
            }
          }

        });

      $urlRouterProvider.otherwise('/');

    });
})();
