const Role = {
  HERO: 1,
  SUPERHERO: 2,
  MUSTER: 5
}

angularjsApp.controller('LifecycleHooksCtrl', ['$scope', '$element', function ($scope, $element) {
  $scope.ctrl.onProfilePage = true;
  $scope.ctrl.togglePage = (source) => {
    if (source === "profile" && !$scope.ctrl.onProfilePage) {
      $scope.ctrl.onProfilePage = !$scope.ctrl.onProfilePage;
      $scope.ctrl.historyTabClass = "";
      $scope.ctrl.profileTabClass = "active";
    }
    if (source === "history" && $scope.ctrl.onProfilePage) {
      $scope.ctrl.onProfilePage = !$scope.ctrl.onProfilePage;
      $scope.ctrl.profileTabClass = "";
      $scope.ctrl.historyTabClass = "active";
    }
  }
  this.setUserScoreCreationTime = (creationTime) => {
    // intercontroller comunication
    // reading some info from child controller
    // console.log("Instantiating userScore directive: " + creationTime.toLocaleString());
  }
  $scope.ctrl.decrementScore = () => {
    $scope.ctrl.data.history[0] = {
      date: new Date(),
      role: $scope.ctrl.data.history[0].role,
      score: $scope.ctrl.data.history[0].score - 1
    }
  }
  $scope.ctrl.incrementScore = () => {
    $scope.ctrl.data.history[0] = {
      date: new Date(),
      role: $scope.ctrl.data.history[0].role,
      score: $scope.ctrl.data.history[0].score + 1
    }
  }
  this.$onInit = () => {
    // fetch and initialize data
    $scope.ctrl.data = {
      user: "Oliver",
      history: [{
        date: new Date('December 10, 2019 07:03:00'),
        role: Role.SUPERHERO,
        score: 12
      }, {
        date: new Date('February 17, 2019 03:24:00'),
        role: Role.HERO,
        score: 150
      }, {
        date: new Date('July 25, 2019 09:19:00'),
        role: Role.MUSTER,
        score: 3
      }]
    };
    this.prevTimeOfScoreChange = $scope.ctrl.data.history[0].date;
  },
    this.$doCheck = () => {
      // detecting how much time has passed since
      // last score modifications
      if ($scope.ctrl.data.history[0].date !== this.prevTimeOfScoreChange) {
        const mlsecDiff = $scope.ctrl.data.history[0].date - this.prevTimeOfScoreChange;
        this.prevTimeOfScoreChange = $scope.ctrl.data.history[0].date;
        const minDiff = Math.round(mlsecDiff / 60000);
        if (minDiff > 1) {
          console.log("The last modification happened more than a minute ago");
        }
      }
    },
    this.$postLink = () => {
      $scope.ctrl.profileTabClass = "active";
      $element.append('</br><p>An Element appended to userProfile directive from $postLink hook</p>');
    }
}]);

angularjsApp.directive('userProfile', function () {
  return {
    restrict: "E",
    controller: "LifecycleHooksCtrl",
    templateUrl: "angularjs/declarativeRendering/customDirectives/lifecycleHooks/userprofile.html",
    controllerAs: "ctrl"
  }
})
angularjsApp.directive('userScore', function () {
  return {
    restrict: "E",
    templateUrl: "angularjs/declarativeRendering/customDirectives/lifecycleHooks/userscore.html",
    controllerAs: "childCtrl",
    bindToController: true,
    scope: {
      data: "<"
    },
    controller: function UserScoreCtrl($scope) {
      this.formatDate = (date) => date.toLocaleString();
      this.getRoleName = (role) => {
        switch (role) {
          case Role.HERO:
            return "Hero";
          case Role.SUPERHERO:
            return "Super-Hero";
          case Role.MUSTER:
            return "Muster";
          default:
            throw Error("Unnown Role Index: " + role);
        }
      }
      this.calculateScore = (basicScore, role) => {
        switch (role) {
          case Role.HERO:
            return basicScore;
          case Role.SUPERHERO:
            return basicScore * 10;
          case Role.MUSTER:
            return basicScore * 100;
          default:
            throw Error("Unnown Role Index: " + role);
        }
      }

      this.$onInit = () => {
        // (ii) intercontroller comunication
        // register behavior in parent ctrl
        $scope.$parent.ctrl.setUserScoreCreationTime(new Date());
      }
      this.$onChanges = (changeObj) => {
        // cloning data to prevent accedential mutation 
        // of parentCtrl data
        const { currentValue, previousValue } = { ...changeObj.data };
        if (changeObj.data.isFirstChange()) {
          // console.log("Initial data detected in onChanges")
        }
        $scope.childCtrl.date = currentValue.date.toLocaleString();
        $scope.childCtrl.role = this.getRoleName(currentValue.role);
        $scope.childCtrl.score =
          this.calculateScore(currentValue.score, currentValue.role);
      }
    }
  }
});

