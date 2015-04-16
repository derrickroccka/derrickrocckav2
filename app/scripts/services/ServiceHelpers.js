/**
*
* @name ServiceHelpers.js
* @description This file includes some helpers used around the app.
			   Example: reading a json file and turn it into an object
* @author Derrick Roccka
*
**/

'use strict';

(function(){
	//dependencies to be injected
	var deps = ['$q','$http'];
	/**
	*
	* @name ServiceHelpers
	* @description Function that contains all the functionalities of ServiceHelpers factory
	* @param {Object} $q
	* @param {Object} $http
	**/
	function ServiceHelpers($q, $http){

		return{
			/**
			*
			* @name readJsonFile
			* @description Reads a json file an turns it into a js object
			* @param {String} path	- JSON File path
			**/
			readJsonFile: function(path){
				var jsonFile = {
					content: null,
					path: path
				};
				var deferred = $q.defer();
				$http.get(jsonFile.path).success(function(response) {
					// stores file data into 'jsonFile.content'
					console.log(response);
					jsonFile.content = response;
					deferred.resolve(jsonFile.content);
				});
				return deferred.promise;
			}
		};
	}
	ServiceHelpers.$inject = deps;
	//Attatching ControllerHome function into the app
	angular
		.module('drkv2App')
		.factory('ServiceHelpers',ServiceHelpers);

})();