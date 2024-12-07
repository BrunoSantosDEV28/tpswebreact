import React, { useState, useEffect } from "react";

const Home = () => {
  const [message, setMessage] = useState<string>("Bem-vindo à Home!");

  useEffect(() => {
    document.title = "Página Inicial";
  }, []);

  const changeMessage = () => {
    setMessage("O conteúdo da Home foi alterado!");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
      <button onClick={changeMessage}>Alterar Mensagem</button>
    </div>
  );
};

export default Home;
