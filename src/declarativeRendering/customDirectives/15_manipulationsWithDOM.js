import React from 'react';
import { MigrationClass } from '../../core/migrationCheck';

export class DOMManipulations extends React.Component {
	constructor(props) {
		super(props) 
	}
	render() {
		return <DragbableBlock/>
	}
}

class DragbableBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				startX: 0, 
				startY: 0, 
				x: 120, 
				y: 120,
				dragging:false
			};
	}
	componentDidMount() {
		document.addEventListener('mousemove', (e)=> {
			const event = e;
			this.mousemove(event.pageX, event.pageY)
		});
		document.addEventListener('mouseup', (e) => {
			const event = e;
			this.mouseup(event);
		});
	}
	componentWillUnmount() {
		document.removeEventListener('mousemove', this.mousemove);
		document.removeEventListener('mouseup', this.mouseup);
	}
	mousemove = (pageX, pageY) => {
		if(this.state.dragging) {
			const y = pageY - this.state.startY;
			const x = pageX - this.state.startX;
			this.setState({x: x, y: y});
		}
	}
	mouseup = (e) => {
		this.setState({dragging: false})
	}
	getPosition = (event) => {
		// Prevent default dragging of selected content
		event.preventDefault();
		const startX = event.pageX - this.state.x;
		const startY = event.pageY - this.state.y;
		this.setState({
					startX: startX, 
					startY: startY,
					dragging: true
				});
	}
	render() {
		return (
			<div style={{width: '250px', 
				height: '250px', position: 'relative'}}>
				<div 
					draggable-block="true"
					style={{position:'relative', 
						top:this.state.y +'px', 
						left:this.state.x +'px'}}
					className="btn btn-success"
					onMouseDown={(e) => {
						const event = e; 
						this.getPosition(event)}}
				>
						<span>DRAG ME!</span>
				</div>
			</div>
		);
	}
}

const data = {
	section: {
		layer: "Deklaratives Rendern mit Angular", 
		group: "Benutzerdefinierte Direktiven",
		spec: "Einbindung des Verhaltens und Aktualisieren von DOM"
	},
	article: {
	  title:"DOM Manipulations",
	  codeSnippets: [{
		name:"code.js",
		  lang:"js",
		  code: 
`lass DragbableBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				startX: 0, 
				startY: 0, 
				x: 120, 
				y: 120,
				dragging:false
			};
	}
	componentDidMount() {
		document.addEventListener('mousemove', (e)=> {
			const event = e;
			this.mousemove(event.pageX, event.pageY)
		});
		document.addEventListener('mouseup', (e) => {
			const event = e;
			this.mouseup(event);
		});
	}
	componentWillUnmount() {
		document.removeEventListener('mousemove', this.mousemove);
		document.removeEventListener('mouseup', this.mouseup);
	}
	mousemove = (pageX, pageY) => {
		if(this.state.dragging) {
			const y = pageY - this.state.startY;
			const x = pageX - this.state.startX;
			this.setState({x: x, y: y});
		}
	}
	mouseup = (e) => {
		this.setState({dragging: false})
	}
	getPosition = (event) => {
		// Prevent default dragging of selected content
		event.preventDefault();
		const startX = event.pageX - this.state.x;
		const startY = event.pageY - this.state.y;
		this.setState({
					startX: startX, 
					startY: startY,
					dragging: true
				});
	}
	render() {
		return (
			<div style={{width: '250px', 
				height: '250px', position: 'relative'}}>
				<div 
					draggable-block="true"
					style={{position:'relative', 
						top:this.state.y +'px', 
						left:this.state.x +'px'}}
					className="btn btn-success"
					onMouseDown={(e) => {
						const event = e; 
						this.getPosition(event)}}
				>
						<span>DRAG ME!</span>
				</div>
			</div>
		);
	}
}`
	  }],
		result: <DOMManipulations/>,
		angularLink: "ang-DOMManipulations",
		migrationCheckData: {
		  info: [
			{
			  change: "Anhänden von Handler-Funktionen an DOM-Elemente",
			  ang: 
`// Direktive
...
link: function(scope, element, attr) {
  element.on("mousedown", (e)=>{...});
 $document.on("eventName", handlerFn);
}
`,
			  react:
`// Komponente
componentDidMount() {
  document.addEventListener(
    "eventName", handlerFn;
  );
}
componentWillUnmount() {
  document.removeEventListener(
    "eventName", handlerFn;
  );
}
...
render() {
  <div onMouseDown={(e) => {
      const event = e;
      ...
    }
  ></div>
}
`,
			  isMigrationConform: MigrationClass.YES
			}
		  ]
		} 
	}
  };
  
  export const DOMManipulationsModule =
  {
	module: DOMManipulations,
	data: data
  } 