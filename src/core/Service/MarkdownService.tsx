import React from 'react';
import { Service } from './Service';
import { ImmutableModule, ImmutablePage, ImmutablePageItem } from './Immutables';


class MarkdownServiceContent implements Service.Content {
  private _items: Service.PageItem[];
  private _pages: Service.Page[];
  
  constructor(items: Service.PageItem[], pages: Service.Page[]) {
    this._items = items;
    this._pages = pages;
  }
  findPages() : Service.Page[] {
    return this._pages;
  }
  getPage(id: string): Service.Page {
    const result = this._pages.filter(p => p.id === id);
    if(result.length === 1) {
      return result[0];  
    }
    throw new Error(`Can't get page with id: ${id}'!`);
  }
  getPageItem(id: string): Service.PageItem {
    const result = this._items.filter(p => p.id === id);
    if(result.length === 1) {
      return result[0];  
    }
    throw new Error(`Can't get page items with id: ${id}'!`);
  }
  search(keyword: string): Service.SearchResult[] {
    return [];
  }
}


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
    const src: string = module.markdown;
    const content: React.ReactNode = (<span>smth</span>);
    
    if(!groups[pageId]) {
      groups[pageId] = [];
    }
    
    const pageItem = new ImmutablePageItem(id, pageId, name, src, content);
    groups[pageId].push(pageItem);
    return pageItem;
  });
  
  const pages: Service.Page[] = Object.keys(groups).map(pageId => {
    const name: string = pageId.replaceAll("-", " ");
    return new ImmutablePage(pageId, name, groups[pageId]);
  });
  
  
  
 return new MarkdownServiceContent(items, pages);
};


const markdownLoader = (modules: {key: string, value: string}[], onReady: (modules: Service.Content) => void) => {
  const loadedModules: ImmutableModule[] = [];  
  
  const fetchModules = (index: number, onReady: () => void) => {
    if(index === modules.length) {
      return onReady();
    }
    const module = modules[index];
    fetch(module.key)
      .then(response => {
        return response.text();
      })
      .then((text) => {
        loadedModules.push(new ImmutableModule(module.key, text, module.value));
        fetchModules(index+1, onReady);
      })
      .catch(err => console.log(err));
  }
  
  fetchModules(0, () => {
    const service: Service.Content = parseModules(loadedModules);
    onReady(service);
  });
}
export { markdownLoader };

/*
class MarkdownService implements Service.Content {
  
}
*/


