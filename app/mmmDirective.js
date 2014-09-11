'use strict';

module.exports = function(app) {
	app.directive('ddResults', function() {
		return {
      restrict: 'E',
      templateUrl: 'results.html'
    };
	});
};