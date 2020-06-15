angularjsApp.controller('TextFilterCtrl', function ($scope, $filter) {
  $scope.originalText = 'Sample Text';
  $scope.filteredText = $filter('uppercase')($scope.originalText);
  $scope.originalNumber = 123456789;
});


angularjsApp.factory('textFilterData', function () {
  const data = {
    section: {
      layer: "I. Deklaratives Rendern mit Angular",
      group: "1.2. Darstellungsbedingungen",
      spec: "1.2.3. Text-Filter"
    },
    article: {
      title: "{{'string' | filtername: args}}",
      codeSnippets: [{
        name: "controller.js",
        lang: "js",
        code:
`app.controller('TextFilterCtrl', function ($scope, $filter) {
  $scope.originalText = 'Sample Text';
  $scope.filteredText = $filter('uppercase')($scope.originalText);
  $scope.originalNumber = 123456789;
});`
      },
      {
        name: "index.html",
        lang: "html",
        code:
`<div ng-controller="TextFilterCtrl">
<blockquote>
  <p>{{ originalText }}</p>
  <footer>Original text</footer>
  <br />
  <p>{{ filteredText }}</p>
  <footer>Text after applience of <cite>upprecase</cite> filter</footer>
</blockquote>
<blockquote>
  <p>{{ originalNumber }}</p>
  <footer>Original Number</footer>
  <br />
  <p>{{ originalNumber | currency }}</p>
  <footer>Number after applience of <cite>currency</cite> filter</footer>
</blockquote>
</div>`
      }],
      templateUrl: 'angularjs/declarativeRendering/presentationConstraints/textFilters/textfilter.html',
      reactLink: undefined
    }
  };
  return function () {
    return data;
  };
});