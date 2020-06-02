angularjsApp.controller('InterrelationsCtrl', function ($scope) {

});

angularjsApp.directive('calculateDir', function () {
  const Opreations = {
    ADD: "add",
    SUBTRACT: "subtr",
    MULTIPLY: "mult",
    DIVIDE: "div"
  }
  return {
    restrict: "E",
    scope: {},
    controllerAs: "ctrl",
    controller: function ($scope) {
      this.addResScope = (scope) => {
        this.resultScope = scope;
        this.resultScope.result = 0;
      }
      this.calculate = (operation) => {
        const arg1 = parseInt($scope.arg1, 10);
        const arg2 = parseInt($scope.arg2, 10);
        switch (operation) {
          case Opreations.ADD:
            this.resultScope.result = arg1 + arg2;
            break;
          case Opreations.SUBTRACT:
            this.resultScope.result = arg1 - arg2;
            break;
          case Opreations.MULTIPLY:
            this.resultScope.result = arg1 * arg2;
            break;
          case Opreations.DIVIDE:
            (arg2 === 0)
              ? alert("No Division by 0")
              : this.resultScope.result = arg1 / arg2;
            break;
          default:
            throw Error("Unnown Operation: " + operation);
        }
      }
      $scope.arg1 = 0;
      $scope.arg2 = 0;
      $scope.operation = Opreations.ADD;
    },
    template:
      `<p>
				<strong>First Argument: </strong>
				<input type="text" ng-model="arg1"/>
			</p>
			<p>
				<strong>Second Argument: </strong>
				<input type="text" ng-model="arg2"/>
			</p>
			<p>
				<strong>Select operation: </strong>
				<p>
					<button ng-click="ctrl.calculate('add')">ADD</button>
					<button ng-click="ctrl.calculate('subtr')">SUBTRACT</button>
					<button ng-click="ctrl.calculate('mult')">MULTIPLY</button>
					<button ng-click="ctrl.calculate('div')">DIVIDE</button>
				</p>
				<display-result-dir></display-result-dir>
			</p>`
  }
});

angularjsApp.directive('displayResultDir', function () {
  return {
    restrict: "E",
    scope: {},
    require: "^calculateDir",
    link: function (scope, el, attr, calcCtrl) {
      calcCtrl.addResScope(scope);
    },
    template:
      `<p>
				<strong>Result: </strong>
				<span ng-bind="result"/>
			</p>`
  }
});


angularjsApp.factory('interrelationsData', function () {
  const data = {
    section: {
      layer: "Deklaratives Rendern mit Angular",
      group: "Benutzerdefinierte Direktiven",
      spec: "Interrelations"
    },
    article: {
      title: "Interrelations",
      codeSnippets: [{
        name: "calculateDir.js",
        lang: "js",
        code:
`angularjsApp.directive('calculateDir', function () {
  const Opreations = {
    ADD: "add",
    SUBTRACT: "subtr",
    MULTIPLY: "mult",
    DIVIDE: "div"
  }
  return {
    restrict: "E",
    scope: {},
    controllerAs: "ctrl",
    controller: function ($scope) {
      this.addResScope = (scope) => {
        this.resultScope = scope;
        this.resultScope.result = 0;
      }
      this.calculate = (operation) => {
        const arg1 = parseInt($scope.arg1, 10);
        const arg2 = parseInt($scope.arg2, 10);
        switch (operation) {
          case Opreations.ADD:
            this.resultScope.result = arg1 + arg2;
            break;
          case Opreations.SUBTRACT:
            this.resultScope.result = arg1 - arg2;
            break;
          case Opreations.MULTIPLY:
            this.resultScope.result = arg1 * arg2;
            break;
          case Opreations.DIVIDE:
            (arg2 === 0)
              ? alert("No Division by 0")
              : this.resultScope.result = arg1 / arg2;
            break;
          default:
            throw Error("Unnown Operation: " + operation);
        }
      }
      $scope.arg1 = 0;
      $scope.arg2 = 0;
      $scope.operation = Opreations.ADD;
    },
    template: "./calculate.html"
  }
});`
      },
      {
        name: "calculate.html",
        lang: "html",
        code:
          `<p>
<strong>First Argument: </strong>
<input type="text" ng-model="arg1"/>
</p>
<p>
<strong>Second Argument: </strong>
<input type="text" ng-model="arg2"/>
</p>
<p>
<strong>Select operation: </strong>
<p>
  <button ng-click="ctrl.calculate('add')">ADD</button>
  <button ng-click="ctrl.calculate('subtr')">SUBTRACT</button>
  <button ng-click="ctrl.calculate('mult')">MULTIPLY</button>
  <button ng-click="ctrl.calculate('div')">DIVIDE</button>
</p>
<display-result-dir></display-result-dir>
</p>`
      }, {
        name: "resultDir.js",
        lang: "js",
        code:
          `angularjsApp.directive('displayResultDir', function() {
  return {
    restrict: "E",
    scope: {},
    require: "^calculateDir",
    link: function(scope, el, attr, calcCtrl) {
      calcCtrl.addResScope(scope);
    },
    template: "./result.html"
  }
});`
      }, {
        name: "result.html",
        lang: "html",
        code:
          `<p>
<strong>Result: </strong>
<span ng-bind="result"/>
</p>`
      }
      ],
      templateUrl: 'angularjs/declarativeRendering/customDirectives/interrelations/interrelations.html',
      reactLink: "react-Interrelations"
    }
  };
  return function () {
    return data;
  };
});