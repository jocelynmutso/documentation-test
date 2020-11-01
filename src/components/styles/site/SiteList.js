import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4)
     // color: 'blue',
      //textDecoration: 'underline'
    },
    nestedText: {
//      fontWeight: 900,
      fontSize: '0.9rem'
    }
});


export class Sub extends React.Component {
  render () {
    const { onClick, classes, children } = this.props;
    return (         
      <ListItem button className={classes.nested} onClick={onClick}>
        <ListItemText>
          <span className={classes.nestedText}>{children}</span>
        </ListItemText>
      </ListItem>);
  }
}
Sub.propTypes = {
  // children: PropTypes.element.isRequired,
  // classes: PropTypes.object.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export class SiteList extends React.Component {
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
    const { classes, name, children } = this.props;

    const subs = React.Children.map(children, child => {
      const newProps = Object.assign({}, child.props, { classes })
      return React.cloneElement(child, newProps);
    })
    
    return (<div>
      <ListItem button onClick={handleClick} className={classes.nested}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subs}
        </List>
      </Collapse>
      <Divider />
    </div>);
  }
}

SiteList.propTypes = {
  name: PropTypes.string.isRequired
};



class SiteNavigation extends React.Component {

  render() {
    const { classes, children } = this.props;

    const subs = React.Children.map(children, child => {
      const newProps = Object.assign({}, child.props, { classes })
      return React.cloneElement(child, newProps);
    })
    
    return (
      <List component="nav" className={classes.root}>{subs}</List>
    );
  }
} 
export const SiteNavi = withStyles(styles)(SiteNavigation);