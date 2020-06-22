import React from 'react';
import { MigrationClass } from '../../core/migrationCheck';

class Sample extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <p>JSX HTML <span className='badge'>YES</span></p>
  }
}
export function DataBinding(props) {
  const data = {
    text: "Simple Text",
    htmlText: <p>JSX HTML <span className='badge'>YES</span></p>,
    component: Sample
  }
  return (
    <div className="container">
      <h6>ng-bind alternative</h6>
      <div>
        <p>Binds conten as a text:</p>
        <p>
          <span>{data.text}</span>
          <span className='badge'>YES</span>
        </p>
      </div>

      <h6>ng-bind-html alternative</h6>
      <div>
        <p>Bind content as JSX:</p>
        {data.htmlText}
      </div>

      <h6>ng-bind-template alterantive</h6>
      <div>
        <p>Binds conten with one or more interpolations:</p>
        <p><span>{'Text with'}{'several Bindings'}</span><span className='badge'>YES</span></p>
      </div>

      <h6>Includes other Component</h6>
      <div>
        <p>Includes external html as a Component: </p>
        <Sample />
      </div>

    </div>
  );
}

const data = {
  section: {
    layer: "I. Deklaratives Rendern mit React",
    group: "1.4. Databindung",
    spec: `1.4.1. Datenbindung an UI-Elemente`
  },
  article: {
    title: "Alternative für {{ }}, ngBind, ngBindHtml, ngBindTemplate, ngInclude",
    codeSnippets: [{
      name: "binding.js",
      lang: "js",
      code:
`class Sample extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <p>JSX HTML <span className='badge'>YES</span></p>
  }
}`
    },{
      name: "sample.js",
      lang: "js",
      code:
`export function DataBinding(props) {
  const data = {
    text: "Simple Text",
    htmlText: <p>JSX HTML <span className='badge'>YES</span></p>,
    component: Sample
  }
  return (
    <div className="container">
      <h6>ng-bind alternative</h6>
      <div>
        <p>Binds conten as a text:</p>
        <p>
          <span>{data.text}</span>
          <span className='badge'>YES</span>
        </p>
      </div>

      <h6>ng-bind-html alternative</h6>
      <div>
        <p>Bind content as JSX:</p>
        {data.htmlText}
      </div>

      <h6>ng-bind-template alterantive</h6>
      <div>
        <p>Binds conten with one or more interpolations:</p>
        <p><span>{'Text with'}{'several Bindings'}</span><span className='badge'>YES</span></p>
      </div>

      <h6>Includes other Component</h6>
      <div>
        <p>Includes external html as a Component: </p>
        <Sample />
      </div>

    </div>
  );
}`
    }],
    result: <DataBinding />,
    angularLink: "ang-{{}},ngBind,ngBindHtml,ngBindTemplate,ngInclude",
    migrationCheckData: {
      info: [
        {
          change: "Standard Text bindung von Scope an UI",
          ang:
            `<p ng-bind="scopeWert" ...></>`,
          react:
            `<p>{scopeWert}</p>`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Bindung von HTML",
          ang:
            `<p ng-bind-html=
	"$sce.trustAsHtml('<p>HTML</p>')"`,
          react:
            `// JSX
<p><p>HTML</p></p>`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Bindung externer HTML",
          ang:
            `<p ng-include="./sample.html"></p>`,
          react:
            `// Komponente
<Sample/>`,
          isMigrationConform: MigrationClass.YES
        }
      ]
    }
  }
};

export const DataBindingModule =
{
  module: DataBinding,
  data: data
} 