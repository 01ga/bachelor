import React from 'react';
import { MigrationClass } from '../../core/migrationCheck';

export class PresentationLogic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'user@mail.com',
			address: '',
			telephone: '',
			birthday: '',
			selected: "address",
			canProceed: false
		}
	}

	changeAddr = (val) => {
		this.setState({
			address: val,
			canProceed: val !== "" && this.state.telephone !== ""
		})
	}
	changeTel = (val) => {
		this.setState({
			telephone: val,
			canProceed: this.state.address !== "" && val !== ""
		})
	}
	changeBrth = (val) => {
		this.setState({birthday: val})
	}
	changeSelect = (val) => {
		this.setState({selected: val})
	}
	submit = () => {}
	render() {
		let switchElement;
		switch(this.state.selected) {
			case "address":
				switchElement =
					<div className="form-group">
						<label>Address</label>
						<input type="text" value={this.state.address} onChange={(e) => this.changeAddr(e.target.value)} className="form-control" placeholder="Address"/>
						<p className="help-block">Specify your address</p>
				</div>;
				break;
			case "telephone":
				switchElement = 
					<div className="form-group">
						<label>Telephone</label>
						<input type="text" value={this.state.telephone} onChange={(e) => this.changeTel(e.target.value)} className="form-control" placeholder="Telephone"/>
						<p className="help-block">Specify your telephone number</p>
					</div>;
				break;
			case "birthday":
				switchElement =
					<div className="form-group">
						<label>Birthday</label>
						<input type="text" value={this.state.birthday} onChange={(e) => this.changeBrth(e.target.value)} className="form-control" placeholder="Birthday"/>
						<p className="help-block">Specify your birthday</p>
					</div>;
				break;
			default: throw Error("Unknown case " + this.state.selected);
		}
		return 	(
			<form  className="result-box" noValidate onSubmit={this.submit}>
				<h5>Your profile data:</h5>
				<div className="form-group">
					<label>Username or Email</label>
					<input type="email" value={this.state.email} className="form-control" readOnly={true}/>
				</div>
				{ this.state.address !== '' &&
					<div className="form-group">
						<label>Adress</label>
						<input type="text" value={this.state.address} className="form-control" readOnly={true}/>
					</div>
				}
				{ this.state.telephone !== '' &&
					<div className="form-group" >
						<label>Telephone</label>
						<input type="text" value={this.state.telephone} className="form-control" readOnly={true}/>
					</div>
				}
				{	this.state.birthday !== '' &&
					<div className="form-group">
						<label>Birthday</label>
						<input type="text" value={this.state.birthday} className="form-control" readOnly={true}/>
					</div>
				}
				<h5>Add info about you:</h5>
				<div className="form-group">
					<label>Add information about you</label>
					<select className="form-control" name="select" value={this.state.selected} onChange={(e) => this.changeSelect(e.target.value)}>
						<option value="address">Address</option>
						<option value="telephone">Telephone</option>
						<option value="birthday">Birthday</option>
					</select>
				</div>
			
				<div className="form-group">
					{switchElement}
				</div>
				<div className="form-group">
					{ this.state.address === '' && 
						<p className="help-block">You have to specify your address</p>
					}
					{ this.state.telephone === '' &&
						<p className="help-block">You have to specify your telephone number</p>
					}
					<input id="submitBtn" type="submit" className="btn btn-default" disabled={!this.state.canProceed} value="Proceed"/>
				</div>
			</form>
		)
	};
}

