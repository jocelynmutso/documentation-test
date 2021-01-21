import React from 'react';

declare namespace Service {
  interface Content {
    
    findPages(): Page[];
    getPage(id: string): Page;
    getPageItem(id: string): PageItem;
        
    search(keyword: string): SearchResult[];
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
	}
	
	interface PageItem {
		id: string;
    pageId: string;
		name: string;
		src: string;
		content: React.ReactNode;
	}
}

export type { Service }