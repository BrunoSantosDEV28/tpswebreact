import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
      <CustomAvatar /> {}
      <CustomAlert
        message="Este é um alerta de sucesso!"
        severity="success"
        open={alertOpen}
        onClose={handleCloseAlert}
      />
      <CustomBox /> {}
      <CustomCard /> {}
      {}
      <CustomContainer>
        <h2>Conteúdo dentro do Container</h2>
        <p>Este conteúdo está dentro do componente Container.</p>
      </CustomContainer>
      {}
      <CustomCheckbox /> {}
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
          path="/form"
          element={
            <PrivateRoute>
              <Form />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
