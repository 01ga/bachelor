import React from 'react';
import './App.css';
import Article from './core/article';
import DataService from './core/dataService';

function App() {
  
  const layers = DataService.getLayers();
  
  return layers.map(
    layer => 
        <section key={DataService.createUIId(layer)}>
          <h1 id={DataService.createUIId(layer)} className="text-center">{layer}</h1>
          {
            DataService.getFnGroups(layer).map(
              group =>
                <div  key={DataService.createUIId(group)}>
                <h2 id={DataService.createUIId(group)} className="text-center">{group}</h2>
                {
                  DataService.getFnSpec(layer, group).map(
                    spec => 
                      <div key={DataService.createUIId(spec)}>
                      <h3 id={DataService.createUIId(spec)} className="page-header">{spec}</h3>
                      {
                        DataService.getArticles(layer, group, spec).map(
                          article =>
                          <Article
                            key={DataService.createUIId(article.title)}
                            id={DataService.createUIId(article.title)}
                            title={article.title}
                            codeSnippets={article.codeSnippets}
                            result={article.result}
                            angularLink={article.angularLink}
                            migrationCheck={article.migrationCheckData}
                          />
                        )
                      }
                      </div>
                  )
                }
                </div>
            )
          }
        </section>
  );
}

export default App;