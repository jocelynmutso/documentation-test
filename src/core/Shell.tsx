import React from 'react';

import clsx from 'clsx';
import withWidth from '@material-ui/core/withWidth';

import { Theme, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

import Navigation from './Navigation';
import {Topic, TopicItem} from './Topic';

const drawerWidth = 240;

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
      backgroundColor: theme.palette.background.paper,
      padding: 5,
    }
  }),
);

interface ShellProps {
  items: TopicItem[];
  width: Breakpoint;
}

const Shell: React.FC<ShellProps> = ({items, width}) => {
  const theme = useTheme();
  const classes = useStyles();

  const [nowShowing, setNowShowing] = React.useState<React.ReactNode>(<div></div>);
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const openTopicSub = (node: React.ReactNode) => {
    if(width === 'xs' || width === 'sm') {
      handleDrawerClose();
    }
    setNowShowing(node);
  }

  const topics = items.map((item, index) => <Topic key={index} items={item} onClick={openTopicSub} />)

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
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List component="nav" className={classes.list}>{topics}</List>
    </Drawer>);

  return (<div className={classes.root}>
    <CssBaseline />

    {appBar}{drawer}
    <main className={clsx(classes.content, { [classes.contentShift]: open}) }>
      <div className={classes.drawerHeader} />
      {nowShowing}
    </main>

  </div>);
}

export default withWidth()(Shell);
