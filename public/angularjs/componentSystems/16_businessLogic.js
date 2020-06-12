const DetectionLevel = {
  REFERENCE: 1,
  COLLECTION: 2,
  VALUE: 3
}
angularjsApp.controller('BusinessLogicCtrl', function($scope, $document) {
  // watch by reference
  $scope.$watch("users", (newVal, oldVal) => {
    if($scope.detectionLevel === DetectionLevel.REFERENCE) {
      $scope.msg = ">>>>> Change of data detected with $scope.$watch: >>>>>\n";
      $scope.msg += "Property $scope.users \n";
      $scope.msg += "   was: " + JSON.stringify(oldVal) + "; \n";
      $scope.msg += "   has become: " + JSON.stringify(newVal) + "\n";
    }
  });
  // watch collection contents
  $scope.$watchCollection("users", (newVal, oldVal) => {
    if($scope.detectionLevel === DetectionLevel.COLLECTION) {
      $scope.msg = ">>>>> Change of data detected with $scope.$watchCollection: >>>>>\n";
      $scope.msg += "Property $scope.users \n";
      $scope.msg += "   was: " + JSON.stringify(oldVal) + "; \n";
      $scope.msg += "   has become: " + JSON.stringify(newVal) + "\n";
    }
  });
  // watch all contents
  $scope.$watch("users", (newVal, oldVal) => {
    if($scope.detectionLevel === DetectionLevel.VALUE) {
      $scope.msg = ">>>>> Change of data detected with $scope.$watch(..., true): >>>>>\n";
      $scope.msg += "Property $scope.users \n";
      $scope.msg += "   was: " + JSON.stringify(oldVal) + "; \n";
      $scope.msg += "   has become: " + JSON.stringify(newVal) + "\n";
    }
  }, true);
  initProfile = () => { 
    return [
      {id: "100", name: 'Alice', score: 250},
      {id: "110", name: 'Alan', score: 320},
      {id: "120", name: 'Rian', score: 283}
   ];
  };
  $scope.users = initProfile();
  $scope.detectionLevel = DetectionLevel.REFERENCE;
  $scope.msg = "No Data Changes were detected";
  $scope.onReinit = () => {
    $scope.users = initProfile();
  }
  $scope.onClear = () => {
    $scope.users = [];
  };
  $scope.onDelete = (profile) => {
    for(const index in $scope.users) {
      if($scope.users[index].id === profile.id) {
        $scope.users.splice(index, 1);
      }
    }
  };
  getNewId = () => {
    const lastId = ($scope.users.length > 0) 
          ? $scope.users[$scope.users.length - 1].id
          : 200;
    return lastId + 1;
  }
  $scope.addProfile = () => {
    if($scope.newUser && $scope.newUser.name.length > 0 && $scope.newUser.score) {
      try {
        const score = parseInt($scope.newUser.score, 10);
        const id = getNewId();
        $scope.users.push({id: id, name: $scope.newUser.name, score: score});
        $scope.newUser = {};
      } catch (e) {
        console.error(e);
      }
      
    }
  }
  onExternalInsertion = () => {
    const ch = $document.find("#profileList").children(); 
    if($scope.users.length < ch.length) {
      angular.forEach(ch, (val, index, arr) => {
        const isExternal = val.classList.contains("external");
        if(isExternal) {
          const name = val.querySelector("strong").textContent;
          const score = val.querySelector("input").value;
          const id = getNewId();
          arr[index].remove();
          $scope.users.push({id:id, name:name, score:score});
        }
      })
    }
  }
  addNewProfileManually = () => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "external");
    const span = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = "External User";
    span.append(strong);
    li.append(span);
    const button=document.createElement("button");
    button.classList.add("pull-right");
    button.textContent = "Delete";
    li.append(button);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "234");
    input.classList.add("pull-right");
    input.style = "margin:0 10px";
    li.append(input);
    const score = document.createElement("strong");
    score.textContent = "Score: ";
    score.classList.add("pull-right");
    li.append(score);
    document.querySelector("#profileList").append(li);
    $scope.$apply(onExternalInsertion);
  }
});

angularjsApp.directive('profiler', function($document){
  return {
    restrict: "E",
    controller:'BusinessLogicCtrl',
    link: function(scope, el, attr) {
      const btn = document.querySelector("#externalInsertBtn");
      btn.addEventListener("click", addNewProfileManually);
    },
    templateUrl: "angularjs/componentSystems/profiler.html",
  }
});

angularjsApp.factory('businessLogicData', function() {
  const data = {
      section: {
      layer: "Komponenten-Systeme mit Angular", 
      group: "UI-Geschäftslogik",
      spec: "Anbindung der Logik in Reaktion auf Datenänderung bzw. UI-Ereignisse"
      },
      article: {
      title:"$watch und $apply",
      codeSnippets: [{
          name:"controller.js",
          lang:"js",
          code:
  ``
      },
      {
          name:"index.html",
          lang:"html",
          code:
  ``
    }],
          templateUrl: 'angularjs/componentSystems/businesslogic.html',
          reactLink: "react-Alternativefür$watchund$apply"
      }
  };
      return function() {
      return data;
      };
  });