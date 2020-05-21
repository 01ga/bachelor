angularjsApp.controller('DOMManipulationsCtrl', function($scope) {
	
});

angularjsApp.directive('draggableBlock', ['$document', function($document) {
  return {
	tamplate: `<span>DRAG ME!</span>`,
    link: function(scope, element, attr) {
      let startX = 0, startY = 0, x = 120, y = 120;

      element.css({
		   position: 'relative',
		   top: y + "px",
		   left: x + "px"
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);

angularjsApp.factory('DOMManipulationsData', function() {
const data = {
    section: {
    layer: "Deklaratives Rendern mit Angular", 
    group: "Benutzerdefinierte Direktiven",
    spec: "Einbindung des Verhaltens und Aktualisieren von DOM"
    },
    article: {
    title:"DOM Manipulations",
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
        templateUrl: 'angularjs/declarativeRendering/customDirectives/manipulationsWithDOM/dommanipulations.html',
        reactLink: "react-DOMManipulations"
    }
};
    return function() {
    return data;
    };
});