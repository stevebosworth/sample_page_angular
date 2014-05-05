'use strict';

angular.module('samplePageApp')
  .factory('surveyFactory', function ($http) {

    var factory = {};

    factory.getSurveyItems =  function() {
      return $http.get('/data/survey-items.json');
    };

    factory.submitSurvey = function(data) {
      return $http.post('http://samplepage.apiary-mock.com/survey', data);
    };

    factory.subscribe = function(data) {
      return $http.post('http://samplepage.apiary-mock.com/survey', data);
    };

    return factory;
  });
