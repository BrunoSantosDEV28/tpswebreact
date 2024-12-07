import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/Context";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { login } = useAuth();

  useEffect(() => {
    document.title = "Sign In";
  }, []);

  const handleLogin = () => {
    if (email && password) {
      login(email);
      setMessage(`Usuário ${email} logado com sucesso!`);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 5 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Login
      </Typography>
      <TextField
        label="Email"
        fullWidth
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        label="Senha"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        Entrar
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

export default SignIn;
