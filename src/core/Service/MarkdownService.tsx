import { Service } from './Service';


class ContentModule {
  private _module: string;
  private _markdown: string;
  
  constructor(module: string, markdown: string) {
    this._module = module;
    this._markdown = markdown;
  }
  
  get module(): string {
    return this._module;
  }
  get markdown(): string {
    return this._markdown;
  }
}


const markdownLoader = (modules: string[], onReady: (modules: ContentModule[]) => void) => {
  const loadedModules: ContentModule[] = [];  
  
  const fetchModules = (index: number, onReady: () => void) => {
    if(index === modules.length) {
      return onReady();
    }
    const module = modules[index];
    fetch(module)
      .then(response => response.text())
      .then((text) => {
        loadedModules.push(new ContentModule(module, text));
        fetchModules(index+1, onReady);
      });
  }
  fetchModules(0, () => onReady(loadedModules));
}
export { markdownLoader };
/*
class MarkdownService implements Service.Content {
  
}
*/


