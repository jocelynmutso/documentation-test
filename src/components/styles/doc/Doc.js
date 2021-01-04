import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Highlight from "react-highlight.js";

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    paddingBottom: '30px'
  },
  blockquote: {
    backgroundColor: 'red',
  },
  
});


export const DocHeading1 = withStyles(styles)(

  class DocHeading1 extends React.Component {
    render() {
      const {children, classes} = this.props;
      return (<div className={classes.root}>
        <Typography variant="h3" gutterBottom>{children}</Typography>
        <Divider/>
      </div>);
    }
  }
);

export class DocHeading2 extends React.Component {

  render() {
    const {children} = this.props;
    return (<div>
      <Typography variant="h5" gutterBottom>{children}</Typography>
    </div>);
  }
}


export class DocCodeBlock extends React.Component {

  render() {
    const {children} = this.props;
    return (<div>
       <Highlight language="javasript">{children}</Highlight>
    </div>);
  }
}

export class DocNote extends React.Component {

  render() {
    const {children} = this.props;
    return (<div>
    <blockquote>
    <Typography variant="body1">{children}</Typography>
    </blockquote>
      
    </div>);
  }
}


export class DocParagraph extends React.Component {
  render() {
    const {children} = this.props;
    return (<div>
    <Typography variant="body2">{children}</Typography>

    </div>);
  }
}


