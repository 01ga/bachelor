import React, { Component } from 'react';
import MigrationCheck from './migrationCheck';

/* props {
    title: string,
    codeSnippets: [{name:string, lang:string, code:string}]
    result: JSX,
    angularLink: string,
    migrationCheck: JSX
}
*/

class CodeTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0
    };
  }

  activateTab = (e, index) => {
    e.preventDefault();
    this.setState( {activeTabIndex: index});
  }

  renderTabs = () => {
    return (
      this.props.codeSnippets.map((snippet, index) => {
        return (
          <li key={snippet.name} 
            role="presentation"
            className={(index === this.state.activeTabIndex) ? "active" : ""}>
              <a href="#none" onClick={(e) => this.activateTab(e, index)}>{snippet.name}</a>
          </li>
      )})
    );
  }

  renderContent = () => {
    return (
      this.props.codeSnippets.map((snippet, index) => {
        return (
          <div key={snippet.name} 
            className={ (index !== this.state.activeTabIndex) ? "hidden" : ""}>
              <figure className="highlight">
                  <pre className="fixed-code-block"><code className={"prettyprint lang-"+snippet.lang}>{snippet.code}</code></pre>
              </figure>
          </div>
        )
      })
    );
  }

  render() { 
    return (
      <div className="bs-example" data-example-id="simple-nav-tabs">
        <ul className="nav nav-tabs">
          {this.renderTabs()}
        </ul>
        <div>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

function Article(props) {

  return (
    <article id={props.id} className="page-article">
      <h3 className="api">{props.title}</h3>
      <h5>Code Beispiel</h5>
      <CodeTabs codeSnippets={props.codeSnippets}/>
      <h5>Ergebnis</h5>
      {props.result}
      <h5>Migration Prüfung</h5>
      <div style={{overflowX: "auto"}}>
        <MigrationCheck {... props.migrationCheck} />
      </div>  
      <p className="alternative-btn">
        <a className="btn btn-lg btn-info" href={"#" + props.angularLink} role="button">AngularJS Version »</a>
      </p>
    </article>
  );
}

export default Article;