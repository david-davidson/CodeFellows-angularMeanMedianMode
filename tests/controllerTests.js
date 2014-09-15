'use strict';

require('../app/app.js');
require('angular-mocks');

describe('The math controller', function() {
  var $controllerConstructor,
	  $httpBackend,
	  scope,
    mmmController,
    results;

  beforeEach(angular.mock.module('mmm'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;

    mmmController = $controllerConstructor('mmmController', {$scope: scope });
    results = scope.calculate('0 1 2');
  }));

  it('should able to create a new controller', function() {
    expect(typeof mmmController).toBe('object');
    expect(typeof scope.calculate).toBe('function');
  });

  it('should calculate mean', function() {
    expect(results[0].name).toEqual('mean');
    expect(results[0].value).toEqual(1);
  });

  it('should calculate median', function() {
    expect(results[1].name).toEqual('median');
    expect(results[1].value).toEqual(1);
  });

  it('should calculate mode', function() {
    expect(results[2].name).toEqual('mode');
    expect(results[2].value).toEqual('It\'s a tie between 0 and 1 and 2');
  });
});