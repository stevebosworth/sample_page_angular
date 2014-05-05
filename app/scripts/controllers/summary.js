'use strict';

angular.module('samplePageApp')
  .controller('SummaryCtrl', function ($rootScope, $scope, $location, surveyFactory) {

    //model for subscribe form
    $scope.user = {};


    /**
     *  Submit valid subscribe form to backend
     *
     *  @method subscribeToEmail
     *
     *  @return {undefined}
     */

    $scope.subscribeToEmail = function(){
      surveyFactory.subscriibe($scope.user).success(function(){
          console.log('Subscribed!');
        }).error(function() {
          console.log('Subscribe Error!');
        });
    };

    /**
     *  Navigate to specified view
     *
     *  @method navigate
     *
     *  @param  {string} path to view to load
     *
     *  @return {undefined}
     */

    $scope.navigate = function(path) {
      $location.path( path );
    };


  });
