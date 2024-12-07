import React, { useState, useEffect } from "react";

const Settings = () => {
  const [settings, setSettings] = useState<string>(
    "Carregando configurações..."
  );

  useEffect(() => {
    document.title = "Settings";
    setTimeout(() => {
      setSettings("Configurações carregadas com sucesso!");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Settings</h1>
      <p>{settings}</p>
      {}
    </div>
  );
};

export default Settings;
