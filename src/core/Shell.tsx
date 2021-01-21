import React from 'react';

import clsx from 'clsx';
import withWidth from '@material-ui/core/withWidth';
import { Theme, makeStyles, createStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

import { DrawerTheme } from '../themes';
import Navigation from './Navigation';
import { Topic } from './Topic';
import { Service } from './';



const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },

    iconButton: {
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    list: {
      width: '100%',
      maxWidth: 360,
      padding: 5,
    }
  }),
);

interface ShellProps {
  service: Service.Content;
  location: {
    pageItem?: string;
    anchor?: string;
    onClick: (anchor: string) => void;
  };
  width: Breakpoint;
}

const Shell: React.FC<ShellProps> = ({service, location, width}) => {
  const theme = useTheme();
  const classes = useStyles();
  
  const [nowShowing, setNowShowing] = React.useState<React.ReactNode>();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if(location.pageItem) {
      setNowShowing(service.getPageItem(location.pageItem).content(location.anchor));
    }
  }, [service, location.pageItem, location.anchor, setNowShowing])

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const openTopicSub = (pageItem: Service.PageItem) => {
    if(width === 'xs' || width === 'sm') {
      handleDrawerClose();
    }
    
    location.onClick(pageItem.id);
  }

  const topics = service.findPages().map((page, index) => <Topic key={index} page={page} onClick={openTopicSub} />)

  const appBar = (<AppBar position="fixed" 
      className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
      <Navigation
        drawer={{ open: open, onClick: handleDrawerOpen }}
        onTitleClick={() => setNowShowing(<div />) } />
    </AppBar>);

  const drawer = (<Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{paper: classes.drawerPaper}}>


      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose} className={classes.iconButton}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>      
      <Divider />
      <List component="nav" className={classes.list}>{topics}</List>
    </Drawer>);

  return (<div className={classes.root}>
    <CssBaseline />

    {appBar}
    
    <ThemeProvider theme={(outer) => ({...outer, ...DrawerTheme})}>
      {drawer}
    </ThemeProvider>

    <main className={clsx(classes.content, { [classes.contentShift]: open}) }>
      <div className={classes.drawerHeader} />
      {nowShowing}
    </main>

  </div>);
}

export default withWidth()(Shell);
