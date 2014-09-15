'use strict';

module.exports = function(app) {
	app.service('mmmService', function() {
		var meanMedianMode = require('../lib/meanMedianMode');
		this.mean = meanMedianMode.mean;
		this.median = meanMedianMode.median;
		this.mode = meanMedianMode.mode;
	});
};