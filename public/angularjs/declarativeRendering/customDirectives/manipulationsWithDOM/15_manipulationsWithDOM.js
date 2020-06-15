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
    layer: "I. Deklaratives Rendern mit Angular", 
    group: "1.5. Benutzerdefinierte Direktiven",
    spec: "1.5.4. Einbindung des Verhaltens und Aktualisieren von DOM"
    },
    article: {
    title:"link()",
    codeSnippets: [{
        name:"directive.js",
        lang:"js",
        code:
`angularjsApp.directive('draggableBlock', ['$document', function($document) {
  return {
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
}]);`
    },
    {
        name:"index.html",
        lang:"html",
        code:
`<div style="width: 250px; height: 250px; position:relative;">
  <div draggable-block class="btn btn-success">
    <span>DRAG ME!</span>
  </div>
</div>`
	}],
        templateUrl: 'angularjs/declarativeRendering/customDirectives/manipulationsWithDOM/dommanipulations.html',
        reactLink: "react-Alternativefürlink()"
    }
};
    return function() {
    return data;
    };
});