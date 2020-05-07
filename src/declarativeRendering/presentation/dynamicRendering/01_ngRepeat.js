import React from 'react';

function NgRepeat(props) {
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
}

export default NgRepeat;

