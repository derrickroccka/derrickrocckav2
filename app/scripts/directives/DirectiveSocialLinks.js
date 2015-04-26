'use strict';

(function(){

	/**
	*
	* @name DirectiveSocialLinks function
	* 
	* @description Directive that returns social links template
	* @param {} 
	**/
	function DirectiveSocialLinks(){
		// var vm = this;
		return {
			replace: true,
			restrict: 'A',
			templateUrl: 'templates/socialLinks.html'
		};
	}
	//Injecting dependencies into DirectiveSocialLinks function
	DirectiveSocialLinks.$inject = [];
	//Attatching DirectiveSocialLinks function into the app
	angular
		.module('drkv2App')
		.directive('socialLinks',DirectiveSocialLinks);
})();