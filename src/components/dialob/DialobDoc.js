import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';


import DialobTopMenu from './DialobTopMenu'
import DialobTopics from './DialobTopics'
import ShowingNowTopic from './ShowingNowTopic'

class DialobDoc extends React.Component {

  render() {
    return (
      <Grid container>
        <Grid item xs={12}><DialobTopMenu /></Grid>
        <Grid item xs={3}><DialobTopics /></Grid>
        <Grid item xs={9}><ShowingNowTopic /></Grid>
      </Grid>
    );
  }
}

export default DialobDoc;
