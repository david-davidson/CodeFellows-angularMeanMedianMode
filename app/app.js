'use strict';

require('angular/angular');

var mmm = angular.module('mmm', []);

// The mean, median, mode operations
require('./mmmService')(mmm);

// Custom directive for results
require('./mmmDirective')(mmm);

// Controllers
require('./mmmController')(mmm);