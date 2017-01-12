"use strict";

var app = angular.module("myApp", []);

// ;(function(){
// const app = angular.module('fetchApp', []);
	
// 	app.controller('home', function($scope, requestService, Response){
// 		$scope.responses = [];

// 		$scope.fetch = () => {
// 			requestService.get($scope.url).then(success => {
// 				const response = new Response(success);
// 				$scope.responses.push(response);
// 				//do something
// 			},error =>{
				
// 				//do something else
// 			});
// 		};
// 	});

// 	app.service('requestService', function($http){
// 		this.get = url => $http.get(url);

// 	});

// 	app.factory('Response', function(){
// 		const Response = function(responseData){
// 			this.statusCode = responseData.status;
// 			//this.headers
// 		};
		
// 		return Response;
// 	});
// })();