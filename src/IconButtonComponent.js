import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function IconButtonComponent() {
  return (
    <IconButton color="secondary" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
}

export default IconButtonComponent;
