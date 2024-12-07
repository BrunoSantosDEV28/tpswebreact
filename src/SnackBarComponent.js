import React, { useState } from "react";
import { Snackbar, Button } from "@mui/material";

function SnackBarComponent() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick} variant="contained" color="primary">
        Show Snackbar
      </Button>
      <Snackbar
        open={open}
        message="This is a Snackbar message"
        autoHideDuration={6000}
        onClose={handleClose}
      />
    </div>
  );
}

export default SnackBarComponent;
