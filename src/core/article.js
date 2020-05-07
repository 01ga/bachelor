import React from 'react';

/* props {
    title: string,
    codeSnippets: [{name:string, lang:string, code:string}]
    result: JSX,
    angularLink: string,
    migrationCheck: JSX
}
*/
function Article(props) {
    const navLi = props.codeSnippets.map(((snippet, index) => {
        return <li role="presentation" className={ index === 0 ? "active enableNav" : "enableNav"}>
            <a href="">{snippet.name}</a>
        </li>
    }));
    const code = props.codeSnippets.map(((snippet, index) => {
        return <div className={ index !== 0 ? "hidden" : ""}>
            <figure className="highlight">
                <pre><code className={"prettyprint lang-"+snippet.lang}>{snippet.code}</code></pre>
            </figure>
        </div>
    }));

    return <article id="ang-presentation">
    <h3 className="api">{props.title}</h3>
    <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
    <p>To see the difference between static and fixed top navbars, just scroll.</p>
    <h4>Beispiel</h4>
    <h5>Code</h5>
    <div class="bs-example" data-example-id="simple-nav-tabs">
      <ul class="nav nav-tabs">
        {navLi}
      </ul>
      <div>
        {code}
      </div>
    </div>
    <h5>Ergebnis</h5>
    {props.result}
    <h4>Migration Prüfung</h4>
    {props.migrationCheck}
    <p>
      <a class="btn btn-lg btn-primary" href={"#" + props.angularLink} role="button">AngularJS Version »</a>
    </p>
  </article>
}

export default Article;