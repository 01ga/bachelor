import React from 'react';
import { MigrationClass } from '../../../core/migrationCheck';

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
  const html = dataList.map((item, index) => {
    const first = index === 0;
    return (
      <a key={item.itemType+item.itemText} 
        className={first ? "hide" : "list-group-item list-group-item-"+item.itemType} 
        href={item.href}>{index + ') ' + item.itemText}
      </a>
    );
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
            { itemText: "Dapibus ac facilisis in", href: "#react-ngRepeat", itemType: itemTypes.SUCCESS },
            { itemText: "Cras sit amet nibh libero", href: "#react-ngRepeat", itemType: itemTypes.INFO },
            { itemText: "Porta ac consectetur ac", href: "#react-ngRepeat", itemType: itemTypes.WARNING },
            { itemText:"Vestibulum at eros", href:"#react-ngRepeat", itemType: itemTypes.DANGER }
          ];
          const html = dataList.map((item, index) => {
            const first = index === 0;
            return (
              <a key={item.itemType+item.itemText} 
                className={first ? "hide" : "list-group-item list-group-item-"+item.itemType} 
                href={item.href}>{index + ') ' + item.itemText}
              </a>
            );
          });
          return <div className="list-group">{html}</div>; 
        }`
    }],
      result: <NgRepeat/>,
      angularLink: "ang-ngRepeat",
      migrationCheckData: {
        info: [
          {
            change: "Rendern von Arrays",
            ang: 
`<div ng-repeat='val in arr'>
  ...
</div>`,
            react: "arr.map(val => <div>...</div>)",
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "Rendern von Objeken",
            ang: 
`<div ng-repeat='(key, val) in obj'>
  ...
</div>`,
            react: 
`for(const key in obj) {
  const val = obj[key];
  <div>...</div>);
}`,
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "track by",
            ang: 
`<div ng-repeat='val in arr track by val.id'>
  ...
</div>`,
            react: 
`arr.map(val => 
  <div key={val.id}>
    ...
  </div>)`,
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "$index",
            ang: 
`<div ng-repeat='val in arr' 
  ng-init='index = $index'>
    ...
</div>`,
            react: "arr.map(val, index => <div>...</div>)",
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "$first, $last, $middle, $even, $odd",
            ang: 
`<div ng-repeat='val in arr' 
  ng-class='$first ? "hidden" : ""'>
    ...
</div>`,
            react: 
`arr.map(
  (val, index) => {
    const first = index === 0;
    // const middle = 
    //  index !== 0 && index !== dataList.length - 1;
    // const last = index === dataList.length - 1;
    // const even = (index%2 === 0);
    // const odd = (index%2 !== 0); 
    return (
      <div className={first ? "hide" : ""}>
        ...
      </div>;
    )
})`,
            isMigrationConform: MigrationClass.MAYBE
          },
          {
            change: "Filtering und Alias",
            ang: 
`<div ng-repeat='val in arr | 
  filter: valFilter as result'>
  ...
</div>`,
            react: 
`const result = 
  arr.filter(val => new RegExp(valFilter).test(val))
  .map(val => <div>...</div>);`,
            isMigrationConform: MigrationClass.MAYBE
          },

        ]
      } 
  }
};

export const NgRepeatModule =
{
  module: NgRepeat,
  data: data
} 

