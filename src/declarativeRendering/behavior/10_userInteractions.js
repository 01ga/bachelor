import React from 'react';
import { MigrationClass } from '../../core/migrationCheck';

export class UserInteractions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }
  // simple event listener
  onIncrement = () => {
    this.setState(prevState => {
      const res = prevState.value + 1;
      return { value: res }
    })
  }
  // alternative way
  onDecrement = (val) => {
    const res = val - 1;
    this.setState({ value: res });
  }
  render() {
    return (
      <div>
        <p className="lead">Score: <span className="badge"> {this.state.value}</span></p>
        <button className="btn btn-default" onClick={this.onIncrement}>Increment</button>
        <button className="btn btn-default" value={this.state.value}
          onClick={(e) => this.onDecrement(e.target.value)}>Decrement</button>
      </div>
    )
  }
}

const data = {
  section: {
    layer: "I. Deklaratives Rendern mit React",
    group: "1.3. Verhalten",
    spec: "1.3.1. Bearbeitung von Benutzer-Interaktionen"
  },
  article: {
    title: "Event Listeners",
    codeSnippets: [{
      name: "code.js",
      lang: "js",
      code:
`class UserInteractions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }
  // simple event listener
  onIncrement = () => {
    this.setState(prevState => {
      const res = prevState.value + 1;
      return { value: res }
    })
  }
  // alternative way
  onDecrement = (val) => {
    const res = val - 1;
    this.setState({ value: res });
  }
  render() {
    return (
      <div>
        <p className="lead">Score: <span className="badge"> {this.state.value}</span></p>
        <button className="btn btn-default" onClick={this.onIncrement}>Increment</button>
        <button className="btn btn-default" value={this.state.value}
          onClick={(e) => this.onDecrement(e.target.value)}>Decrement</button>
      </div>
    )
  }
}`
    }],
    result: <UserInteractions />,
    angularLink: "ang-EventListeners",
    migrationCheckData: {
      info: [
        {
          change: "Standard Event Bearbeitung",
          ang:
            `// html
<button ng-click="onClick()" ../>
// controller
$scope.onClick = () => {/*Logik*/}`,
          react:
            `<button onClick={this.onIncrement} ../>
..
onIncrement = () => {/*Logik*/}`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Bindung an Controller",
          ang:
            `<div ng-controller="UserInteractionsCtrl">
// alle registrierte im Scope des Controller
// Daten erreichbar
</div `,
          react:
            `Alle Daten innerhalb der React-Komponente erreichbar`,
          isMigrationConform: MigrationClass.YES
        }
      ]
    }
  }
};

export const UserInteractionsModule =
{
  module: UserInteractions,
  data: data
} 