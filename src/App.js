import React from 'react';
import './App.css';
import { NgRepeat } from './declarativeRendering/presentation/dynamicRendering/01_ngRepeat';
import Article from './core/article';
import MigrationCheck from './core/migrationCheck';
import DataService from './core/dataService';

function App() {
  
  const layers = DataService.getLayers();
  
  return layers.map(
    layer => 
        <section>
          <h1 id={DataService.createUIId(layer)} className="text-center">{layer}</h1>
          {
            DataService.getFnGroups(layer).map(
              group =>
                <>
                <h2 id={DataService.createUIId(group)} className="text-center">{group}</h2>
                {
                  DataService.getFnSpec(layer, group).map(
                    spec => 
                      <>
                      <h3  id={DataService.createUIId(spec)} className="page-header">{spec}</h3>
                      {
                        DataService.getArticles(layer, group, spec).map(
                          article =>
                          <Article
                            id={DataService.createUIId(article.title)}
                            title={article.title}
                            codeSnippets={article.codeSnippets}
                            result={article.result}
                            angularLink={article.angularLink}
                            migrationCheck={<MigrationCheck/>}
                          />
                        )
                      }
                      </>
                  )
                }
                </>
            )
          }
        </section>
  );
}

export default App;



const data = [
  {
    section: {
      layer: "Deklaratives Rendern mit React", 
      group: "Darstellung",
      spec: "Dynamisches Rendering"
    },
    article: {
      title:"NgRepeat",
      codeSnippets: [{
        name:"first.js",
         lang:"js",
         code: 
          `function NgRepeat(props) {
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
      }],
        result: <NgRepeat/>,
        angularLink: "ang-ngRepeat",
        migrationCheckData:""
    }
  },
  {
    section: {
      layer: "Deklaratives Rendern mit React",
      group: "Darstellung",
      spec: "Gestaltung"
    },
    article: {
      title:"NgClass",
      codeSnippets: [{
        name:"first.js",
         lang:"js",
         code: 
          `function NgRepeat(props) {
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
      }],
        result: <NgRepeat/>,
        angularLink: "ang-ngRepeat",
        migrationCheckData:""
    }
  },
  {
    section: {
      layer:"Deklaratives Rendern mit React",
      group: "Darstellung",
      spec: "Gestaltung"
    },
    article: {
      title:"NgClassOdd",
      codeSnippets: [{
        name:"first.js",
         lang:"js",
         code: 
          `function NgRepeat(props) {
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
      }],
        result: <NgRepeat/>,
        angularLink: "ang-ngRepeat",
        migrationCheckData:""
    }
  },
  {
    section: {
      layer:"Deklaratives Rendern mit React",
      group: "Darstellung",
      spec: "Gestaltung"
    },
    article: {
      title:"NgClassEven",
      codeSnippets: [{
        name:"first.js",
         lang:"js",
         code: 
          `function NgRepeat(props) {
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
      }],
        result: <NgRepeat/>,
        angularLink: "ang-ngRepeat",
        migrationCheckData:""
    }
  }
]