
angularjsApp.controller(
  'AppCtrl', 
  function($scope, $location, $anchorScroll, dataService) {

  $scope.data = dataService.data();

  // tab navigation for code examples
  $scope.createUIId = (name) => { return "ang-" + name.replace(/\s/g,'') }
  $scope.select = (tab) => { $scope.selected = tab; }
  $scope.isActive = (tab) => $scope.selected === tab;

  // scroll page to specified id
  $scope.scrollTo = id => {
    $location.hash(id);
    $anchorScroll.yOffset = 220;
    $anchorScroll();
 }

 // Demonstration
 $scope.hasTemplate = (article) => {
  return article.templateUrl !== undefined;
}

  // to React Version Btn
  $scope.hasReactAlternative = (article) => {
    return article.reactLink !== undefined;
  }
});

angularjsApp.directive('page', function() {
  return {
    restrict:"E",
    scope: {},
    bindToController: {
    },
    controller: "AppCtrl",
    controllerAs: "ctrl",
    templateUrl: 'angularjs/core/templates/app.html'
  };
});

angularjsApp.directive('angArticle', function() {
  return {
    restrict:"E",
    scope: {
      article: "="
    },
    controller: "AppCtrl",
    templateUrl: 'angularjs/core/templates/article.html'
  };
});

