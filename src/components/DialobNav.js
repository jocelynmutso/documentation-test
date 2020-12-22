import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DialobIntro from './DialobIntro';
import setNowShowing from './DialobDoc';



export default function DialobNav(props) {
  const { classes, thisWillHappenOnClickingTheTextInTheNavBar } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap onClick={thisWillHappenOnClickingTheTextInTheNavBar}>
         Documentation
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

