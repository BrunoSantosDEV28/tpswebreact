import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <div role="tabpanel" hidden={value !== 0}>
        {value === 0 && <Box sx={{ p: 3 }}>Conteúdo da Tab 1</Box>}
      </div>
      <div role="tabpanel" hidden={value !== 1}>
        {value === 1 && <Box sx={{ p: 3 }}>Conteúdo da Tab 2</Box>}
      </div>
      <div role="tabpanel" hidden={value !== 2}>
        {value === 2 && <Box sx={{ p: 3 }}>Conteúdo da Tab 3</Box>}
      </div>
    </Box>
  );
};

export default TabComponent;
