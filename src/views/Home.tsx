import React from "react";
import { useAuth } from "../contexts/Context";
import { Button, Typography, Box } from "@mui/material";

const Home: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" mb={3}>
        Bem-vindo, {user || "Visitante"}!
      </Typography>
      <Typography variant="body1" mb={2}>
        Esta é a página inicial do aplicativo.
      </Typography>
      <Button variant="contained" onClick={logout}>
        Sair
      </Button>
    </Box>
  );
};

export default Home;
