'use strict';

(function(){
	/**
	*
	* @name ControllerHome function
	* 
	* @description This is the controller of the home
	* @param {} 
	**/
	function ControllerHome($timeout){
		var vm = this;

		vm.animations = {
			logo: {
				activeLayer: 0,
				layerLimit: 3,
				init: function(){
					$timeout(function(){
						vm.animations.logo.activeLayer++;
					},500);
					$timeout(function(){
						vm.animations.logo.activeLayer++;
					},1000);
					$timeout(function(){
						vm.animations.logo.activeLayer++;
					},1500);
				}
			}
		};
		vm.rotatingWords = ['a dev','...','this(8)','dy','a youtuber','a gamer','#fifalover','a man','creativity','creactivity','professional','happiness','a robot','a creator','a crazy guy','ingenio'];

		vm.animations.logo.init();


	}
	//Injecting dependencies into ControllerHome function
	ControllerHome.$inject = ['$timeout'];
	//Attatching ControllerHome function into the app
	angular
	.module('drkv2App')
	.controller('ControllerHome',ControllerHome);
})();