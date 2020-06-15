angularjsApp.controller('FormElementsCtrl', ['$scope', function($scope) {
	$scope.countries = [
		{name:'Austria', code: "AT"},
		{name:'France', code: "FR"},
		{name:'Germany', code:'DE'},
		{name:'Luxembourg', code: "LU"},
		{name:'Switzerland', code: "CH"}
	  ];
	const initData = {
		email: '',
		pass: '',
		subscribed: false,
		country: $scope.countries[2]
	};
	$scope.user = { ...initData };
	$scope.submit = (e) => {
		// default behavior is prevented implicitly by AngularJS
		processData($scope.user);
		resetForm($scope);
	}
	processData = (data) => {
		// data processing
		console.log("Processing user data: " + JSON.stringify(data));
	}
	resetForm = () => {
		$scope.user = { ...initData };
	}
}]);


angularjsApp.factory('formElementsData', function() {
const data = {
    section: {
    layer: "I. Deklaratives Rendern mit Angular", 
    group: "1.1. Darstellung",
    spec: "1.1.3. Definition von UI-Elementen"
    },
    article: {
    title:"form und interaktive Elemente",
    codeSnippets: [{
        name:"controller.js",
        lang:"js",
        code:
`app.controller('FormElementsCtrl', ['$scope', function($scope) {
  $scope.countries = [
    {name:'Austria', code: "AT"},
    {name:'France', code: "FR"},
    {name:'Germany', code:'DE'},
    {name:'Luxembourg', code: "LU"},
    {name:'Switzerland', code: "CH"}
  ];
  const initData = {
    email: '',
    pass: '',
    subscribed: false,
    country: $scope.countries[2]
  };
  $scope.user = { ...initData };
  $scope.submit = (e) => {
    // default behavior is prevented implicitly by AngularJS
    processData($scope.user);
    resetForm($scope);
  }
  processData = (data) => {
    // data processing
    console.log("Processing user data: " + JSON.stringify(data));
  }
  resetForm = () => {
    $scope.user = { ...initData };
  }
}]);`
    },
    {
        name:"index.html",
        lang:"html",
        code:
`<form novalidate ng-submit="submit()" name="NgFormCtrl" ng-controller="FormElementsCtrl">
<div class="form-group">
  <label for="userEmail">Email address</label>
  <input type="email" name="emailInput" ng-model="user.email" class="form-control" id="userEmail" placeholder="Email">
  <p class="help-block" ng-bind="'You have entered: ' + user.email"></p>
</div>
<div class="form-group">
  <label for="userPassword">Password</label>
  <input type="password" name="passwordInput" ng-model="user.pass" class="form-control" id="userPassword"
    placeholder="Password">
  <p class="help-block" ng-bind="'Your password is: ' + user.pass"></p>
</div>
<div class="form-group">
  <label for="userCountry">Country</label>
  <select class="form-control" name="select" id="userCountry" ng-model="user.country"
    ng-options="country.name for country in countries">
  </select>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox" name="checkboxInput" ng-model="user.subscribed"> Subscribe to our E-mails
  </label>
  <p class="help-block" ng-if="user.subscribed">You have been successfully subscribed</p>
  <p class="help-block" ng-if="!user.subscribed">Not subscribed</p>
</div>
<input id="submit" name="submitBtn" type="submit" class="btn btn-default" value="Submit">
</form>`
    }],
        templateUrl: 'angularjs/declarativeRendering/presentation/uiElements/formElements/form.html',
        reactLink: "react-formundinteraktiveElemente"
    }
};
    return function() {
    return data;
    };
});