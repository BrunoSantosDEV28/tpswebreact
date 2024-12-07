import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Eat: React.FC = () => {
  const [food, setFood] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    console.log("Alimento:", food, "Quantidade:", amount);
    alert("Item de alimentação criado com sucesso!");
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        label="Alimento"
        fullWidth
        value={food}
        onChange={(e) => setFood(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Quantidade"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Criar Item de Alimentação
      </Button>
    </Box>
  );
};

export default Eat;
