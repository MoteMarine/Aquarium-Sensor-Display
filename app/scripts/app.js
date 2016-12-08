'use strict';
angular.module('display', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ui.select', 'ngResource'])
  .config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '/dashboard');
  $urlRouterProvider.otherwise('/dashboard');

   $stateProvider.state('base', {
     abstract: true,
     url: '',
     templateUrl: 'views/base.html'
   }).state('dashboard', {
     url: '/dashboard',
     parent: 'base',
     templateUrl: 'views/dashboard.html',
     controller: 'DashboardCtrl'
   }).state('overview', {
     url: '/overview',
     parent: 'dashboard',
     templateUrl: 'views/dashboard/overview.html'
  });
});
