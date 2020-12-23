import React from 'react';

import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import DialobNav from './DialobNav';
import DialobIntro from './DialobIntro';

import { Site } from './styles';
import { Subs } from './doc';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  }
}));


const DialobDoc = () => {
  const classes = useStyles();
  const [nowShowing, setNowShowing] = React.useState(<DialobIntro />);

  return (<div className={classes.root}>
    <CssBaseline />
    <DialobNav onClick={() => setNowShowing(<DialobIntro/>) }/>
    <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <Site.Navi>
          <Site.List name="General Features">
            <Site.Sub onClick={() => setNowShowing(<Subs.LifeCycle />)}>Lifecycle Management and Versioning</Site.Sub>
            <Site.Sub onClick={() => setNowShowing(<Subs.GlobalList />)}>Global and Local Lists</Site.Sub>
            <Site.Sub onClick={() => setNowShowing(<Subs.RegEx />)}>Working with Regular Expressions</Site.Sub>
          </Site.List>
        </Site.Navi>
      </div>
    </Drawer>
    <main className={classes.content}>
      <Toolbar />
      {nowShowing}
    </main>
  </div>);
}
export default DialobDoc;