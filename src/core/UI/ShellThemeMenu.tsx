import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import { Service, ShellContext, ShellTheme } from '../';


const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  primaryText: {
    fontWeight: 600,
  },
  secondaryText: {
    fontSize: '0.9rem',
    paddingLeft: theme.spacing(1), 
    display: 'block', 
    color: theme.palette.text.secondary,
  },
}));

interface ShellThemeMenuProps {
  
}

const ShellThemeMenu: React.FC<ShellThemeMenuProps> = () => {
  const classes = useStyles();
  const { config, nav } = React.useContext(ShellContext);
  const [ open, setOpen ] = React.useState<boolean>(false);
  
  const createMenuItem = (aTheme: ShellTheme, arrayIndex: number) => {
    return (<ListItem button key={arrayIndex} className={classes.nested} onClick={() => nav.handleThemeChange(aTheme)}>
      <ListItemText>
        <span className={classes.secondaryText}>Select theme no: {arrayIndex}</span>
      </ListItemText>
    </ListItem>);
  }

  return (<React.Fragment>
    <ListItem button className={classes.nested}  onClick={() => setOpen(!open)} >
      <ListItemText>
        <span className={classes.primaryText}>Theme Selection</span>
      </ListItemText>
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        { config.themeCollection.map(createMenuItem) }
      </List>
    </Collapse>
    <Divider />
  </React.Fragment>);
}

export default ShellThemeMenu;