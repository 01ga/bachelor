const app = angularjsApp;

const itemTypes = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger'
}

app.controller('NgRepeatCtrl', ['$scope', function() {
    this.dataList = [
      { itemText: "Dapibus ac facilisis in", href: "#ngRepeat", itemType: itemTypes.SUCCESS },
      { itemText: "Cras sit amet nibh libero", href: "#ngRepeat", itemType: itemTypes.INFO },
      { itemText: "Porta ac consectetur ac", href: "#ngRepeat", itemType: itemTypes.WARNING },
      { itemText:"Vestibulum at eros", href:"#ngRepeat", itemType: itemTypes.DANGER }
    ];
  }]);