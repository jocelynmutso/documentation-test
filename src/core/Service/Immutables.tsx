import { Service } from '../Service/';


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
}


class ImmutablePageItem implements Service.PageItem {

  private _id: string;
  private _pageId: string;
  private _name: string;
  private _src: string;
  private _content: (anchor?: string) => React.ReactNode;
  
  constructor(id: string, pageId: string, name: string, src: string, content: (anchor?: string) => React.ReactNode) {
    this._id = id;
    this._pageId = pageId;
    this._name = name;
    this._src = src;
    this._content = content;
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
  get src(): string {
    return this._src
  }
  get content(): (anchor?: string) => React.ReactNode {
    return this._content;
  }
}



class ImmutableModule {
  private _src: string;
  private _module: string;
  private _markdown: string;
  
  constructor(module: string, markdown: string, src: string) {
    this._module = module;
    this._src = src;
    this._markdown = markdown;
  }
  
  get module(): string {
    return this._module;
  }
  get markdown(): string {
    return this._markdown;
  }
  get src(): string {
    return this._src;
  }
}


export { ImmutableModule, ImmutablePageItem, ImmutablePage, ImmutableSearchResult };