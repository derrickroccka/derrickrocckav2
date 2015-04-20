'use strict';

(function(){
	/**
	*
	* @name ControllerHome function
	* 
	* @description This is the controller of the home
	* @param {} 
	**/
	function ControllerHome($interval,$timeout){
		//caching this
		var vm = this;
		//object that stores animation related content of the controller
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
					},750);
					$timeout(function(){
						vm.animations.logo.activeLayer++;
					},1250);
				}
			},
			rotatingWords: {
				count: 0,
				init: function(){
					if(vm.rotatingWords.list.length-1 === vm.animations.rotatingWords.count){
						vm.animations.rotatingWords.count = 0;
					}
					vm.rotatingWords.activeWord = vm.rotatingWords.list[vm.animations.rotatingWords.count];
					vm.animations.rotatingWords.count++;
				}
			}
		};
		//list of concepts that will be displayed in the textrotator of the homepage
		vm.rotatingWords = {
			list: [
				'a dev',
				'...',
				'this(8)',
				'dy',
				'a youtuber',
				'a gamer',
				'#fifalover',
				'a man',
				'creativity',
				'creactivity',
				'a professional',
				'happiness',
				'a robot',
				'a creator',
				'a crazy guy',
				'ingenio'
			],
			activeWord: ''

		};
		//initialize logo animations
		vm.animations.logo.init();
		$interval(vm.animations.rotatingWords.init, 1250);
	}
	//Injecting dependencies into ControllerHome function
	ControllerHome.$inject = ['$interval','$timeout'];
	//Attatching ControllerHome function into the app
	angular
	.module('drkv2App')
	.controller('ControllerHome',ControllerHome);
})();