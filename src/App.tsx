import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/Context"; // Importando AuthProvider
import { AppProvider } from "./contexts/Context"; // Importando AppProvider para o contexto de idioma
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";
import Form from "./views/Form";
import CustomAlert from "./components/Alert";
import CustomAvatar from "./components/Avatar";
import CustomBox from "./components/Box";
import CustomCard from "./components/Card";
import CustomCheckbox from "./components/Checkbox";
import CustomContainer from "./components/Container";
import FabButton from "./FabButton";
import GridComponent from "./GridComponent";
import IconButtonComponent from "./IconButtonComponent";
import SnackBarComponent from "./SnackBarComponent";
import TabComponent from "./TabComponent";
import TextFieldComponent from "./TextFieldComponent";
import TypographyComponent from "./TypographyComponent";

// Rota privada
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(true);

  const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  return (
    <AuthProvider>
      <AppProvider>
        {" "}
        {/* Envolvendo com AppProvider para gerenciar o idioma */}
        <div>
          <nav>
            <ul style={{ display: "flex", listStyleType: "none" }}>
              <li style={{ margin: "0 10px" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/signin">Sign In</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/settings">Settings</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </nav>

          {/* Componentes personalizados */}
          <CustomAvatar />
          <CustomAlert
            message="Este é um alerta de sucesso!"
            severity="success"
            open={alertOpen}
            onClose={handleCloseAlert}
          />
          <CustomBox />
          <CustomCard />
          <CustomContainer>
            <h2>Conteúdo dentro do Container</h2>
            <p>Este conteúdo está dentro do componente Container.</p>
          </CustomContainer>
          <CustomCheckbox />
          <FabButton />
          <GridComponent />
          <IconButtonComponent />
          <SnackBarComponent />
          <TabComponent />
          <TextFieldComponent />
          <TypographyComponent />

          {/* Rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/form/:id?"
              element={
                <PrivateRoute>
                  <Form />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
