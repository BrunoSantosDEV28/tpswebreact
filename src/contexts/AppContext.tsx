// src/contexts/AppContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

interface IContext {
  setLanguage: (language: string) => void;
  language: string;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IContext | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContext provider");
  }
  return context;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "pt"; // Padrão para 'pt' (Português)
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const handleSetLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <AppContext.Provider value={{ setLanguage: handleSetLanguage, language }}>
      {children}
    </AppContext.Provider>
  );
};
