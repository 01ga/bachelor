import React from 'react';
import { MigrationClass } from '../../../core/migrationCheck';

export function ATag(props) {

    return (
      <div className="result-box">   
        <p>
            <span className="right-padding">No implicit default behavior prevention! Page reloads.</span>
            <a className="btn btn-default" href="" role="button">
                Empty link with href=""
            </a>
        </p>
        <p>
            <span className="right-padding">Explicit prevention of default behavior within onClick listener.</span>
            <a className="btn btn-default"
              onClick={(e) => e.preventDefault()}
              href="" role="button">
                Empty link with href=""
            </a>
        </p>
        <p>
            <span className="right-padding">Navigates to top of the page. No reload.</span>
            <a className="btn btn-default" href="#top" role="button">
                Link with href="#top"
            </a>
        </p>
        <p><span className="right-padding">Input field to check the state</span><input /></p>
        <p>
            <span className="right-padding">Loads the specified external link.</span>
            <a className="btn btn-default" href="http://www.mozilla.com/" role="button">
                External link 'http://www.mozilla.com/'
            </a>
        </p>
      </div>
    );

}

const data = {
  section: {
    layer: "I. Deklaratives Rendern mit React", 
    group: "1.1. Darstellung",
    spec: "1.1.3. Definition von UI-Elementen"
  },
  article: {
    title:"a",
    codeSnippets: [{
      name:"code.js",
        lang:"js",
        code: 
`function ATag(props) {

  return (
    <div className="result-box">   
      <p>
          <span className="right-padding">No implicit default behavior prevention! Page reloads.</span>
          <a className="btn btn-default" href="" role="button">
              Empty link with href=""
          </a>
      </p>
      <p>
          <span className="right-padding">Explicit prevention of default behavior within onClick listener.</span>
          <a className="btn btn-default"
            onClick={(e) => e.preventDefault()}
            href="" role="button">
              Empty link with href=""
          </a>
      </p>
      <p>
          <span className="right-padding">Navigates to top of the page. No reload.</span>
          <a className="btn btn-default" href="#top" role="button">
              Link with href="#top"
          </a>
      </p>
      <p><span className="right-padding">Input field to check the state</span><input /></p>
      <p>
          <span className="right-padding">Loads the specified external link.</span>
          <a className="btn btn-default" href="http://www.mozilla.com/" role="button">
              External link 'http://www.mozilla.com/'
          </a>
      </p>
    </div>
  );

}`
    }],
      result: <ATag/>,
      angularLink: "ang-a",
      migrationCheckData: {
        info: [{
            change: "Leere href='' und Seitenaktualisierung",
            ang: 
`// Implizite Prevention des Standardverhaltens
<a class="btn btn-default"
  href="" role="button">
    Empty link with href=""
</a>`,
            react:
`// Explizite Prevention des Standardverhaltens
<a className="btn btn-default"
  onClick={(e) => e.preventDefault()}
  href="" role="button">
    Empty link with href=""
</a>`,
            isMigrationConform: MigrationClass.MAYBE
          },
          {
            change: "Lokales Navigieren mit #",
            ang: 
`<a class="btn btn-default" 
  href="#top" role="button">
    Link with href="#top"
</a>`,
            react:
`<a className="btn btn-default" 
  href="#top" role="button">
    Link with href="#top"
</a>`,
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "Externer Link",
            ang: 
`<a class="btn btn-default" 
  href="http://www.mozilla.com/" role="button">
    Link with href="#top"
</a>`,
            react:
`<a className="btn btn-default" 
  href="http://www.mozilla.com/" role="button">
    Externer Link
</a>`,
            isMigrationConform: MigrationClass.YES
          }
        ]
      } 
  }
};

export const ATagModule =
{
  module: ATag,
  data: data
} 

