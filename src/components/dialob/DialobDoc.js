import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import DialobNav from './navigation/DialobNav'
import DialobTopics from './topics/DialobTopics'
import DialobIntro from './DialobIntro'

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
});

class DialobDoc extends React.Component {

  constructor(props) {
    super(props);
    this.state = { nowShowing: undefined };
    this.setNowShowing = this.setNowShowing.bind(this);
  }

  setNowShowing(newContent) {
    this.setState((oldState) => {
      return { nowShowing: newContent };
    });
  }


  render() {
    const {classes} = this.props;
    const { nowShowing } = this.state;
    const { setNowShowing } = this;
    const topicContent = nowShowing ? nowShowing : <DialobIntro />;

    return (<div className={classes.root}>
      <CssBaseline />
      <DialobNav classes={classes}/>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>

        <Toolbar />
        <div className={classes.drawerContainer}><DialobTopics setTopicContent={setNowShowing} /></div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        {topicContent}
      </main>
    </div>);
  }
}
export default withStyles(styles)(DialobDoc);