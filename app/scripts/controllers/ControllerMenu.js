'use strict';

(function(){

	/**
	*
	* @name ControllerMenu function
	* 
	* @description This is the controller for the header of the site
	* @param {} 
	**/
	function ControllerMenu(Menu){
		var vm = this;
		console.log('Estoy en el menu', Menu);
		vm.items = Menu;
	}
	//Injecting dependencies into ControllerMenu function
	ControllerMenu.$inject = ['Menu'];
	//Attatching ControllerMenu function into the app
	angular
		.module('drkv2App')
		.controller('ControllerMenu',ControllerMenu);
})();