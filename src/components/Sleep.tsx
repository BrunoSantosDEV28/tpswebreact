import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Sleep: React.FC = () => {
  const [sleepTime, setSleepTime] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = () => {
    console.log("Hora de dormir:", sleepTime, "Duração:", duration);
    alert("Item de sono criado com sucesso!");
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        label="Hora de Dormir"
        fullWidth
        value={sleepTime}
        onChange={(e) => setSleepTime(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Duração (em horas)"
        fullWidth
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Criar Item de Sono
      </Button>
    </Box>
  );
};

export default Sleep;
