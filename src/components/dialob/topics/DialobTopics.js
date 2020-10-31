import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import MenuGF from './topic-gf/MenuGF';
import MenuDEL from './topic-del/MenuDEL';
import MenuRES from './topic-res/MenuRES';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: 'blue',
    textDecoration: 'underline'
  },
  nestedText: {
    fontWeight: 900
  }
}));


export default function DialobTopics({setTopicContent}) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      <MenuGF classes={classes} setTopicContent={setTopicContent} />
      <MenuDEL classes={classes} setTopicContent={setTopicContent} />
      <MenuRES classes={classes} setTopicContent={setTopicContent} />
    </List>
  );
}
