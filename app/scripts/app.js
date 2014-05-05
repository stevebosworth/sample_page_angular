'use strict';


/**
 *  CONFIG & ROUTING FOR APP
 */

angular
  .module('samplePageApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
  ]).config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'SurveyCtrl',
      templateUrl: '/views/survey.html'
    }).when('/summary',{
      controller: 'SummaryCtrl',
      templateUrl: '/views/summary.html'
    });
  });
