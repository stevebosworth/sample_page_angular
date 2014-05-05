'use strict';

/**
 *  This is the controller for the
 */

angular.module('samplePageApp')
  .controller('SummaryCtrl', function ($rootScope, $scope, $location, surveyFactory) {
    $scope.user = {};

    $scope.navigate = function(path) {
      $location.path( path );
    };

    $scope.subscribeToEmail = function(){
      surveyFactory.subscriibe($scope.user).success(function(){
          console.log('Subscribed!');
        }).error(function() {
          console.log('Subscribe Error!');
        });
    };

  });
