import React from 'react';

import { Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Navigation from './core/Navigation';
import Topic from './core/Topic';

import ResponseTypes from './markdown/ResponseTypes';
import Expressions from './markdown/Expressions';
import Logic from './markdown/Logic';

import ShowMeText from './lab';
import BasicOperations from './markdown/BasicOperations';
import AdvancedOperations from './markdown/AdvancedOperations';
import Reference from './markdown/Reference';


const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
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
  },

  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },  
}));

const App = () => {
  const classes = useStyles();
  const [nowShowing, setNowShowing] = React.useState<React.ReactNode>(<div>start</div>);

  return (<div className={classes.root}>
    <CssBaseline />
    <Navigation onClick={() => setNowShowing(<div />) }/>
    <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List component="nav" className={classes.list}>
          <ShowMeText></ShowMeText>
          <Topic onClick={(content) => setNowShowing(content)} items={BasicOperations} />
          <Topic onClick={(content) => setNowShowing(content)} items={AdvancedOperations} />
          <Topic onClick={(content) => setNowShowing(content)} items={Expressions} />
          <Topic onClick={(content) => setNowShowing(content)} items={ResponseTypes} />
          <Topic onClick={(content) => setNowShowing(content)} items={Logic} />
          <Topic onClick={(content) => setNowShowing(content)} items={Reference} />
        </List>
      </div>
    </Drawer>
    <main className={classes.content}>
      <Toolbar />
      {nowShowing}
    </main>
  </div>);
}
export default App;