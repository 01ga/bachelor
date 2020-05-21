angularjsApp.controller('CustomDirectiveDataBindingCtrl', function($scope) {
	$scope.value = "External Scope Value";
});

angularjsApp.directive('dirWithoutScope', function() {
	return {
		restrict: "E",
		scope: false,
		template: `<p><strong>Value in child Directive without Scope: </strong><span ng-bind="value"></span></p>`
	}
});

angularjsApp.directive('dirWithScope', function() {
	return {
		restrict: "E",
		scope: true,
		controllerAs: "ctrl",
		bindToController: {
			controllerBinding:"="
		},
		controller: function($scope) {
			$scope.ctrl.value = "Value in child Directive with Scope";
		},
		template: 
			`<p>
				<strong>External Value in child Directive with Scope: </strong>
				<span ng-bind="value"></span>
			</p>
			<p>
				<strong>Internal Value in child Directive with Scope: </strong>
				<span ng-bind="ctrl.value"></span>
			</p>
			<p>
				<strong>BindToController Value in child Directive with Scope : </strong>
				<span ng-bind="ctrl.controllerBinding"></span>
			</p>`
	};
});


angularjsApp.directive('isolatedScopeDir', function() {
	return {
		restrict: "E",
		scope: {
			external: "="
		},
		bindToController: {
			controllerBinding:"="
		},
		controllerAs: "ctrl",
		controller: function($scope) {
			$scope.value = "Value in child Directive with isolated Scope"
		},
		template: 
			`<p>
				<strong>External Value in child Directive with isolated Scope: </strong>
				<span ng-bind="external"></span>
			</p>
			<p>
				<strong>Internal Value in child Directive with isolated Scope: </strong>
				<span ng-bind="value"></span>
			</p>
			<p>
				<strong>BindToController Value in child Directive with isolated Scope: </strong>
				<span ng-bind="ctrl.controllerBinding"></span>
			</p>`
	}
});

// using ng-transclude
angularjsApp.directive('dirWithNgTransclusion', function() {
	return {
		restrict: "E",
		transclude: true,
		template: 
			`<p>
				<span><strong>Content of Directive with ng-transclusion: </strong></span>
				<span>Directive's internal content</span>
			</p>
			<p>
				<span><strong>With ng-transclude transcluded content: </strong></span>
				<span ng-transclude></span> 
			</p>`
	}
});
// using link() function
angularjsApp.directive('dirWithLinkTransclusion', function() {
	return {
		restrict: "E",
		transclude: true,
		template: 
			`<p>
				<span><strong>Content of Directive with link Transclusion: </strong></span>
				<span>Directive's internal content</span>
			</p>
			<p>
				<span><strong>With link() transcluded content: </strong></span>
				<span class="placeholder"></span> 
			</p>`,
		link: function(scope, el, attr, ctrl, transcludeFn) {
			const contentToTransclude = transcludeFn();
			const placeholder = el.find(".placeholder");
			placeholder.append(contentToTransclude);
		}
	}
});


angularjsApp.factory('customDirectiveDataBindingData', function() {
const data = {
    section: {
    layer: "Deklaratives Rendern mit Angular", 
    group: "Benutzerdefinierte Direktiven",
    spec: "Datenbindung"
    },
    article: {
    title:"Datenbindung in benutzerdefinierten Direktiven",
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
        templateUrl: 'angularjs/declarativeRendering/customDirectives/databinding/databinding.html',
        reactLink: "react-DatenbindunginbenutzerdefiniertenDirektiven"
    }
};
    return function() {
    return data;
    };
});