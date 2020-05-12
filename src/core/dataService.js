import { NgRepeatModule } from "../declarativeRendering/presentation/dynamicRendering/01_ngRepeat";
import { NgClassModule } from "../declarativeRendering/presentation/design/02_ngClass";

const modules = [
  NgRepeatModule,
  NgClassModule
];
const appData = [];
for(const module of modules) {
  appData.push(module.data);
}

function unique(arr) {
  return arr.filter((val, index, values)=> values.indexOf(val) === index);
}

const DataService = {
  
    createUIId: (name) => "react-" + name.replace(/\s/g,''),
      
    getLayers: () => unique(appData.map(item => item.section.layer)),
      
    getFnGroups: (layer) => {
        const groups = appData.filter(item => item.section.layer === layer)
          .map(item => item.section.group);
        return unique(groups);
      },
      
    getFnSpec: (layer, group) => {
        const specs = appData.filter(item => item.section.layer === layer)
          .filter(item => item.section.group === group)
          .map(item => item.section.spec);
        return unique(specs);
      },
      
    getArticles: (layer, group, spec) => {
        const res = appData.filter(item => item.section.layer === layer)
          .filter(item => item.section.group === group)
          .filter(item => item.section.spec === spec)
          .map(item => item.article);
          return res;
      }
}

export default DataService;