import React from 'react';
import { MigrationClass } from '../../../core/migrationCheck';

export function NgStyle(props) {

    const  dataList = [
        {itemClass: "label label-default", itemText: "Default", additionalStyles: {marginRight:'15px', padding: '4px', borderRadius: '0px'}},
        {itemClass: "label label-primary", itemText: "Primary", additionalStyles: {marginRight:'15px', padding: '8px', borderRadius: '4px'}},
        {itemClass: "label label-success", itemText: "Success", additionalStyles: {marginRight:'15px', padding: '12px', borderRadius: '8px'}},
        {itemClass: "label label-info", itemText: "Info", additionalStyles: {marginRight:'15px', padding: '16px', borderRadius: '12px'}},
        {itemClass: "label label-warning", itemText: "Warning", additionalStyles: {marginRight:'15px', padding: '20px', borderRadius: '16px'}},
        {itemClass: "label label-danger", itemText: "Danger", additionalStyles: {padding: '24px', borderRadius: '20px'}}
    ];

    const html = dataList.map(item => {
        return (
            <span key={item.itemText}
                className={item.itemClass} style={item.additionalStyles}>
                {item.itemText}
            </span>
        );
    });

    const pStyle = {  
        padding: '45px 15px',
        margin: '20px 0',
        borderColor: '#e5e5e5 #eee #eee',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '4px',
        WebkitBoxShadow: 'inset 0 3px 6px rgba(0,0,0,.05)',
        BoxShadow: 'inset 0 3px 6px rgba(0,0,0,.05)'
    }

    return <blockquote style={pStyle}>{html}</blockquote>;

}

const data = {
  section: {
    layer: "Deklaratives Rendern mit React", 
    group: "Darstellung",
    spec: "Gestaltung"
  },
  article: {
    title:"ngStyle",
    codeSnippets: [{
      name:"code.js",
        lang:"js",
        code: 
`function NgStyle(props) {

    const  dataList = [
        {itemClass: "label label-default", itemText: "Default", additionalStyles: {marginRight:'15px', padding: '4px', borderRadius: '0px'}},
        {itemClass: "label label-primary", itemText: "Primary", additionalStyles: {marginRight:'15px', padding: '8px', borderRadius: '4px'}},
        {itemClass: "label label-success", itemText: "Success", additionalStyles: {marginRight:'15px', padding: '12px', borderRadius: '8px'}},
        {itemClass: "label label-info", itemText: "Info", additionalStyles: {marginRight:'15px', padding: '16px', borderRadius: '12px'}},
        {itemClass: "label label-warning", itemText: "Warning", additionalStyles: {marginRight:'15px', padding: '20px', borderRadius: '16px'}},
        {itemClass: "label label-danger", itemText: "Danger", additionalStyles: {padding: '24px', borderRadius: '20px'}}
    ];

    const html = dataList.map(item => {
        return (
            <span key={item.itemText}
                className={item.itemClass} style={item.additionalStyles}>
                {item.itemText}
            </span>
        );
    });

    const pStyle = {  
        padding: '45px 15px',
        margin: '20px 0',
        borderColor: '#e5e5e5 #eee #eee',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '4px',
        WebkitBoxShadow:
            'inset 0 3px 6px rgba(0,0,0,.05)',
        BoxShadow:
            'inset 0 3px 6px rgba(0,0,0,.05)'
    }

    return <blockquote style={pStyle}>{html}</blockquote>;

}`
    }],
      result: <NgStyle/>,
      angularLink: "ang-ngStyle",
      migrationCheckData: {
        info: [{
            change: "ng-style",
            ang: 
`<div ng-style="{margin: '15px'}">
    ...
</div>`,
            react:
`<div style={{margin: '15px'}}>
    ...
</div>`,
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "Begrenzungen bei Benennung der CSS-Eigenschaften",
            ang: 
`<div ng-style="{
    'margin-top': '15px',
    '-webkit-box-shadow':
        'inset 0 3px 6px rgba(0,0,0,.05)'
}">
    ...
</div>`,
            react:
`<div style={
    marginTop:' 15px',
    WebkitBoxShadow:
        'inset 0 3px 6px rgba(0,0,0,.05)'
}>
    ...
</div>`,
            isMigrationConform: MigrationClass.YES
          }
        ]
      } 
  }
};

export const NgStyleModule =
{
  module: NgStyle,
  data: data
} 

