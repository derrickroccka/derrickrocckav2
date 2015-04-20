// 'use strict';

// (function(){
// 	/**
// 	*
// 	* @name DirectiveHeader function
// 	* 
// 	* @description Directive that displays the header of the site
// 	* @param {} 
// 	**/
// 	function DirectiveHeader(){
// 		return {
// 			replace: true,
// 			require: 'ControllerTheme',
// 			restrict: 'E',
// 			templateUrl: '../../templates/header.html',
// 			controller: 'ControllerHeader',
// 			controllerAs: 'header'
// 		};
// 	}
// 	//Injecting dependencies into DirectiveHeader function
// 	DirectiveHeader.$inject = [];
// 	//Attatching DirectiveHeader function into the app
// 	angular
// 		.module('drkv2App')
// 		.directive('directiveHeader',DirectiveHeader);
// })();