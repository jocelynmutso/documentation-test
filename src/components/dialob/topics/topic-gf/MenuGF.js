import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import SubTopicLM from './SubTopicLM'
import SubTopicGL from './SubTopicGL'
import SubTopicREG from './SubTopicREG'
import { Typography } from '@material-ui/core';

export default class MenuGF extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((oldState) => {
      return { open: !oldState.open };
    });
  }

  render() {
    const { handleClick } = this;
    const { open } = this.state;
    const { classes, setTopicContent } = this.props;

    return (<div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="General Features" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => setTopicContent(<SubTopicLM />) }>
            <ListItemText primary="Lifecycle Management and Versioning" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => setTopicContent(<SubTopicGL />) }>
            <ListItemText primary="Global and Local Lists" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => setTopicContent(<SubTopicREG />) }>
            <ListItemText primary="Working with Regular Expressions" />
          </ListItem>
        </List>
      </Collapse>
    </div>);
  }
}
