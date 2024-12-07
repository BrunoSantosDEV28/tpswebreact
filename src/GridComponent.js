import React from "react";
import { Grid, Paper } from "@mui/material";

function GridComponent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: "20px" }}>Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: "20px" }}>Item 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: "20px" }}>Item 3</Paper>
      </Grid>
    </Grid>
  );
}

export default GridComponent;
