angularjsApp.controller('CustomDirectiveDataBindingCtrl', function ($scope) {
  $scope.value = "External Scope Value";
});

angularjsApp.directive('dirWithoutScope', function () {
  return {
    restrict: "E",
    scope: false,
    template: '<p><strong>Value in child Directive without Scope: </strong><span ng-bind="value"></span></p>'
  }
});

angularjsApp.directive('dirWithScope', function () {
  return {
    restrict: "E",
    scope: true,
    controllerAs: "ctrl",
    bindToController: {
      controllerBinding: "="
    },
    controller: function ($scope) {
      $scope.ctrl.value = "Value in child Directive with Scope";
    },
    template:
      `<p>
				<strong>External Value in child Directive with Scope: </strong>
				<span ng-bind="value"></span>
			</p>
			<p>
				<strong>Internal Value in child Directive with Scope: </strong>
				<span ng-bind="ctrl.value"></span>
			</p>
			<p>
				<strong>BindToController Value in child Directive with Scope : </strong>
				<span ng-bind="ctrl.controllerBinding"></span>
			</p>`
  };
});


angularjsApp.directive('isolatedScopeDir', function () {
  return {
    restrict: "E",
    scope: {
      external: "="
    },
    bindToController: {
      controllerBinding: "="
    },
    controllerAs: "ctrl",
    controller: function ($scope) {
      $scope.value = "Value in child Directive with isolated Scope"
    },
    template:
      `<p>
        <strong>External Value in child Directive with isolated Scope: </strong>
				<span ng-bind="external"></span>
			</p>
			<p>
				<strong>Internal Value in child Directive with isolated Scope: </strong>
				<span ng-bind="value"></span>
			</p>
			<p>
				<strong>BindToController Value in child Directive with isolated Scope: </strong>
				<span ng-bind="ctrl.controllerBinding"></span>
			</p>`
  }
});

// using ng-transclude
angularjsApp.directive('dirWithNgTransclusion', function () {
  return {
    restrict: "E",
    transclude: true,
    template:
      `<p>
        <span><strong>Content of Directive with ng-transclusion: </strong></span>
        <span>Directive's internal content</span>
      </p>
      <p>
        <span><strong>With ng-transclude transcluded content: </strong></span>
        <span ng-transclude></span> 
			</p>`
  }
});
// using link() function
angularjsApp.directive('dirWithLinkTransclusion', function () {
  return {
    restrict: "E",
    transclude: true,
    template:
      `<p>
        <span><strong>Content of Directive with link Transclusion: </strong></span>
        <span>Directive's internal content</span>
        </p>
			<p>
				<span><strong>With link() transcluded content: </strong></span>
				<span class="placeholder"></span> 
			</p>`,
    link: function (scope, el, attr, ctrl, transcludeFn) {
      const contentToTransclude = transcludeFn();
      const placeholder = el.find(".placeholder");
      placeholder.append(contentToTransclude);
    }
  }
});


angularjsApp.factory('customDirectiveDataBindingData', function () {
  const data = {
    section: {
      layer: "Deklaratives Rendern mit Angular",
      group: "Benutzerdefinierte Direktiven",
      spec: "Datenbindung"
    },
    article: {
      title: "Datenbindung in benutzerdefinierten Direktiven",
      codeSnippets: [{
        name: "withoutScope.js",
        lang: "js",
        code:
`angularjsApp.directive('dirWithoutScope', function () {
  return {
    restrict: "E",
    scope: false,
    template: '<p><strong>Value in child Directive without Scope: </strong><span ng-bind="value"></span></p>'
  }
});`
      },{
        name: "withScope.js",
        lang: "js",
        code:
`angularjsApp.directive('dirWithScope', function () {
  return {
    restrict: "E",
    scope: true,
    controllerAs: "ctrl",
    bindToController: {
      controllerBinding: "="
    },
    controller: function ($scope) {
      $scope.ctrl.value = "Value in child Directive with Scope";
    },
    template:
      '<p>
        <strong>External Value in child Directive with Scope: </strong>
        <span ng-bind="value"></span>
      </p>
      <p>
        <strong>Internal Value in child Directive with Scope: </strong>
        <span ng-bind="ctrl.value"></span>
      </p>
      <p>
        <strong>BindToController Value in child Directive with Scope : </strong>
        <span ng-bind="ctrl.controllerBinding"></span>
      </p>'
  };
});`
      },{
        name: "isolatedScope.js",
        lang: "js",
        code:
`angularjsApp.directive('isolatedScopeDir', function () {
  return {
    restrict: "E",
    scope: {
      external: "="
    },
    bindToController: {
      controllerBinding: "="
    },
    controllerAs: "ctrl",
    controller: function ($scope) {
      $scope.value = "Value in child Directive with isolated Scope"
    },
    template:
      '<p>
        <strong>External Value in child Directive with isolated Scope: </strong>
        <span ng-bind="external"></span>
      </p>
      <p>
        <strong>Internal Value in child Directive with isolated Scope: </strong>
        <span ng-bind="value"></span>
      </p>
      <p>
        <strong>BindToController Value in child Directive with isolated Scope: </strong>
        <span ng-bind="ctrl.controllerBinding"></span>
      </p>'
  }
});`
      },{
        name: "ngTransclude.js",
        lang: "js",
        code:
`angularjsApp.directive('dirWithNgTransclusion', function () {
  return {
    restrict: "E",
    transclude: true,
    template:
      "<p>
        <span><strong>Content of Directive with ng-transclusion: </strong></span>
        <span>Directive's internal content</span>
      </p>
      <p>
        <span><strong>With ng-transclude transcluded content: </strong></span>
        <span ng-transclude></span> 
      </p>"
  }
});`
      },{
        name: "transcludeFn.js",
        lang: "js",
        code:
`angularjsApp.directive('dirWithLinkTransclusion', function () {
  return {
    restrict: "E",
    transclude: true,
    template:
      '<p>
        <span><strong>Content of Directive with link Transclusion: </strong></span>
        <span>Directive's internal content</span>
      </p>
      <p>
        <span><strong>With link() transcluded content: </strong></span>
        <span class="placeholder"></span> 
      </p>',
    link: function (scope, el, attr, ctrl, transcludeFn) {
      const contentToTransclude = transcludeFn();
      const placeholder = el.find(".placeholder");
      placeholder.append(contentToTransclude);
    }
  }
});`
      },{
        name: "index.html",
        lang: "html",
        code:
`<div ng-controller="CustomDirectiveDataBindingCtrl">
<p><strong>Value in External Scope: </strong><span ng-bind="value"></span></p>
<dir-without-scope></dir-without-scope>
<dir-with-scope controller-binding="value"></dir-with-scope>
<isolated-scope-dir external="value" controller-binding="value"></isolated-scope-dir>
</div>
<div>
<h5>Demonstration of transclusion:</h5>
<dir-with-ng-transclusion>
  Please, transclude this contetnt within a directive!
</dir-with-ng-transclusion>
<dir-with-link-transclusion>
  Please, transclude this contetnt within a directive!
</dir-with-link-transclusion>
</div>`
      }],
      templateUrl: 'angularjs/declarativeRendering/customDirectives/databinding/databinding.html',
      reactLink: "react-DatenbindunginbenutzerdefiniertenDirektiven"
    }
  };
  return function () {
    return data;
  };
});