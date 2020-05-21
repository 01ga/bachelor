import React, { useState, useEffect } from 'react';
import { MigrationClass } from '../../core/migrationCheck';

export class Interrelations extends React.Component {
	constructor(props) {
		super(props) 
	}
	render() {
		return <div>
			<CalculateComp/>
		</div>
	}
}

class CalculateComp extends React.Component {
	static Opreations = {
		ADD: "add",
		SUBTRACT: "subtr",
		MULTIPLY: "mult",
		DIVIDE: "div"
	}
	constructor(props) {
		super(props);
		this.state = {
			arg1: 0,
			arg2: 0,
			operation: CalculateComp.Opreations.ADD
		}
	}
	ResultComponent = {result: 0, setResult: undefined};
	addResState = (resultState) => {
		this.ResultComponent.result = resultState[0];
		this.ResultComponent.setResult = resultState[1];
		this.ResultComponent.setResult(0);
	}
	calculate = (operation) => {
		const arg1 = parseInt(this.state.arg1, 10);
		const arg2 = parseInt(this.state.arg2, 10);
		switch(operation) {
			case CalculateComp.Opreations.ADD:
				this.ResultComponent.setResult(arg1 + arg2);
				break;
			case CalculateComp.Opreations.SUBTRACT:
				this.ResultComponent.setResult(arg1 - arg2);
				break;
			case CalculateComp.Opreations.MULTIPLY:
				this.ResultComponent.setResult(arg1 * arg2);
				break;
			case CalculateComp.Opreations.DIVIDE:
				(arg2 === 0)
					? alert("No Division by 0")
					: this.ResultComponent.setResult(arg1 / arg2);
				break;
			default: 
				throw Error("Unnown Operation: " + operation);
		}
	}
	render() {
		return (
			<>
			<p>
				<strong>First Argument: </strong>
				<input type="text" 
					value={this.state.arg1}
					onChange={ (e) => 
						this.setState({arg1: e.target.value})
					}
				/>
			</p>
			<p>
				<strong>Second Argument: </strong>
				<input type="text" 
					value={this.state.arg2}
					onChange={ (e) => 
						this.setState({arg2: e.target.value})
					}
				/>
			</p>
			<div>
				<strong>Select operation: </strong>
				<p>
					<button onClick={() => this.calculate('add')}>ADD</button>
					<button onClick={() => this.calculate('subtr')}>SUBTRACT</button>
					<button onClick={() => this.calculate('mult')}>MULTIPLY</button>
					<button onClick={() => this.calculate('div')}>DIVIDE</button>
				</p>
			</div>
			<ResultFnCom addResState={this.addResState}/>
			</>
		)
	}
}
function ResultFnCom (props){
	let [result, setState] = useState(0);
	// alternative to componentDidUpdate()
	useEffect(
		// send a State reference to Parent Component
		() => {
			props.addResState([result, setState]);
		},
		[] // when initializing ResultFnCom only
	);
	return 	(
		<p>
			<strong>Result: </strong>
			<span>{result}</span>
		</p>
	);
}
const data = {
	section: {
		layer: "Deklaratives Rendern mit Angular", 
		group: "Benutzerdefinierte Direktiven",
		spec: "Interrelations"
	},
	article: {
	  title:"Interrelations",
	  codeSnippets: [{
		name:"calculate.js",
		  lang:"js",
		  code: 
`class CalculateComp extends React.Component {
	static Opreations = {
		ADD: "add",
		SUBTRACT: "subtr",
		MULTIPLY: "mult",
		DIVIDE: "div"
	}
	constructor(props) {
		super(props);
		this.state = {
			arg1: 0,
			arg2: 0,
			operation: CalculateComp.Opreations.ADD
		}
	}
	ResultComponent = {result: 0, setResult: undefined};
	addResState = (resultState) => {
		this.ResultComponent.result = resultState[0];
		this.ResultComponent.setResult = resultState[1];
		this.ResultComponent.setResult(0);
	}
	calculate = (operation) => {
		const arg1 = parseInt(this.state.arg1, 10);
		const arg2 = parseInt(this.state.arg2, 10);
		switch(operation) {
			case CalculateComp.Opreations.ADD:
				this.ResultComponent.setResult(arg1 + arg2);
				break;
			case CalculateComp.Opreations.SUBTRACT:
				this.ResultComponent.setResult(arg1 - arg2);
				break;
			case CalculateComp.Opreations.MULTIPLY:
				this.ResultComponent.setResult(arg1 * arg2);
				break;
			case CalculateComp.Opreations.DIVIDE:
				(arg2 === 0)
					? alert("No Division by 0")
					: this.ResultComponent.setResult(arg1 / arg2);
				break;
			default: 
				throw Error("Unnown Operation: " + operation);
		}
	}
	render() {
		return (
			<>
			<p>
				<strong>First Argument: </strong>
				<input type="text" 
					value={this.state.arg1}
					onChange={ (e) => 
						this.setState({arg1: e.target.value})
					}
				/>
			</p>
			<p>
				<strong>Second Argument: </strong>
				<input type="text" 
					value={this.state.arg2}
					onChange={ (e) => 
						this.setState({arg2: e.target.value})
					}
				/>
			</p>
			<div>
				<strong>Select operation: </strong>
				<p>
					<button onClick={() => this.calculate('add')}>ADD</button>
					<button onClick={() => this.calculate('subtr')}>SUBTRACT</button>
					<button onClick={() => this.calculate('mult')}>MULTIPLY</button>
					<button onClick={() => this.calculate('div')}>DIVIDE</button>
				</p>
			</div>
			<ResultFnCom addResState={this.addResState}/>
			</>
		)
	}
}`
	  },
	  {
		name:"result.js",
		  lang:"js",
		  code: 
`function ResultFnCom (props){
	let [result, setState] = useState(0);
	// alternative to componentDidUpdate()
	useEffect(
		// send a State reference to Parent Component
		() => {
			props.addResState([result, setState]);
		},
		[] // when initializing ResultFnCom only
	);
	return 	(
		<p>
			<strong>Result: </strong>
			<span>{result}</span>
		</p>
	);
}`
	  }],
		result: <Interrelations/>,
		angularLink: "ang-Interrelations",
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
  
  export const InterrelationsModule =
  {
	module: Interrelations,
	data: data
  } 