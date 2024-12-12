import React from "react";
import useAuthStore from "../../stores/use-auth-store";
import "./dataTable.css"; // Importa el archivo CSS que contiene los estilos

const DataTable = () => {
  const { scores } = useAuthStore();

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
          <tr>
            <td>prueba1</td>
            <td>prueba2</td>
          </tr>
          <tr>
            <td>prueba1</td>
            <td>prueba2</td>
          </tr>
          <tr>
            <td>prueba1</td>
            <td>prueba2</td>
          </tr>
          <tr>
            <td>prueba1</td>
            <td>prueba2</td>
          </tr>
          <tr>
            <td>prueba1</td>
            <td>prueba2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
