import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const TextFieldComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Digite algo"
        variant="outlined"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </div>
  );
};

export default TextFieldComponent;
