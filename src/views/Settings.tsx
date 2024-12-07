import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useAppContext } from "../contexts/AppContext"; // Corrigido para o AppContext, não AuthContext
import { SelectChangeEvent } from "@mui/material/Select"; // Importando SelectChangeEvent

const Settings: React.FC = () => {
  const { language, setLanguage } = useAppContext(); // Usando o AppContext para gerenciar o idioma

  const handleChangeLanguage = (
    event: SelectChangeEvent<string> // Alterado para o tipo correto
  ) => {
    setLanguage(event.target.value); // Atualizando o idioma
  };

  const handleSave = () => {
    alert("Configurações salvas com sucesso!");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Configurações
      </Typography>
      <Paper sx={{ p: 3, mt: 2 }}>
        <Typography variant="h6">Preferências</Typography>
        <FormControlLabel control={<Switch />} label="Modo Escuro" />

        {/* Seção de Idioma */}
        <Typography variant="h6" sx={{ mt: 3 }}>
          Idioma
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="language-select-label">Selecione o idioma</InputLabel>
          <Select
            labelId="language-select-label"
            value={language}
            onChange={handleChangeLanguage}
            label="Selecione o idioma"
          >
            <MenuItem value="pt">Português</MenuItem>
            <MenuItem value="es">Espanhol</MenuItem>
            <MenuItem value="en">Inglês</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="h6" sx={{ mt: 3 }}>
          Perfil
        </Typography>
        <TextField label="Nome" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <Button variant="contained" onClick={handleSave}>
          Salvar
        </Button>
      </Paper>
    </Box>
  );
};

export default Settings;
