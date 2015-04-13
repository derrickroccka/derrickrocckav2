'use strict';
// Ionic Starter App

//Check Todd Motto styleguide for moar info

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

(function(){
	//Define the main module of the app
	angular.module('drkv2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

	/**
	*
	* @name Run function
	* 
	* @description This is executed everytime the app starts
	* @param {Object} $ionicPlatform
	**/
	function Run(){

	}
	//Injecting dependencies into Run function
	Run.$inject = [];
	//Attatching Run function into the app
	angular
		.module('drkv2App')
		.run(Run);

	/**
	*
	* @name Config function
	* 
	* @description Defines the configuration of the app
	* @param {Object} $routeProvider
	* @param {Object} $locationProvider
	**/
	
	function Config($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'ControllerHome',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
		$locationProvider.html5Mode(true);
	}
	//Injecting dependencies into Config function
	Config.$inject = ['$routeProvider', '$locationProvider'];
	//Attatching Config function into the app
	angular
		.module('drkv2App')
		.config(Config);

})();
