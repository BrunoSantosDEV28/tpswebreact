// src/components/LogoutButton.tsx
import React from "react";
import { useAuth } from "../contexts/AuthContext"; // Importando o contexto de autenticação

const LogoutButton = () => {
  const { logout } = useAuth(); // Usando a função logout do contexto

  return (
    <button onClick={logout}>Logout</button> // Ao clicar, chama a função de logout
  );
};

export default LogoutButton;
