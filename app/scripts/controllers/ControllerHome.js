'use strict';

(function(){
	/**
	*
	* @name ControllerHome function
	* 
	* @description This is the controller of the home
	* @param {} 
	**/
	function ControllerHome(){
		var vm = this;
		vm.rotatingWords = ['a dev','...','this(8)','dy','a youtuber','a gamer','#fifalover','a man','creativity','creactivity','professional','happiness','a robot','a creator','a crazy guy','ingenio'];
	}
	//Injecting dependencies into ControllerHome function
	ControllerHome.$inject = [];
	//Attatching ControllerHome function into the app
	angular
		.module('drkv2App')
		.controller('ControllerHome',ControllerHome);
})();