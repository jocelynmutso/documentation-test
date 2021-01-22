

import React from 'react';

import clsx from 'clsx';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';



const useStyles = (drawerWidth: number) => makeStyles((theme: Theme) =>
  createStyles({
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
  }),
)();

interface ShellAppBarProps {
  drawer: { width: number, open: boolean },
  children: React.ReactNode;
}

const ShellAppBar: React.FC<ShellAppBarProps> = ({drawer, children}) => {
  const classes = useStyles(drawer.width);
  const className = clsx(classes.appBar, { [classes.appBarShift]: drawer.open });
  return (<AppBar position="fixed" className={className}>{children}</AppBar>);
}

export default ShellAppBar;
