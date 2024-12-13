import React from "react";
import useAuthStore from "../../stores/use-auth-store";
import "./DataTable.css"; // Importa el archivo CSS que contiene los estilos

const DataTable = () => {
  const { scores } = useAuthStore();
  console.log(scores);

  // Ordena los scores de menor a mayor
  const sortedScores = scores ? [...scores].sort((a, b) => a.score - b.score) : [];

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
        {sortedScores.map((score, index) => (
          <tr key={index}>
            <td>{index + 1}</td> {/* Muestra la posición (índice + 1 para iniciar desde 1) */}
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