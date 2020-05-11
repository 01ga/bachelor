const itemTypes = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger'
}

angularjsApp.controller('NgRepeatCtrl', ['$scope', function($scope) {
  $scope.itemFilter = "li";
  $scope.dataList = [
    { itemText: "Dapibus ac facilisis in", href: "#ang-ngRepeat", itemType: itemTypes.SUCCESS },
    { itemText: "Cras sit amet nibh libero", href: "#ang-ngRepeat", itemType: itemTypes.INFO },
    { itemText: "Porta ac consectetur ac", href: "#ang-ngRepeat", itemType: itemTypes.WARNING },
    { itemText:"Vestibulum at eros", href:"#ang-ngRepeat", itemType: itemTypes.DANGER }
  ];
}]);

angularjsApp.factory('ngRepeatData', function() {
  const data = {
    section: {
      layer: "Deklaratives Rendern mit Angular", 
      group: "Darstellung",
      spec: "Dynamisches Rendering"
    },
    article: {
      title:"ngRepeat",
      codeSnippets: [{
        name:"controller.js",
          lang:"js",
          code:
          `const itemTypes = {
            SUCCESS: 'success',
            INFO: 'info',
            WARNING: 'warning',
            DANGER: 'danger'
          }
          
          angularjsApp.controller('NgRepeatCtrl', ['$scope', function($scope) {
            $scope.itemFilter = "li";
            $scope.dataList = [
              { itemText: "Dapibus ac facilisis in", href: "#ang-ngRepeat", itemType: itemTypes.SUCCESS },
              { itemText: "Cras sit amet nibh libero", href: "#ang-ngRepeat", itemType: itemTypes.INFO },
              { itemText: "Porta ac consectetur ac", href: "#ang-ngRepeat", itemType: itemTypes.WARNING },
              { itemText:"Vestibulum at eros", href:"#ang-ngRepeat", itemType: itemTypes.DANGER }
            ];
          }]);`
      },
      {
        name:"index.html",
          lang:"html",
          code:
`<div ng-controller="NgRepeatCtrl">
  <div class="list-group">
    <a ng-repeat="item in dataList track by item.itemType+item.itemText"
      ng-class="$first ? 'hidden' :'list-group-item list-group-item-'+item.itemType" 
      ng-href="{{item.href}}" ng-bind="$index + ') ' +item.itemText">
    </a>
  </div>
</div>`
      }],
        templateUrl: 'angularjs/declarativeRendering/presentation/dynamicRendering/ngrepeat.html',
        reactLink: "react-ngRepeat"
    }
  };
    return function() {
      return data;
    };
  });