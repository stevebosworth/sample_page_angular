'use strict';

var _ = require('lodash');

angular.module('samplePageApp')
  .controller('SurveyCtrl', function ($rootScope, $scope, $location, surveyFactory) {

    var selectedItems = [];

    var formData = [];

    // preserve the state of the form if you are returning from
    // the summary page.
    _.each($rootScope.surveyItems, function(item, index){
      if(item.selected === true){
        selectedItems.push(index);
      }
    });


    $scope.update = function (index) {

      //remove item selectedItems if it's a previously selected value being unchecked
      selectedItems = _.pull(selectedItems, index);

      //check for length of selected items
      if(selectedItems.length === 4){

        //remove last selected item
        var removed = parseInt(selectedItems.pop());

        //push new selection
        selectedItems.push(index);

        //unset last selected item to make room for new selection
        $rootScope.surveyItems[removed].selected = false;

      } else if ($rootScope.surveyItems[index].selected) {
        selectedItems.push(index);
      }
    };

    $scope.ajaxSubmit =  function() {

      //only submit if items are selected
      if (selectedItems.length > 0){

        //serialize the form data
        _.each($rootScope.surveyItems, function(item){
          if(item.selected === true){
            formData.push(item);
          }
        });

        //send ajax request
        surveyFactory.submitSurvey(formData).success(function(){

            //SUCCESS HANDLING
            console.log('SUBMITTED!');
            $scope.navigate('/summary');

          }).error(function() {

            //ERROR HANDLING
            console.log('Subscribe Error!!');
          });
      } else {
        alert('You must select something to proceed');
      }
    };

    //want to move this into a service
    //
    $scope.navigate = function(path) {
      $location.path( path );
    };
  });
