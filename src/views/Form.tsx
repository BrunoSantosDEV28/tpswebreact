import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

const Form: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      setName("Nome do Item");
      setDescription("Descrição do Item");
    }
  }, [id]);

  const handleSubmit = () => {
    if (id) {
      console.log(`Item ${id} editado:`, { name, description });
      alert("Item editado com sucesso!");
    } else {
      console.log("Novo item criado:", { name, description });
      alert("Novo item criado com sucesso!");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {id ? "Editar Item" : "Criar Novo Item"}
      </Typography>
      <Paper sx={{ p: 3 }}>
        <TextField
          label="Nome"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Descrição"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" onClick={handleSubmit}>
          {id ? "Salvar Alterações" : "Criar Item"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Form;
