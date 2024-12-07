import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Diaper: React.FC = () => {
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    console.log("Hora da troca:", time, "Tipo de fralda:", type);
    alert("Item de troca de fralda criado com sucesso!");
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        label="Hora da Troca"
        fullWidth
        value={time}
        onChange={(e) => setTime(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Tipo de Fralda"
        fullWidth
        value={type}
        onChange={(e) => setType(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Criar Item de Troca de Fralda
      </Button>
    </Box>
  );
};

export default Diaper;
