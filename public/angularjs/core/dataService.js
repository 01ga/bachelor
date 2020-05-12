angularjsApp.factory('dataService', 
    function(
        ngRepeatData, 
        ngClassData, 
        ngStyleData,
        validationStylingData) {

    const appData = [
        ngRepeatData(),
        ngClassData(),
        ngStyleData(),
        validationStylingData()
    ];

    function unique(arr) {
    return arr.filter((val, index, values)=> values.indexOf(val) === index);
    }

    const getLayers = () =>
        unique(appData.map(item => item.section.layer));
      
    const getFnGroups = layer => {
        const groups = appData.filter(item => item.section.layer === layer)
          .map(item => item.section.group);
        return unique(groups);
    }
      
    const getFnSpec = (layer, group) => {
        const specs = appData.filter(item => item.section.layer === layer)
          .filter(item => item.section.group === group)
          .map(item => item.section.spec);
        return unique(specs);
    }
      
    const getArticles = (layer, group, spec) => {
        const res = appData.filter(item => item.section.layer === layer)
          .filter(item => item.section.group === group)
          .filter(item => item.section.spec === spec)
          .map(item => item.article);
          return res;
    }

    const layers = getLayers();
    const res = [];
    for(const layer of layers) {
        const section = {layer: layer};
        section.groups = [];
        const groups = getFnGroups(layer);
        for(const group of groups) {
            const gr = {group: group};
            section.groups.push(gr);
            gr.specs = []
            const specs = getFnSpec(layer, group);
            for( const spec of specs) {
                gr.specs.push({spec: spec, articles: getArticles(layer, group, spec)});
            }
        }
        res.push(section);
    }

    return {
        data: () => res
    }
        
});