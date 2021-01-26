import React from 'react';

import { Theme, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ShellThemeMenu from './ShellThemeMenu';


const useStyles = (drawerWidth: number) => makeStyles((theme: Theme) =>
  createStyles({
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
    list: {
      width: '100%',
      maxWidth: 360,
      padding: 5,
    }
  }),
)();

interface ShellDrawerProps {
  drawer: {
    width: number; 
    open: boolean;
    onClose: () => void;
  }
  children: React.ReactElement[];
}

const ShellDrawer: React.FC<ShellDrawerProps> = ({drawer, children}) => {
  const theme = useTheme();
  const classes = useStyles(drawer.width);
    
  return (<Drawer variant="persistent" anchor="left"
      open={drawer.open}
      className={classes.drawer} 
      classes={{paper: classes.drawerPaper}}>

      <div className={classes.drawerHeader}>
        <IconButton onClick={drawer.onClose} className={classes.iconButton}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>      
      <Divider />
      <List component="nav" className={classes.list}>
        {children}
        <ShellThemeMenu />
      </List>
    </Drawer>);
}

export default ShellDrawer;
