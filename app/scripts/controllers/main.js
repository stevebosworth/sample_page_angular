'use strict';

var _ = require('lodash');

angular.module('samplePageApp')
  .controller('MainCtrl', function ($scope) {
    var selectedItems = [];

    $scope.validate = function (index) {
      //remove from selectedItems if it's a previously selected value being
      //unchecked
      selectedItems = _.pull(selectedItems, index);
      console.log(selectedItems);

      //check for length of selected items
      if(selectedItems.length === 4){

        //remove last selected item
        var removed = parseInt(selectedItems.pop());

        //push new selection
        selectedItems.push(index);

        //unset last selected item to make room for new selection
        $scope.surveyItems[removed].selected = false;

      } else if ($scope.surveyItems[index].selected) {
        selectedItems.push(index);
        console.log(selectedItems);
      }
    };

    $scope.surveyItems = [
      {
        id: 1,
        name : 'clothing-apparel',
        title: 'Clothing & Apparel',
        icon: 'shirt',
        iconType : 'tall',
        selected : false
      },
      {
        id: 2,
        name : 'jewlery-accessories',
        title: 'Jewelry & Accessories',
        icon: 'diamond',
        iconType : 'tall',
        selected : false
      },
      {
        id: 3,
        name : 'health-beauty',
        title: 'Health & Beauty',
        icon: 'bottle',
        iconType : 'tall',
        selected : false
      },
      {
        id: 4,
        name : 'bags-shoes',
        title: 'Bags & Shoes',
        icon: 'bag',
        iconType : 'tall',
        selected : false
      },
      {
        id: 5,
        name : 'food-drink',
        title: 'Food & Drink',
        icon: 'glass',
        iconType : 'tall',
        selected : false
      },
      {
        id: 6,
        name : 'home-garden',
        title: 'Home & Garden',
        icon: 'couch',
        iconType : 'wide',
        selected : false
      },
      {
        id: 7,
        name : 'electronics',
        title: 'Electronics',
        icon: 'battery',
        iconType : 'wide',
        selected : false
      },
      {
        id: 8,
        name : 'random',
        title: 'Random',
        icon: 'random',
        iconType : 'tall',
        selected : false
      },
    ];


  });
