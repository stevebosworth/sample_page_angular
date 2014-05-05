'use strict';

angular.module('samplePageApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, surveyFactory) {

    /**
     *  Initialize page level stuff.  Mainly setting $rootScope to contain the form items
     *
     *  @method init
     *
     *  @return {undefined}
     */

    function init (){
      surveyFactory.getSurveyItems().success(function(data){
          $rootScope.surveyItems = data;
        }).error(function(data){
          console.log(data);
        });
    }
    init();
  });
