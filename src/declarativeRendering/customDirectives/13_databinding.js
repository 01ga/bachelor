import React, { useRef, useEffect } from 'react';
import { MigrationClass } from '../../core/migrationCheck';

export class CustomDirectiveDataBinding extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value : "Parent Component Value"
		}  
	}
	render() {
		return (
			<>
			<div>
				<p>
					<strong>Value in Parent Component: </strong>
					<span>{this.state.value}</span>
				</p>
				<ChildComponentWithoutState
					value={this.state.value}
				/>
				<ChildComponentWithState
					value={this.state.value}
					componentProperty={this.state.value}
				/>
			</div>
			<div>
				<h5>Demonstration of 'Transclusion' Alternative:</h5>
				<TransclusionAlternative 
					content="Please, transclude this contetnt within this Component!"
				/>
				<NodeTransclusionAlternative
					content="Please, transclude this contetnt within this Component!"
				/>
			</div>
			</>
		)
	}
}
function ChildComponentWithoutState (props){
	return 	(
		<p>
			<strong>Value in child Component without State: </strong>
			<span>{props.value}</span>
		</p>
	);
}
class ChildComponentWithState extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: "Value in child Component with State",
		}
		this.componentProperty = props.componentProperty;
	}
	render() {
		return 	(
			<>
			<p>
				<strong>Parent Component Value in child Component with State: </strong>
				<span>{this.props.value}</span>
			</p>
			<p>
				<strong>Internal Value in child Component with State: </strong>
				<span>{this.state.value}</span>
			</p>
			<p>
				<strong>Component Property Value in child Component with State : </strong>
				<span>{this.componentProperty}</span>
			</p>
			</>
		);
	}
}

function TransclusionAlternative(props) {
	const contentToTransclude = props.content;
	return (
		<>
		<p>
			<span><strong>Content of Component with alternative to Transclusion: </strong></span>
			<span>Components's internal content</span>
		</p>
		<p>
			<span><strong>'Tanscluded' from props content: </strong></span>
			<span>{contentToTransclude}</span> 
		</p>
		</>
	)
}
function NodeTransclusionAlternative(props) {
	const ref = useRef(null);
	// read and append content value on every update
	useEffect(()=>{
		ref.current.append(props.content)
	}, [props.content]);

	return (
		<>
		<p>
			<span><strong>Component with appending of Content into DOM Node: </strong></span>
			<span>Component's internal content</span>
		</p>
		<p>
			<span><strong>Content 'transcluded' using Node Reference: </strong></span>
			<span ref={ref}></span> 
		</p>
		</>
	)
}

const data = {
	section: {
		layer: "Deklaratives Rendern mit Angular", 
		group: "Benutzerdefinierte Direktiven",
		spec: "Datenbindung"
	},
	article: {
	  title:"Datenbindung in benutzerdefinierten Direktiven",
	  codeSnippets: [{
		name:"parent.js",
		  lang:"js",
		  code: 
`class CustomDirectiveDataBinding extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value : "Parent Component Value"
		}  
	}
	render() {
		return (
			<>
			<div>
				<p>
					<strong>Value in Parent Component: </strong>
					<span>{this.state.value}</span>
				</p>
				<ChildComponentWithoutState
					value={this.state.value}
				/>
				<ChildComponentWithState
					value={this.state.value}
					componentProperty={this.state.value}
				/>
			</div>
			<div>
				<h5>Demonstration of 'Transclusion' Alternative:</h5>
				<TransclusionAlternative 
					content="Please, transclude this contetnt within this Component!"
				/>
				<NodeTransclusionAlternative
					content="Please, transclude this contetnt within this Component!"
				/>
			</div>
			</>
		)
	}
}`
	  },{
		name:"childWithoutState.js",
		  lang:"js",
		  code: 
`function ChildComponentWithoutState (props){
	return 	(
		<p>
			<strong>Value in child Component without State: </strong>
			<span>{props.value}</span>
		</p>
	);
}`
	  },{
		name:"childWithState.js",
		  lang:"js",
		  code: 
`class ChildComponentWithState extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: "Value in child Component with State",
		}
		this.componentProperty = props.componentProperty;
	}
	render() {
		return 	(
			<>
			<p>
				<strong>Parent Component Value in child Component with State: </strong>
				<span>{this.props.value}</span>
			</p>
			<p>
				<strong>Internal Value in child Component with State: </strong>
				<span>{this.state.value}</span>
			</p>
			<p>
				<strong>Component Property Value in child Component with State : </strong>
				<span>{this.componentProperty}</span>
			</p>
			</>
		);
	}
}`
	  },{
		name:"contentFromPropsToJSX.js",
		  lang:"js",
		  code: 
`function TransclusionAlternative(props) {
	const contentToTransclude = props.content;
	return (
		<>
		<p>
			<span><strong>Content of Component with alternative to Transclusion: </strong></span>
			<span>Components's internal content</span>
		</p>
		<p>
			<span><strong>'Tanscluded' from props content: </strong></span>
			<span>{contentToTransclude}</span> 
		</p>
		</>
	)
}`
	  },{
		name:"contentFromPropsToDOM.js",
		  lang:"js",
		  code: 
`function NodeTransclusionAlternative(props) {
	const ref = useRef(null);
	// read and append content value on every update
	useEffect(()=>{
		ref.current.append(props.content)
	}, [props.content]);

	return (
		<>
		<p>
			<span><strong>Component with appending of Content into DOM Node: </strong></span>
			<span>Component's internal content</span>
		</p>
		<p>
			<span><strong>Content 'transcluded' using Node Reference: </strong></span>
			<span ref={ref}></span> 
		</p>
		</>
	)
}`
	  }],
		result: <CustomDirectiveDataBinding/>,
		angularLink: "ang-DatenbindunginbenutzerdefiniertenDirektiven",
		migrationCheckData: {
		  info: [
			{
			  change: "Standard Text bindung von Scope an UI",
			  ang: 
``,
			  react:
``,
			  isMigrationConform: MigrationClass.YES
			},
			{
			  change: "Bindung von HTML",
			  ang: 
``,
			  react:
``,
			  isMigrationConform: MigrationClass.YES
			},
			{
			  change: "Bindung externer HTML",
			  ang: 
``,
			  react:
``,
			  isMigrationConform: MigrationClass.YES
			}
		  ]
		} 
	}
  };
  
  export const CustomDirectiveDataBindingModule =
  {
	module: CustomDirectiveDataBinding,
	data: data
  } 