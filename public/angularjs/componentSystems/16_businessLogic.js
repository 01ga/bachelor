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
      layer: "II. Komponenten-Systeme mit Angular", 
      group: "2.1. UI-Geschäftslogik",
      spec: "2.1.1. Anbindung der Logik in Reaktion auf Datenänderung bzw. UI-Ereignisse"
      },
      article: {
      title:"$watch und $apply",
      codeSnippets: [{
          name:"controller.js",
          lang:"js",
          code:
`const DetectionLevel = {
  REFERENCE: 1,
  COLLECTION: 2,
  VALUE: 3
};

app.controller('BusinessLogicCtrl', function($scope, $document) {
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
});`
      },
      {
        name:"profilerDir.js",
        lang:"js",
        code:
`app.directive('profiler', function($document){
  return {
    restrict: "E",
    controller:'BusinessLogicCtrl',
    link: function(scope, el, attr) {
      const btn = document.querySelector("#externalInsertBtn");
      btn.addEventListener("click", addNewProfileManually);
    },
    templateUrl: "./profiler.html",
  }
});`
      },
      {
          name:"index.html",
          lang:"html",
          code:
`<div ng-controller="BusinessLogicCtrl">
  <h6>Console Output:</h6>
  <pre style="min-height:90px"><code ng-bind="msg"></code></pre>
  <profiler></profiler>
  <h6>Create new Profile: </h6>
  <p>
    <strong>User Name: </strong>
    <input type="text" class="form-control" ng-model="newUser.name"/>
  </p>
  <p>
    <strong>Score: </strong>
    <input type="text" class="form-control" ng-model="newUser.score"/>
  </p>
  <button class="btn btn-success" ng-click="addProfile()">Add Profile</button>
</div>`
    },
    {
        name:"profiler.html",
        lang:"html",
        code:
`<div>
<h6>Active change detection mode: </h6>
<span class="radio-inline">
  <label>
    <input type="radio" ng-model="detectionLevel" ng-value="1">
    By Reference
  </label>
</span>
<span class="radio-inline">
  <label>
    <input type="radio" ng-model="detectionLevel" ng-value="2">
    By Collection
  </label>
</span>
<span class="radio-inline">
  <label>
    <input type="radio" ng-model="detectionLevel" ng-value="3">
    By Value
  </label>
</span>
</div>
<br/>
<button class="btn btn-info" ng-click="onClear()">Clear Profiler</button>
<button class="btn btn-info" ng-click="onReinit()">Reinit Profiler</button>
<button id="externalInsertBtn" class="btn btn-warning pull-right">Insert External Profile</button>
<br/>
<ul class="list-group" id="profileList">
<li class="list-group-item" ng-repeat="profile in users track by $index">
  <span><strong ng-bind="profile.name"> </strong></span>
  <button class="pull-right" ng-click="onDelete(profile)">Delete</button>
  <input type="text" style="margin:0 10px" class="pull-right" ng-model="profile.score"/>
  <strong class="pull-right">Score: </strong>
</li>
</ul>`
  }],
          templateUrl: 'angularjs/componentSystems/businesslogic.html',
          reactLink: "react-Alternativefür$watchund$apply"
      }
  };
      return function() {
      return data;
      };
  });