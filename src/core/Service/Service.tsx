

declare namespace Service {
  interface Content {
    findPages(): Page[];
    getPage(id: string): Page;
    getPageItem(id: string): PageItem;
    search(keyword: string): SearchResult[];
    
    setMarkdown(item: PageItem, markdown: string): Service.Content;
	}
	
  enum SearchResultType {
    page, pageItem, pageItemContent
  }
    
	interface SearchResult {
		type: SearchResultType;
		value: Page | PageItem;
		preview: string;
	}

	interface Page {
	  id: string;
    name: string;
    items: PageItem[]
    setItem(newItem: Service.PageItem): Service.Page;
	}
	
	interface PageItem {
    url: string;
		id: string;
    pageId: string;
		name: string;
		markdown?: string;
    setMarkdown(markdown: string): PageItem;
	}
  
  interface Location {
    page?: string;
    pageItem?: string;
    anchor?: string;
  }
  
  interface NewLocation {
    from?: PageItem | Page;
    to?: string | PageItem | Page;
  }
}

export type { Service }