import React from "react";
import { Card, CardContent, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardNewItem: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h3>Adicionar Novo Item</h3>
          <Button variant="contained" fullWidth component={Link} to="/form/eat">
            Criar Item de Alimentação
          </Button>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/form/diaper"
          >
            Criar Item de Troca de Fralda
          </Button>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/form/sleep"
          >
            Criar Item de Sono
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardNewItem;
