'use strict';

(function(){
	/**
	*
	* @name DirectiveHeader function
	* 
	* @description Directive that displays the header of the site
	* @param {} 
	**/
	function DirectiveHeader(){
		var vm = this;
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '../../templates/header.html'
		}
	}
	//Injecting dependencies into DirectiveHeader function
	DirectiveHeader.$inject = [];
	//Attatching DirectiveHeader function into the app
	angular
		.module('drkv2App')
		.directive('DirectiveHeader',DirectiveHeader);
})();