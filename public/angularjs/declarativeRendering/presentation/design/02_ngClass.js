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
    layer: "Deklaratives Rendern mit Angular", 
    group: "Darstellung",
    spec: "Gestaltung"
    },
    article: {
    title:"ngClass",
    codeSnippets: [{
        name:"controller.js",
        lang:"js",
        code:
`angularjsApp.controller('NgClassCtrl', ['$scope', function($scope) {
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
   <p ng-repeat="item in dataList track by item.itemText"
        ng-class="item.itemClass"
        ng-classOdd="'thumbnail'"
        ng-classEven="'green'"
        ng-bind="item.itemText">
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
        templateUrl: 'angularjs/declarativeRendering/presentation/design/ngclass.html',
        reactLink: "react-ngClass"
    }
};
    return function() {
    return data;
    };
});