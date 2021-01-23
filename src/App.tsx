import React from 'react';
import { Theme } from '@material-ui/core/styles';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Shell from './core/Shell';
import { Service } from './core';


const getCurrentLocation = (match: boolean, params: any): Service.Location => {
  const current: Service.Location | null = match ? params as unknown as Service.Location : {};
  
  if(current.pageItem) {
    return { 
      page: current.page, 
      pageItem: `${current.page}/${current.pageItem}`, 
      anchor: current.anchor };
  }
  
  return current;
}

interface AppProps {
  theme: { primary: Theme, secondary?: Theme };
  init: Service.Content;
}

const App: React.FC<AppProps> = ({init, theme}) => {
  const [service, setService] = React.useState<Service.Content>(init);
  
  //const [location, setLocation] = useLocation();
  //const [match, params] = useRoute(process.env.PUBLIC_URL + "/:page/:pageItem?/:anchor?");
  
  
  const current = {} //getCurrentLocation(match, params);
  //console.log("Loading location", location);
  
    
  const setNewLocation = (path: string, target: Service.NewLocation) => {
    const newUrl = `${process.env.PUBLIC_URL}/${path}`;
    console.log("change location", newUrl);
    //setLocation(newUrl);
  }
  
  const loadPageItem = (oldItem: Service.PageItem) => {
    fetch(oldItem.url)
    .then(response => {
      console.log("fetching markdown")
      return response.text();
    })
    .then((markdown) => setService(service.setMarkdown(oldItem, markdown)))
    .catch(err => console.log(err));
  }
  
  return (<Router>
    <Shell theme={theme} service={service}
      loadPageItem={loadPageItem}
      location={{current, onClick: setNewLocation}} />
  </Router>);
}


export default App;