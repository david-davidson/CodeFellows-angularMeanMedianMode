'use strict';

module.exports = function(app) {
  app.controller('mmmController',
    ['$scope', 'mmmService',
    function($scope, mmmService) {

      $scope.calculate = function(input) {
        var numbers = input.split(' ').map(Number);

        $scope.results = [];

        $scope.results.push({
        	name: 'mean',
        	value: mmmService.mean(numbers)
        });

        $scope.results.push({
        	name: 'median',
        	value: mmmService.median(numbers)
        });

        $scope.results.push({
        	name: 'mode',
        	value: mmmService.mode(numbers)
        });

      };

      $scope.numbersEntered = function(input) {
      	return input.length > 0;
      };

    }]);
};