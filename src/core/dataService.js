import { NgRepeatModule } from "../declarativeRendering/presentation/dynamicRendering/01_ngRepeat";
import { NgClassModule } from "../declarativeRendering/presentation/styling/02_ngClass";
import { NgStyleModule } from "../declarativeRendering/presentation/styling/03_ngStyle";
import { ATagModule } from "../declarativeRendering/presentation/uiElements/05_aTag";
import { FormElementsModule } from "../declarativeRendering/presentation/uiElements/06_formElements";
import { PresentationLogicModule } from "../declarativeRendering/presentationConstraints/07_presentationLogic";

const modules = [
  NgRepeatModule,
  NgClassModule,
  NgStyleModule,
  ATagModule,
  FormElementsModule,
  PresentationLogicModule
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