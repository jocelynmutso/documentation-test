import React from 'react';
import JsxParser from "react-jsx-parser";

import { Plugin, Attacher, Transformer } from "unified";
import { useRoute, useLocation } from "wouter";

import { Node } from 'unist';
import visit from 'unist-util-visit';

import ReactMarkdown from 'react-markdown'

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

interface TextNode extends Node {
  value: string;
  anchor?: string;
}

const parseModules = (modules: ImmutableModule[]): Service.Content => {
  const anchorPlugin: Plugin = (options) => {
    
    const transformer: Transformer = (tree, _file) => {
      const anchors: TextNode[] = [];
      visit(tree, 'text', (node: TextNode) => {
        const start = node.value.indexOf("{#");
        if(start < 0) {
          return;
        }

        const end = node.value.indexOf("}", start);
        node.anchor = node.value.substring(start, end + 1);
        node.value = node.value.replace(node.anchor, "");
        anchors.push(node);
      })
      return tree;
    };
    
    return transformer;
  };
  
  const Image = (props: any) => {
    return <img {...props} 
      src={`${process.env.PUBLIC_URL}/images/${props.src}`}
      style={ {maxWidth: '75%'} } /> 
  }
  
  const Link = (onClick: (anchor: string) => void, props: any) => {
    console.log(props);
    if(props.href.indexOf("#") === 0) {
      return <a href="" onClick={(e) => {
        e.preventDefault();
        onClick(props.href.substring(1)); }
      }>{props.node.children[0].value}</a>        
    }
    return <a href="" onClick={(e) => {e.preventDefault();}}>link</a>
  }
  
  type AnchorRef = {
    name: string;
    value: React.RefObject<HTMLSpanElement>;
  }
  

  const Text = (anchorRefs: AnchorRef[], props: any) => {
    const textNode = props.node as TextNode;
    if(textNode.anchor) {
      const ref: React.RefObject<HTMLSpanElement> = React.createRef();
      
      anchorRefs.push({name: textNode.anchor, value: ref});
      console.log("anchor node", props.node);
      return (<span ref={ref}>{props.value}</span>)
    }
    return props.value; 
  }
  
  
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
    
    
    interface RenderMarkdownProps {
      anchor?: string
    }
    
    
    interface PageParams {
      pageId: string;
      itemId: string;
      anchor?: string;
    }

    
    const RenderMarkdown: React.FC<RenderMarkdownProps> = ({anchor}) => {
      const [location, setLocation] = useLocation();
      const anchorRefs: AnchorRef[] = [];
      const [match, params] = useRoute("/documentation-test/pages/:pageId/:itemId/:anchor?");
      const openPage: PageParams | null = match ? params as unknown as PageParams : null;
      const pageItem = openPage ? `${openPage.pageId}/${openPage.itemId}` : undefined;
      
  
  
  
      React.useEffect(() => {
        
        if(anchor) {
          anchorRefs.filter(r => r.name === anchor)[0]
            .value.current?.scrollIntoView({behavior: "smooth", block: "start"});
            
        }
        console.log("time to load", anchorRefs, anchor);
      }, [anchorRefs, anchor])

      return (<div>
        <ReactMarkdown 
          source={src}
          plugins={[anchorPlugin]} 
          renderers={{ 
            image: Image,
            link: (props) => Link((anchor) => {
              setLocation("/documentation-test/pages/" + pageItem + "/" + anchor);
              
            }, props),
            text: (props) => Text(anchorRefs, props) 
          }}/>
      </div>);
    }
    
    
    
    const content: (anchor?: string) => React.ReactNode = (anchor?: string) => {
      return <RenderMarkdown anchor={anchor} />
    };
    
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
  
 console.log("items loaded");
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

