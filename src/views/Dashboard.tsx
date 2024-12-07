import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Relatórios
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Gráfico de Vendas</Typography>
            {}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Desempenho Mensal</Typography>
            {}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
