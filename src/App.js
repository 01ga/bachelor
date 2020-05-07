import React from 'react';
import './App.css';
import NgRepeat from './declarativeRendering/presentation/dynamicRendering/01_ngRepeat';
import Article from './core/article';
import MigrationCheck from './core/migrationCheck';

function App() {
  const code = `function NgRepeat(props) {
    const itemTypes = {
      SUCCESS: 'success',
      INFO: 'info',
      WARNING: 'warning',
      DANGER: 'danger'
    }
    const  dataList = [
      { itemText: "Dapibus ac facilisis in", href: "#ngRepeat", itemType: itemTypes.SUCCESS },
      { itemText: "Cras sit amet nibh libero", href: "#ngRepeat", itemType: itemTypes.INFO },
      { itemText: "Porta ac consectetur ac", href: "#ngRepeat", itemType: itemTypes.WARNING },
      { itemText:"Vestibulum at eros", href:"#ngRepeat", itemType: itemTypes.DANGER }
    ];
    const html = dataList.map((item) => {
      return <a className={"list-group-item list-group-item-"+item.itemType} 
              ng-href={item.href}>{item.itemText}</a>
    });
    return <div className="list-group">{html}</div>; 
  }`
  return (
    <section id="react-declarative-rendering">
      <h1  className="text-center">Deklaratives Rendern mit React</h1>
      <h2  className="text-center">Darstellung</h2>
      <h3 className="page-header">Dynamisches Rendering</h3>
      <Article
        title="NgRepeat"
        codeSnippets={[{name:"first.js", lang:"js", code:code}]}
        result={<NgRepeat/>}
        angularLink=""
        migrationCheck={<MigrationCheck/>}
      />
    </section>
  );
}

export default App;
