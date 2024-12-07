import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const handleSignUp = () => {
    if (name && email && password) {
      console.log("Usuário cadastrado:", { name, email });
      setMessage(`Usuário ${name} cadastrado com sucesso!`);
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 5 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Registrar
      </Typography>
      <TextField
        label="Nome"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleSignUp}
        sx={{ mt: 2 }}
      >
        Registrar
      </Button>
      {message && (
        <Typography
          variant="body1"
          textAlign="center"
          mt={2}
          color="success.main"
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default SignUp;
