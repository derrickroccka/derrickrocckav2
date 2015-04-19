'use strict';

(function(){
	/**
	*
	* @name ControllerTheme function
	* 
	* @description This is the controller for the themes. This rules everything. TOP CONTROLLER
	* @param {} 
	**/
	function ControllerTheme(Themes){
		var vm = this;

		vm.activeTheme = {};
		
		angular.forEach(Themes, function(value){
			if(value.active === true){
				vm.activeTheme = value;
			}
		});
		

	}
	//Injecting dependencies into ControllerTheme function
	ControllerTheme.$inject = ['Themes'];
	//Attatching ControllerTheme function into the app
	angular
		.module('drkv2App')
		.controller('ControllerTheme',ControllerTheme);
})();