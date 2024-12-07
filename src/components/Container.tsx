import React from "react";
import { Box } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
}

const CustomContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        marginTop: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
