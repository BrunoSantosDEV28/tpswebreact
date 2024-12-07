import React from "react";
import Typography from "@mui/material/Typography";

const TypographyComponent = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Título Principal
      </Typography>
      <Typography variant="h2" gutterBottom>
        Subtítulo
      </Typography>
      <Typography variant="body1">
        Este é um texto de exemplo usando o componente Typography do Material
        UI.
      </Typography>
    </div>
  );
};

export default TypographyComponent;
