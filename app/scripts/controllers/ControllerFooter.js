'use strict';

(function(){

	/**
	*
	* @name ControllerFooter function
	* 
	* @description This is the controller for the header of the site
	* @param {} 
	**/
	function ControllerFooter(){
		// var vm = this;
		console.log('Estoy en el footer');
	}
	//Injecting dependencies into ControllerFooter function
	ControllerFooter.$inject = [];
	//Attatching ControllerFooter function into the app
	angular
		.module('drkv2App')
		.controller('ControllerFooter',ControllerFooter);
})();