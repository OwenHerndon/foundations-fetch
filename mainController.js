;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    
    $scope.methods = ["Get", "Post", "Options", "Head"];

    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";

    $scope.fetch = (url, selectedMethod) => {
      requestService.get($scope.url).then((success) => {
        const response = new Response(success);
        $scope.responses.push(response);
        $scope.urlFetched = url;
        $scope.selectedMethodFetched = selectedMethod;
      }, (error) => {
        debugger
        //do something else
      });
    };
  });
})();

