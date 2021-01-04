import React from 'react';

import Typography from '@material-ui/core/Typography';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  blockquote: {
    backgroundColor: 'red',
  },
}));

interface Doc1Props {
  children: React.ReactNode
}

export const Doc1: React.FC<Doc1Props> = ({children}) => {

  const classes = useStyles();
  
  return (<div >
    <blockquote className={classes.blockquote}>
    <Typography variant="body1">{children}</Typography>
    </blockquote>
      
    </div>);
}