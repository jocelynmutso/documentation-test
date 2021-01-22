import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import { Service } from '../Service';


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

interface ShellMenuItemProps {
  page: Service.Page;
  open: boolean;
  onOpen: (target: Service.NewLocation) => void;
}

const ShellMenuItem: React.FC<ShellMenuItemProps> = ({page, open, onOpen}) => {
  const classes = useStyles();

  return (<React.Fragment>
    <ListItem button onClick={() => onOpen({to: open ? undefined : page})} className={classes.nested}>
      <ListItemText>
        <span className={classes.primaryText}>{page.name}</span>
      </ListItemText>
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {page.items.map(pageItem => (
          <ListItem button 
            key={pageItem.id}
            className={classes.nested} 
            onClick={() => onOpen({from: page, to: pageItem})}>
            <ListItemText>
              <span className={classes.secondaryText}>{pageItem.name}</span>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Collapse>
    <Divider />
  </React.Fragment>);
}

export default ShellMenuItem;