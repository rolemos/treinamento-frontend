var serviceApp = angular.module('ep09App', []);

serviceApp.service('statesService', function($http) {  
  this.getStates = function(callback) {
    //$http.get('states.json').success(callback);
    $http.get('http://www.json-generator.com/api/json/get/caQLTOwkHS?indent=2').success(callback);
  };
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceApp.controller('controllerEp09', function($scope, statesService) {

  $scope.filtro = "";

  statesService.getStates(function(data){
    $scope.states = data;
  });

});