import React from 'react';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface MyDialogProps {
myValue: string;
}

const MyDialog: React.FC<MyDialogProps> = ({myValue}) => {

  const[open, setOpen] = React.useState<boolean> (false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (<div>
    <Button variant="contained" onClick={handleOpen}>Show me!</Button>

    <Dialog aria-labelledby="simple-dialog-title" open={open} onClick={handleClose}>
      <DialogTitle id="simple-dialog-title">We wrote "{myValue}"</DialogTitle>
      {/* <Button variant="contained" onClick={handleClose}>Show me!</Button> */}
    </Dialog>
  </div>)
}

export default MyDialog