// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { supabase } from "../services/supabaseClient";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth precisa ser usado dentro de um AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => {
    setUser(username);
  };

  const logout = async () => {
    // Deslogar no Supabase
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Erro ao fazer logout:", error);
    } else {
      // Limpar informações do localStorage
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");

      // Redirecionar para a página de login
      window.location.href = "/signin"; // Redireciona para o SignIn
      console.log("Logout realizado com sucesso.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
