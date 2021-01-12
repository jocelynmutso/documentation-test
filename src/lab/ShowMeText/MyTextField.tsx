import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


interface MyTextFieldProps {
  value: string;
  setValue: (newValue: string) => void;
}

 const MyTextField: React.FC<MyTextFieldProps> = ({value, setValue}) => {
  const classes = useStyles();

  const callback = ( {target} : React.ChangeEvent<HTMLInputElement> ) => setValue(target.value);
  return (<div>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
        onChange={callback}
        defaultValue={value}
      />
    </form>
  </div>)
}

export default MyTextField