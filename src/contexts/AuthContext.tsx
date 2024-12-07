import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface IContext {
  setLanguage: (language: string) => void;
  language: string;
}

const AppContext = createContext<IContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth precisa ser usado dentro de um AuthProvider");
  }
  return context;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext precisa ser usado dentro de um AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "pt";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const handleSetLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <AppContext.Provider value={{ setLanguage: handleSetLanguage, language }}>
        {children}
      </AppContext.Provider>
    </AuthContext.Provider>
  );
};
