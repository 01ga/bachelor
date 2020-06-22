angularjsApp.controller('DataBindingCtrl', ['$scope', '$sce', function ($scope, $sce) {
  $scope.data = {
    text: "Simple Text",
    htmlText: $sce.trustAsHtml("<p>HTML Text <span class='badge'>YES</span></p>"),
    templateLink: "angularjs/declarativeRendering/databinding/sample.html"
  }
  $scope.badge = "YES"
}]);

angularjsApp.factory('dataBindingData', function () {
  const data = {
    section: {
      layer: "I. Deklaratives Rendern mit Angular",
      group: "1.4. Datenbindung",
      spec: `1.4.1. Datenbindung an UI-Elemente`
    },
    article: {
      title: "{{ }}, ngBind, ngBindHtml, ngBindTemplate, ngInclude",
      codeSnippets: [{
        name: "controller.js",
        lang: "js",
        code:
`app.controller('DataBindingCtrl', ['$scope', '$sce', function ($scope, $sce) {
  $scope.data = {
    text: "Simple Text",
    htmlText: $sce.trustAsHtml("<p>HTML Text <span class='badge'>YES</span></p>"),
    templateLink: "angularjs/declarativeRendering/databinding/sample.html"
  }
  $scope.badge = "YES"
}]);`
      },
      {
        name: "index.html",
        lang: "html",
        code:
`<div ng-controller="DataBindingCtrl"class="container">
	
<h6>ng-bind</h6>
<div>
  <p>Binds conten as a text:</p>
  <p>
    <span ng-bind="data.text"></span>
    <span class='badge'>YES</span>
  </p>
</div>

<h6>ng-bind-html</h6>
<div>
  <p>Binds and parses conten as html:</p>
  <p ng-bind-html="data.htmlText"></p>
</div>

<h6>ng-bind-template</h6>
<div>
  <p>Binds conten with one or more interpolations:</p>
  <p><span ng-bind-template="{{'Text with'}} {{'Bindings'}}"></span><span class='badge'>YES</span></p>
</div>

<h6>ng-include</h6>
<div>
  <p>Includes external html: </p>
  <p ng-include="data.templateLink"></p>
</div>

</div>
`
      },
      {
        name: "sample.html",
        lang: "html",
        code:
          `<p>HTML included as a template <span class='badge'>YES</span></p>`
      }],
      templateUrl: 'angularjs/declarativeRendering/databinding/databinding.html',
      reactLink: "react-Alternativefür{{}},ngBind,ngBindHtml,ngBindTemplate,ngInclude"
    }
  };
  return function () {
    return data;
  };
});