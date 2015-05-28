var serviceApp = angular.module('ep09App', ['ngResource']);

serviceApp.factory('statesService', function($resource) {
  return $resource('http://www.json-generator.com/api/json/get/caQLTOwkHS?indent=2')
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceApp.controller('controllerEp09', function($scope, statesService) {

  $scope.filtro = "";

  statesService.query(function(data){
    $scope.states = data;
  });
  
});