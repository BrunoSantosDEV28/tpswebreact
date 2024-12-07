import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<string>(
    "Carregando dados..."
  );

  useEffect(() => {
    document.title = "Dashboard";

    setTimeout(() => {
      setDashboardData("Dados do Dashboard carregados com sucesso!");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{dashboardData}</p>
      {}
    </div>
  );
};

export default Dashboard;