const data = {
	section: {
	  layer: "Deklaratives Rendern mit React", 
	  group: "Darstellungsbedingungen",
	  spec: "Darstellungslogik"
	},
	article: {
	  title:"ngSwitch ngIf ngShow ngHide ngDisable ngReadonly",
	  codeSnippets: [{
		name:"code.js",
		  lang:"js",
		  code: 
  `class PresentationLogic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'user@mail.com',
			address: '',
			telephone: '',
			birthday: '',
			selected: "address",
			canProceed: false
		}
	}

	changeAddr = (val) => {
		this.setState({
			address: val,
			canProceed: val !== "" && this.state.telephone !== ""
		})
	}
	changeTel = (val) => {
		this.setState({
			telephone: val,
			canProceed: this.state.address !== "" && val !== ""
		})
	}
	changeBrth = (val) => {
		this.setState({birthday: val})
	}
	changeSelect = (val) => {
		this.setState({selected: val})
	}
	submit = () => {}
	render() {
		let switchElement;
		switch(this.state.selected) {
			case "address":
				switchElement =
					<div className="form-group">
						<label>Address</label>
						<input type="text" 
							value={this.state.address} 
							onChange={
								(e) => this.changeAddr(e.target.value)
							} 
							className="form-control" placeholder="Address"/>
						<p className="help-block">Specify your address</p>
				</div>;
				break;
			case "telephone":
				switchElement = 
					<div className="form-group">
						<label>Telephone</label>
						<input type="text" 
							value={this.state.telephone}
							onChange={
								(e) => this.changeTel(e.target.value)
							} 
							className="form-control" placeholder="Telephone"/>
						<p className="help-block">Specify your telephone number</p>
					</div>;
				break;
			case "birthday":
				switchElement =
					<div className="form-group">
						<label>Birthday</label>
						<input type="text" 
							value={this.state.birthday}
							onChange={
								(e) => this.changeBrth(e.target.value)
							} 
							className="form-control" placeholder="Birthday"/>
						<p className="help-block">Specify your birthday</p>
					</div>;
				break;
			default: throw Error("Unknown case " + this.state.selected);
		}

		return 	(
			<form  className="result-box" noValidate onSubmit={this.submit}>
				<h5>Your profile data:</h5>
				<div className="form-group">
					<label>Username or Email</label>
					<input type="email" value={this.state.email} 
						className="form-control" readOnly={true}/>
				</div>
				{ this.state.address !== '' &&
					<div className="form-group">
						<label>Adress</label>
						<input type="text" value={this.state.address} 
							className="form-control" readOnly={true}/>
					</div>
				}
				{ this.state.telephone !== '' &&
					<div className="form-group" >
						<label>Telephone</label>
						<input type="text" value={this.state.telephone} 
							className="form-control" readOnly={true}/>
					</div>
				}
				{	this.state.birthday !== '' &&
					<div className="form-group">
						<label>Birthday</label>
						<input type="text" value={this.state.birthday} 
							className="form-control" readOnly={true}/>
					</div>
				}
				<h5>Add info about you:</h5>
				<div className="form-group">
					<label>Add information about you</label>
					<select className="form-control" name="select" 
						value={this.state.selected} 
						onChange={
							(e) => this.changeSelect(e.target.value)
						}
					>
						<option value="address">Address</option>
						<option value="telephone">Telephone</option>
						<option value="birthday">Birthday</option>
					</select>
				</div>
			
				<div className="form-group">
					{switchElement}
				</div>

				<div className="form-group">
					{ this.state.address === '' && 
						<p className="help-block">You have to specify your address</p>
					}
					{ this.state.telephone === '' &&
						<p className="help-block">You have to specify your telephone number</p>
					}
					<input id="submitBtn" type="submit" 
						className="btn btn-default" disabled={!this.state.canProceed} value="Proceed"/>
				</div>
			</form>
		)
	};
}`
	  }],
		result: <PresentationLogic/>,
		angularLink: "ang-ngSwitchngIfngShowngHidengDisablengReadonly",
		migrationCheckData: {
		  info: [
			{
			  change: "ngSwitch",
			  ang: 
  `Direktiven ermöglichen dynamisches switch-Verhalten im DOM`,
			  react:
  `JSX und standard js switch können alle Kombinationen von
  ngSwitch wiederherstellen`,
			  isMigrationConform: MigrationClass.YES
			},
			{
			  change: "ngIf, ngSchow, ngHide",
			  ang: 
  `Ein- und Ausblenden der DOM-Teile abhängig von Daten im Scope`,
			  react:
  `Standard js if(boolenWertImZustand) Prüfung`,
			  isMigrationConform: MigrationClass.YES
			},
			{
			  change: "ndDisabled, ngReadonly",
			  ang: 
  `Dynamische Definition der 'readonly' Eigenschaft von <input>
  und 'disabled' Eigenschaft von Button-ähnlichen Elementen.
  Wird abhängig von Daten im Scope gesetzt`,
			  react:
  `Dynamisches Binden der Zustandswerte an standatd DOM Eigenschaften
  'disabled' und 'readonly'`,
			  isMigrationConform: MigrationClass.YES
			}
		  ]
		} 
	}
  };
  
  export const PresentationLogicModule =
  {
	module: PresentationLogic,
	data: data
  } 