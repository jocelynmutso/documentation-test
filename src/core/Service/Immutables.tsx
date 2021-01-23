import { Service } from '../Service/';


class ImmutableContent implements Service.Content {
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
    const result = this.findPageItem(id);
    if(result) {
      return result;
    }
    throw new Error(`Can't get page items with id: ${id}'!`);
  }
  
  findPageItem(id?: string): Service.PageItem | undefined {
    if(!id) {
      return undefined;
    }
    const result = this._items.filter(p => p.id === id);
    if(result.length === 1) {
      return result[0];  
    }
    return undefined;
  }
  search(keyword: string): Service.SearchResult[] {
    return [];
  }
  setMarkdown(oldItem: Service.PageItem, markdown: string): Service.Content {
    const newPages: Service.Page[] = [];
    const newItems: Service.PageItem[] = [];
    const newItem = oldItem.setMarkdown(markdown);
    
    for(let item of this._items) {
      if(item.id === newItem.id) {
        newItems.push(newItem);
      } else {
        newItems.push(item);
      }
    }
    
    for(let page of this._pages) {
      if(page.id === newItem.pageId) {
        newPages.push(page.setItem(newItem));
      } else {
        newPages.push(page);
      }
    }

    return new ImmutableContent(newItems, newPages);
    
  }
}

class ImmutableSearchResult implements Service.SearchResult {
  private _preview: string;
  private _type: Service.SearchResultType;
  private _value: Service.Page | Service.PageItem;

  constructor(preview: string, type: Service.SearchResultType, value: Service.Page | Service.PageItem) {
    this._preview = preview;
    this._type = type;
    this._value = value;
  }
  
  get preview(): string {
    return this._preview;
  }
  get type(): Service.SearchResultType {
    return this._type;
  } 
  get value(): Service.Page | Service.PageItem {
    return this._value;
  }
  
}


class ImmutablePage implements Service.Page {
  private _id: string;
  private _name: string;
  private _items: Service.PageItem[];
  
  constructor(id: string, name: string, items: Service.PageItem[]){
    this._id = id;
    this._name = name;
    this._items = items;
  }
  
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get items(): Service.PageItem[] {
    return this._items;
  }
  setItem(newItem: Service.PageItem): Service.Page {
    const newItems: Service.PageItem[] = [];
    for(let item of this._items) {
      if(item.id === newItem.id) {
        newItems.push(newItem);
      } else {
        newItems.push(item);
      }
    }
    return new ImmutablePage(this._id, this._name, newItems);
  }
}


class ImmutablePageItem implements Service.PageItem {

  private _url: string;
  private _id: string;
  private _pageId: string;
  private _name: string;
  private _markdown?: string;
  
  constructor(url: string, id: string, pageId: string, name: string, markdown?: string) {
    this._url = url;
    this._id = id;
    this._pageId = pageId;
    this._name = name;
    this._markdown = markdown;
  }
  get url(): string {
    return this._url;
  }
  get id(): string {
    return this._id;
  }
  get pageId(): string {
    return this._pageId;
  }
  get name(): string {
    return this._name;
  }
  get markdown() {
    return this._markdown
  }
  setMarkdown(markdown: string): Service.PageItem {
    return new ImmutablePageItem(this._url, this._id, this._pageId, this._name, markdown);
  }
}


export { ImmutablePageItem, ImmutablePage, ImmutableSearchResult, ImmutableContent };