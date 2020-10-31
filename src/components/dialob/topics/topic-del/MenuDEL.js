import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default class MenuDEL extends React.Component {
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
    const { classes } = this.props;

    return (<div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Dialob Expression Language (DEL)" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Basic Operators" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Functions and Reserved Words" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Basic logic building and rule writing" />
          </ListItem>
        </List>
      </Collapse>
    </div>);
  }
}
