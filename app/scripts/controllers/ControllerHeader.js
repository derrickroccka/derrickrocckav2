'use strict';

(function(){

	/**
	*
	* @name ControllerHeader function
	* 
	* @description This is the controller for the header of the site
	* @param {} 
	**/
	function ControllerHeader(Header){
		var vm = this;
		console.log('Estoy en el header', Header);
		vm.preferences = Header;

	}
	//Injecting dependencies into ControllerHeader function
	ControllerHeader.$inject = ['Header'];
	//Attatching ControllerHeader function into the app
	angular
		.module('drkv2App')
		.controller('ControllerHeader',ControllerHeader);
})();