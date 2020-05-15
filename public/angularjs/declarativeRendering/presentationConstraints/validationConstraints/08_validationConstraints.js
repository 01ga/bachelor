angularjsApp.controller('ValidationConstraintsCtrl', ['$scope', function($scope) {
	$scope.fealdValidation = {
		required: true,
		minLength: 8,
		pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
		maxLength: 12
	 };
	 $scope.password = '';
}]);


angularjsApp.factory('validationConstraintsData', function() {
const data = {
    section: {
    layer: "Deklaratives Rendern mit Angular", 
    group: "Darstellungsbedingungen",
    spec: "Validierungsbedingungen"
    },
    article: {
    title:"ngMaxlength ngMinLength ngPattern ngRequired",
    codeSnippets: [{
        name:"controller.js",
        lang:"js",
        code:
`angularjsApp.controller('ValidationConstraintsCtrl', ['$scope', function($scope) {
	$scope.fealdValidation = {
		required: true,
		minLength: 8,
		pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
		maxLength: 12
	 };
	 $scope.password = '';
}]);`
    },
    {
        name:"index.html",
        lang:"html",
        code:
`<div ng-controller="ValidationConstraintsCtrl">
<form name="form">
	<div class="checkbox">
		<label for="required">
			<input type="checkbox" ng-model="fealdValidation.required" id="required" />
			The next feald is required 
		</label>
	</div>
	<div class="form-group">
		<label class="control-label" for="inputPass">Pleas enter your password *</label>
		<input type="password" ng-model="password" 
			class="form-control" id="inputPass"
			name="inputPass"
			ng-required="fealdValidation.required"
			ng-maxlength="fealdValidation.maxLength"
			ng-minlength="fealdValidation.minLength"
			ng-pattern="fealdValidation.pattern"/>
		<p class="help-block red" ng-if="form.inputPass.$error.required">This feald is required</p>
		<p class="help-block red" ng-if="form.inputPass.$error.maxlength">Pssword is too long (max 12 char)</p>
		<p class="help-block red" ng-if="form.inputPass.$error.minlength">Password is too short (min 8 char)</p>
		<p class="help-block red" ng-if="form.inputPass.$error.pattern">
			Password should contain at least one digit, one lower case, one upper case and one sign
		</p>
	  </div>
  <h5>AngularJS internal properties of current password input:</h5>
  <p><pre><code>{{form.inputPass}}</code></pre></p>
</form>`
	},
	{
        name:"styles.js",
        lang:"css",
        code:
`input.ng-invalid { 
	border-color: #d9534f;
 }`
    }],
        templateUrl: 'angularjs/declarativeRendering/presentationConstraints/validationConstraints/valconstraints.html',
        reactLink: undefined
    }
};
    return function() {
    return data;
    };
});