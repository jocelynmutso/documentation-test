import React from 'react';

import { useRoute, useLocation } from "wouter";

import Shell from './core/Shell';
import { Service } from './core';


interface PageParams {
  pageId: string;
  itemId: string;
  anchor?: string;
}

interface AppProps {
  loader: (setService: (service: Service.Content) => void) => void; 
}

const App: React.FC<AppProps> = ({loader}) => {
  const [location, setLocation] = useLocation();
  const [service, setService] = React.useState<Service.Content | undefined>();
  const [match, params] = useRoute("/documentation-test/pages/:pageId/:itemId/:anchor?");
  const openPage: PageParams | null = match ? params as unknown as PageParams : null;

  React.useEffect(() => {
    loader(setService);
    console.log("loading service", location);
  }, [loader, setService, location]);

  if(!service) {
    return <div>Loading documentation...</div>
  };
  
  console.log(openPage);
  
  const pageItem = openPage ? `${openPage.pageId}/${openPage.itemId}` : undefined;
  const anchor = openPage && openPage.anchor ? `{#${openPage.anchor}}`: undefined
  
  return <Shell service={service} location={{
    pageItem: pageItem,
    anchor: anchor,
    onClick: (newLink: string) => {
      setLocation("/documentation-test/pages/" + newLink);
    } 
  }}/>
}
export default App;