"use strict";

app.controller("home", function($scope, $http, $templateCache){
	$scope.methods = ["Get", "Post", "Options", "Head"];

	$scope.methodSelected = 'GET';

	 $scope.fetch = function(url) {
      $scope.code = null;
      $scope.response = null;

      var startTime = (new Date()).getTime(), endTime;
      
      var sendDate = (new Date()).getTime();
      var receiveDate = (new Date()).getTime();
      var responseTimeMs = receiveDate - sendDate;

      $http({methodSelected: $scope.methodSelected, url: $scope.url, cache: $templateCache}).
        then(function(response) {
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          console.log(response);
          $scope.responseTimeMs = responseTimeMs;
          $scope.endTime = (new Date()).getTime();
          // $scope.responseSize = response.responseText.length;
          $scope.contLength = response.getResponseHeader ("Content-Length");
      });
    };
});