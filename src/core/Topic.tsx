import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import { Service } from './';
import MarkdownRenderer from './MarkdownRenderer';



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


interface TopicItem {
  name: string,
  subs: {name: string, path: string}[];
}

interface TopicProps {
  page: Service.Page,
  onClick: (node: React.ReactNode) => void
}

const Topic: React.FC<TopicProps> = ({page, onClick}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const createSub = (pageItem: Service.PageItem) => (
    <ListItem key={pageItem.id} button 
      className={classes.nested} 
      onClick={() => onClick(<MarkdownRenderer pageItem={pageItem}/>)}>
      
      <ListItemText>
        <span className={classes.secondaryText}>{pageItem.name}</span>
      </ListItemText>
    </ListItem>
  );

  return (<React.Fragment>
    <ListItem button onClick={() => setOpen(!open)} className={classes.nested}>
      <ListItemText>
        <span className={classes.primaryText}>{page.name}</span>
      </ListItemText>
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {page.items.map(createSub)}
      </List>
    </Collapse>
    <Divider />
  </React.Fragment>);
}

export type {TopicItem};
export {Topic};