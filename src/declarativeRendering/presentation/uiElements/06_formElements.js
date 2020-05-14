import React from 'react';
import { MigrationClass } from '../../../core/migrationCheck';

export class  FormElements extends React.Component {
	constructor(props) {
		super(props);
		this.countries = this.initCountries();
		this.state = { user: { ... this.initData(), country: this.countries[2] }};
	}
	initData = () => {
		return {
			email: '',
			pass: '',
			subscribed: false
		};
	}
	initCountries = () => {
		return [
			{name:'Austria', code: "AT"},
			{name:'France', code: "FR"},
			{name:'Germany', code:'DE'},
			{name:'Luxembourg', code: "LU"},
			{name:'Switzerland', code: "CH"}
		];
	}
	// Explicitly bind data from ui into state
	emailChanged = (e) => {
		const value = e.target.value;
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), email: value}}
		});

	};
	passChanged = (e) => {
		const value = e.target.value;
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), pass: value}}
		});

	};
	countryChanged = (value) => {
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), country: value}}
		});
	};
	checkChanged = (e) => {
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), subscribed: !prevState.user.subscribed}}
		});
	}
	submit = (e) => {
		// NO DAFAULT BEHAVIOR PREVENTION
		e.preventDefault();
		this.processData(this.state.user);
		this.resetForm();
	}
	processData = (data) => {
		// data processing
		console.log("Processing user data: " + JSON.stringify(data));
	}
	resetForm = () => {
		this.setState({ user: this.initData() });
	}

	render() {
    	return (
			<form noValidate onSubmit={this.submit}>
				<div className="form-group">
					<label htmlFor="userEmail">Email address</label>
					<input type="email" name="emailInput" value={this.state.user.email} onChange={this.emailChanged} className="form-control" id="userEmail" placeholder="Email"/>
					<p className="help-block">You have entered: {this.state.user.email}</p>
				</div>
				<div className="form-group">
					<label htmlFor="userPassword">Password</label>
					<input type="password" name="passwordInput" value={this.state.user.pass} onChange={this.passChanged} className="form-control" id="userPassword" placeholder="Password"/>
					<p className="help-block">Your password is: {this.state.user.pass}</p>
				</div>
				<div className="form-group">
					<label htmlFor="userCountry">Country</label>
					<select className="form-control" name="select" id="userCountry" 
						value={(this.state && this.state.user && this.state.user.country) ? this.state.user.country.name : "Germany"}
						onChange={(e) => {
							const name = e.target.value;
							const value = this.countries.find(item => item.name === name);
							this.countryChanged(value)}}>
						{this.countries.map(
							country => <option key={country.code} value={country.name}>{country.name}</option>
						)}
					</select>
				</div>
				<div className="checkbox">
					<label>
					<input type="checkbox" name="checkboxInput" onChange={this.checkChanged} value="this.state.user.subscribed"/> Subscribe to our E-mails
					</label>
					<p className="help-block">{ (this.state.user.subscribed) ? "You have been successfully subscribed" : "Not subscribed"}</p>
				</div>
				<input id="submit" name="submitBtn" type="submit" className="btn btn-default" value="Submit"/>
			</form>
		);
	}
}

