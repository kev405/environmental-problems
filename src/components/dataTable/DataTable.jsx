import React from "react";
import useAuthStore from "../../stores/use-auth-store";
import "./DataTable.css"; // Importa el archivo CSS que contiene los estilos

const DataTable = () => {
  const { scores } = useAuthStore();
  console.log(scores);

  return (
    <div className="home-container">
      <h1 className="title-header">PUNTUACIONES</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        {scores && scores.map((score, index) => (
          <tr key={index}>
            <td>{score.email}</td>
            <td>{score.score}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
