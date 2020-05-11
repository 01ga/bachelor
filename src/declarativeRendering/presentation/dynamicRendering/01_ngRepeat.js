import React from 'react';

export function NgRepeat(props) {
  const itemTypes = {
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger'
  }
  const  dataList = [
    { itemText: "Dapibus ac facilisis in", href: "#react-ngRepeat", itemType: itemTypes.SUCCESS },
    { itemText: "Cras sit amet nibh libero", href: "#react-ngRepeat", itemType: itemTypes.INFO },
    { itemText: "Porta ac consectetur ac", href: "#react-ngRepeat", itemType: itemTypes.WARNING },
    { itemText:"Vestibulum at eros", href:"#react-ngRepeat", itemType: itemTypes.DANGER }
  ];
  const html = dataList.map((item) => {
    return <a key={item.itemType+item.itemText} className={"list-group-item list-group-item-"+item.itemType} 
            ng-href={item.href}>{item.itemText}</a>
  });
  return <div className="list-group">{html}</div>; 
}

const data = {
  section: {
    layer: "Deklaratives Rendern mit React", 
    group: "Darstellung",
    spec: "Dynamisches Rendering"
  },
  article: {
    title:"ngRepeat",
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
};

export const NgRepeatModule =
{
  module: NgRepeat,
  data: data
} 

