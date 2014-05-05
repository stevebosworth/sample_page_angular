'use strict';

angular.module('samplePageApp')
  .factory('surveyFactory', function ($http) {

    var factory = {};

    /**
     *  Get survey items from the server.  Doesn't currently work
     *
     *  @method getSurveyItems
     *
     *  @return {object}       returns the ngHTTP promise to handle success or error
     */

    factory.getSurveyItems =  function() {
      return $http.get('/data/survey-items.json');
    };

    /**
     *  Send Survey form to back-end.  Mocked up using apiary.io right now
     *
     *  @method submitSurvey
     *
     *  @param  {object}     data from survey form
     *
     *  @return {object}           returns the ngHTTP promise to handle success or error
     */

    factory.submitSurvey = function(data) {
      return $http.post('http://samplepage.apiary-mock.com/survey', data);
    };

    /**
     *  Send Email Subscription to backend
     *
     *  @method subscribe
     *
     *  @param  {object}  data from email form
     *
     *  @return {object}        returns the ngHTTP promise to handle success or error
     */

    factory.subscribe = function(data) {
      return $http.post('http://samplepage.apiary-mock.com/survey', data);
    };

    return factory;
  });
