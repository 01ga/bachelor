import ngApp from "../../../angularjsApp";

ngApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
  }]);