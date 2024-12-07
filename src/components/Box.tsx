import React from "react";
import Box from "@mui/material/Box";

const CustomBox = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Componente Box</h2>
    </Box>
  );
};

export default CustomBox;
