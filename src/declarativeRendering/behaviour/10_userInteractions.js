import React from 'react';
import { MigrationClass } from '../../core/migrationCheck';

export class ValidationConstraints extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return 	(
		)
	}
}

const data = {
	section: {
	  layer: "Deklaratives Rendern mit React", 
	  group: "Darstellungsbedingungen",
	  spec: "Validierungsbedingungen"
	},
	article: {
	  title:"ngMaxlength ngMinLength ngPattern ngRequired",
	  codeSnippets: [{
		name:"code.js",
		  lang:"js",
		  code: 
``
	  }],
		result: <ValidationLogic/>,
		angularLink: "ang-ngMaxlengthngMinLengthngPatternngRequired",
		migrationCheckData: {
		  info: [
			{
			  change: "ngSwitch",
			  ang: 
  ``,
			  react:
  ``,
			  isMigrationConform: MigrationClass.YES
			},
			{
			  change: "ngIf, ngSchow, ngHide",
			  ang: 
  ``,
			  react:
  ``,
			  isMigrationConform: MigrationClass.YES
			},
			{
			  change: "ndDisabled, ngReadonly",
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
  
  export const ValidationLogicModule =
  {
	module: ValidationLogic,
	data: data
  } 