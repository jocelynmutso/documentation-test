import React from 'react';

import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import Note from './Note';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
   // color: 'blue',
    //textDecoration: 'underline'
  },
  nestedText: {
//      fontWeight: 900,
    fontSize: '0.9rem',
    paddingLeft: theme.spacing(1), 
    display: 'block',  
  }
}));


interface TopicProps {
  items: {
    name: string, path: string,
    subs: {name: string, path: string}[];
  },
  onClick: (node: React.ReactNode) => void
}

const Topic: React.FC<TopicProps> = ({items, onClick}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const loadTopic = (name: string, path: string) => {
    return onClick(<Note path={path}/>)
  }

  const createSub = (name: string, path: string, id: number) => (
    <ListItem key={id} button className={classes.nested} onClick={() => loadTopic(name, path)}>
      <ListItemText>
        <span className={classes.nestedText}>{name}</span>
      </ListItemText>
    </ListItem>
  );

  return (<React.Fragment>
    <ListItem button onClick={() => setOpen(!open)} className={classes.nested}>
      <ListItemText primary={items.name} onClick={() => loadTopic(items.name, items.path)} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.subs.map((sub, id) => createSub(sub.name, sub.path, id))}
      </List>
    </Collapse>
    <Divider />
  </React.Fragment>);
}

export default Topic;