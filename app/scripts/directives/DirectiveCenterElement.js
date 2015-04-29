'use strict';
/*jshint multistr: true */
(function(){

	/**
	*
	* @name DirectiveCenterElement function
	* 
	* @description Directive that allows to center an element
	* @param {} 
	* @see https://github.com/iameugenejo/angular-centered/angular-centered.js
	**/
	function DirectiveCenterElement(){
		return {
			restrict : 'ECA',
			transclude : true,
			template : '<div class=\"angular-center-container\">\
						<div class=\"angular-centered\" ng-transclude>\
						</div>\
						</div>'
		};
	}
	//Injecting dependencies into DirectiveCenterElement function
	DirectiveCenterElement.$inject = [];
	//Attatching DirectiveCenterElement function into the app
	angular
		.module('drkv2App')
		.directive('centerElement',DirectiveCenterElement);
})();