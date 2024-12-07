import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Título do Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Este é um exemplo de conteúdo dentro de um card do Material UI.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
