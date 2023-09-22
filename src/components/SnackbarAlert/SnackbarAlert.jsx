import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarAlert({ open, setOpen, successfulSubmission }) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={successfulSubmission ? "success" : "error"} sx={{ width: '100%' }}>
            {successfulSubmission ? "Form successfully submitted!" : "Something went wrong. Please try again"}
        </Alert>
    </Snackbar>
  );
}

export default SnackbarAlert;