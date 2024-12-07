import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { logout } from "../contexts/AuthContext"; // Importa a função de logout

const CustomAppBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Meu App
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
