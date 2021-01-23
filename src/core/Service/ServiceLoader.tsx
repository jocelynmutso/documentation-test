
import { Service } from './Service';
import { ImmutablePage, ImmutablePageItem, ImmutableContent } from './Immutables';

interface NodeModule {
  url: string;
  name: string;
}

const emptyService = new ImmutableContent([], []);

const createMarkdownService = (modules: NodeModule[]): Service.Content => {
  if(modules.length === 0) {
    return emptyService;
  }
  
  console.log("Init Markdown Service", modules);
  const groups: Record<string, Service.PageItem[]> = {};
  
  const items: Service.PageItem[] = modules.map((module: NodeModule, index: number) => {
    // clean up, remove trailing and prefix
    const moduleSrc: string = module.name
      .substring(2, module.name.length - 3);

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

export type { NodeModule };
export { createMarkdownService };

