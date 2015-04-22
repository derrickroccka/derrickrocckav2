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
		'ngRoute',
		'ui.router',
		'720kb.fx'
	]);

	/**
	*
	* @name Run function
	* 
	* @description This is executed everytime the app starts
	* @param {Object} $ionicPlatform
	**/
	function Run($rootScope,$state,ServiceHelpers){
		$rootScope.goTo = function(state, params) {
			if(params !== null && params !== undefined){
				$state.go(state, params);
			}
			else{
				$state.go(state, {});
			}
			$state.go(state, {});
		};
		$rootScope.site = ServiceHelpers.readJsonFile('data/site.json').then(function(result){
			console.log(result);
			$rootScope.site = result;
		});
	}
	//Injecting dependencies into Run function
	Run.$inject = ['$rootScope','$state','ServiceHelpers'];
	//Attatching Run function into the app
	angular
		.module('drkv2App')
		.run(Run);

	/**
	*
	* @name Config function
	* 
	* @description Defines the configuration of the app
	* @param {Object} $stateProvider
	* @param {Object} $locationProvider
	**/
	
	function Config($stateProvider,$urlRouterProvider,$locationProvider){
		$stateProvider
		.state('root',{
			abstract: true,
			// templateUrl: 'templates/root.html',
			controller: 'ControllerTheme as theme',
			resolve: {
				// // TODO se resolverán todos los json al cargar la home, luego se inyectarán en cada uno de sus ctrl
				Author: function(ServiceHelpers){
					return ServiceHelpers.readJsonFile('data/author.json');
				},
				Themes: function(ServiceHelpers){
					return ServiceHelpers.readJsonFile('data/themes.json');
				},
				Header: function(ServiceHelpers){
					return ServiceHelpers.readJsonFile('data/header.json');
				},
				Menu: function(ServiceHelpers){
					return ServiceHelpers.readJsonFile('data/menu.json');
				}
			},
			views: {
				'': {
					templateUrl: 'templates/root.html',
					controller: 'ControllerTheme as theme'
				},
				'header@root': {
					templateUrl: 'templates/header.html',
					controller: 'ControllerHeader as header'
				},
				'footer@root':{
					templateUrl: 'templates/footer.html',
					controller: 'ControllerFooter as footer'
				},
				'menu@root':{
					templateUrl: 'templates/menu.html',
					controller: 'ControllerMenu as menu'
				}
			}
		})
		.state('root.home',{
			parent: 'root',
			url:'/home',
			abstract: false,
			// templateUrl: 'templates/home.html',
			// controller: 'ControllerHome as home'
			views: {
				'main': {
					templateUrl: 'templates/home.html',
					controller: 'ControllerHome as home'
				}
			}
		});
		$urlRouterProvider.otherwise('/home');
		$locationProvider.html5Mode(false);
	}
	//Injecting dependencies into Config function
	Config.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
	//Attatching Config function into the app
	angular
		.module('drkv2App')
		.config(Config);

})();
