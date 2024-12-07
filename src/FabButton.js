import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function FabButton() {
  return (
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );
}

export default FabButton;
