import React from 'react';

declare namespace Service {
  interface Content {
    find(): Page[];
    get(id: string): Page;
    search(keyword: string): SearchResult[];    
	}
	
	interface SearchResult {
		type: "page" | "pageItem" | "pageItemContent";
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