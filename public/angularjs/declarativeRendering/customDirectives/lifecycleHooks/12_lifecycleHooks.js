const Role = {
	HERO: 1,
	SUPERHERO: 2,
	MUSTER: 5
}

angularjsApp.controller('LifecycleHooksCtrl', ['$scope', '$element', function($scope, $element) {
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
		// (ii) intercontroller comunication
		// reading some info from child controller
		// console.log("Instantiating userScore directive: " + creationTime.toLocaleString());
	}
	$scope.ctrl.decrementScore = () => {
		$scope.ctrl.data.history[0] = {
			date: new Date(),
			role:  $scope.ctrl.data.history[0].role,
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
			history:  [{
				date: new Date('December 10, 2019 07:03:00'),
				role: Role.SUPERHERO,
				score: 12
			},{
				date: new Date('February 17, 2019 03:24:00'),
				role: Role.HERO,
				score: 150
			},{
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
		if($scope.ctrl.data.history[0].date !== this.prevTimeOfScoreChange) {
			const mlsecDiff = $scope.ctrl.data.history[0].date - this.prevTimeOfScoreChange;
			this.prevTimeOfScoreChange = $scope.ctrl.data.history[0].date;
			const minDiff = Math.round(mlsecDiff / 60000);
			if(minDiff > 1) {
				console.log("The last modification happened more than a minute ago");
			}
		}
	},
	this.$postLink = () => {
		$scope.ctrl.profileTabClass = "active";
		$element.append('</br><p>An Element appended to userProfile directive from $postLink hook</p>');
	}
}]);

angularjsApp.directive('userProfile', function() {
	return {
		restrict: "E",
		controller: "LifecycleHooksCtrl",
		templateUrl: "angularjs/declarativeRendering/customDirectives/lifecycleHooks/userprofile.html",
		controllerAs: "ctrl"
	}
})
angularjsApp.directive('userScore', function() {
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
				switch(role) {
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
				switch(role) {
					case Role.HERO:
						return basicScore;
					case Role.SUPERHERO:
						return basicScore*10;
					case Role.MUSTER:
						return basicScore*100;
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
				const {currentValue, previousValue} = { ...changeObj.data};
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

angularjsApp.directive('time', function($interval) {
	return {
		restrict: "E",
		controller: function TimeCtrl($scope) {

			$scope.time = new Date().toLocaleString();

			this.updateTime = () => {
				$scope.time =new Date().toLocaleString();
			};

			this.timeoutId = $interval(() => {
				this.updateTime(); // update DOM
			  }, 1000);

			this.$onDestroy = () => {
				$interval.cancel(this.timeoutId);
			}
		},
		scope: {},
		template: `<div ng-bind="time"></div>`
	}
});


angularjsApp.factory('lifecycleHooksData', function() {
const data = {
    section: {
    layer: "Deklaratives Rendern mit Angular", 
    group: "Benutzerdefinierte Direktiven",
    spec: "Lebenszyklus-Hooks"
    },
    article: {
    title:"Lebenszyklus-Hooks",
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
        templateUrl: 'angularjs/declarativeRendering/customDirectives/lifecycleHooks/lifecyclehooks.html',
        reactLink: "react-Lebenszyklus-Hooks"
    }
};
    return function() {
    return data;
    };
});