import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useRoute, useLocation } from "wouter";

import Shell from './core/Shell';
import { Service } from './core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

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
  loader: (setService: (service: Service.Content) => void) => void;
}

const App: React.FC<AppProps> = ({loader, theme}) => {
  const classes = useStyles();

  const [location, setLocation] = useLocation();
  const [service, setService] = React.useState<Service.Content | undefined>();
 
  const [match, params] = useRoute(process.env.PUBLIC_URL + "/:page/:pageItem?/:anchor?");
  const current = getCurrentLocation(match, params);
  console.log("Loading location", location);

  React.useEffect(() => {
    loader(setService);
  }, [loader, setService]);


  if(!service) {
    return (<div className={classes.root}>Loading...</div>);
  };
  
  const loadPageItem = (oldItem: Service.PageItem) => {
    fetch(oldItem.url)
    .then(response => {
      console.log("fetching markdown")
      return response.text();
    })
    .then((markdown) => setService(service.setMarkdown(oldItem, markdown)))
    .catch(err => console.log(err));
  }
  
  const setNewLocation = (path: string, target: Service.NewLocation) => {
    const newUrl = `${process.env.PUBLIC_URL}/${path}`;
    console.log("change location", newUrl);
    setLocation(newUrl);
  }
  
  return <Shell theme={theme}
    service={service}
    loadPageItem={loadPageItem}
    location={{current, onClick: setNewLocation}} />
}


export default App;