angularjsApp.directive('time', function ($interval) {
  return {
    restrict: "E",
    controller: function TimeCtrl($scope) {

      $scope.time = new Date().toLocaleString();

      this.updateTime = () => {
        $scope.time = new Date().toLocaleString();
      };

      this.timeoutId = $interval(() => {
        this.updateTime(); // update DOM
      }, 1000);

      this.$onDestroy = () => {
        $interval.cancel(this.timeoutId);
      }
    },
    scope: {},
    template: '<div ng-bind="time"></div>'
  }
});


angularjsApp.factory('lifecycleHooksData', function () {
  const data = {
    section: {
      layer: "Deklaratives Rendern mit Angular",
      group: "Benutzerdefinierte Direktiven",
      spec: "Lebenszyklus-Hooks"
    },
    article: {
      title: "Lebenszyklus-Hooks",
      codeSnippets: [{
        name: "controller.js",
        lang: "js",
        code:
`const Role = {
  HERO: 1,
  SUPERHERO: 2,
  MUSTER: 5
}

angularjsApp.controller('LifecycleHooksCtrl', ['$scope', '$element', function ($scope, $element) {
  $scope.ctrl.onProfilePage = true;
  $scope.ctrl.togglePage = (source) => {
    if (source === "profile" && !$scope.ctrl.onProfilePage) {
      $scope.ctrl.onProfilePage = !$scope.ctrl.onProfilePage;
      $scope.ctrl.historyTabClass = "";
      $scope.ctrl.profileTabClass = "active";
    }
    if (source === "history" && $scope.ctrl.onProfilePage) {
      $scope.ctrl.onProfilePage = !$scope.ctrl.onProfilePage;
      $scope.ctrl.profileTabClass = "";
      $scope.ctrl.historyTabClass = "active";
    }
  }
  this.setUserScoreCreationTime = (creationTime) => {
    // intercontroller comunication
    // reading some info from child controller
    // console.log("Instantiating userScore directive: " + creationTime.toLocaleString());
  }
  $scope.ctrl.decrementScore = () => {
    $scope.ctrl.data.history[0] = {
      date: new Date(),
      role: $scope.ctrl.data.history[0].role,
      score: $scope.ctrl.data.history[0].score - 1
    }
  }
  $scope.ctrl.incrementScore = () => {
    $scope.ctrl.data.history[0] = {
      date: new Date(),
      role: $scope.ctrl.data.history[0].role,
      score: $scope.ctrl.data.history[0].score + 1
    }
  }
  this.$onInit = () => {
    // fetch and initialize data
    $scope.ctrl.data = {
      user: "Oliver",
      history: [{
        date: new Date('December 10, 2019 07:03:00'),
        role: Role.SUPERHERO,
        score: 12
      }, {
        date: new Date('February 17, 2019 03:24:00'),
        role: Role.HERO,
        score: 150
      }, {
        date: new Date('July 25, 2019 09:19:00'),
        role: Role.MUSTER,
        score: 3
      }]
    };
    this.prevTimeOfScoreChange = $scope.ctrl.data.history[0].date;
  },
    this.$doCheck = () => {
      // detecting how much time has passed since
      // last score modifications
      if ($scope.ctrl.data.history[0].date !== this.prevTimeOfScoreChange) {
        const mlsecDiff = $scope.ctrl.data.history[0].date - this.prevTimeOfScoreChange;
        this.prevTimeOfScoreChange = $scope.ctrl.data.history[0].date;
        const minDiff = Math.round(mlsecDiff / 60000);
        if (minDiff > 1) {
          console.log("The last modification happened more than a minute ago");
        }
      }
    },
    this.$postLink = () => {
      $scope.ctrl.profileTabClass = "active";
      $element.append('<br/><p>An Element appended to userProfile directive from $postLink hook</p>');
    }
}]);`
      },{
        name: "profile.js",
        lang: "js",
        code:
`angularjsApp.directive('userProfile', function () {
  return {
    restrict: "E",
    controller: "LifecycleHooksCtrl",
    templateUrl: "./profile.html",
    controllerAs: "ctrl"
  }
})`
      },{
        name: "profile.html",
        lang: "html",
        code:
`<div>
<!--navigation-->
<div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default" ng-class="ctrl.profileTabClass"
      ng-click="ctrl.togglePage('profile')">Profile</button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default" ng-class="ctrl.historyTabClass"
      ng-click="ctrl.togglePage('history')">History</button>
  </div>
</div>
<!--User Profile-->
<div ng-if="ctrl.onProfilePage">
  </br>
  <p>
    <span><strong>Username: </strong></span>
    <span ng-bind="ctrl.data.user"></span>
    <ul class="list-group">
      <user-score data="ctrl.data.history[0]"></user-score>
    </ul>
  </p>
  <div>
    <p class="lead">Change Score: </p>
    <button class="btn btn-default" ng-click="ctrl.incrementScore() ">Increment</button>
    <span> </span>
    <button class="btn btn-default" ng-click="ctrl.decrementScore()">Decrement</button>
  </div>
</div>
<!--History-->
<div ng-if="!ctrl.onProfilePage">
  <ul class="list-group">
    <user-score ng-repeat="item in ctrl.data.history track by $index" data="item"></user-score>
  </ul>
</div>
</br>
<time></time>
</div>`
      },{
        name: "scope.js",
        lang: "js",
        code:
`angularjsApp.directive('userScore', function () {
  return {
    restrict: "E",
    templateUrl: "./score.html",
    controllerAs: "childCtrl",
    bindToController: true,
    scope: {
      data: "<"
    },
    controller: function UserScoreCtrl($scope) {
      this.formatDate = (date) => date.toLocaleString();
      this.getRoleName = (role) => {
        switch (role) {
          case Role.HERO:
            return "Hero";
          case Role.SUPERHERO:
            return "Super-Hero";
          case Role.MUSTER:
            return "Muster";
          default:
            throw Error("Unnown Role Index: " + role);
        }
      }
      this.calculateScore = (basicScore, role) => {
        switch (role) {
          case Role.HERO:
            return basicScore;
          case Role.SUPERHERO:
            return basicScore * 10;
          case Role.MUSTER:
            return basicScore * 100;
          default:
            throw Error("Unnown Role Index: " + role);
        }
      }

      this.$onInit = () => {
        // (ii) intercontroller comunication
        // register behavior in parent ctrl
        $scope.$parent.ctrl.setUserScoreCreationTime(new Date());
      }
      this.$onChanges = (changeObj) => {
        // cloning data to prevent accedential mutation 
        // of parentCtrl data
        const { currentValue, previousValue } = { ...changeObj.data };
        if (changeObj.data.isFirstChange()) {
          // console.log("Initial data detected in onChanges")
        }
        $scope.childCtrl.date = currentValue.date.toLocaleString();
        $scope.childCtrl.role = this.getRoleName(currentValue.role);
        $scope.childCtrl.score =
          this.calculateScore(currentValue.score, currentValue.role);
      }
    }
  }
});
`
      },
      {
        name: "score.html",
        lang: "html",
        code:
`<br/>
<li class="list-group-item">
  <span><strong>Date: </strong></span>
  <span class="pull-right" ng-bind="childCtrl.date"></span>
</li>
<li class="list-group-item">
  <span><strong>Role: </strong></span>
  <span class="pull-right" ng-bind="childCtrl.role"></span>
</li>
<li class="list-group-item">
  <span><strong>Score: </strong></span>
  <span class="badge" ng-bind="childCtrl.score"></span>
</li>`
      },
      {
        name: "time.js",
        lang: "js",
        code:
`angularjsApp.directive('time', function ($interval) {
  return {
    restrict: "E",
    controller: function TimeCtrl($scope) {

      $scope.time = new Date().toLocaleString();

      this.updateTime = () => {
        $scope.time = new Date().toLocaleString();
      };

      this.timeoutId = $interval(() => {
        this.updateTime(); // update DOM
      }, 1000);

      this.$onDestroy = () => {
        $interval.cancel(this.timeoutId);
      }
    },
    scope: {},
    template: '<div ng-bind="time"></div>'
  }
});`
      }],
      templateUrl: 'angularjs/declarativeRendering/customDirectives/lifecycleHooks/lifecyclehooks.html',
      reactLink: "react-Lebenszyklus-Hooks"
    }
  };
  return function () {
    return data;
  };
});