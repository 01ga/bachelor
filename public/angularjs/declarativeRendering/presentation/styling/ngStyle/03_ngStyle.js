angularjsApp.controller('NgStyleCtrl', ['$scope', function($scope) {
    $scope.data = [
        {itemClass: "label label-default", itemText: "Default", additionalStyles: {'margin-right':'15px', 'padding': '4px', 'border-radius': '0px'}},
        {itemClass: "label label-primary", itemText: "Primary", additionalStyles: {'margin-right':'15px', 'padding': '8px', 'border-radius': '4px'}},
        {itemClass: "label label-success", itemText: "Success", additionalStyles: {'margin-right':'15px', 'padding': '12px', 'border-radius': '8px'}},
        {itemClass: "label label-info", itemText: "Info", additionalStyles: {'margin-right':'15px', 'padding': '16px', 'border-radius': '12px'}},
        {itemClass: "label label-warning", itemText: "Warning", additionalStyles: {'margin-right':'15px', 'padding': '20px', 'border-radius': '16px'}},
        {itemClass: "label label-danger", itemText: "Danger", additionalStyles: {'padding': '24px', 'border-radius': '20px'}}
    ]
}]);

angularjsApp.factory('ngStyleData', function() {
    const data = {
        section: {
        layer: "Deklaratives Rendern mit Angular", 
        group: "Darstellung",
        spec: "Gestaltung"
        },
        article: {
        title:"ngStyle",
        codeSnippets: [{
            name:"controller.js",
            lang:"js",
            code:
`angularjsApp.controller('NgStyleCtrl', ['$scope', function($scope) {
    $scope.data = [
        {itemClass: "label label-default", itemText: "Default", additionalStyles: {'margin-right':'15px', 'padding': '4px', 'border-radius': '0px'}},
        {itemClass: "label label-primary", itemText: "Primary", additionalStyles: {'margin-right':'15px', 'padding': '8px', 'border-radius': '4px'}},
        {itemClass: "label label-success", itemText: "Success", additionalStyles: {'margin-right':'15px', 'padding': '12px', 'border-radius': '8px'}},
        {itemClass: "label label-info", itemText: "Info", additionalStyles: {'margin-right':'15px', 'padding': '16px', 'border-radius': '12px'}},
        {itemClass: "label label-warning", itemText: "Warning", additionalStyles: {'margin-right':'15px', 'padding': '20px', 'border-radius': '16px'}},
        {itemClass: "label label-danger", itemText: "Danger", additionalStyles: {'padding': '24px', 'border-radius': '20px'}}
    ]
}]);`
        },
        {
            name:"index.html",
            lang:"html",
            code:
`<p ng-controller="NgStyleCtrl" 
ng-style=
    "{  'padding': '45px 15px',
        'margin': '20px 0',
        'border-color': '#e5e5e5 #eee #eee',
        'border-style': 'solid',
        'border-width': '1px',
        'border-radius': '4px',
        '-webkit-box-shadow':
            'inset 0 3px 6px rgba(0,0,0,.05)',
        'box-shadow':
            'inset 0 3px 6px rgba(0,0,0,.05)'
    }">
<span ng-repeat="item in data" 
    ng-class="item.itemClass"
    ng-style="item.additionalStyles"
    ng-bind="item.itemText">
</span>
</p>`
        }],
            templateUrl: 'angularjs/declarativeRendering/presentation/styling/ngStyle/ngstyle.html',
            reactLink: "react-ngStyle"
        }
    };
    return function() {
        return data;
    };
});