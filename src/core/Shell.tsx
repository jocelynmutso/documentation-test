import React from 'react';

//import withWidth from '@material-ui/core/withWidth';
import { Theme, ThemeProvider } from '@material-ui/core/styles';
//import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';


import { Service } from './';
import { MarkdownView } from './Markdown';

import { ShellDrawer, ShellAppBar, ShellToolsBar, ShellMenuItem, ShellBody } from './UI';


const isPage = (value: any): value is Service.Page => {
  return value.items !== undefined
}

const isPageItem = (value: any): value is Service.PageItem => {
    return value.pageId !== undefined
}

const drawerWidth = 260;

interface ShellProps {
  theme: { primary: Theme, secondary?: Theme };
  
  service: Service.Content;
  loadPageItem: (item: Service.PageItem) => void,
  
  location: {
    current: Service.Location;
    onClick: (path: string, target: Service.NewLocation) => void;
  };
  //width: Breakpoint;
}


const Shell: React.FC<ShellProps> = ({
  service, 
  loadPageItem,
  location, theme, //width
}) => {
  
  const [drawerOpen, setDrawerOpen] = React.useState(false || location.current.page ? true : false);
  const [activeMenu, setActiveMenu] = React.useState<Service.Location | undefined>(location.current);
  
  const drawer = {
    width: drawerWidth, 
    open: drawerOpen,
    onOpen: () => setDrawerOpen(true),
    onClose: () => setDrawerOpen(false)
  };
  
  const onNavigate = (target: Service.NewLocation) => {
    
    // nothing is defined, collapse menu
    if(!target.to) {
      setActiveMenu(undefined);
      return;
    }
    
    if(typeof target.to === "string") {
      if(!activeMenu) {
        return null;
      }
     
     const navTo: Service.Location = {
        pageItem: activeMenu.pageItem, 
        page: activeMenu.page, 
        anchor: target.to as string
      };
      
      setActiveMenu(navTo);
      location.onClick(`${navTo.pageItem}/${navTo.anchor}`, target);
      return;  
    }
    
    if(isPage(target.to)) {
      const page = target.to as Service.Page;
      setActiveMenu({page: page.id});
      location.onClick(page.id, target);
    }
    
    if(isPageItem(target.to)) {
      const item = target.to as Service.PageItem;
      setActiveMenu({pageItem: item.id, page: item.pageId});
      location.onClick(item.id, target);
    }    
  };

  let markdown: string | undefined = undefined;
  let pageItem: Service.PageItem | undefined  = undefined;
  if(activeMenu?.pageItem && activeMenu.pageItem) {
    pageItem = service.getPageItem(activeMenu.pageItem);
    markdown = pageItem.markdown;
  }

  // load on demand
  React.useEffect(() => {
    if(pageItem && !markdown) {
      console.log("LOADING...", pageItem);
      //console.log(pageItem);
      loadPageItem(pageItem);
    } else {
      //console.log("CACHED...", pageItem);
    }

  }, [activeMenu, service, loadPageItem, pageItem, markdown])

  // top app bar with search
  const appBar = (
    <ShellAppBar drawer={drawer}>
      <ShellToolsBar drawer={drawer}/>
    </ShellAppBar>);

  // all left menus
  const menus = (
    <ThemeProvider theme={(outer) => ({...outer, ...theme.secondary})}>
      <ShellDrawer drawer={drawer}>
        {service.findPages().map((page, index) => (
          <ShellMenuItem key={index} page={page} onOpen={onNavigate} open={activeMenu?.page === page.id}/>
        ))}
      </ShellDrawer>
    </ThemeProvider>);

  return (
    <ThemeProvider theme={theme.primary}> 
      <ShellBody appBar={appBar} menus={{
        width: drawer.width, 
        open: drawer.open, 
        value: menus
      }}>
        
        {pageItem ? <MarkdownView source={pageItem} setLocation={onNavigate} anchor={activeMenu?.anchor}/>: null}
      </ShellBody>
    </ThemeProvider>);
}

//export default withWidth()(Shell);
export default Shell;
