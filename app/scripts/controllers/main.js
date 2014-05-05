'use strict';

angular.module('samplePageApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, surveyFactory) {

    //set survey items on page init

    function init (){
      surveyFactory.getSurveyItems().success(function(data){
          $rootScope.surveyItems = data;
        }).error(function(data){
          console.log(data);
        });
    }
    init();
  });
