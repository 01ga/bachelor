import React from 'react';
import { MigrationClass } from '../../../core/migrationCheck';

export function NgClass(props) {

  const  dataList = [
    { itemText: "Kleingeschriebener Text", itemClass: "text-lowercase" },
    { itemText: "Großgeschriebener Text", itemClass: "text-uppercase" },
    { itemText: "Die ersten Buchstaben großgeschrieben", itemClass: "text-capitalize" }
  ];

  const html = dataList.map((item, index) => {
    const isEven = index%2 === 0;
    const oddEvenClasses = isEven ? "green" : "thumbnail";
    return (
        <p key={item.itemText}
            className={`${item.itemClass} ${oddEvenClasses}`}>
            {item.itemText}
        </p>
    );
  });

  return <blockquote>{html}</blockquote>;

}

const data = {
  section: {
    layer: "Deklaratives Rendern mit React", 
    group: "Darstellung",
    spec: "Gestaltung"
  },
  article: {
    title:"ngClass",
    codeSnippets: [{
      name:"code.js",
        lang:"js",
        code: 
`export function NgClass(props) {

  const  dataList = [
    { itemText: "Kleingeschriebener Text", itemClass: "text-lowercase" },
    { itemText: "Großgeschriebener Text", itemClass: "text-uppercase" },
    { itemText: "Die ersten Buchstaben großgeschrieben", itemClass: "text-capitalize" }
  ];

  const html = dataList.map((item, inedx) => {
    const isEven = index%2 === 0;
    const oddEvenClasses = isEven ? "green" : "thumbnail";
    return (
        <p key={item.itemText}
            className={item.itemClass + ' ' + oddEvenClasses}}>
            {item.itemText}
        </p>
    );
  });

  return <blockquote>{html}</blockquote>;
}`
    },
    {
        name:"styles.css",
        lang:"css",
        code:
`.thumbnail {
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
}
.green {
    color: green;
}`
    }],
      result: <NgClass/>,
      angularLink: "ang-ngClass",
      migrationCheckData: {
        info: [
          {
            change: "ng-class",
            ang: 
`<div ng-class="item.class">
    ...
</div>`,
            react:
`<div className={item.class}>
    ...
</div>`,
            isMigrationConform: MigrationClass.YES
          },
          {
            change: "ng-class-odd, ng-class-even",
            ang: 
`<div ng-repeat=""item in data"
    ng-class-odd="item.classOdd"
    ng-class-even="item.classEven">
    ...
</div>`,
            react:
`data.map((item, index) => {
    const isEven = index%2 === 0;
    const oddEvenClasses = 
        isEven ? item.classOdd : item.classEven;
    return (
        <div className={oddEvenClasses}>
            ...
        </div>
    )
})`,
            isMigrationConform: MigrationClass.MAYBE
          }
        ]
      } 
  }
};

export const NgClassModule =
{
  module: NgClass,
  data: data
} 

