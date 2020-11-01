import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
  root: {
    paddingBottom: '30px'
  }
});


export const DocHeading1 = withStyles(styles)(

  class DocHeading1 extends React.Component {
    render() {
      const {children, classes} = this.props;
      return (<div className={classes.root}>
        <Typography variant="h4" gutterBottom>{children}</Typography>
        <Divider/>
      </div>);
    }
  }
);

export class DocHeading2 extends React.Component {

  render() {
    const {children} = this.props;
    return (<div>
      <Typography variant="h6" gutterBottom>{children}</Typography>
    </div>);
  }
}


export class DocCodeBlock extends React.Component {

  render() {
    return (<div>
    </div>);
  }
}



export class DocParagraph extends React.Component {

  render() {
    return (<div>
    </div>);
  }
}
