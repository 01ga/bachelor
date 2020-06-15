angularjsApp.controller('NgClassCtrl', ['$scope', function($scope) {
    $scope.dataList = [
        { itemText: "Kleingeschriebener Text", itemClass: "text-lowercase" },
        { itemText: "Großgeschriebener Text", itemClass: "text-uppercase" },
        { itemText: "Die ersten Buchstaben großgeschrieben", itemClass: "text-capitalize" }
    ];
}]);

angularjsApp.factory('ngClassData', function() {
const data = {
    section: {
    layer: "I. Deklaratives Rendern mit Angular", 
    group: "1.1. Darstellung",
    spec: "1.1.2. Gestaltung"
    },
    article: {
    title:"ngClass",
    codeSnippets: [{
        name:"controller.js",
        lang:"js",
        code:
`app.controller('NgClassCtrl', ['$scope', function($scope) {
  $scope.dataList = [
      { itemText: "Kleingeschriebener Text", itemClass: "text-lowercase" },
      { itemText: "Großgeschriebener Text", itemClass: "text-uppercase" },
      { itemText: "Die ersten Buchstaben großgeschrieben", itemClass: "text-capitalize" }
  ];
}]);`
    },
    {
        name:"index.html",
        lang:"html",
        code:
`<div ng-controller="NgClassCtrl">
<blockquote>
  <p ng-repeat="item in dataList track by item.itemText" ng-class="item.itemClass" ng-class-odd="'thumbnail'"
    ng-class-even="'green'" ng-bind="item.itemText">
  </p>
</blockquote>
</div>`
    },
    {
        name:"styles.css",
        lang:"css",
        code:
`.thumbnail {
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
}
.green {
    color: green;
}`
    }],
        templateUrl: 'angularjs/declarativeRendering/presentation/styling/ngClass/ngclass.html',
        reactLink: "react-AlternativefürngClass"
    }
};
    return function() {
    return data;
    };
});