import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

interface CustomAlertProps {
  message: string;
  severity: "success" | "error" | "info" | "warning";
  open: boolean;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  severity,
  open,
  onClose,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