const data = {
  section: {
    layer: "Deklaratives Rendern mit React", 
    group: "Darstellung",
    spec: "Definition von UI-Elementen"
  },
  article: {
    title:"form und interaktive Elemente",
    codeSnippets: [{
      name:"code.js",
        lang:"js",
        code: 
`export class  FormElements extends React.Component {
	constructor(props) {
		super(props);
		this.countries = this.initCountries();
		this.state = { user: { ... this.initData(), country: this.countries[2] }};
	}
	initData = () => {
		return {
			email: '',
			pass: '',
			subscribed: false
		};
	}
	initCountries = () => {
		return [
			{name:'Austria', code: "AT"},
			{name:'France', code: "FR"},
			{name:'Germany', code:'DE'},
			{name:'Luxembourg', code: "LU"},
			{name:'Switzerland', code: "CH"}
		];
	}
	// Explicitly bind data from ui into state
	emailChanged = (e) => {
		const value = e.target.value;
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), email: value}}
		});

	};
	passChanged = (e) => {
		const value = e.target.value;
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), pass: value}}
		});

	};
	countryChanged = (value) => {
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), country: value}}
		});
	};
	checkChanged = (e) => {
		this.setState((prevState) =>{
			return {user: { ...(prevState.user), subscribed: !prevState.user.subscribed}}
		});
	}
	submit = (e) => {
		// NO DAFAULT BEHAVIOR PREVENTION
		e.preventDefault();
		this.processData(this.state.user);
		this.resetForm();
	}
	processData = (data) => {
		// data processing
		console.log("Processing user data: " + JSON.stringify(data));
	}
	resetForm = () => {
		this.setState({ user: this.initData() });
	}

	render() {
    	return (
			<form noValidate onSubmit={this.submit}>
				<div className="form-group">
					<label htmlFor="userEmail">Email address</label>
					<input type="email" name="emailInput" value={this.state.user.email} 
						onChange={this.emailChanged} className="form-control" id="userEmail" placeholder="Email"/>
					<p className="help-block">You have entered: {this.state.user.email}</p>
				</div>
				<div className="form-group">
					<label htmlFor="userPassword">Password</label>
					<input type="password" name="passwordInput" value={this.state.user.pass}
					 	onChange={this.passChanged} className="form-control" id="userPassword" placeholder="Password"/>
					<p className="help-block">Your password is: {this.state.user.pass}</p>
				</div>
				<div className="form-group">
					<label htmlFor="userCountry">Country</label>
					<select className="form-control" name="select" id="userCountry" 
						value={
							(this.state && this.state.user && this.state.user.country)
							 ? this.state.user.country.name
							 : "Germany"
						}
						onChange={(e) => {
							const name = e.target.value;
							const value = this.countries.find(item => item.name === name);
							this.countryChanged(value)}}>
						{this.countries.map(
							country => 
							<option key={country.code} value={country.name}>{country.name}</option>
						)}
					</select>
				</div>
				<div className="checkbox">
					<label>
					<input type="checkbox" name="checkboxInput" onChange={this.checkChanged}
					 value="this.state.user.subscribed"/> Subscribe to our E-mails
					</label>
					<p className="help-block">{ 
						(this.state.user.subscribed) ? "You have been successfully subscribed" : "Not subscribed"
					}</p>
				</div>
				<input id="submit" name="submitBtn" type="submit" className="btn btn-default" value="Submit"/>
			</form>
		);
	}
}`
    }],
      result: <FormElements/>,
      angularLink: "ang-formundinteraktiveElemente",
      migrationCheckData: {
        info: [
          {
            change: "UI Darstellung von form",
            ang: 
`<form>...</form>`,
            react:
`<form>...</form>`,
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "form submit",
            ang: 
`<form ng-submit="submit()" 
	ng-controller="FormElementsCtrl">
	...
	<input id="submit" name="submitBtn" 
		type="submit" value="Submit">
</form>`,
            react:
`<form onSubmit={this.submit}>
	<input id="submit" name="submitBtn" 
		type="submit" value="Submit"/>
</form>`,
            isMigrationConform: MigrationClass.YES
		  },{
            change: "Interne Vorbeugung des Standartverhaltens bei form submit",
            ang: 
`$scope.submit = (e) => {
	// e.preventDefault() wird implzit
	// von by AngularJS aufgerufen
	processData($scope.user);
	resetForm($scope);
}`,
            react:
`submit = (e) => {
	// keine implzite Vorbeugung
	e.preventDefault();
	this.processData(this.state.user);
	this.resetForm();
}`,
            isMigrationConform: MigrationClass.MAYBE
          },
		  {
            change: "UI Darstellung von input",
            ang: 
`<input type="email" ng-model="user.email" ...>`,
            react:
`<input type="email" value={this.state.user.email} .../>`,
            isMigrationConform: MigrationClass.YES
		  },{
            change: "Databindung in die Richtung Model -> View bzw. State -> DOM",
            ang: 
`<input type="email" ng-model="user.email" ...>`,
            react:
`<input type="email" value={this.state.user.email} .../>`,
            isMigrationConform: MigrationClass.YES
		  },
		  {
            change: "Databindung in die Richtung View -> Model bzw. DOM -> State",
            ang: 
`// implizit von ngModel durchgeführt
<input type="email" ng-model="user.email" ...>`,
            react:
`<input type="email" value={this.state.user.email} 
	onChange={this.emailChanged} .../>
...
// Explizit State nach der Änderung in UI neu setzen
emailChanged = (e) => {
	const value = e.target.value;
	this.setState((prevState) =>{
		return {
			user: { ...(prevState.user), email: value}
		}
	});

};`,
            isMigrationConform: MigrationClass.MAYBE
          },
		  {
            change: "Fehlergestaltung beim Submitten des Formulars und bei der Eingabevalidierung",
            ang: 
`Wird von FormController und NgModelController
intern durch die Einbindung von Validierungsclassen
(sehe AngularJS-Abschnitt "Form und Input
 Validierungsklassen").`,
            react:
`React implementiert keine interne Logik.
Um Migration zu ermöglichen, wird and der Stelle
zusätzliche Funktionalität gebraucht.`,
            isMigrationConform: MigrationClass.NO
          },
		  {
            change: "UI Darstellung von select mit statischen hardcodierten Optionen",
            ang: 
`Ja`,
            react:
`Ja`,
            isMigrationConform: MigrationClass.YES
          },
		  {
            change: "UI Darstellung von select mit dynamischen Optionen wobei Optionswerte von Typ 'string' sind",
            ang: 
`<select ng-model="user.country"
	 ng-options=
		"country in countries"
...>`,
            react:
`<select value={this.state.user.country} ...>
	{this.countries.map(
		country => 
			<option key={country} 
				value={country}>
					{country}
			</option>
	)}
</select>`,
            isMigrationConform: MigrationClass.YES
          },
		  {
            change: "UI Darstellung von select mit dynamischen Optionen wobei Optionswerte Objekte sind",
            ang: 
`<select ng-model="user.country"
 	ng-options=
		"country.name for country in countries" 
...>`,
            react:
`Zusätzliches Mapping von String-Werten der Optionen
auf Objekte im Zustand gebraucht`,
            isMigrationConform: MigrationClass.MAYBE
          }
        ]
      } 
  }
};

export const FormElementsModule =
{
  module: FormElements,
  data: data
} 

