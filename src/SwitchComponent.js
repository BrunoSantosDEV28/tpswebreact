import React, { useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";

function SwitchComponent() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Enable feature"
    />
  );
}

export default SwitchComponent;
