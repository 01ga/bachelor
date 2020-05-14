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
    layer: "Deklaratives Rendern mit Angular", 
    group: "Darstellung",
    spec: "Definition von UI-Elementen"
    },
    article: {
    title:"form und interaktive Elemente",
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
    },
    {
        name:"styles.css",
        lang:"css",
        code:
``
    }],
        templateUrl: 'angularjs/declarativeRendering/presentation/uiElements/formElements/form.html',
        reactLink: "react-formundinteraktiveElemente"
    }
};
    return function() {
    return data;
    };
});