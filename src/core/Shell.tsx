import React from 'react';


import withWidth from '@material-ui/core/withWidth';
import { ThemeProvider } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

import { ShellContext } from './';
import { MarkdownView } from './Markdown';

import { ShellDrawer, ShellAppBar, ShellToolsBar, ShellMenuItem, ShellBody } from './UI';



const drawerWidth = 260;

interface ShellProps {
  width: Breakpoint;
}

const Shell: React.FC<ShellProps> = ({ 
  width // width === 'xs' || width === 'sm'
}) => {
  
  console.log(width);
  
  const {service, nav} = React.useContext(ShellContext);
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const pageItem = service.findPageItem(nav.current.pageItem);
    
  const drawer = {
    width: drawerWidth, 
    open: drawerOpen,
    onOpen: () => setDrawerOpen(true),
    onClose: () => setDrawerOpen(false)
  };

  // top app bar with search
  const appBar = (
    <ShellAppBar drawer={drawer}>
      <ShellToolsBar drawer={drawer}/>
    </ShellAppBar>);

  // all left menus
  const leftBar = (
    <ThemeProvider theme={(outer) => ({...outer, ...nav.theme.secondary})}>
      <ShellDrawer drawer={drawer}>
        {service.findPages().map((page, index) => (
          <ShellMenuItem key={index} page={page} />
        ))}
      </ShellDrawer>
    </ThemeProvider>);

  return (
    <ThemeProvider theme={nav.theme.primary}> 
      <ShellBody appBar={appBar} 
        menus={{
          width: drawer.width, 
          open: drawer.open, 
          value: leftBar
        }}>
        
        {pageItem ? <MarkdownView pageItem={pageItem}/> : null}
        
      </ShellBody>
    </ThemeProvider>);
}

export default withWidth()(Shell);
