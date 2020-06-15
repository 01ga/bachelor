angularjsApp.controller('UserInteractionsCtrl', function ($scope) {
  $scope.onClick = () => $scope.value++;
  $scope.value = 1;
});


angularjsApp.factory('userInteractionsData', function () {
  const data = {
    section: {
      layer: "I. Deklaratives Rendern mit Angular",
      group: "1.3. Verhalten",
      spec: "1.3.1. Bearbeitung von Benutzer-Interaktionen"
    },
    article: {
      title: "Event Listeners",
      codeSnippets: [{
        name: "controller.js",
        lang: "js",
        code:
`App.controller('UserInteractionsCtrl', function ($scope) {
  $scope.onClick = () => $scope.value++;
  $scope.value = 1;
});`
      },
      {
        name: "index.html",
        lang: "html",
        code:
`<div ng-controller="UserInteractionsCtrl">
<p class="lead">Score: <span class="badge">{{value}}</span></p>
<button class="btn btn-default" ng-click="onClick()">Increment</button>
<button class="btn btn-default" ng-click="value=value-1">Decrement</button>
</div>`
      }],
      templateUrl: 'angularjs/declarativeRendering/behavior/userinteractions.html',
      reactLink: "react-EventListeners"
    }
  };
  return function () {
    return data;
  };
});