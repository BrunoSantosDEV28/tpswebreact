import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const CustomAppBar: React.FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Volta para a tela anterior
  };

  const handleDelete = () => {
    alert("Item excluído com sucesso!");
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
