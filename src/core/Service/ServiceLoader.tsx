
import { Service } from './Service';
import { ImmutableModule, ImmutablePage, ImmutablePageItem, ImmutableContent } from './Immutables';

/*
const fetchModules = (
  loaded: (newModule: ImmutableModule) => void,
  modules: {url: string, value: string}[], 
  index: number, 
  whenReady: () => void) => {
  
  if(index === modules.length) {
    return whenReady();
  }
  const module = modules[index];
  fetch(module.url)
    .then(response => {
      return response.text();
    })
    .then((text) => {
      loaded(new ImmutableModule(module.url, text, module.value));
      fetchModules(loaded, modules, index+1, whenReady);
    })
    .catch(err => console.log(err));
}*/

const parseModules = (modules: ImmutableModule[]): Service.Content => {
  const groups: Record<string, Service.PageItem[]> = {};
  
  const items: Service.PageItem[] = modules.map((module: ImmutableModule, index: number) => {
    // clean up, remove trailing and prefix
    const moduleSrc: string = module.src
      .substring(2, module.src.length - 3);

    // file path, 0 - page name, 1 - page item name      
    const pageNameAndItemName: string[] = moduleSrc.split("/");
    
    // this should be file name
    const name: string = pageNameAndItemName[1].replaceAll("-", " ");
    const pageId: string = pageNameAndItemName[0];
      
    const id: string = moduleSrc;

    if(!groups[pageId]) {
      groups[pageId] = [];
    }

    const pageItem = new ImmutablePageItem(module.url, id, pageId, name);
    groups[pageId].push(pageItem);
    return pageItem;
  });
  
  const pages: Service.Page[] = Object.keys(groups).map(pageId => {
    const name: string = pageId.replaceAll("-", " ");
    return new ImmutablePage(pageId, name, groups[pageId]);
  });
  
 return new ImmutableContent(items, pages);
}

class ServiceLoader {
  private _modules: {url: string, value: string}[];
  
  constructor(modules: () => {url: string, value: string}[]) {
    this._modules = modules();
  }

  onReady = (callback: (service: Service.Content) => void) => {
    console.log(this)
    
    const modules = this._modules.map(m => {
      return new ImmutableModule(m.url, m.value);
    });
    const service: Service.Content = parseModules(modules);
    
    callback(service)
  }
}

export { ServiceLoader };

