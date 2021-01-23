import React from 'react';
import { Theme, createMuiTheme } from '@material-ui/core/styles';
import { createMarkdownService, Service } from '../';
import { History } from 'history';

interface ShellContextConfig {
  markdown: {
    url: string,
    name: string,
  }[],
  theme: {
    primary: Theme,
    secondary: Theme
  }
} //config will have seed values from where everything starts, to be used when provider initialises (ex: themes)


interface ShellNav { //provides current location, and handles changing current to new location
  current: Service.Location; // 
  handleOpen: (target: Service.NewLocation) => void;
}

interface ShellContextType {  //declare what is in the context
  config: ShellContextConfig;
  service: Service.Content,
  nav: ShellNav
}

interface ShellContextProviderProps {
  config: ShellContextConfig;
  route: Service.Location; 
  children: React.ReactNode;
  history: History;
}

const theme = createMuiTheme({});

const ShellContext = React.createContext<ShellContextType>({  //fill out the context, give initial values to make it shut up
  service: createMarkdownService([]),
  nav: { 
    current: {},
    handleOpen: (target) => { console.log(target) }
  },
  config: {
    markdown: [],
    theme: {
      primary: theme,
      secondary: theme,
    }
  }
});

interface ShellState {
  service: Service.Content,
  location: Service.Location,
}



interface ShellAction {
  type: "setLocation" | "setMarkdown",
  markdown?: {item: Service.PageItem, text: string},
  newLocation?: Service.NewLocation,
}

const isPage = (value: any): value is Service.Page => {
  return value.items !== undefined
}

const isPageItem = (value: any): value is Service.PageItem => {
    return value.pageId !== undefined
}

const reducer = (oldState: ShellState, action: ShellAction): ShellState => {
  if(action.type === "setLocation") {
 
     // location not defined
    if(!action.newLocation) {
      console.error("action is missing location field", action)
      return oldState;
    }
 
    const location = action.newLocation;
 
     // nothing is defined, collapse menu
    if(!location.to) {
      return { 
        service: oldState.service,
        location: {}
      };
    }
    
    // to is anchor link, but we dont know to where
    if(typeof location.to === "string") {
      
      // page item not defined, don't know where to find anchor 
      if(!oldState.location.pageItem) {
        return oldState;
      }
     
      // previously there's a page item open set anchor on the location
      const newLocation: Service.Location = {
        pageItem: oldState.location.pageItem, 
        page: oldState.location.page, 
        anchor: location.to as string
      };
    
      return { 
        service: oldState.service,
        location: newLocation
      };
    }
    
    // Navigate to a page
    if(isPage(location.to)) {
      const page = location.to as Service.Page;
      const newLocation: Service.Location = { page: page.id };
      return { 
        service: oldState.service,
        location: newLocation
      };
    }
    
    if(isPageItem(location.to)) {
      const item = location.to as Service.PageItem;
      const newLocation: Service.Location = { page: item.pageId, pageItem: item.id };
      return { 
        service: oldState.service,
        location: newLocation
      };
    }
    
  } else if(action.type === "setMarkdown") {
    
    // markdown not defined
    if(!action.markdown) {
      console.error("action is missing markdown fields", action)
      return oldState;
    }
    
    return {
      service: oldState.service.setMarkdown(action.markdown.item, action.markdown.text),
      location: oldState.location
    }
  }
  return oldState;
}

const parseRoute = (route: Service.Location): Service.Location => {
  
  let pageItem;
  if(route.pageItem) {
    pageItem = (route.page? route.page: "") + "/" + route.pageItem;
  }
  
  const result = {
    page: route.page, 
    pageItem: pageItem,
    anchor: route.anchor
  };
  
  console.log("creating location from route", result);
  return result;
}

const ShellContextProvider: React.FC<ShellContextProviderProps> = ({children, config, route, history}) => {

  // link reducer to react hook with initial state
  const [state, dispatch] = React.useReducer(reducer, {
    location: React.useMemo(() => parseRoute(route), [route]),
    service: React.useMemo(() => createMarkdownService(config.markdown), [config.markdown]) // create new markdown service from config
  });

  // determine initial navigation location
  const nav: ShellNav = {
    current: state.location,
    handleOpen: (target: Service.NewLocation) => {
      // Change the UI location
      
      const action: ShellAction = { type: "setLocation", newLocation: target }
      dispatch(action);
    }
  };
  
  React.useEffect(() => {
    let newHistory;
    if(state.location.pageItem) {
      newHistory = state.location.pageItem;
      if(state.location.anchor) {
        newHistory += "/" + state.location.anchor;
      }
      
    } else if(state.location.page) {
      newHistory = state.location.page;
    }
    
    console.log("New History", newHistory);
    if(newHistory) {
      history.push("/" + newHistory);  
    }
  }, [state.location, history])
  
    
  React.useEffect(() => {
    if(state.location.pageItem) {
      
      const pageItem = state.service.findPageItem(state.location.pageItem);
      if(!pageItem) {
        console.error("page item not found!", state.location.pageItem);
        return;
      }
      
      if(pageItem.markdown) {
        console.log("markdown already loaded!", state.location.pageItem);
        return;
      }
      
      const startLoadTime = new Date().getTime();
      
      // load the markdown
      fetch(pageItem.url)
        .then(response => {
          console.log("fetching markdown")
          return response.text();
        })
        .then((text) => {
          
          const endLoadTime = new Date().getTime();
          const diffTime = endLoadTime - startLoadTime
          
          setTimeout(() => {
            // Change the markdown on the page item
            const action: ShellAction = { type: "setMarkdown", markdown: { item: pageItem, text: text}}
            dispatch(action);            
          }, Math.max(500 - diffTime, 0));
          
        })
        .catch(err => {
          // Change the markdown on the page item to ERROR
          console.log(err)
          const action: ShellAction = { type: "setMarkdown", markdown: { item: pageItem, text: err}}
          dispatch(action);
        });
    }
    
  }, [state.location, state.service])

  //overwrite initial values anyway
  const contextValue: ShellContextType = { config, service: state.service, nav };
  
  //initialise provider
  return (
    <ShellContext.Provider value={contextValue}>
      {children}
    </ShellContext.Provider>
    
  );
}

export {ShellContextProvider, ShellContext};