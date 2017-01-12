// "use strict";

// app.factory("MainFactory", function($q, $http){
	
// 	var get = function(url){
// 		return $q((resolve, reject) => {
// 			$http.get(url)
// 			.success(function(response){

// 			})
// 			.error(function(errorResponse){
// 				reject(errorResponse);
// 			});
// 		});
// 	};

// 	var post = function(url){
// 		return $q((resolve, reject) => {
// 			$http.post(url)
// 			.success(function(response){
// 			})
// 			.error(function(errorResponse){
// 				reject(errorResponse);
// 			});
// 		});
// 	};

// 	var option = function(url){
// 		return $q((resolve, reject) => {
// 			$http.option(url)
// 			.success(function(response){
// 			})
// 			.error(function(errorResponse){
// 				reject(errorResponse);
// 			});
// 		});
// 	};

// 	var head = function(url){
// 		return $q((resolve, reject) => {
// 			$http.head(url)
// 			.success(function(response){
// 			})
// 			.error(function(errorResponse){
// 				reject(errorResponse);
// 			});
// 		});
// 	};

// 	return {get:get, post:post, option:option, head:head};


// 	// $http.get(url, config).then(successCallback, errorCallback);
	
// 	// $http.post(url, data, config).then(successCallback, errorCallback);

// 	//$http.head(url, [config]).then(successCallback, errorCallback);
// });