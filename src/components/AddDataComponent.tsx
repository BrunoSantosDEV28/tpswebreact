import React, { useState } from "react";
import { insertData } from "../services/database";

const AddDataComponent = () => {
  const [coluna1, setColuna1] = useState("");
  const [coluna2, setColuna2] = useState("");

  const handleInsert = async () => {
    try {
      const data = await insertData("nome_da_tabela", [{ coluna1, coluna2 }]);
      console.log("Dados inseridos com sucesso:", data);

      setColuna1("");
      setColuna2("");
    } catch (error) {
      console.error("Erro ao inserir dados:", error);
    }
  };

  return (
    <div>
      <h1>Adicionar Dados</h1>
      <input
        type="text"
        placeholder="Valor para Coluna 1"
        value={coluna1}
        onChange={(e) => setColuna1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Valor para Coluna 2"
        value={coluna2}
        onChange={(e) => setColuna2(e.target.value)}
      />
      <button onClick={handleInsert}>Inserir Dados</button>
    </div>
  );
};

export default AddDataComponent;
